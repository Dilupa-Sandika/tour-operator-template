'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MessageCircle,
  MapPin,
  Star,
  User,
  Globe
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils/cn';

interface NavigationItem {
  name: string;
  href: string;
  exact?: boolean;
  dropdown?: Array<{ name: string; href: string; }>;
}

interface MobileMenuProps {
  navigationItems: NavigationItem[];
  onClose: () => void;
  isActivePath: (href: string, exact?: boolean) => boolean;
}

const MobileMenu = ({ navigationItems, onClose, isActivePath }: MobileMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations('navigation');

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20, transition: { duration: 0.2 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div initial="closed" animate="open" exit="closed" variants={menuVariants} className="lg:hidden bg-white border-t border-neutral-200 shadow-soft">
      <div className="container mx-auto px-4 py-6">
        <motion.div variants={itemVariants} className="mb-6 p-4 bg-neutral-50 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <Phone className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-neutral-900">{t('expertGuidedTours')}</div>
              <div className="text-xs text-neutral-600">Available 8 AM - 8 PM</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <a href={`tel:+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors"><Phone className="h-4 w-4" /><span>+{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</span></a>
            <a href={`mailto:${process.env.CONTACT_EMAIL || 'info@ceylonexcursion.com'}`} className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors"><Mail className="h-4 w-4" /><span>{process.env.CONTACT_EMAIL || 'info@ceylonexcursion.com'}</span></a>
          </div>
        </motion.div>
        <nav className="space-y-2 mb-6">
          {navigationItems.map((item, index) => (
            <motion.div key={item.name} variants={itemVariants} transition={{ delay: index * 0.1 }}>
              {item.dropdown ? (
                <div>
                  <button onClick={() => toggleDropdown(item.name)} className={cn('flex items-center justify-between w-full p-3 rounded-lg text-left transition-colors', 'hover:bg-primary-50 hover:text-primary-600', isActivePath(item.href, item.exact) ? 'bg-primary-100 text-primary' : 'text-neutral-700')}>
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', openDropdown === item.name && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="ml-4 mt-2 space-y-1 overflow-hidden">
                        {item.dropdown.map((dropdownItem) => ( <Link key={dropdownItem.href} href={dropdownItem.href} onClick={onClose} className="block p-2 text-sm text-neutral-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors">{dropdownItem.name}</Link> ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href={item.href} onClick={onClose} className={cn('flex items-center p-3 rounded-lg font-medium transition-colors', 'hover:bg-primary-50 hover:text-primary', isActivePath(item.href, item.exact) ? 'bg-primary-100 text-primary' : 'text-neutral-700')}>
                  {item.name}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>
        <motion.div variants={itemVariants} transition={{ delay: 0.6 }} className="mb-6">
          <div className="flex items-center gap-2 mb-3"><Globe className="h-4 w-4 text-neutral-600" /> <span className="text-sm font-medium text-neutral-900">Language</span></div>
          <LanguageSwitcher />
        </motion.div>
        <motion.div variants={itemVariants} transition={{ delay: 0.7 }} className="space-y-3">
          <Link href="/contact" onClick={onClose} className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"><User className="h-4 w-4" />{t('planYourTrip')}</Link>
          <div className="grid grid-cols-2 gap-3">
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-green-700 transition-colors"><MessageCircle className="h-4 w-4" />WhatsApp</a>
            <Link href="/tours" onClick={onClose} className="flex items-center justify-center gap-2 bg-secondary text-white py-3 px-4 rounded-xl font-medium hover:bg-secondary/90 transition-colors"><Star className="h-4 w-4" />Tours</Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;