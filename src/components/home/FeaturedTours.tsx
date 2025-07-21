// src/components/home/FeaturedTours.tsx

'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { client } from '@/lib/sanity/client';
import { groq } from 'next-sanity';
import { Tour } from '@/types';
import TourCard from '@/components/tours/TourCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Query to fetch only tours marked as "featured" in Sanity
const featuredToursQuery = groq`
  *[_type == "tour" && featured == true] | order(_createdAt desc) [0...4] {
    ...,
    "slug": slug.current,
    "destination": destination->{
      name,
      "slug": slug.current
    },
    images // Fetch the full image array
  }
`;

export default function FeaturedTours() {
  const [featuredTours, setFeaturedTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations('featuredTours');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const tours = await client.fetch<Tour[]>(featuredToursQuery);
        setFeaturedTours(tours);
      } catch (error) {
        console.error("Failed to fetch featured tours:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (isLoading) {
    // A simple loading state
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p>Loading featured tours...</p>
        </div>
      </section>
    );
  }

  if (featuredTours.length === 0) {
    return null; // Don't show the section if there are no featured tours
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-primary mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tours" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('viewAllTours')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

