// src/components/destinations/DestinationClientBody.tsx

'use client';

import { useState } from 'react';
import { urlFor } from '@/lib/sanity/client';
import { PortableText } from '@portabletext/react';
import { MapPin, Clock, Star, Users, Building2, ShoppingBag, Utensils, Camera } from 'lucide-react';
import Link from 'next/link';

export default function DestinationClientBody({ destination }: { destination: any }) {
  const [activeTab, setActiveTab] = useState('overview');

  const renderRichText = (content: any) => {
    if (!content) return null;
    return <div className="prose prose-lg max-w-none text-gray-600 space-y-4"><PortableText value={content} /></div>;
  };

  return (
    <>
      <section className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {['overview', 'attractions', 'tours', 'practical'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab ? 'text-primary border-primary' : 'text-gray-600 border-transparent hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('tours', 'Available Tours').replace('attractions', 'Top Attractions').replace('practical', 'Practical Info')}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* --- OVERVIEW TAB (NOW COMPLETE) --- */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">Discover {destination.name}</h2>
                    {renderRichText(destination.overviewDescription)}
                  </div>
                  {destination.quickFacts && (
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /><div><div className="font-medium">Location</div><div className="text-sm text-gray-600">{destination.quickFacts.location}</div></div></div>
                        <div className="flex items-center gap-3"><Users className="w-5 h-5 text-secondary" /><div><div className="font-medium">Population</div><div className="text-sm text-gray-600">{destination.quickFacts.population}</div></div></div>
                        <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-accent" /><div><div className="font-medium">Time Zone</div><div className="text-sm text-gray-600">{destination.quickFacts.timeZone}</div></div></div>
                      </div>
                    </div>
                  )}
                </div>
                {destination.whyVisitPoints && (
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">Why Visit {destination.name}</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      {destination.whyVisitPoints.map((point: any, index: number) => (
                        <div key={index} className="text-center">
                          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Building2 className="w-8 h-8 text-primary" /></div>
                          <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                          <p className="text-gray-600">{point.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* --- ATTRACTIONS TAB (NOW COMPLETE) --- */}
            {activeTab === 'attractions' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">Top Attractions in {destination.name}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {destination.topAttractions?.map((attraction: any, index: number) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      {attraction.image ? (
                        <img src={urlFor(attraction.image).width(400).height(250).url()} alt={attraction.name} className="w-full h-48 object-cover"/>
                      ) : (
                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900">{attraction.name}</h3>
                        <p className="text-gray-600 mt-2">{attraction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- TOURS TAB (NOW COMPLETE) --- */}
            {activeTab === 'tours' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">Available Tours in {destination.name}</h2>
                {destination.tours && destination.tours.length > 0 ? (
                  <div className="grid md:grid-cols-3 gap-8">
                    {destination.tours.map((tour: any) => (
                      <div key={tour._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                         {tour.imageUrl ? (
                           <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 object-cover"/>
                         ) : (
                          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                            <Camera className="w-12 h-12 text-gray-400" />
                          </div>
                         )}
                         <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900">{tour.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 my-2">
                            <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{tour.duration}</div>
                            <div className="font-bold text-primary">${tour.price}</div>
                          </div>
                          <Link href={`/tours/${tour.slug}`} className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block">
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-xl text-neutral-500">No tours currently available for this destination.</p>
                  </div>
                )}
              </div>
            )}

            {/* --- PRACTICAL INFO TAB (NOW COMPLETE) --- */}
            {activeTab === 'practical' && (
              <div>
                 <h2 className="text-3xl font-heading font-bold text-primary mb-8">Practical Information</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Best Time to Visit</h3>
                      {renderRichText(destination.bestTimeToVisit)}
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Around</h3>
                      {renderRichText(destination.gettingAround)}
                    </div>
                     <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Local Tips</h3>
                      {renderRichText(destination.localTips)}
                    </div>
                  </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (NOW COMPLETE) --- */}
      {destination.ctaSection && (
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-heading font-bold mb-4">{destination.ctaSection.headline}</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{destination.ctaSection.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tours" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">View All Tours</Link>
              <Link href="/contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">Contact Us</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}


