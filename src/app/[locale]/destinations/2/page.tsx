// File Path: src/app/[locale]/destinations/2/page.tsx

'use client';

import { useState } from 'react';
import { MapPin, Clock, Star, Calendar, Camera, Users, ArrowRight, Heart, Share2, Mountain, TreePine, Flower2, Music } from 'lucide-react';
import Link from 'next/link';

export default function KandyPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const attractions = [
    {
      name: 'Temple of the Sacred Tooth Relic',
      description: 'Sri Lanka\'s most sacred Buddhist temple, housing a tooth relic of the Buddha.',
      image: '/api/placeholder/300/200',
      category: 'Religious',
      rating: 4.8,
      timeNeeded: '2-3 hours'
    },
    {
      name: 'Royal Botanical Gardens',
      description: 'Magnificent 147-acre gardens featuring over 4,000 species of plants.',
      image: '/api/placeholder/300/200',
      category: 'Nature',
      rating: 4.6,
      timeNeeded: '3-4 hours'
    },
    {
      name: 'Kandy Lake',
      description: 'Scenic artificial lake in the heart of the city, perfect for peaceful walks.',
      image: '/api/placeholder/300/200',
      category: 'Nature',
      rating: 4.4,
      timeNeeded: '1-2 hours'
    },
    {
      name: 'Cultural Dance Show',
      description: 'Traditional Kandyan dance performances showcasing Sri Lankan heritage.',
      image: '/api/placeholder/300/200',
      category: 'Cultural',
      rating: 4.5,
      timeNeeded: '1.5 hours'
    }
  ];

  const tours = [
    {
      id: 4,
      name: 'Kandy Cultural Heritage Tour',
      duration: 'Full Day',
      price: '$55',
      rating: 4.7,
      participants: 234,
      image: '/api/placeholder/300/200',
      highlights: ['Temple of Tooth', 'Royal Palace', 'Cultural Dance', 'Local Markets']
    },
    {
      id: 5,
      name: 'Botanical Gardens & Tea Factory',
      duration: 'Half Day',
      price: '$35',
      rating: 4.5,
      participants: 156,
      image: '/api/placeholder/300/200',
      highlights: ['Peradeniya Gardens', 'Tea Plantation', 'Spice Garden', 'Village Tour']
    },
    {
      id: 6,
      name: 'Kandy to Nuwara Eliya Train',
      duration: 'Full Day',
      price: '$65',
      rating: 4.9,
      participants: 89,
      image: '/api/placeholder/300/200',
      highlights: ['Scenic Train Ride', 'Hill Country Views', 'Tea Plantations', 'Cool Climate']
    }
  ];

  const festivals = [
    {
      name: 'Esala Perahera',
      month: 'July/August',
      description: 'Grand procession with decorated elephants, dancers, and drummers.',
      importance: 'Most important'
    },
    {
      name: 'Poson Poya',
      month: 'June',
      description: 'Celebrates the introduction of Buddhism to Sri Lanka.',
      importance: 'Religious'
    },
    {
      name: 'Duruthu Perahera',
      month: 'January',
      description: 'New Year celebration with traditional performances.',
      importance: 'Cultural'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/70">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <Mountain className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-lg opacity-90">Cultural Capital of Sri Lanka</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mountain className="w-4 h-4" />
              Cultural Heritage
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Kandy
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Sacred city nestled in misty hills, home to the Temple of the Tooth and rich cultural traditions
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Best for</div>
                <div className="font-semibold">Culture & Religion</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Duration</div>
                <div className="font-semibold">2-3 Days</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Elevation</div>
                <div className="font-semibold">500m above sea</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours?destination=kandy"
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
              { id: 'attractions', label: 'Sacred Sites' },
              { id: 'tours', label: 'Cultural Tours' },
              { id: 'festivals', label: 'Festivals & Events' }
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
                      Sacred City of Kandy
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                      <p>
                        Kandy, the last royal capital of Sri Lanka, is a UNESCO World Heritage Site that 
                        perfectly preserves the island's cultural and spiritual heritage. Nestled in a 
                        valley surrounded by misty hills, this sacred city is home to the Temple of the 
                        Sacred Tooth Relic, Buddhism's most revered shrine.
                      </p>
                      <p>
                        The city's rich history dates back to the 14th century, and its unique position 
                        as both a political and religious center has shaped its distinctive character. 
                        Kandy's well-preserved architecture, traditional crafts, and vibrant cultural 
                        performances offer visitors an authentic glimpse into Sri Lankan heritage.
                      </p>
                      <p>
                        Beyond its spiritual significance, Kandy serves as the gateway to Sri Lanka's 
                        hill country, with its cool climate, lush botanical gardens, and scenic lake 
                        providing a peaceful retreat from the tropical heat of the lowlands.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Cultural Significance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mountain className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-sm text-gray-600">Central Province, Hill Country</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <TreePine className="w-5 h-5 text-secondary" />
                        <div>
                          <div className="font-medium">UNESCO Status</div>
                          <div className="text-sm text-gray-600">World Heritage Site since 1988</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Flower2 className="w-5 h-5 text-accent" />
                        <div>
                          <div className="font-medium">Climate</div>
                          <div className="text-sm text-gray-600">Tropical highland, 20-28°C</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Music className="w-5 h-5 text-cta" />
                        <div>
                          <div className="font-medium">Famous For</div>
                          <div className="text-sm text-gray-600">Buddhist temple, cultural dances</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural Highlights */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                    Cultural Heritage Highlights
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mountain className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Sacred Temple</h4>
                      <p className="text-gray-600">Home to the Sacred Tooth Relic of Buddha, making it the most important Buddhist site in Sri Lanka.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Music className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Traditional Arts</h4>
                      <p className="text-gray-600">Experience authentic Kandyan dancing, drumming, and traditional crafts that have been preserved for centuries.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TreePine className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Royal Heritage</h4>
                      <p className="text-gray-600">Explore the last kingdom of Sri Lanka with its royal palace, audience halls, and royal lake.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Sacred Sites & Attractions
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

                {/* Temple Etiquette */}
                <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Temple Visiting Etiquette</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-green-700">Do's</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Dress modestly - cover shoulders and knees</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Remove shoes and hats before entering</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Maintain silence and show respect</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Follow the guide's instructions</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-red-700">Don'ts</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Don't point feet towards Buddha statues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Don't touch religious artifacts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Don't take photos during prayers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Don't turn your back on Buddha statues</span>
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
                  Cultural Tours in Kandy
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {tours.map((tour) => (
                    <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                      <div className="h-48 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center">
                          <Mountain className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white font-medium">Kandy Tour</p>
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

            {/* Festivals Tab */}
            {activeTab === 'festivals' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Festivals & Cultural Events
                </h2>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Annual Festivals</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {festivals.map((festival, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <Music className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{festival.name}</h4>
                            <p className="text-sm text-gray-500">{festival.month}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{festival.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          festival.importance === 'Most important' 
                            ? 'bg-red-100 text-red-800'
                            : festival.importance === 'Religious'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {festival.importance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Esala Perahera Spotlight */}
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Esala Perahera - The Grand Festival</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-600 mb-4">
                        The Esala Perahera is one of Asia's most spectacular religious processions, held annually 
                        in July or August. This 10-day festival culminates in a grand parade featuring over 100 
                        magnificently decorated elephants, traditional dancers, drummers, and fire performers.
                      </p>
                      <h4 className="font-bold mb-3">Festival Highlights:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <span className="text-gray-600">Sacred Tooth Relic procession</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <span className="text-gray-600">Traditional Kandyan dancing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <span className="text-gray-600">Whip crackers and fire dancers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <span className="text-gray-600">Beautifully costumed elephants</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold mb-4">Planning Your Visit</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-900">Best Viewing Spots:</span>
                          <p className="text-sm text-gray-600">Temple area, Kandy Lake, main streets</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Duration:</span>
                          <p className="text-sm text-gray-600">Final procession: 3-4 hours</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Book in Advance:</span>
                          <p className="text-sm text-gray-600">Hotels fill up quickly during festival</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Start Time:</span>
                          <p className="text-sm text-gray-600">Evening procession begins at 8 PM</p>
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
            Experience the Sacred City of Kandy
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Immerse yourself in Sri Lanka's rich Buddhist heritage and cultural traditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours?destination=kandy"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              View Cultural Tours
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