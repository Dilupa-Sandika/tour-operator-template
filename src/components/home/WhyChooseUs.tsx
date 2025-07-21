'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Globe, 
  Award, 
  Heart, 
  Headphones, 
  MapPin,
  Star,
  Camera,
  Car,
  Umbrella
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface Feature {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  stats?: string;
}

const WhyChooseUs = () => {
  const t = useTranslations('whyChooseUs');

  const features: Feature[] = [
    {
      id: 'expert-guides',
      icon: Users,
      title: t('features.expertGuides.title'),
      description: t('features.expertGuides.description'),
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      stats: '15+ Years Experience'
    },
    {
      id: 'safety-first',
      icon: Shield,
      title: t('features.safetyFirst.title'),
      description: t('features.safetyFirst.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      stats: '100% Safety Record'
    },
    {
      id: 'local-expertise',
      icon: MapPin,
      title: t('features.localExpertise.title'),
      description: t('features.localExpertise.description'),
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
      stats: '50+ Hidden Gems'
    },
    {
      id: 'award-winning',
      icon: Award,
      title: t('features.awardWinning.title'),
      description: t('features.awardWinning.description'),
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
      stats: '25+ Awards'
    },
    {
      id: 'personalized',
      icon: Heart,
      title: t('features.personalized.title'),
      description: t('features.personalized.description'),
      color: 'text-cta-600',
      bgColor: 'bg-cta-50',
      stats: 'Custom Itineraries'
    },
    {
      id: 'support',
      icon: Headphones,
      title: t('features.support.title'),
      description: t('features.support.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      stats: '24/7 Available'
    }
  ];

  const additionalFeatures = [
    {
      icon: Star,
      title: t('additionalFeatures.highRating'),
      value: '4.9/5',
      description: 'Average rating from 500+ reviews'
    },
    {
      icon: Globe,
      title: t('additionalFeatures.multiLanguage'),
      value: '10+',
      description: 'Languages supported by our guides'
    },
    {
      icon: Car,
      title: t('additionalFeatures.transport'),
      value: '100%',
      description: 'Private air-conditioned vehicles'
    },
    {
      icon: Camera,
      title: t('additionalFeatures.memories'),
      value: '1000+',
      description: 'Photos captured per tour'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border border-neutral-100"
            >
              <div className={cn(
                'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300',
                feature.bgColor
              )}>
                <Icon className={cn('h-8 w-8', feature.color)} />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {feature.stats && (
                  <div className={cn(
                    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                    feature.bgColor,
                    feature.color
                  )}>
                    {feature.stats}
                  </div>
                )}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;