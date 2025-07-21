'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text3D, Float, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Play, ArrowDown, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';

// Utils
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';

// Three.js Scene Components with proper cleanup
function FloatingIsland() {
  const meshRef = useRef<THREE.Mesh>(null);
  const particleMeshes = useRef<THREE.Mesh[]>([]);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Cleanup function for geometries and materials
  useEffect(() => {
    return () => {
      // Clean up particle meshes
      particleMeshes.current.forEach((mesh) => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(mat => mat.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });
      
      // Clean up main mesh
      if (meshRef.current) {
        if (meshRef.current.geometry) meshRef.current.geometry.dispose();
        if (meshRef.current.material) {
          if (Array.isArray(meshRef.current.material)) {
            meshRef.current.material.forEach(mat => mat.dispose());
          } else {
            meshRef.current.material.dispose();
          }
        }
      }
    };
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#00A99D"
          roughness={0.3}
          metalness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Floating particles around the island */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) particleMeshes.current[i] = el;
          }}
          position={[
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#F2C14E" emissive="#F2C14E" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </Float>
  );
}

function Ocean() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const positions = geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(x * 0.5 + state.clock.elapsedTime) * 0.1 +
                           Math.cos(z * 0.3 + state.clock.elapsedTime * 0.8) * 0.05;
      }
      
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();
    }
  });

  // Cleanup function
  useEffect(() => {
    return () => {
      if (meshRef.current) {
        if (meshRef.current.geometry) meshRef.current.geometry.dispose();
        if (meshRef.current.material) {
          if (Array.isArray(meshRef.current.material)) {
            meshRef.current.material.forEach(mat => mat.dispose());
          } else {
            meshRef.current.material.dispose();
          }
        }
      }
    };
  }, []);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <meshStandardMaterial
        color="#005A8D"
        transparent
        opacity={0.6}
        roughness={0.1}
        metalness={0.3}
      />
    </mesh>
  );
}

// Three.js Scene with proper cleanup
function ThreeJSScene() {
  const { gl, scene, camera } = useThree();
  
  useEffect(() => {
    return () => {
      // Comprehensive cleanup function
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
      
      // Clear the scene
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
      
      // Dispose renderer
      if (gl.domElement && gl.domElement.parentNode) {
        gl.domElement.parentNode.removeChild(gl.domElement);
      }
      gl.dispose();
    };
  }, [gl, scene]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#F2C14E" intensity={0.5} />
      
      <Stars
        radius={300}
        depth={60}
        count={1000}
        factor={7}
        saturation={0}
        fade
        speed={0.5}
      />
      
      <FloatingIsland />
      <Ocean />
      
      <Environment preset="sunset" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

// Main Hero Section Component
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const t = useTranslations('hero');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Cleanup function for canvas and three.js resources
  const cleanupCanvas = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('webgl') || canvas.getContext('webgl2');
      
      if (context) {
        const loseContext = context.getExtension('WEBGL_lose_context');
        if (loseContext) {
          loseContext.loseContext();
        }
      }
    }
  }, []);

  // Handle component mounting and loading
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      setIsMounted(false);
      clearTimeout(timer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Effect for handling navigation away from component
  useEffect(() => {
    const handleBeforeUnload = () => {
      cleanupCanvas();
    };

    const handlePopState = () => {
      cleanupCanvas();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cleanupCanvas();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cleanupCanvas();
    };
  }, [cleanupCanvas]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#featured-tours');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Don't render until component is mounted (prevents SSR issues)
  if (!isMounted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-700">
        <div className="text-center text-white">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-700"
    >
      {/* Three.js Background with Error Boundary */}
      {isLoaded && (
        <motion.div
          className="absolute inset-0"
          style={{ y, scale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Canvas
            ref={canvasRef}
            camera={{ position: [0, 0, 8], fov: 45 }}
            className="absolute inset-0 -z-10"
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            onCreated={({ gl }) => {
              gl.setClearColor('#005A8D');
              gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }}
            fallback={
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-700" />
            }
          >
            <ThreeJSScene />
          </Canvas>
        </motion.div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">{t('badge', { defaultValue: 'Your Gateway to Paradise' })}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
        >
          <span className="block">{t('headline.line1', { defaultValue: 'Unforgettable Journeys' })}</span>
          <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            {t('headline.line2', { defaultValue: 'in Sri Lanka' })}
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-white/90">
            {t('headline.line3', { defaultValue: 'Await You' })}
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t('subheadline', { defaultValue: 'Experience the wonder of Asia with our expertly crafted tours, from ancient temples to pristine beaches and lush tea plantations.' })}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href={`/${locale}/tours`}
            className={cn(
              'group inline-flex items-center gap-3 bg-cta text-white px-8 py-4 rounded-xl',
              'text-lg font-semibold shadow-2xl transition-all duration-300',
              'hover:bg-cta/90 hover:shadow-cta/50 hover:-translate-y-1',
              'focus:outline-none focus:ring-4 focus:ring-cta/50'
            )}
          >
            {t('cta.explore', { defaultValue: 'Explore Tours' })}
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Link>

          <button
            onClick={() => {
              // This would open a video modal
              console.log('Open video modal');
            }}
            className={cn(
              'group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl',
              'text-lg font-semibold border border-white/20 transition-all duration-300',
              'hover:bg-white/20 hover:shadow-2xl hover:-translate-y-1',
              'focus:outline-none focus:ring-4 focus:ring-white/30'
            )}
          >
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
            {t('cta.watchVideo', { defaultValue: 'Watch Video' })}
          </button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: '500+', label: t('stats.happyTravelers', { defaultValue: 'Happy Travelers' }) },
            { number: '50+', label: t('stats.uniqueTours', { defaultValue: 'Unique Tours' }) },
            { number: '15+', label: t('stats.yearsExperience', { defaultValue: 'Years Experience' }) },
            { number: '24/7', label: t('stats.support', { defaultValue: 'Support' }) },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white/60 hover:text-white transition-colors"
        aria-label={t('scrollDown', { defaultValue: 'Scroll Down' })}
      >
        <ArrowDown className="h-8 w-8 animate-bounce" />
      </motion.button>
    </div>
  );
};

export default HeroSection;