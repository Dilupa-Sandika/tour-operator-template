// File Path: src/components/layout/Header.tsx

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  User,
  Mountain,
  Camera,
  TreePine,
  Waves,
  Heart,
  Crown,
  Building2,
  MapPin
} from 'lucide-react';

// Components
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

// Utils
import { cn } from '@/lib/utils/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const pathname = usePathname();
  const params = useParams();
  const locale = params?.locale as string || 'en';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Navigation items configuration
  const navigationItems = [
    {
      name: 'Home',
      href: `/${locale}`,
      exact: true,
    },
    {
      name: 'Tours',
      href: `/${locale}/tours`,
      dropdown: [
        { 
          name: 'All Tours', 
          href: `/${locale}/tours`,
          icon: null
        },
        { 
          name: 'Cultural Tours', 
          href: `/${locale}/tours?category=cultural`,
          icon: Mountain
        },
        { 
          name: 'Adventure Tours', 
          href: `/${locale}/tours?category=adventure`,
          icon: TreePine
        },
        { 
          name: 'Wildlife Tours', 
          href: `/${locale}/tours?category=wildlife`,
          icon: Camera
        },
        { 
          name: 'Beach Tours', 
          href: `/${locale}/tours?category=beach`,
          icon: Waves
        },
        { 
          name: 'Family Tours', 
          href: `/${locale}/tours?category=family`,
          icon: Heart
        },
        { 
          name: 'Luxury Tours', 
          href: `/${locale}/tours?category=luxury`,
          icon: Crown
        },
      ],
    },
    {
      name: 'Destinations',
      href: `/${locale}/destinations`,
      dropdown: [
        { 
          name: 'All Destinations', 
          href: `/${locale}/destinations`,
          icon: MapPin
        },
        { 
          name: 'Colombo', 
          href: `/${locale}/destinations/1`,
          icon: Building2
        },
        { 
          name: 'Kandy', 
          href: `/${locale}/destinations/2`,
          icon: Mountain
        },
        { 
          name: 'Galle', 
          href: `/${locale}/destinations/3`,
          icon: Waves
        },
        { 
          name: 'Sigiriya', 
          href: `/${locale}/destinations/4`,
          icon: Mountain
        },
        { 
          name: 'Nuwara Eliya', 
          href: `/${locale}/destinations/5`,
          icon: TreePine
        },
        { 
          name: 'Yala National Park', 
          href: `/${locale}/destinations/6`,
          icon: Camera
        },
      ],
    },
    {
      name: 'AI Planner',
      href: `/${locale}/ai-planner`,
    },
    {
      name: 'Blog',
      href: `/${locale}/blog`,
    },
    {
      name: 'About',
      href: `/${locale}/about`,
    },
    {
      name: 'Contact',
      href: `/${locale}/contact`,
    },
  ];

  // Check if current path is active
  const isActivePath = (href: string, exact = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href) && href !== `/${locale}`;
  };

  return (
    <>
      <motion.header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200'
            : 'bg-white border-b border-neutral-100'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center space-x-3 group">
              <div className="relative h-10 w-10 lg:h-12 lg:w-12 transition-transform group-hover:scale-105">
                 <p className="text-lg font-bold text-primary">LOGO</p>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-heading font-bold text-primary">
                  Ceylon Excursion
                </h1>
                <p className="text-xs text-neutral-600">Discover Sri Lanka</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      'hover:bg-primary/10 hover:text-primary',
                      isActivePath(item.href, item.exact)
                        ? 'bg-primary/10 text-primary'
                        : 'text-neutral-700'
                    )}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown 
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          activeDropdown === item.name && 'rotate-180'
                        )} 
                      />
                    )}
                  </Link>
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 z-50"
                      >
                        {item.dropdown.map((dropdownItem) => {
                          const IconComponent = dropdownItem.icon;
                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
                            >
                              {IconComponent && (
                                <IconComponent className="w-4 h-4 text-neutral-400" />
                              )}
                              {dropdownItem.name}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
               <div className="hidden lg:block">
                <LanguageSwitcher />
              </div>
              <Link
                href={`/${locale}/contact`}
                className="hidden md:inline-flex items-center gap-2 bg-cta text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cta/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <User className="h-4 w-4" />
                Plan Your Trip
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              navigationItems={navigationItems}
              onClose={() => setIsMobileMenuOpen(false)}
              isActivePath={isActivePath}
            />
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;