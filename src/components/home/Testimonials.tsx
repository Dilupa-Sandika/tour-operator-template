'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar,
  Heart,
  Play,
  Pause
} from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  country: string;
  rating: number;
  review: string;
  tourTitle: string;
  date: string;
  avatar: string;
  images?: string[];
  isVideo?: boolean;
  videoThumbnail?: string;
}

const translations = {
  badge: 'Loved by Travelers',
  title: 'What Our Guests Say',
  subtitle: 'Real experiences from real travelers who discovered Sri Lanka with us',
  tourExperienced: 'Tour Experienced',
  previous: 'Previous testimonial',
  next: 'Next testimonial',
  pauseAutoplay: 'Pause autoplay',
  playAutoplay: 'Play autoplay',
  stats: {
    averageRating: 'Average Rating',
    happyCustomers: 'Happy Customers',
    recommendRate: 'Recommend Rate'
  }
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [direction, setDirection] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'New York',
      country: 'USA',
      rating: 5,
      review: 'Our trip to Sri Lanka with Ceylon Excursion was absolutely magical! The guide was incredibly knowledgeable and showed us hidden gems we never would have found on our own. The cultural sites were breathtaking, and the personalized service made all the difference.',
      tourTitle: 'Ancient Cities & Cultural Triangle',
      date: '2024-01-15',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      images: [
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=400&h=300&fit=crop'
      ]
    },
    {
      id: '2',
      name: 'Marco & Elena Rossi',
      location: 'Rome',
      country: 'Italy',
      rating: 5,
      review: 'Honeymoon perfetto! The beaches were pristine, the wildlife safari was incredible, and our guide made sure every moment was special. We saw leopards, elephants, and had the most romantic sunset dinner on the beach. Grazie mille!',
      tourTitle: 'Romantic Beach & Safari Combo',
      date: '2024-02-08',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face',
      isVideo: true,
      videoThumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      name: 'Hiroshi Tanaka',
      location: 'Tokyo',
      country: 'Japan',
      rating: 5,
      review: 'As a photographer, I was amazed by the diverse landscapes and cultural richness of Sri Lanka. The tea plantations in the hill country were spectacular, and our guide knew all the best spots for sunrise shots. Highly recommend!',
      tourTitle: 'Photography Tour - Hill Country',
      date: '2024-01-28',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      images: [
        'https://images.unsplash.com/photo-1586970637811-4b2e51e7b57e?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop'
      ]
    },
    {
      id: '4',
      name: 'The Williams Family',
      location: 'London',
      country: 'UK',
      rating: 5,
      review: 'Traveling with kids can be challenging, but Ceylon Excursion made it effortless. The guides were patient with our children, the activities were engaging for all ages, and we felt safe throughout the entire journey. Our kids are still talking about the elephant encounter!',
      tourTitle: 'Family Adventure Package',
      date: '2024-02-14',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      images: [
        'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop'
      ]
    },
    {
      id: '5',
      name: 'Anna & Klaus Müller',
      location: 'Berlin',
      country: 'Germany',
      rating: 5,
      review: 'Wir hatten eine fantastische Zeit! The attention to detail was impressive, from the comfortable accommodation to the delicious local cuisine. The whale watching experience was the highlight of our trip. Professional service throughout!',
      tourTitle: 'South Coast Explorer',
      date: '2024-01-22',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      isVideo: true,
      videoThumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = (): void => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = (): void => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number): void => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => {
      const starClass = i < rating 
        ? 'h-4 w-4 fill-yellow-400 text-yellow-400' 
        : 'h-4 w-4 text-gray-300';
      
      return <Star key={i} className={starClass} />;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-3xl transform rotate-1" />
          
          <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="text-center p-8 pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                <Heart className="h-4 w-4" />
                {translations.badge}
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {translations.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {translations.subtitle}
              </p>
            </div>

            {/* Main Testimonial */}
            <div className="relative h-96 overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full px-8 lg:px-16">
                    <div className="max-w-4xl mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Content */}
                        <div className="space-y-6">
                          {/* Quote Icon */}
                          <Quote className="h-12 w-12 text-blue-200" />
                          
                          {/* Rating */}
                          <div className="flex items-center gap-1">
                            {renderStars(currentTestimonial.rating)}
                          </div>

                          {/* Review Text */}
                          <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                            &quot;{currentTestimonial.review}&quot;
                          </blockquote>

                          {/* Tour Info */}
                          <div className="bg-blue-50 rounded-lg p-4">
                            <div className="text-sm text-blue-700 font-medium mb-1">
                              {translations.tourExperienced}
                            </div>
                            <div className="font-semibold text-gray-900">
                              {currentTestimonial.tourTitle}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(currentTestimonial.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{currentTestimonial.location}, {currentTestimonial.country}</span>
                              </div>
                            </div>
                          </div>

                          {/* Author */}
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <Image
                                src={currentTestimonial.avatar}
                                alt={currentTestimonial.name}
                                width={60}
                                height={60}
                                className="rounded-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {currentTestimonial.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {currentTestimonial.location}, {currentTestimonial.country}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Media */}
                        <div className="relative">
                          {currentTestimonial.isVideo ? (
                            <div className="relative group cursor-pointer">
                              <Image
                                src={currentTestimonial.videoThumbnail || ''}
                                alt="Video testimonial"
                                width={500}
                                height={350}
                                className="rounded-xl object-cover w-full h-64 lg:h-80"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                                <div className="w-16 h-16 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Play className="h-6 w-6 text-blue-600 ml-1" />
                                </div>
                              </div>
                            </div>
                          ) : currentTestimonial.images && currentTestimonial.images.length > 0 ? (
                            <div className="grid grid-cols-2 gap-2">
                              {currentTestimonial.images.map((image, index) => (
                                <Image
                                  key={index}
                                  src={image}
                                  alt={`${currentTestimonial.name} experience`}
                                  width={250}
                                  height={200}
                                  className="rounded-lg object-cover w-full h-32 lg:h-40"
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
                              <Heart className="h-16 w-16 text-blue-300" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="p-8 pt-4">
              <div className="flex items-center justify-between">
                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-700 rounded-full transition-colors"
                  aria-label={translations.previous}
                  type="button"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => {
                    const dotClass = index === currentIndex
                      ? 'w-8 h-3 bg-blue-600 rounded-full transition-all duration-200'
                      : 'w-3 h-3 bg-gray-300 hover:bg-blue-300 rounded-full transition-all duration-200';
                    
                    return (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={dotClass}
                        aria-label={`Go to testimonial ${index + 1}`}
                        type="button"
                      />
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-700 rounded-full transition-colors"
                  aria-label={translations.next}
                  type="button"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Auto-play Control */}
              <div className="flex items-center justify-center mt-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
                  type="button"
                >
                  {isAutoPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  {isAutoPlaying ? translations.pauseAutoplay : translations.playAutoplay}
                </button>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6">
              <div className="grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-blue-700 mb-1">
                    4.9/5
                  </div>
                  <div className="text-sm text-gray-600">{translations.stats.averageRating}</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-blue-700 mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">{translations.stats.happyCustomers}</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-blue-700 mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">{translations.stats.recommendRate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}