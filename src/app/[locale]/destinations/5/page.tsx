// File Path: src/app/[locale]/destinations/5/page.tsx

'use client';

import { useState } from 'react';
import { MapPin, Clock, Star, Calendar, Camera, Users, ArrowRight, Heart, Share2, TreePine, Coffee, Mountain, Thermometer } from 'lucide-react';
import Link from 'next/link';

export default function NuwaraEliyaPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const attractions = [
    {
      name: 'Tea Plantations',
      description: 'Rolling hills covered in emerald tea bushes with guided factory tours and tastings.',
      image: '/api/placeholder/300/200',
      category: 'Agriculture',
      rating: 4.8,
      timeNeeded: '3-4 hours'
    },
    {
      name: 'Horton Plains National Park',
      description: 'High-altitude plateau with World\'s End cliff offering stunning 4,000-foot drops.',
      image: '/api/placeholder/300/200',
      category: 'Nature',
      rating: 4.9,
      timeNeeded: '4-5 hours'
    },
    {
      name: 'Gregory Lake',
      description: 'Scenic artificial lake perfect for boat rides and peaceful walks in cool climate.',
      image: '/api/placeholder/300/200',
      category: 'Recreation',
      rating: 4.4,
      timeNeeded: '1-2 hours'
    },
    {
      name: 'Strawberry Farms',
      description: 'Pick-your-own strawberry fields offering fresh fruit and countryside experiences.',
      image: '/api/placeholder/300/200',
      category: 'Agriculture',
      rating: 4.3,
      timeNeeded: '1-2 hours'
    }
  ];

  const tours = [
    {
      id: 13,
      name: 'Tea Plantation Experience',
      duration: 'Half Day',
      price: '$35',
      rating: 4.7,
      participants: 245,
      image: '/api/placeholder/300/200',
      highlights: ['Tea Factory Tour', 'Tea Tasting', 'Plantation Walk', 'Local Guide']
    },
    {
      id: 14,
      name: 'Horton Plains & World\'s End',
      duration: 'Full Day',
      price: '$65',
      rating: 4.9,
      participants: 156,
      image: '/api/placeholder/300/200',
      highlights: ['World\'s End View', 'Baker\'s Falls', 'Wildlife Spotting', 'Hiking Trail']
    },
    {
      id: 15,
      name: 'Little England Discovery',
      duration: 'Full Day',
      price: '$55',
      rating: 4.5,
      participants: 189,
      image: '/api/placeholder/300/200',
      highlights: ['Colonial Architecture', 'Gregory Lake', 'Victoria Park', 'Local Markets']
    }
  ];

  const teaGrades = [
    {
      grade: 'Orange Pekoe (OP)',
      description: 'Whole leaf tea with excellent flavor',
      characteristics: ['Full-bodied', 'Rich aroma', 'Premium quality']
    },
    {
      grade: 'Broken Orange Pekoe (BOP)',
      description: 'Broken leaf tea, strong and flavorful',
      characteristics: ['Strong brew', 'Quick steeping', 'Popular export']
    },
    {
      grade: 'Flowery Orange Pekoe (FOP)',
      description: 'High-grade tea with young leaves',
      characteristics: ['Delicate flavor', 'Light color', 'Floral notes']
    },
    {
      grade: 'Pekoe',
      description: 'Standard grade with consistent quality',
      characteristics: ['Balanced taste', 'Medium strength', 'Daily drinking']
    }
  ];

  const activities = [
    {
      season: 'Year Round',
      activities: [
        'Tea plantation tours and factory visits',
        'Boat rides on Gregory Lake',
        'Victoria Park walks and bird watching',
        'Shopping for tea and local crafts'
      ]
    },
    {
      season: 'April - June',
      activities: [
        'Strawberry picking season',
        'Flower season in Victoria Park',
        'Horse racing events',
        'Golf at the historic golf club'
      ]
    },
    {
      season: 'December - March',
      activities: [
        'Cool weather hiking',
        'Horton Plains trekking',
        'New Year celebrations',
        'Fireplace evenings at hotels'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/70">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white">
              <TreePine className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-lg opacity-90">Little England of Sri Lanka</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Coffee className="w-4 h-4" />
              Tea Country
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Nuwara Eliya
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Escape to the cool highlands where emerald tea plantations meet colonial charm at 6,000 feet above sea level
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Best for</div>
                <div className="font-semibold">Tea & Nature</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Elevation</div>
                <div className="font-semibold">1,868m</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Temperature</div>
                <div className="font-semibold">16-20°C</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours?destination=nuwara-eliya"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Tea Tours
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
              { id: 'attractions', label: 'Hill Attractions' },
              { id: 'tours', label: 'Tea Tours' },
              { id: 'tea', label: 'Tea Culture' }
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
                      Little England in the Hills
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                      <p>
                        Nuwara Eliya, fondly known as "Little England," is Sri Lanka's premier hill station, 
                        nestled in the heart of the island's tea country at 1,868 meters above sea level. 
                        This charming town offers a refreshing escape from the tropical heat with its cool 
                        climate, colonial architecture, and stunning mountain scenery.
                      </p>
                      <p>
                        Established by the British in the 19th century as a retreat from the lowland heat, 
                        Nuwara Eliya retains much of its colonial charm. Red-roofed bungalows, manicured 
                        gardens, and a golf course dating back to 1889 create an atmosphere reminiscent 
                        of an English countryside town.
                      </p>
                      <p>
                        The region is renowned for producing some of the world's finest high-grown tea. 
                        Rolling hills carpeted in emerald tea bushes stretch as far as the eye can see, 
                        punctuated by Victorian-era tea factories where you can witness the art of tea 
                        making and sample the famous Ceylon tea.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Climate & Geography</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mountain className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium">Elevation</div>
                          <div className="text-sm text-gray-600">1,868 meters above sea level</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Thermometer className="w-5 h-5 text-secondary" />
                        <div>
                          <div className="font-medium">Temperature</div>
                          <div className="text-sm text-gray-600">16-20°C year-round</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Coffee className="w-5 h-5 text-accent" />
                        <div>
                          <div className="font-medium">Famous For</div>
                          <div className="text-sm text-gray-600">Tea plantations & cool climate</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <TreePine className="w-5 h-5 text-cta" />
                        <div>
                          <div className="font-medium">Landscape</div>
                          <div className="text-sm text-gray-600">Rolling hills & cloud forests</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seasonal Activities */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                    Seasonal Activities
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

                {/* Why Visit Section */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                    Why Visit Nuwara Eliya
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Coffee className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">World-Class Tea</h4>
                      <p className="text-gray-600">Experience the birthplace of Ceylon tea with plantation tours and tastings.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Thermometer className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Cool Climate</h4>
                      <p className="text-gray-600">Escape tropical heat with refreshing mountain air and cool temperatures.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TreePine className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Colonial Charm</h4>
                      <p className="text-gray-600">Step back in time with well-preserved British colonial architecture and gardens.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Hill Country Attractions
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

                {/* Featured Attraction: Horton Plains */}
                <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Horton Plains National Park</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-600 mb-4">
                        Horton Plains National Park is a stunning high-altitude plateau located at 2,100-2,300 meters 
                        above sea level. This unique ecosystem is home to the famous World's End cliff, offering 
                        breathtaking views over a sheer drop of nearly 4,000 feet.
                      </p>
                      <h4 className="font-bold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">World's End: Dramatic cliff with panoramic views</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Baker's Falls: Beautiful 20-meter waterfall</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Endemic wildlife: Sambar deer, leopards, and birds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Cloud forest ecosystem with unique flora</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold mb-4">Visiting Information</h4>
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-900">Best Time:</span>
                          <p className="text-sm text-gray-600">Early morning (6-10 AM) for clear views</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Trail Length:</span>
                          <p className="text-sm text-gray-600">9km circular trail (3-4 hours)</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Difficulty:</span>
                          <p className="text-sm text-gray-600">Moderate (well-marked paths)</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Entry Fee:</span>
                          <p className="text-sm text-gray-600">LKR 3,000 for foreigners</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">What to Bring:</span>
                          <p className="text-sm text-gray-600">Warm clothes, water, and good walking shoes</p>
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
                  Tea Country Tours
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {tours.map((tour) => (
                    <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                      <div className="h-48 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center">
                          <TreePine className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white font-medium">Hill Country Tour</p>
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

            {/* Tea Culture Tab */}
            {activeTab === 'tea' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Ceylon Tea Culture
                </h2>
                
                {/* Tea History */}
                <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">History of Ceylon Tea</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-600 mb-4">
                        Ceylon tea's story began in 1867 when Scottish planter James Taylor planted the first 
                        tea bushes in the Loolecondera estate near Kandy. After a devastating coffee blight 
                        destroyed Sri Lanka's coffee plantations, tea became the island's salvation and 
                        transformed the highlands into the green carpet of tea estates we see today.
                      </p>
                      <p className="text-gray-600 mb-4">
                        The unique combination of climate, altitude, and soil conditions in Sri Lanka's hill 
                        country creates some of the world's finest tea. The industry employs over 1 million 
                        people and Sri Lanka remains one of the world's largest tea exporters.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                      <h4 className="font-bold mb-4">Tea Timeline</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                          <div>
                            <span className="font-medium">1867:</span> First tea planted by James Taylor
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                          <div>
                            <span className="font-medium">1872:</span> First tea factory established
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                          <div>
                            <span className="font-medium">1873:</span> First Ceylon tea shipment to London
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                          <div>
                            <span className="font-medium">1890s:</span> Ceylon tea gains international recognition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tea Grades */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ceylon Tea Grades</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teaGrades.map((grade, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <h4 className="font-bold text-lg text-gray-900 mb-3">{grade.grade}</h4>
                        <p className="text-gray-600 text-sm mb-4">{grade.description}</p>
                        <div className="space-y-2">
                          {grade.characteristics.map((char, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-600">{char}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tea Process */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Tea Making Process</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4">From Leaf to Cup</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <div>
                            <span className="font-medium">Plucking</span>
                            <p className="text-sm text-gray-600">Hand-picking of "two leaves and a bud"</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <div>
                            <span className="font-medium">Withering</span>
                            <p className="text-sm text-gray-600">Leaves lose moisture for 12-24 hours</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <div>
                            <span className="font-medium">Rolling</span>
                            <p className="text-sm text-gray-600">Crushing to release essential oils</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                          <div>
                            <span className="font-medium">Oxidation</span>
                            <p className="text-sm text-gray-600">Fermentation develops flavor and color</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                          <div>
                            <span className="font-medium">Firing</span>
                            <p className="text-sm text-gray-600">Heat treatment stops oxidation</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">6</div>
                          <div>
                            <span className="font-medium">Sorting</span>
                            <p className="text-sm text-gray-600">Grading by size and quality</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-bold mb-4">Tasting Notes</h4>
                      <div className="space-y-4">
                        <div>
                          <span className="font-medium text-gray-900">High Grown (Above 1,200m):</span>
                          <p className="text-sm text-gray-600">Bright, citrusy, and full-bodied with floral notes</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Medium Grown (600-1,200m):</span>
                          <p className="text-sm text-gray-600">Rich and mellow with good color</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Low Grown (Below 600m):</span>
                          <p className="text-sm text-gray-600">Strong and robust, ideal for blending</p>
                        </div>
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>Pro Tip:</strong> Nuwara Eliya tea is known for its delicate, light character 
                            with a bright golden color and subtle flavor - perfect for afternoon tea.
                          </p>
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
            Discover Ceylon Tea Heritage
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the cool highlands, rolling tea plantations, and authentic Ceylon tea culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours?destination=nuwara-eliya"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Book Tea Tour
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