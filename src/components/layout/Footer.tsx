// File Path: src/components/layout/Footer.tsx

'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Linkedin,
  MessageCircle,
  Award,
  Shield,
  Heart,
  ExternalLink,
  ArrowUp,
  Mountain,
  Camera,
  TreePine,
  Waves,
  Crown,
  Building2
} from 'lucide-react';

// Utils
import { cn } from '@/lib/utils/cn';

const Footer = () => {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: Twitter, url: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, url: process.env.NEXT_PUBLIC_YOUTUBE_URL || '#', color: 'hover:text-red-500' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' }
  ];

  const quickLinks = [
    { name: 'Home', href: `/${locale}` },
    { name: 'All Tours', href: `/${locale}/tours` },
    { name: 'All Destinations', href: `/${locale}/destinations` },
    { name: 'About Us', href: `/${locale}/about` },
    { name: 'Blog', href: `/${locale}/blog` },
    { name: 'Contact', href: `/${locale}/contact` },
    { name: 'AI Planner', href: `/${locale}/ai-planner` }
  ];

  const tourCategories = [
    { 
      name: 'Cultural Tours', 
      href: `/${locale}/tours?category=cultural`,
      icon: Mountain,
      description: 'Ancient temples & heritage sites'
    },
    { 
      name: 'Adventure Tours', 
      href: `/${locale}/tours?category=adventure`,
      icon: TreePine,
      description: 'Hiking, trekking & thrills'
    },
    { 
      name: 'Wildlife Tours', 
      href: `/${locale}/tours?category=wildlife`,
      icon: Camera,
      description: 'Safari & nature experiences'
    },
    { 
      name: 'Beach Tours', 
      href: `/${locale}/tours?category=beach`,
      icon: Waves,
      description: 'Coastal & water activities'
    },
    { 
      name: 'Family Tours', 
      href: `/${locale}/tours?category=family`,
      icon: Heart,
      description: 'Kid-friendly adventures'
    },
    { 
      name: 'Luxury Tours', 
      href: `/${locale}/tours?category=luxury`,
      icon: Crown,
      description: 'Premium experiences'
    }
  ];

  const popularDestinations = [
    { 
      name: 'Colombo', 
      href: `/${locale}/destinations/1`,
      icon: Building2,
      description: 'Capital city vibes'
    },
    { 
      name: 'Kandy', 
      href: `/${locale}/destinations/2`,
      icon: Mountain,
      description: 'Cultural capital'
    },
    { 
      name: 'Galle', 
      href: `/${locale}/destinations/3`,
      icon: Waves,
      description: 'Historic coastal fort'
    },
    { 
      name: 'Sigiriya', 
      href: `/${locale}/destinations/4`,
      icon: Mountain,
      description: 'Ancient rock fortress'
    },
    { 
      name: 'Nuwara Eliya', 
      href: `/${locale}/destinations/5`,
      icon: TreePine,
      description: 'Tea country hills'
    },
    { 
      name: 'Yala National Park', 
      href: `/${locale}/destinations/6`,
      icon: Camera,
      description: 'Wildlife sanctuary'
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: `/${locale}/privacy` },
    { name: 'Terms of Service', href: `/${locale}/terms` },
    { name: 'Cookie Policy', href: `/${locale}/cookies` },
    { name: 'Cancellation Policy', href: `/${locale}/cancellation` }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-48 translate-y-48" />
      </div>
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                viewport={{ once: true }}
              >
                <Link href={`/${locale}`} className="flex items-center space-x-3 mb-6 group">
                  <div className="relative h-12 w-12 transition-transform group-hover:scale-105">
                    <p className="text-lg font-bold text-primary">LOGO</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">Ceylon Excursion</h3>
                    <p className="text-xs text-neutral-400">Discover Sri Lanka</p>
                  </div>
                </Link>
                
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Your trusted partner for authentic Sri Lankan adventures. We create unforgettable experiences that showcase the best of our beautiful island nation.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4 mb-6">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'p-2 bg-neutral-800 rounded-lg transition-all duration-200 hover:scale-110',
                          social.color
                        )}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </Link>
                    );
                  })}
                </div>

                {/* Certifications */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <Award className="w-4 h-4 text-accent" />
                    <span>Certified Operator</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span>Safe Travel</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.1 }} 
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-heading font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-neutral-300 hover:text-white transition-colors text-sm block py-1 hover:translate-x-1 transform duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Popular Destinations */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-heading font-semibold mb-6 text-white">Popular Destinations</h4>
                <ul className="space-y-4">
                  {popularDestinations.map((destination) => {
                    const IconComponent = destination.icon;
                    return (
                      <li key={destination.href}>
                        <Link 
                          href={destination.href} 
                          className="group flex items-start gap-3 text-neutral-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform"
                        >
                          <IconComponent className="w-4 h-4 mt-0.5 text-accent group-hover:scale-110 transition-transform" />
                          <div>
                            <div className="text-sm font-medium">{destination.name}</div>
                            <div className="text-xs text-neutral-500 group-hover:text-neutral-400">
                              {destination.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>

            {/* Tour Categories & Contact */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }} 
                viewport={{ once: true }} 
                className="space-y-8"
              >
                {/* Tour Categories */}
                <div>
                  <h4 className="text-lg font-heading font-semibold mb-4 text-white">Tour Categories</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tourCategories.slice(0, 4).map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <Link 
                          key={category.href}
                          href={category.href} 
                          className="group flex items-center gap-2 text-neutral-300 hover:text-white transition-all duration-200 text-xs"
                        >
                          <IconComponent className="w-3 h-3 text-accent group-hover:scale-110 transition-transform" />
                          <span>{category.name.replace(' Tours', '')}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-heading font-semibold mb-4 text-white">Get in Touch</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-1.5 rounded">
                        <Phone className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">+94 77 123 4567</div>
                        <div className="text-xs text-neutral-400">24/7 Support</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-secondary/20 p-1.5 rounded">
                        <Mail className="w-3 h-3 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">info@ceylonexcursion.com</div>
                        <div className="text-xs text-neutral-400">Quick Response</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-accent/20 p-1.5 rounded">
                        <MapPin className="w-3 h-3 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Colombo, Sri Lanka</div>
                        <div className="text-xs text-neutral-400">Local Expertise</div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Contact */}
                  <Link
                    href="https://wa.me/+94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 mt-4"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 bg-neutral-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-neutral-400 text-center md:text-left">
                <p>© {currentYear} Ceylon Excursion. All rights reserved.</p>
                <p className="mt-1">
                  Powered by{' '}
                  <Link 
                    href={'#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Your Company Name
                  </Link>
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {legalLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <button 
                onClick={scrollToTop} 
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group" 
                aria-label="Back to top"
              >
                <span className="hidden sm:inline">Back to Top</span>
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;