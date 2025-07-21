// src/components/interactive/SocialProofWidget.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  Star, 
  X,
  TrendingUp,
  Eye,
  Heart
} from 'lucide-react';
import Image from 'next/image';

// Utils
import { cn } from '@/lib/utils/cn';

interface SocialProofNotification {
  id: string;
  type: 'booking' | 'viewing' | 'review' | 'signup';
  user: {
    name: string;
    location: string;
    country: string;
    avatar?: string;
  };
  tour?: {
    title: string;
    image: string;
  };
  timestamp: Date;
  rating?: number;
  action: string;
}

const SocialProofWidget = () => {
  const [notifications, setNotifications] = useState<SocialProofNotification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<SocialProofNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const t = useTranslations('socialProof');

  // Mock data for social proof notifications
  const mockNotifications: SocialProofNotification[] = [
    {
      id: '1',
      type: 'booking',
      user: {
        name: 'Sarah M.',
        location: 'New York',
        country: 'USA',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      tour: {
        title: 'Ancient Cities Cultural Tour',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=300&h=200&fit=crop'
      },
      timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
      action: t('actions.booked')
    },
    {
      id: '2',
      type: 'viewing',
      user: {
        name: 'Marco R.',
        location: 'Rome',
        country: 'Italy'
      },
      tour: {
        title: 'Wildlife Safari Experience',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=300&h=200&fit=crop'
      },
      timestamp: new Date(Date.now() - 8 * 60 * 1000), // 8 minutes ago
      action: t('actions.viewing')
    },
    {
      id: '3',
      type: 'review',
      user: {
        name: 'Emma L.',
        location: 'London',
        country: 'UK',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      tour: {
        title: 'South Coast Beach Paradise',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
      },
      timestamp: new Date(Date.now() - 12 * 60 * 1000), // 12 minutes ago
      rating: 5,
      action: t('actions.reviewed')
    },
    {
      id: '4',
      type: 'signup',
      user: {
        name: 'Hiroshi T.',
        location: 'Tokyo',
        country: 'Japan'
      },
      timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
      action: t('actions.subscribed')
    },
    {
      id: '5',
      type: 'booking',
      user: {
        name: 'Anna K.',
        location: 'Berlin',
        country: 'Germany',
        avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face'
      },
      tour: {
        title: 'Hill Country Tea Plantation Trek',
        image: 'https://images.unsplash.com/photo-1586970637811-4b2e51e7b57e?w=300&h=200&fit=crop'
      },
      timestamp: new Date(Date.now() - 18 * 60 * 1000), // 18 minutes ago
      action: t('actions.inquired')
    }
  ];

  // Show notifications periodically
  useEffect(() => {
    if (isHidden) return;

    const showRandomNotification = () => {
      const randomNotification = mockNotifications[Math.floor(Math.random() * mockNotifications.length)];
      
      // Update timestamp to make it more recent
      randomNotification.timestamp = new Date(Date.now() - Math.random() * 30 * 60 * 1000); // Within last 30 minutes
      
      setCurrentNotification(randomNotification);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showRandomNotification, 3000);

    // Then show notifications every 20-40 seconds
    const interval = setInterval(() => {
      if (Math.random() < 0.7) { // 70% chance to show
        showRandomNotification();
      }
    }, 20000 + Math.random() * 20000); // 20-40 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isHidden, mockNotifications, t]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setIsHidden(true);
    
    // Re-enable after 5 minutes
    setTimeout(() => {
      setIsHidden(false);
    }, 5 * 60 * 1000);
  }, []);

  const getTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) {
      return t('timeAgo.justNow');
    } else if (diffInMinutes < 60) {
      return t('timeAgo.minutesAgo', { count: diffInMinutes });
    } else {
      const hours = Math.floor(diffInMinutes / 60);
      return t('timeAgo.hoursAgo', { count: hours });
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return <Users className="h-4 w-4 text-green-500" />;
      case 'viewing':
        return <Eye className="h-4 w-4 text-blue-500" />;
      case 'review':
        return <Star className="h-4 w-4 text-yellow-500" />;
      case 'signup':
        return <Heart className="h-4 w-4 text-red-500" />;
      default:
        return <TrendingUp className="h-4 w-4 text-primary-500" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'border-l-green-500 bg-green-50';
      case 'viewing':
        return 'border-l-blue-500 bg-blue-50';
      case 'review':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'signup':
        return 'border-l-red-500 bg-red-50';
      default:
        return 'border-l-primary-500 bg-primary-50';
    }
  };

  if (!currentNotification || isHidden) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            opacity: { duration: 0.3 }
          }}
          className="fixed bottom-20 left-4 z-40 max-w-sm"
        >
          <div className={cn(
            'bg-white rounded-xl shadow-soft border border-neutral-200 border-l-4 p-4',
            'backdrop-blur-sm relative overflow-hidden',
            getNotificationColor(currentNotification.type)
          )}>
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="pr-6">
              <div className="flex items-start gap-3">
                {/* Avatar or Icon */}
                <div className="flex-shrink-0">
                  {currentNotification.user.avatar ? (
                    <Image
                      src={currentNotification.user.avatar}
                      alt={currentNotification.user.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                      {getIcon(currentNotification.type)}
                    </div>
                  )}
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-neutral-900 truncate">
                      {currentNotification.user.name}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {getTimeAgo(currentNotification.timestamp)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-neutral-600 mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{currentNotification.user.location}, {currentNotification.user.country}</span>
                  </div>

                  <p className="text-sm text-neutral-700 mb-2">
                    {currentNotification.action}
                    {currentNotification.tour && (
                      <span className="font-medium text-primary-600">
                        {' '}{currentNotification.tour.title}
                      </span>
                    )}
                  </p>

                  {/* Rating */}
                  {currentNotification.rating && (
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-3 w-3',
                            i < currentNotification.rating!
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-neutral-300'
                          )}
                        />
                      ))}
                    </div>
                  )}

                  {/* Tour Image */}
                  {currentNotification.tour && (
                    <div className="mt-2">
                      <Image
                        src={currentNotification.tour.image}
                        alt={currentNotification.tour.title}
                        width={200}
                        height={100}
                        className="rounded-lg object-cover w-full h-20"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Pulse Animation */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
          </div>

          {/* Live Indicator */}
          <div className="flex items-center gap-2 mt-2 ml-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-neutral-600 font-medium">
                {t('liveActivity')}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofWidget;