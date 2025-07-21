// File Path: src/app/[locale]/destinations/page.tsx

'use client';

import { useState } from 'react';
import { MapPin, Clock, Star, ArrowRight, Search, Filter, Mountain, Waves, TreePine, Building2, Camera, Heart } from 'lucide-react';
import Link from 'next/link';

// Mock destinations data
const destinations = [
  {
    id: 1,
    name: 'Colombo',
    region: 'Western Province',
    category: 'Urban',
    description: 'The vibrant capital city blending modern skyscrapers with colonial charm and bustling markets.',
    image: '/api/placeholder/600/400',
    highlights: ['Galle Face Green', 'National Museum', 'Pettah Markets', 'Independence Square'],
    bestTime: 'Year-round',
    duration: '2-3 days',
    tours: 8,
    rating: 4.3,
    featured: true,
    icon: Building2
  },
  {
    id: 2,
    name: 'Kandy',
    region: 'Central Province',
    category: 'Cultural',
    description: 'The cultural capital housing the sacred Temple of the Tooth and surrounded by misty hills.',
    image: '/api/placeholder/600/400',
    highlights: ['Temple of the Tooth', 'Royal Botanical Gardens', 'Kandy Lake', 'Cultural Performances'],
    bestTime: 'December - April',
    duration: '2-3 days',
    tours: 12,
    rating: 4.7,
    featured: true,
    icon: Mountain
  },
  {
    id: 3,
    name: 'Galle',
    region: 'Southern Province',
    category: 'Coastal',
    description: 'A historic fortified city with Dutch colonial architecture overlooking the Indian Ocean.',
    image: '/api/placeholder/600/400',
    highlights: ['Galle Fort', 'Dutch Reformed Church', 'Lighthouse', 'Rampart Walk'],
    bestTime: 'November - April',
    duration: '1-2 days',
    tours: 10,
    rating: 4.6,
    featured: true,
    icon: Waves
  },
  {
    id: 4,
    name: 'Sigiriya',
    region: 'North Central Province', 
    category: 'Historical',
    description: 'Home to the iconic Lion Rock fortress, one of Sri Lanka\'s most spectacular ancient sites.',
    image: '/api/placeholder/600/400',
    highlights: ['Sigiriya Rock Fortress', 'Ancient Frescoes', 'Water Gardens', 'Pidurangala Rock'],
    bestTime: 'May - September',
    duration: '1-2 days',
    tours: 15,
    rating: 4.9,
    featured: true,
    icon: Mountain
  },
  {
    id: 5,
    name: 'Nuwara Eliya',
    region: 'Central Province',
    category: 'Hill Country',
    description: 'The "Little England" of Sri Lanka, famous for tea plantations and cool climate.',
    image: '/api/placeholder/600/400',
    highlights: ['Tea Plantations', 'Horton Plains', 'Gregory Lake', 'Strawberry Fields'],
    bestTime: 'April - June, August - September',
    duration: '2-3 days',
    tours: 9,
    rating: 4.5,
    featured: false,
    icon: TreePine
  },
  {
    id: 6,
    name: 'Yala National Park',
    region: 'Southern Province',
    category: 'Wildlife',
    description: 'Sri Lanka\'s premier wildlife destination, famous for leopards and diverse ecosystems.',
    image: '/api/placeholder/600/400',
    highlights: ['Leopard Spotting', 'Elephant Herds', 'Sloth Bears', 'Bird Watching'],
    bestTime: 'February - July',
    duration: '1-2 days',
    tours: 7,
    rating: 4.8,
    featured: false,
    icon: Camera
  },
  {
    id: 7,
    name: 'Mirissa',
    region: 'Southern Province',
    category: 'Beach',
    description: 'A picturesque beach town perfect for whale watching and tropical relaxation.',
    image: '/api/placeholder/600/400',
    highlights: ['Whale Watching', 'Golden Beaches', 'Coconut Tree Island', 'Surfing'],
    bestTime: 'November - April',
    duration: '2-3 days',
    tours: 6,
    rating: 4.4,
    featured: false,
    icon: Waves
  },
  {
    id: 8,
    name: 'Ella',
    region: 'Uva Province',
    category: 'Hill Country',
    description: 'A charming hill station offering stunning views, train rides, and hiking opportunities.',
    image: '/api/placeholder/600/400',
    highlights: ['Nine Arches Bridge', 'Little Adam\'s Peak', 'Ella Rock', 'Tea Gardens'],
    bestTime: 'December - March',
    duration: '2-3 days',
    tours: 11,
    rating: 4.6,
    featured: false,
    icon: Mountain
  }
];

const categories = ['All', 'Cultural', 'Coastal', 'Historical', 'Hill Country', 'Wildlife', 'Beach', 'Urban'];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredDestinations = filteredDestinations.filter(dest => dest.featured);
  const regularDestinations = filteredDestinations.filter(dest => !dest.featured);

  const toggleFavorite = (destId: number) => {
    setFavorites(prev => 
      prev.includes(destId) 
        ? prev.filter(id => id !== destId)
        : [...prev, destId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent">
          <div className="absolute inset-0 opacity-20">
            {/* Floating destination icons */}
            <div className="absolute top-1/4 left-1/4 animate-float">
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-1/3 right-1/3 animate-float-delayed">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float">
              <Camera className="w-7 h-7 text-white" />
            </div>
            <div className="absolute top-2/3 right-1/4 animate-float-delayed">
              <TreePine className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">
                Explore
              </h1>
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="h-px bg-white/50 flex-1 max-w-48"></div>
                <div className="flex gap-4">
                  <Mountain className="w-8 h-8 animate-pulse" />
                  <Waves className="w-8 h-8 animate-bounce" />
                  <Camera className="w-8 h-8 animate-pulse" />
                </div>
                <div className="h-px bg-white/50 flex-1 max-w-48"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-light opacity-90 mb-8">
                Sri Lanka's Destinations
              </h2>

              <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto mb-12 leading-relaxed">
                From ancient kingdoms to pristine beaches, discover the diverse landscapes and rich culture that make Sri Lanka truly special
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">{destinations.length}</div>
                  <div className="text-sm opacity-80">Destinations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="text-sm opacity-80">Provinces</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm opacity-80">Climate Zones</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">4.6</div>
                  <div className="text-sm opacity-80">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="text-center">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
            <p className="text-sm mt-2 opacity-70">Explore destinations</p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      {featuredDestinations.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">
                Featured Destinations
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredDestinations.map((destination, index) => {
                  const IconComponent = destination.icon;
                  return (
                    <div 
                      key={destination.id}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <div className="text-center">
                            <IconComponent className="w-12 h-12 text-white mb-2 mx-auto" />
                            <p className="text-white text-sm font-medium">{destination.category}</p>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                            {destination.category}
                          </span>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(destination.id)}
                          className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                        >
                          <Heart className={`w-4 h-4 ${
                            favorites.includes(destination.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                          }`} />
                        </button>

                        {/* Featured Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-cta text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
                            Featured
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                              {destination.name}
                            </h3>
                            <div className="flex items-center gap-1 text-gray-600 mb-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{destination.region}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{destination.rating}</span>
                            </div>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {destination.duration}
                          </div>
                          <div>
                            {destination.tours} tours
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                          {destination.description}
                        </p>

                        {/* Action Button */}
                        <Link
                          href={`/destinations/${destination.id}`}
                          className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-center block text-sm"
                        >
                          Explore Destination
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center text-primary mb-12">
              All Destinations
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularDestinations.map((destination, index) => {
                const IconComponent = destination.icon;
                return (
                  <div 
                    key={destination.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <div className="text-center">
                          <IconComponent className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white text-sm font-medium">{destination.category}</p>
                        </div>
                      </div>
                      
                      <div className="absolute top-3 left-3">
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                          {destination.category}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleFavorite(destination.id)}
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${
                          favorites.includes(destination.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                        }`} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-heading font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                            {destination.name}
                          </h3>
                          <div className="flex items-center gap-1 text-gray-600 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{destination.region}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{destination.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {destination.duration}
                        </div>
                        <div>
                          {destination.tours} tours
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {destination.description}
                      </p>

                      <Link
                        href={`/destinations/${destination.id}`}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-center block text-sm"
                      >
                        Explore Destination
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 3s;
        }
      `}</style>
    </div>
  );
}
