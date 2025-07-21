// File Path: src/app/[locale]/destinations/4/page.tsx

'use client';

import { useState } from 'react';
import { MapPin, Clock, Star, Calendar, Camera, Users, ArrowRight, Heart, Share2, Mountain, Crown, Zap, Eye } from 'lucide-react';
import Link from 'next/link';

export default function SigiriyaPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  const attractions = [
    {
      name: 'Sigiriya Rock Fortress',
      description: 'The magnificent 200-meter high rock citadel with ancient palace ruins and famous frescoes.',
      image: '/api/placeholder/300/200',
      category: 'Historical',
      rating: 4.9,
      timeNeeded: '3-4 hours'
    },
    {
      name: 'Ancient Frescoes',
      description: 'World-famous paintings of celestial maidens dating back to the 5th century.',
      image: '/api/placeholder/300/200',
      category: 'Art',
      rating: 4.8,
      timeNeeded: '30 minutes'
    },
    {
      name: 'Water Gardens',
      description: 'Sophisticated hydraulic system with fountains, pools, and water channels.',
      image: '/api/placeholder/300/200',
      category: 'Archaeological',
      rating: 4.6,
      timeNeeded: '1-2 hours'
    },
    {
      name: 'Pidurangala Rock',
      description: 'Alternative viewpoint offering spectacular sunrise views of Sigiriya Rock.',
      image: '/api/placeholder/300/200',
      category: 'Viewpoint',
      rating: 4.7,
      timeNeeded: '2-3 hours'
    }
  ];

  const tours = [
    {
      id: 10,
      name: 'Sigiriya Rock Fortress Climb',
      duration: 'Half Day',
      price: '$45',
      rating: 4.8,
      participants: 312,
      image: '/api/placeholder/300/200',
      highlights: ['Rock Climbing', 'Ancient Frescoes', 'Summit Palace', 'Water Gardens']
    },
    {
      id: 11,
      name: 'Sigiriya & Pidurangala Sunrise',
      duration: 'Full Day',
      price: '$75',
      rating: 4.9,
      participants: 189,
      image: '/api/placeholder/300/200',
      highlights: ['Sunrise Views', 'Two Rock Climbs', 'Photography Tour', 'Local Breakfast']
    },
    {
      id: 12,
      name: 'Cultural Triangle Day Tour',
      duration: 'Full Day',
      price: '$95',
      rating: 4.7,
      participants: 145,
      image: '/api/placeholder/300/200',
      highlights: ['Sigiriya', 'Dambulla Caves', 'Village Tour', 'Traditional Lunch']
    }
  ];

  const climbingSections = [
    {
      section: 'Water Gardens',
      elevation: '0m',
      difficulty: 'Easy',
      time: '30 mins',
      description: 'Explore the ancient hydraulic marvels at ground level.'
    },
    {
      section: 'Boulder Gardens',
      elevation: '50m',
      difficulty: 'Easy',
      time: '20 mins',
      description: 'Navigate through massive boulders and cave dwellings.'
    },
    {
      section: 'Terrace Gardens',
      elevation: '100m',
      difficulty: 'Moderate',
      time: '30 mins',
      description: 'Climb the initial stairways through landscaped terraces.'
    },
    {
      section: 'Frescoes Gallery',
      elevation: '120m',
      difficulty: 'Moderate',
      time: '15 mins',
      description: 'View the famous paintings of celestial maidens.'
    },
    {
      section: 'Mirror Wall',
      elevation: '140m',
      difficulty: 'Moderate',
      time: '20 mins',
      description: 'Walk along the polished wall with ancient graffiti.'
    },
    {
      section: 'Lion\'s Paws',
      elevation: '160m',
      difficulty: 'Challenging',
      time: '15 mins',
      description: 'Pass through the iconic lion-shaped gateway.'
    },
    {
      section: 'Summit Palace',
      elevation: '200m',
      difficulty: 'Challenging',
      time: '30 mins',
      description: 'Reach the top and explore the ancient palace ruins.'
    }
  ];

  const tips = [
    {
      category: 'Best Time to Climb',
      items: [
        'Start early morning (6-7 AM) to avoid crowds and heat',
        'Sunset climbs offer beautiful golden light',
        'Avoid midday climbs (11 AM - 2 PM) due to extreme heat'
      ]
    },
    {
      category: 'What to Bring',
      items: [
        'Comfortable hiking shoes with good grip',
        'Sun protection (hat, sunscreen, sunglasses)',
        'Plenty of water (at least 1.5 liters per person)',
        'Camera for the spectacular views and frescoes'
      ]
    },
    {
      category: 'Safety Guidelines',
      items: [
        'Follow the designated paths and stay with your group',
        'Be cautious on steep sections, especially when windy',
        'Take regular breaks to avoid exhaustion',
        'Children under 12 should be closely supervised'
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
              <Mountain className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-lg opacity-90">8th Wonder of the World</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Crown className="w-4 h-4" />
              UNESCO World Heritage Site
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Sigiriya
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              The legendary Lion Rock fortress rising 200 meters above the jungle, crowned with ancient palace ruins
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Best for</div>
                <div className="font-semibold">History & Adventure</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Height</div>
                <div className="font-semibold">200 meters</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-sm opacity-80">Climb Time</div>
                <div className="font-semibold">3-4 hours</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours?destination=sigiriya"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Book Climbing Tour
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
              { id: 'attractions', label: 'Rock Features' },
              { id: 'tours', label: 'Climbing Tours' },
              { id: 'climbing', label: 'Climbing Guide' }
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
                      The Legendary Lion Rock
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                      <p>
                        Sigiriya, often called the "Eighth Wonder of the World," is an ancient rock 
                        fortress that rises dramatically 200 meters above the surrounding jungle. 
                        Built in the 5th century by King Kashyapa as his capital and palace, this 
                        UNESCO World Heritage Site combines breathtaking natural beauty with 
                        remarkable ancient engineering.
                      </p>
                      <p>
                        The climb to the summit takes you through a series of remarkable features: 
                        sophisticated water gardens, the famous frescoes of celestial maidens, the 
                        mysterious Mirror Wall covered in ancient graffiti, and the iconic Lion's 
                        Paws gateway. At the summit, the ruins of the royal palace offer panoramic 
                        views across the Central Province.
                      </p>
                      <p>
                        Beyond its historical significance, Sigiriya represents one of the earliest 
                        examples of urban planning and landscape architecture. The complex hydraulic 
                        systems, gardens, and architectural innovations demonstrate the advanced 
                        civilization that flourished here over 1,500 years ago.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Archaeological Facts</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Crown className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium">Built</div>
                          <div className="text-sm text-gray-600">477-495 AD (King Kashyapa)</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mountain className="w-5 h-5 text-secondary" />
                        <div>
                          <div className="font-medium">Height</div>
                          <div className="text-sm text-gray-600">200 meters above sea level</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Eye className="w-5 h-5 text-accent" />
                        <div>
                          <div className="font-medium">Famous For</div>
                          <div className="text-sm text-gray-600">Frescoes & ancient palace</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-cta" />
                        <div>
                          <div className="font-medium">UNESCO Status</div>
                          <div className="text-sm text-gray-600">World Heritage Site since 1982</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                    Archaeological Marvels
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Ancient Frescoes</h4>
                      <p className="text-gray-600">World-renowned 5th-century paintings of celestial maidens, considered masterpieces of ancient art.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Water Gardens</h4>
                      <p className="text-gray-600">Sophisticated hydraulic systems with fountains and pools that still function after 1,500 years.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Crown className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Royal Palace</h4>
                      <p className="text-gray-600">Summit palace ruins offering insights into ancient Sri Lankan royalty and architecture.</p>
                    </div>
                  </div>
                </div>

                {/* Fun Facts */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Amazing Facts</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <p className="text-gray-600">Originally, there were 500 frescoes. Today, only 18 remain preserved.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <p className="text-gray-600">The Mirror Wall was so polished that the king could see his reflection.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <p className="text-gray-600">Ancient graffiti on the Mirror Wall includes poems dating back 1,200 years.</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <p className="text-gray-600">The water gardens are among the oldest landscaped gardens in the world.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <p className="text-gray-600">King Kashyapa chose this location after a family conflict over succession.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <p className="text-gray-600">The lion sculpture at the entrance was 14 meters high - only the paws remain.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Rock Features & Attractions
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

                {/* Detailed Feature Descriptions */}
                <div className="mt-12 space-y-8">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">The Famous Frescoes</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-600 mb-4">
                          The Sigiriya frescoes are among the finest examples of ancient Sri Lankan art. 
                          Painted in the 5th century, these remarkable works depict celestial maidens 
                          known as "Apsaras" in vibrant colors that have survived for over 1,500 years.
                        </p>
                        <h4 className="font-bold mb-3">Artistic Details:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <span className="text-gray-600">Painted using natural pigments and organic binders</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <span className="text-gray-600">Depicts women in various poses carrying flowers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <span className="text-gray-600">Shows advanced understanding of perspective and anatomy</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                        <h4 className="font-bold mb-4">Conservation Status</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium text-gray-700">Original Count:</span>
                            <p className="text-sm text-gray-600">Approximately 500 frescoes</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-700">Currently Visible:</span>
                            <p className="text-sm text-gray-600">18 well-preserved paintings</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-700">Protection:</span>
                            <p className="text-sm text-gray-600">Spiral staircase with limited viewing time</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-700">Photography:</span>
                            <p className="text-sm text-gray-600">Strictly prohibited to preserve paintings</p>
                          </div>
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
                  Sigiriya Climbing Tours
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {tours.map((tour) => (
                    <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                      <div className="h-48 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center">
                          <Mountain className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white font-medium">Sigiriya Tour</p>
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

            {/* Climbing Guide Tab */}
            {activeTab === 'climbing' && (
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Complete Climbing Guide
                </h2>
                
                {/* Climbing Sections */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Climbing Sections</h3>
                  <div className="space-y-4">
                    {climbingSections.map((section, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900">{section.section}</h4>
                              <p className="text-sm text-gray-500">{section.elevation} • {section.time}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            section.difficulty === 'Easy' 
                              ? 'bg-green-100 text-green-800'
                              : section.difficulty === 'Moderate'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {section.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-600">{section.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Tips */}
                <div className="grid md:grid-cols-3 gap-8">
                  {tips.map((tipSection, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{tipSection.category}</h3>
                      <ul className="space-y-3">
                        {tipSection.items.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Weather & Timing */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Times to Visit</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Dry Season</h4>
                      <p className="text-gray-600 text-sm">December - March: Best weather conditions with clear skies and minimal rain.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Sunrise Climb</h4>
                      <p className="text-gray-600 text-sm">Start at 5:30 AM for magical sunrise views and cooler temperatures.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Photography</h4>
                      <p className="text-gray-600 text-sm">Golden hour (6-8 AM & 5-6 PM) offers the best lighting for photos.</p>
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
            Conquer the Lion Rock
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience one of the world's most spectacular archaeological sites and enjoy breathtaking views from the summit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours?destination=sigiriya"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Book Climbing Tour
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Get Climbing Tips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}