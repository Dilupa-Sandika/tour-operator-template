// File Path: src/app/[locale]/destinations/6/page.tsx

'use client';

import { useState } from 'react';
import { MapPin, Clock, Star, Calendar, Camera, Users, ArrowRight, Heart, Share2, TreePine, Binoculars, Wild, Eye } from 'lucide-react';
import Link from 'next/link';

export default function YalaNationalParkPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const attractions = [
    {
      name: 'Block 1 Safari Zone',
      description: 'The most popular safari area with highest concentration of leopards and elephants.',
      image: '/api/placeholder/300/200',
      category: 'Wildlife',
      rating: 4.9,
      timeNeeded: '3-4 hours'
    },
    {
      name: 'Patanangala Beach',
      description: 'Pristine beach within the park where elephants come to bathe and drink.',
      image: '/api/placeholder/300/200',
      category: 'Beach',
      rating: 4.7,
      timeNeeded: '1-2 hours'
    },
    {
      name: 'Sithulpawwa Rock Temple',
      description: 'Ancient Buddhist monastery built into rock caves dating back to 2nd century BC.',
      image: '/api/placeholder/300/200',
      category: 'Heritage',
      rating: 4.5,
      timeNeeded: '1-2 hours'
    },
    {
      name: 'Magul Maha Viharaya',
      description: 'Archaeological site with ancient ruins and historical significance.',
      image: '/api/placeholder/300/200',
      category: 'Heritage',
      rating: 4.3,
      timeNeeded: '1 hour'
    }
  ];

  const tours = [
    {
      id: 16,
      name: 'Full Day Yala Safari',
      duration: 'Full Day',
      price: '$85',
      rating: 4.8,
      participants: 324,
      image: '/api/placeholder/300/200',
      highlights: ['Leopard Spotting', 'Elephant Herds', 'Bird Watching', 'Professional Guide']
    },
    {
      id: 17,
      name: 'Early Morning Safari',
      duration: 'Half Day',
      price: '$65',
      rating: 4.7,
      participants: 198,
      image: '/api/placeholder/300/200',
      highlights: ['Dawn Wildlife Activity', 'Best Light Photography', 'Cooler Weather', 'Less Crowded']
    },
    {
      id: 18,
      name: 'Photography Safari',
      duration: 'Full Day',
      price: '$120',
      rating: 4.9,
      participants: 89,
      image: '/api/placeholder/300/200',
      highlights: ['Professional Guide', 'Best Photo Spots', 'Extended Viewing Time', 'Photo Tips']
    }
  ];

  const wildlife = [
    {
      animal: 'Sri Lankan Leopard',
      description: 'Yala has one of the highest leopard densities in the world',
      population: '30-35 leopards',
      bestTime: 'Early morning & late afternoon',
      spotChance: '90%'
    },
    {
      animal: 'Asian Elephant',
      description: 'Large herds roam freely throughout the park',
      population: '300+ elephants',
      bestTime: 'Near water sources',
      spotChance: '95%'
    },
    {
      animal: 'Sloth Bear',
      description: 'Rare sightings of these elusive mammals',
      population: '15-20 bears',
      bestTime: 'Early morning',
      spotChance: '25%'
    },
    {
      animal: 'Spotted Deer',
      description: 'Most abundant species serving as leopard prey',
      population: '1000+ deer',
      bestTime: 'Throughout the day',
      spotChance: '100%'
    }
  ];

  const activities = [
    {
      season: 'Year Round',
      activities: [
        'Game drives in open safari jeeps',
        'Wildlife photography sessions',
        'Bird watching (200+ species)',
        'Beach visits within the park'
      ]
    },
    {
      season: 'December - March',
      activities: [
        'Peak wildlife viewing season',
        'Cooler weather for safaris',
        'Clear skies for photography',
        'Higher animal activity'
      ]
    },
    {
      season: 'April - September',
      activities: [
        'Bird migration season',
        'Fewer tourists, better sightings',
        'Lush green landscapes',
        'Lower accommodation rates'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-primary/80 to-accent/70">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <Camera className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-lg opacity-90">Sri Lanka's Premier Safari Destination</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Binoculars className="w-4 h-4" />
              Wildlife Sanctuary
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Yala National Park
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Experience Sri Lanka's most famous national park, home to the highest density of leopards in the world
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Best for</div>
                <div className="font-semibold">Wildlife Safari</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Area</div>
                <div className="font-semibold">979 km²</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Established</div>
                <div className="font-semibold">1938</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours?destination=yala"
                className="bg-cta hover:bg-cta/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Safari Tours
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
              { id: 'wildlife', label: 'Wildlife' },
              { id: 'tours', label: 'Safari Tours' },
              { id: 'attractions', label: 'Attractions' }
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
                      Sri Lanka's Wildlife Crown Jewel
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                      <p>
                        Yala National Park, established in 1938, is Sri Lanka's second largest national park 
                        and most visited wildlife sanctuary. Located in the southeast region of the island, 
                        this incredible wilderness spans 979 square kilometers of diverse ecosystems.
                      </p>
                      <p>
                        The park is world-renowned for having one of the highest densities of leopards globally, 
                        making it the best place to spot these elusive big cats. Beyond leopards, Yala is home 
                        to 44 mammal species and 215 bird species, including six endemic species.
                      </p>
                      <p>
                        The landscape varies dramatically from dense jungle to open grasslands, freshwater 
                        and marine wetlands, sandy beaches, and rocky outcrops. This diversity creates 
                        numerous micro-habitats that support an incredible variety of wildlife.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Park Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Wild className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium">Wildlife Density</div>
                          <div className="text-sm text-gray-600">Highest leopard density in the world</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-secondary" />
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-sm text-gray-600">Southeastern Sri Lanka</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-accent" />
                        <div>
                          <div className="font-medium">Best Safari Times</div>
                          <div className="text-sm text-gray-600">6:00 AM & 2:30 PM</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-cta" />
                        <div>
                          <div className="font-medium">Peak Season</div>
                          <div className="text-sm text-gray-600">February to July</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seasonal Activities */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                    Safari Seasons
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {activities.map((season, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          {season.season}
                        </h4>
                        <ul className="space-y-3">
                          {season.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safari Tips */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                    Safari Tips & Guidelines
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Best Viewing</h4>
                      <p className="text-gray-600">Early morning (6 AM) and late afternoon (2:30 PM) safaris offer best wildlife sightings.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Photography</h4>
                      <p className="text-gray-600">Bring telephoto lens, extra batteries, and memory cards for the best wildlife photography.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TreePine className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Conservation</h4>
                      <p className="text-gray-600">Maintain silence, respect wildlife distance, and follow park rules to protect the ecosystem.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Wildlife Tab */}
            {activeTab === 'wildlife' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Wildlife of Yala
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {wildlife.map((animal, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{animal.animal}</h3>
                      <p className="text-gray-600 mb-4">{animal.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Population</div>
                          <div className="font-semibold text-primary">{animal.population}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Spot Chance</div>
                          <div className="font-semibold text-secondary">{animal.spotChance}</div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-sm text-gray-500">Best Time to Spot</div>
                          <div className="font-semibold text-accent">{animal.bestTime}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured Wildlife: Leopards */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Sri Lankan Leopard - The Star Attraction</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-600 mb-4">
                        The Sri Lankan leopard (Panthera pardus kotiya) is a subspecies endemic to Sri Lanka 
                        and classified as Vulnerable by the IUCN. Yala National Park provides the best 
                        opportunity in the world to observe these magnificent big cats in their natural habitat.
                      </p>
                      <h4 className="font-bold mb-3">Key Facts:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Highest leopard density globally (1 per 5 km²)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Adults weigh 56-90kg (larger than African leopards)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Excellent climbers and swimmers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Solitary and most active during dawn/dusk</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold mb-4">Spotting Tips</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-900">Best Locations:</span>
                          <p className="text-sm text-gray-600">Block 1, near water holes and rocky outcrops</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Prime Time:</span>
                          <p className="text-sm text-gray-600">Early morning (6-9 AM) and late afternoon (3-6 PM)</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Look For:</span>
                          <p className="text-sm text-gray-600">Movement in tall grass, on rocks, or up in trees</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Be Patient:</span>
                          <p className="text-sm text-gray-600">Leopards can remain motionless for hours</p>
                        </div>
                        <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <strong>Pro Tip:</strong> Multiple safari visits increase your chances of leopard sightings. 
                            Some visitors see them on their first drive, others need several attempts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tours Tab */}
            {activeTab === 'tours' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Yala Safari Tours
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {tours.map((tour) => (
                    <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                      <div className="h-48 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center">
                          <Binoculars className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white font-medium">Safari Adventure</p>
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

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Park Attractions
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
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Experience the Wild Side of Sri Lanka
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Embark on an unforgettable safari adventure in Asia's premier leopard habitat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours?destination=yala"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Book Safari
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