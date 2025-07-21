// File Path: src/app/[locale]/tours/page.tsx


'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Grid, List, MapPin, Clock, DollarSign, Heart, Users, Star, Play, Mountain, Waves, Camera, TreePine } from 'lucide-react';
import Link from 'next/link';

// Mock tour data
const mockTours = [
  {
    id: 1,
    name: 'Sigiriya Rock Fortress',
    location: 'Sigiriya',
    category: 'Cultural',
    difficulty: 'Moderate',
    duration: 'Full Day',
    price: 75,
    rating: 4.8,
    reviewCount: 324,
    image: '/api/placeholder/400/300',
    description: 'Climb the ancient rock fortress and explore the 8th wonder of the world.',
    highlights: ['Ancient Frescoes', 'Lion Gate', 'Water Gardens'],
    featured: true
  },
  {
    id: 2,
    name: 'Yala Safari & Elephant Experience',
    location: 'Yala National Park',
    category: 'Wildlife',
    difficulty: 'Easy',
    duration: 'Full Day',
    price: 95,
    rating: 4.9,
    reviewCount: 256,
    image: '/api/placeholder/400/300',
    description: 'Spot leopards, elephants and exotic birds in Sri Lanka\'s premier wildlife park.',
    highlights: ['Leopard Spotting', 'Elephant Herds', 'Bird Watching'],
    featured: false
  },
  {
    id: 3,
    name: 'Hill Country Tea Plantation Trek',
    location: 'Nuwara Eliya',
    category: 'Adventure',
    difficulty: 'Challenging',
    duration: 'Half Day',
    price: 65,
    rating: 4.7,
    reviewCount: 189,
    image: '/api/placeholder/400/300',
    description: 'Trek through emerald tea plantations and visit a working tea factory.',
    highlights: ['Tea Factory Tour', 'Scenic Hiking', 'Local Culture'],
    featured: false
  },
  {
    id: 4,
    name: 'Mirissa Whale Watching',
    location: 'Mirissa',
    category: 'Beach',
    difficulty: 'Easy',
    duration: 'Half Day',
    price: 55,
    rating: 4.6,
    reviewCount: 412,
    image: '/api/placeholder/400/300',
    description: 'Experience the thrill of spotting blue whales and dolphins in their natural habitat.',
    highlights: ['Blue Whales', 'Dolphin Pods', 'Ocean Adventure'],
    featured: true
  },
  {
    id: 5,
    name: 'Galle Fort Heritage Walk',
    location: 'Galle',
    category: 'Cultural',
    difficulty: 'Easy',
    duration: 'Half Day',
    price: 45,
    rating: 4.5,
    reviewCount: 278,
    image: '/api/placeholder/400/300',
    description: 'Explore the Dutch colonial architecture and maritime history of Galle Fort.',
    highlights: ['Dutch Architecture', 'Maritime Museum', 'Local Crafts'],
    featured: false
  },
  {
    id: 6,
    name: 'Kandy Cultural Triangle',
    location: 'Kandy',
    category: 'Cultural',
    difficulty: 'Easy',
    duration: 'Full Day',
    price: 80,
    rating: 4.7,
    reviewCount: 345,
    image: '/api/placeholder/400/300',
    description: 'Visit the Temple of the Tooth, Royal Botanical Gardens and traditional dance performances.',
    highlights: ['Temple of Tooth', 'Botanical Gardens', 'Cultural Shows'],
    featured: false
  },
  {
    id: 7,
    name: 'Ella Nine Arches Bridge',
    location: 'Ella',
    category: 'Adventure',
    difficulty: 'Moderate',
    duration: 'Half Day',
    price: 50,
    rating: 4.8,
    reviewCount: 167,
    image: '/api/placeholder/400/300',
    description: 'Hike to the iconic Nine Arches Bridge and enjoy panoramic mountain views.',
    highlights: ['Nine Arches Bridge', 'Train Spotting', 'Mountain Views'],
    featured: false
  },
  {
    id: 8,
    name: 'Unawatuna Beach Paradise',
    location: 'Unawatuna',
    category: 'Beach',
    difficulty: 'Easy',
    duration: 'Full Day',
    price: 40,
    rating: 4.4,
    reviewCount: 298,
    image: '/api/placeholder/400/300',
    description: 'Relax on golden beaches, snorkel in coral reefs and enjoy beachside dining.',
    highlights: ['Golden Beach', 'Snorkeling', 'Beachside Dining'],
    featured: true
  }
];

const categories = ['All Categories', 'Cultural', 'Wildlife', 'Adventure', 'Beach'];
const difficulties = ['All Difficulties', 'Easy', 'Moderate', 'Challenging'];
const durations = ['All Durations', 'Half Day', 'Full Day', 'Multi-Day'];

const categoryIcons = {
  'Cultural': Mountain,
  'Wildlife': Camera,
  'Adventure': TreePine,
  'Beach': Waves
};

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Difficulties');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [heroSlide, setHeroSlide] = useState(0);

  const searchParams = useSearchParams();

  // Initialize category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      if (categories.includes(formattedCategory)) {
        setSelectedCategory(formattedCategory);
      }
    }
  }, [searchParams]);

  // Auto-slide for hero
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const filteredAndSortedTours = useMemo(() => {
    let filtered = mockTours.filter(tour => {
      const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || tour.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All Difficulties' || tour.difficulty === selectedDifficulty;
      const matchesDuration = selectedDuration === 'All Durations' || tour.duration === selectedDuration;
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration;
    });

    // Sort tours
    switch (sortBy) {
      case 'featured':
        return filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
      case 'priceLow':
        return filtered.sort((a, b) => a.price - b.price);
      case 'priceHigh':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'duration':
        return filtered.sort((a, b) => a.duration.localeCompare(b.duration));
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedDuration, sortBy]);

  const toggleFavorite = (tourId: number) => {
    setFavorites(prev => 
      prev.includes(tourId) 
        ? prev.filter(id => id !== tourId)
        : [...prev, tourId]
    );
  };

  const getCategoryIcon = (category: string) => {
    const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || MapPin;
    return IconComponent;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 transition-all duration-1000 ${
            heroSlide === 0 ? 'bg-gradient-to-r from-primary via-secondary to-accent' :
            heroSlide === 1 ? 'bg-gradient-to-r from-secondary via-accent to-primary' :
            heroSlide === 2 ? 'bg-gradient-to-r from-accent via-primary to-secondary' :
            'bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80'
          }`}>
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-5xl mx-auto">
              {/* Main Title */}
              <div className="mb-12">
                <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 animate-pulse">
                  Discover
                </h1>
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="h-px bg-white/50 flex-1 max-w-48"></div>
                  <div className="flex gap-4">
                    <Mountain className="w-8 h-8 animate-bounce" />
                    <Camera className="w-8 h-8 animate-pulse" />
                    <Waves className="w-8 h-8 animate-bounce" />
                  </div>
                  <div className="h-px bg-white/50 flex-1 max-w-48"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-light opacity-90">
                  Sri Lanka's Wonders
                </h2>
              </div>

              <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto mb-12 leading-relaxed">
                Explore our carefully curated collection of authentic Sri Lankan experiences, from ancient temples to pristine beaches
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">{mockTours.length}+</div>
                  <div className="text-sm opacity-80">Unique Tours</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">4.8</div>
                  <div className="text-sm opacity-80">Average Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">2500+</div>
                  <div className="text-sm opacity-80">Happy Travelers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#tours"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  Explore Tours
                </Link>
                <Link
                  href="/ai-planner"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Mountain className="w-5 h-5" />
                  Plan Your Trip
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="text-center">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
            <p className="text-sm mt-2 opacity-70">Explore tours below</p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section id="tours" className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search and View Toggle */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tours, locations, activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4 w-full lg:w-auto">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                {/* Difficulty Filter */}
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>

                {/* Duration Filter */}
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {durations.map(duration => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent min-w-48"
              >
                <option value="featured">Featured First</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">By Duration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">
                  {filteredAndSortedTours.length} {filteredAndSortedTours.length === 1 ? 'tour' : 'tours'} found
                </h2>
                <p className="text-gray-600 mt-1">
                  Browse our collection of unforgettable Sri Lankan experiences
                </p>
              </div>
            </div>

            {/* Tours Grid/List */}
            {filteredAndSortedTours.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No tours found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Categories');
                    setSelectedDifficulty('All Difficulties');
                    setSelectedDuration('All Durations');
                    setSortBy('featured');
                  }}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedTours.map((tour, index) => {
                  const IconComponent = getCategoryIcon(tour.category);
                  return (
                    <div 
                      key={tour.id} 
                      className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Image */}
                      <div className={`relative overflow-hidden ${
                        viewMode === 'list' ? 'w-80 flex-shrink-0' : 'h-48'
                      }`}>
                        <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <div className="text-center">
                            <IconComponent className="w-12 h-12 text-white mb-2 mx-auto" />
                            <p className="text-white text-sm font-medium">{tour.category}</p>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                            {tour.category}
                          </span>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(tour.id)}
                          className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                        >
                          <Heart className={`w-4 h-4 ${
                            favorites.includes(tour.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                          }`} />
                        </button>

                        {/* Featured Badge */}
                        {tour.featured && (
                          <div className="absolute bottom-3 left-3">
                            <span className="bg-cta text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                              {tour.name}
                            </h3>
                            <div className="flex items-center gap-1 text-gray-600 mb-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{tour.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">${tour.price}</div>
                            <div className="text-xs text-gray-500">per person</div>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${
                                i < Math.floor(tour.rating) 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`} />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{tour.rating}</span>
                          <span className="text-sm text-gray-500">({tour.reviewCount} reviews)</span>
                        </div>

                        {/* Tour Details */}
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {tour.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {tour.difficulty}
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-gray-600 mb-4 ${
                          viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'
                        } text-sm`}>
                          {tour.description}
                        </p>

                        {/* Highlights */}
                        {viewMode === 'list' && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {tour.highlights.slice(0, 3).map((highlight, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action Button */}
                        <Link
                          href={`/tours/${tour.id}`}
                          className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-center block"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}