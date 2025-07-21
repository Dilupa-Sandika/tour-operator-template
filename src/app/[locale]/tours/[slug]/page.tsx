// src/app/[locale]/tours/[slug]/page.tsx

import { client, urlFor } from '@/lib/sanity/client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import { Clock, Users, Star, MapPin, Check, X, Shield, Languages, Camera } from 'lucide-react';
import Link from 'next/link';

// Define the type for a single tour
interface Tour {
  title: string;
  images: any[];
  price: number;
  duration: string;
  location: string;
  category: string;
  difficulty: string;
  description: string;
  included?: string[];
  notIncluded?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

// Query to get a single tour by its slug
const tourQuery = groq`
  *[_type == "tour" && slug.current == $slug][0] {
    ...,
    "destination": destination->{name, "slug": slug.current}
  }
`;

// This function generates the SEO metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tour = await client.fetch<Tour>(tourQuery, { slug: params.slug });
  if (!tour) return {};

  return {
    title: tour.seoTitle || tour.title,
    description: tour.seoDescription || tour.description,
  };
}

// This is the main page component
export default async function TourPage({ params }: { params: { slug: string, locale: string } }) {
  const tour = await client.fetch<Tour>(tourQuery, { slug: params.slug });

  if (!tour) {
    return <div className="text-center py-20">Tour not found.</div>;
  }

  // Helper function to safely render an image
  const renderImage = (image: any, alt: string) => {
    if (image) {
      return <img src={urlFor(image).url()} alt={alt} className="w-full h-full object-cover rounded-lg shadow-md" />;
    }
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
        <Camera className="w-12 h-12 text-gray-400" />
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      {/* Image Gallery Header */}
      <header className="grid grid-cols-4 grid-rows-2 gap-2 h-[70vh] p-4">
        <div className="col-span-4 row-span-2 md:col-span-2 md:row-span-2">
          {renderImage(tour.images?.[0], tour.title)}
        </div>
        <div className="hidden md:block">
          {renderImage(tour.images?.[1], tour.title)}
        </div>
        <div className="hidden md:block">
          {renderImage(tour.images?.[2], tour.title)}
        </div>
        <div className="hidden md:block">
          {renderImage(tour.images?.[3], tour.title)}
        </div>
        <div className="hidden md:block">
          {renderImage(tour.images?.[4], tour.title)}
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{tour.category}</span>
              <h1 className="text-4xl font-bold font-heading my-4">{tour.title}</h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 mb-6">
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-secondary" /> {tour.location}</div>
                <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-secondary" /> {tour.duration}</div>
                <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-secondary" /> {tour.difficulty}</div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>{tour.description}</p>
              </div>

              {/* Included / Not Included */}
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {tour.included?.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">What's Not Included</h3>
                   <ul className="space-y-2">
                    {tour.notIncluded?.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-primary">${tour.price} <span className="text-base font-normal text-gray-600">per person</span></p>
                <p className="text-sm text-gray-500 mt-1">Best price guaranteed</p>
                <div className="my-6">
                  {/* --- THIS IS THE CORRECTED PART --- */}
                  <Link href={`/${params.locale}/contact`} className="w-full block text-center bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Send Inquiry
                  </Link>
                  {/* --- END OF CORRECTION --- */}
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-2">Need Help?</p>
                  <p>Contact us for custom itineraries or any questions you have about this tour.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
