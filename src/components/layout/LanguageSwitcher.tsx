// src/components/layout/LanguageSwitcher.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';

// Utils
import { cn } from '@/lib/utils/cn';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const LanguageSwitcher = ({ variant = 'default', className }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations('common');

  // Supported languages configuration
  const languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'es',
      name: 'Spanish',
      nativeName: 'Español',
      flag: '🇪🇸'
    },
    {
      code: 'de',
      name: 'German',
      nativeName: 'Deutsch',
      flag: '🇩🇪'
    },
    {
      code: 'fr',
      name: 'French',
      nativeName: 'Français',
      flag: '🇫🇷'
    },
    {
      code: 'pt',
      name: 'Portuguese',
      nativeName: 'Português',
      flag: '🇵🇹'
    },
    {
      code: 'ru',
      name: 'Russian',
      nativeName: 'Русский',
      flag: '🇷🇺'
    },
    {
      code: 'ja',
      name: 'Japanese',
      nativeName: '日本語',
      flag: '🇯🇵'
    },
    {
      code: 'ar',
      name: 'Arabic',
      nativeName: 'العربية',
      flag: '🇸🇦',
      rtl: true
    },
    {
      code: 'it',
      name: 'Italian',
      nativeName: 'Italiano',
      flag: '🇮🇹'
    },
    {
      code: 'hi',
      name: 'Hindi',
      nativeName: 'हिन्दी',
      flag: '🇮🇳'
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle language change
  const handleLanguageChange = async (languageCode: string) => {
    if (languageCode === currentLocale) {
      setIsOpen(false);
      return;
    }

    setIsLoading(languageCode);
    
    try {
      // Get the current path without the locale
      const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
      
      // Navigate to the new locale
      const newPath = `/${languageCode}${pathWithoutLocale}`;
      
      // Update the URL
      router.push(newPath);
      
      // Close dropdown
      setIsOpen(false);
      
      // Optional: Store preference in localStorage
      localStorage.setItem('preferred-language', languageCode);
      
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsLoading(null);
    }
  };

  // Get current language object
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  // Compact variant for mobile or top bar
  if (variant === 'compact') {
    return (
      <div className={cn('relative', className)} ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-sm hover:text-primary-600 transition-colors"
          aria-label="Select language"
        >
          <span className="text-base">{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
          <ChevronDown className={cn(
            'h-3 w-3 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-soft border border-neutral-200 py-2 z-50"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  disabled={isLoading === language.code}
                  className={cn(
                    'flex items-center gap-3 w-full px-4 py-2 text-sm text-left',
                    'hover:bg-primary-50 hover:text-primary-600 transition-colors',
                    currentLocale === language.code && 'bg-primary-100 text-primary-700',
                    isLoading === language.code && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  <span className="text-base">{language.flag}</span>
                  <span className="flex-1">{language.nativeName}</span>
                  {currentLocale === language.code && (
                    <Check className="h-4 w-4 text-primary-600" />
                  )}
                  {isLoading === language.code && (
                    <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200',
          'bg-white hover:bg-neutral-50 transition-all duration-200',
          'text-neutral-700 hover:text-primary-600',
          isOpen && 'ring-2 ring-primary-300 border-primary-300'
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4" />
        <span className="text-base mr-1">{currentLanguage.flag}</span>
        <span className="font-medium">{currentLanguage.nativeName}</span>
        <ChevronDown className={cn(
          'h-4 w-4 transition-transform duration-200',
          isOpen && 'rotate-180'
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-soft border border-neutral-200 py-2 z-50"
            role="listbox"
          >
            {/* Header */}
            <div className="px-4 py-2 border-b border-neutral-100">
              <h3 className="text-sm font-semibold text-neutral-900">
                {t('selectLanguage')}
              </h3>
              <p className="text-xs text-neutral-600">
                {t('languageDescription')}
              </p>
            </div>

            {/* Language List */}
            <div className="max-h-64 overflow-y-auto">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  disabled={isLoading === language.code}
                  className={cn(
                    'flex items-center gap-3 w-full px-4 py-3 text-left',
                    'hover:bg-primary-50 transition-colors',
                    currentLocale === language.code && 'bg-primary-100',
                    isLoading === language.code && 'opacity-50 cursor-not-allowed'
                  )}
                  role="option"
                  aria-selected={currentLocale === language.code}
                >
                  <span className="text-xl">{language.flag}</span>
                  <div className="flex-1">
                    <div className={cn(
                      'font-medium',
                      currentLocale === language.code ? 'text-primary-700' : 'text-neutral-900'
                    )}>
                      {language.nativeName}
                    </div>
                    <div className="text-xs text-neutral-600">
                      {language.name}
                    </div>
                  </div>
                  {currentLocale === language.code && (
                    <Check className="h-4 w-4 text-primary-600" />
                  )}
                  {isLoading === language.code && (
                    <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-neutral-100">
              <p className="text-xs text-neutral-500">
                {t('languageFooter')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;