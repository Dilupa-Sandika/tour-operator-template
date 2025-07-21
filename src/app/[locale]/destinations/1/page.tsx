// src/app/[locale]/destinations/1/page.tsx

import { client } from '@/lib/sanity/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import DestinationClientBody from '@/components/destinations/DestinationClientBody';

const destinationBySlugQuery = groq`
  *[_type == "destination" && slug.current == $slug][0] {
    ...,
    "heroImageUrl": image.asset->url,
    "tours": *[_type == "tour" && references(^._id)] {
      _id,
      title,
      "slug": slug.current,
      price,
      duration,
      "imageUrl": images[0].asset->url
    }
  }
`;

export default async function DestinationPage() {
  const destination = await client.fetch(destinationBySlugQuery, {
    slug: 'colombo',
  });

  if (!destination) {
    return <div className="container mx-auto py-16 text-center">Destination 'Colombo' not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(${destination.heroImageUrl || ''})` }}
      >
        {/* --- THIS IS THE CORRECTED PART --- */}
        {/* Restoring the original gradient from your design */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/70" />
        <div className="absolute inset-0 bg-black/20" /> 
        {/* --- END OF CORRECTION --- */}

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-white text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">{destination.name}</h1>
            {destination.heroTags && (
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">Best for: <strong>{destination.heroTags.bestFor}</strong></div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">Duration: <strong>{destination.heroTags.duration}</strong></div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">Climate: <strong>{destination.heroTags.climate}</strong></div>
              </div>
            )}
            <Link href="/tours" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
              Explore Tours
            </Link>
          </div>
        </div>
      </section>

      <DestinationClientBody destination={destination} />
    </div>
  );
}

