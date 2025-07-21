// src/components/tours/TourCard.tsx

import Link from 'next/link';
import { Tour } from '@/types';
import { urlFor } from '@/lib/sanity/client';
import { useLocale } from 'next-intl';
import { MapPin, Clock, Star, Users, Heart } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  const locale = useLocale(); // Get the current language

  // Use the first image as the card image, or a placeholder
  const imageUrl = tour.images && tour.images.length > 0 
    ? urlFor(tour.images[0]).width(400).height(300).url() 
    : '/api/placeholder/400/300';

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {tour.category}
        </div>
        <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{tour.location}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {tour.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {tour.duration}</div>
          <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-current" /> {tour.rating || '4.5'}</div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">${tour.price}</p>
          {/* --- THIS IS THE CORRECTED PART --- */}
          <Link 
            href={`/${locale}/tours/${tour.slug}`}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            View Details
          </Link>
          {/* --- END OF CORRECTION --- */}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
