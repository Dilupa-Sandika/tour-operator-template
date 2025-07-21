// File Path: src/app/[locale]/destinations/3/page.tsx

'use client';

import { useState } from 'react';
import { MapPin, Clock, Star, Calendar, Camera, Users, ArrowRight, Heart, Share2, Waves, Anchor, Castle, Compass } from 'lucide-react';
import Link from 'next/link';

export default function GallePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const attractions = [
    {
      name: 'Galle Fort',
      description: 'UNESCO World Heritage Dutch colonial fort with stunning rampart walks and ocean views.',
      image: '/api/placeholder/300/200',
      category: 'Historical',
      rating: 4.7,
      timeNeeded: '3-4 hours'
    },
    {
      name: 'Dutch Reformed Church',
      description: 'Historic 18th-century church with beautiful colonial architecture and ancient tombstones.',
      image: '/api/placeholder/300/200',
      category: 'Religious',
      rating: 4.3,
      timeNeeded: '1 hour'
    },
    {
      name: 'Galle Lighthouse',
      description: 'Iconic white lighthouse offering panoramic views of the Indian Ocean.',
      image: '/api/placeholder/300/200',
      category: 'Landmark',
      rating: 4.5,
      timeNeeded: '30 minutes'
    },
    {
      name: 'Maritime Museum',
      description: 'Fascinating collection of maritime artifacts showcasing Galle\'s trading history.',
      image: '/api/placeholder/300/200',
      category: 'Museum',
      rating: 4.2,
      timeNeeded: '1.5 hours'
    }
  ];

  const tours = [
    {
      id: 7,
      name: 'Galle Fort Heritage Walk',
      duration: 'Half Day',
      price: '$30',
      rating: 4.6,
      participants: 198,
      image: '/api/placeholder/300/200',
      highlights: ['Fort Ramparts', 'Dutch Church', 'Colonial Buildings', 'Lighthouse Walk']
    },
    {
      id: 8,
      name: 'Galle & Unawatuna Beach Tour',
      duration: 'Full Day',
      price: '$55',
      rating: 4.4,
      participants: 145,
      image: '/api/placeholder/300/200',
      highlights: ['Galle Fort', 'Beach Relaxation', 'Snorkeling', 'Sunset Views']
    },
    {
      id: 9,
      name: 'Southern Coast Adventure',
      duration: 'Full Day',
      price: '$75',
      rating: 4.8,
      participants: 89,
      image: '/api/placeholder/300/200',
      highlights: ['Galle Fort', 'Stilt Fishermen', 'Turtle Hatchery', 'Local Villages']
    }
  ];

  const nearbyBeaches = [
    {
      name: 'Unawatuna Beach',
      distance: '6 km',
      features: ['Swimming', 'Snorkeling', 'Restaurants'],
      description: 'Crescent-shaped bay perfect for swimming and water sports.'
    },
    {
      name: 'Mirissa Beach',
      distance: '25 km',
      features: ['Whale Watching', 'Surfing', 'Nightlife'],
      description: 'Famous for blue whale watching and vibrant beach scene.'
    },
    {
      name: 'Hikkaduwa Beach',
      distance: '19 km',
      features: ['Coral Reefs', 'Diving', 'Beach Parties'],
      description: 'Coral sanctuary with excellent diving and snorkeling.'
    }
  ];

  const historicalPeriods = [
    {
      period: 'Portuguese Era',
      years: '1505-1640',
      description: 'First European colonial presence, initial fort construction.',
      significance: 'Trading post establishment'
    },
    {
      period: 'Dutch Colonial',
      years: '1640-1796',
      description: 'Major fortification expansion, current fort structure built.',
      significance: 'Peak of colonial architecture'
    },
    {
      period: 'British Period',
      years: '1796-1948',
      description: 'Administrative center, lighthouse construction.',
      significance: 'Infrastructure development'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/70">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <Waves className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-lg opacity-90">Historic Coastal Fort</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Castle className="w-4 h-4" />
              UNESCO World Heritage Site
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Galle
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              A living fortress where Dutch colonial architecture meets the endless blue of the Indian Ocean
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Best for</div>
                <div className="font-semibold">History & Beaches</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Duration</div>
                <div className="font-semibold">1-2 Days</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Fort Area</div>
                <div className="font-semibold">36 Hectares</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours?destination=galle"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Explore Tours
              </Link>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                {isFavorite ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'attractions', label: 'Fort Attractions' },
              { id: 'tours', label: 'Heritage Tours' },
              { id: 'history', label: 'Colonial History' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'text-primary border-primary'
                    : 'text-gray-600 border-transparent hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                      Historic Galle Fort
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                      <p>
                        Galle Fort stands as one of the finest examples of European colonial architecture 
                        in South Asia. Built by the Dutch in the 17th century on the foundation of a 
                        Portuguese fort, this UNESCO World Heritage Site has been beautifully preserved 
                        and continues to thrive as a living heritage city.
                      </p>
                      <p>
                        Walking through the cobblestone streets of the fort feels like stepping back in 
                        time. Colonial mansions house boutique hotels, art galleries, and cafes, while 
                        the massive ramparts offer spectacular views of the ocean and provide the perfect 
                        setting for sunset strolls.
                      </p>
                      <p>
                        Beyond the fort walls, Galle serves as a gateway to Sri Lanka's stunning southern 
                        coast, with pristine beaches, traditional stilt fishermen, and vibrant coral reefs 
                        just minutes away.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Fort Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Castle className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium">Built</div>
                          <div className="text-sm text-gray-600">17th Century (Dutch Period)</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Waves className="w-5 h-5 text-secondary" />
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-sm text-gray-600">Southern Province Coast</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Anchor className="w-5 h-5 text-accent" />
                        <div>
                          <div className="font-medium">Historic Role</div>
                          <div className="text-sm text-gray-600">Major trading port & fortress</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Compass className="w-5 h-5 text-cta" />
                        <div>
                          <div className="font-medium">UNESCO Status</div>
                          <div className="text-sm text-gray-600">World Heritage Site since 1988</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nearby Beaches */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                    Nearby Beaches
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {nearbyBeaches.map((beach, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-lg text-gray-900">{beach.name}</h4>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                            {beach.distance}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{beach.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {beach.features.map((feature, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Highlight */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                    Why Visit Galle
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Castle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Living Heritage</h4>
                      <p className="text-gray-600">Experience a UNESCO World Heritage Site that's still a vibrant, living community.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Waves className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Ocean Views</h4>
                      <p className="text-gray-600">Walk the ancient ramparts with stunning panoramic views of the Indian Ocean.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Photography Paradise</h4>
                      <p className="text-gray-600">Capture stunning colonial architecture, ocean sunsets, and historic charm.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Fort Attractions & Landmarks
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {attractions.map((attraction, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white font-medium">{attraction.category}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{attraction.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{attraction.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{attraction.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            {attraction.timeNeeded}
                          </div>
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                            {attraction.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Walking Route Suggestion */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Walking Route</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4">Morning Route (2-3 hours)</h4>
                      <ol className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <div>
                            <span className="font-medium">Main Gate</span>
                            <p className="text-sm text-gray-600">Start at the main entrance, notice the Dutch coat of arms</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <div>
                            <span className="font-medium">Clock Tower</span>
                            <p className="text-sm text-gray-600">Historic timepiece and fort landmark</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <div>
                            <span className="font-medium">Dutch Reformed Church</span>
                            <p className="text-sm text-gray-600">Beautiful colonial architecture and historical tombstones</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                          <div>
                            <span className="font-medium">Rampart Walk</span>
                            <p className="text-sm text-gray-600">Complete circuit of the fort walls with ocean views</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                          <div>
                            <span className="font-medium">Lighthouse</span>
                            <p className="text-sm text-gray-600">Perfect spot for photos and panoramic views</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold mb-4">Walking Tips</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-600 text-sm">Start early morning to avoid crowds and heat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-600 text-sm">Wear comfortable walking shoes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-600 text-sm">Bring sun protection and water</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-gray-600 text-sm">Best light for photography: early morning and late afternoon</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tours Tab */}
            {activeTab === 'tours' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Heritage Tours in Galle
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {tours.map((tour) => (
                    <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                      <div className="h-48 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center">
                          <Waves className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white font-medium">Galle Tour</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-gray-900">{tour.name}</h3>
                          <span className="text-lg font-bold text-primary">{tour.price}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {tour.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {tour.rating}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {tour.participants}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {tour.highlights.map((highlight, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link
                          href={`/tours/${tour.id}`}
                          className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Colonial History of Galle
                </h2>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Historical Periods</h3>
                  <div className="space-y-8">
                    {historicalPeriods.map((period, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-start gap-6">
                          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                            <Castle className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <h4 className="font-bold text-xl text-gray-900">{period.period}</h4>
                              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                                {period.years}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{period.description}</p>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <span className="text-sm font-medium text-gray-700">Key Development: </span>
                              <span className="text-sm text-gray-600">{period.significance}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Architectural Heritage</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4">Dutch Colonial Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium">Massive Ramparts</span>
                            <p className="text-sm text-gray-600">12-meter high walls with bastions and gates</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium">Colonial Mansions</span>
                            <p className="text-sm text-gray-600">Grand houses with courtyards and verandas</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium">Churches & Public Buildings</span>
                            <p className="text-sm text-gray-600">Reformed Church, Government House, Court House</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <div>
                            <span className="font-medium">Street Layout</span>
                            <p className="text-sm text-gray-600">Grid pattern with narrow cobblestone streets</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4">Conservation Efforts</h4>
                      <div className="bg-white rounded-xl p-6">
                        <p className="text-gray-600 mb-4">
                          Galle Fort's designation as a UNESCO World Heritage Site in 1988 has ensured 
                          the preservation of its unique colonial architecture. Ongoing conservation 
                          efforts maintain the authentic character while allowing the fort to remain 
                          a living heritage site.
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Buildings Restored:</span>
                            <span className="font-medium">85%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Heritage Guidelines:</span>
                            <span className="font-medium">Strict</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Living Community:</span>
                            <span className="font-medium">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Walk Through History in Galle Fort
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience centuries of colonial heritage in this perfectly preserved fortress city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours?destination=galle"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Book Heritage Tour
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}