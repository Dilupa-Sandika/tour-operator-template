// src/app/[locale]/blog/page.tsx

'use client';

import { useState, useEffect, useMemo } from 'react';
import { client, urlFor } from '@/lib/sanity/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import { useLocale } from 'next-intl'; // Import the useLocale hook
import { Search, Send, Calendar, Clock, User, ArrowRight, Rss, Sparkles, Play } from 'lucide-react';

// Define the types for our data from Sanity
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: any;
  publishedAt: string;
  author: {
    name: string;
    image: any;
  };
  category?: string; 
}

// Query to fetch all blog posts with their author info
const postsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category,
    author->{
      name,
      image
    }
  }
`;

// --- Blog Post Card Component ---
// We now pass the 'locale' to this component
function BlogPostCard({ post, locale }: { post: Post; locale: string }) {
  const postDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={urlFor(post.mainImage).width(400).height(250).url()} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {post.category && 
          <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
        }
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{postDate}</div>
          <div className="flex items-center gap-1"><User className="w-4 h-4" />{post.author?.name || 'Anonymous'}</div>
        </div>
        <h3 className="text-lg font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
        {/* --- THIS IS THE CORRECTED PART --- */}
        <Link href={`/${locale}/blog/${post.slug.current}`} className="inline-flex items-center gap-1 text-primary font-semibold hover:text-secondary transition-colors text-sm group">
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        {/* --- END OF CORRECTION --- */}
      </div>
    </article>
  );
}

// --- Main Blog Page Component ---
export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const locale = useLocale(); // Get the current language ('en', 'de', etc.)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await client.fetch(postsQuery);
        setPosts(postsData);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const featuredPosts = useMemo(() => posts.slice(0, 3), [posts]);

  useEffect(() => {
    if (featuredPosts.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const categories = ['All Categories', 'Travel Guides', 'Travel Tips', 'Wildlife', 'Food & Culture', 'History', 'Beaches'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Hero Section */}
      <section className="relative h-screen overflow-hidden bg-primary">
        <div className="absolute inset-0">
          {featuredPosts.map((post, index) => (
            <div
              key={post._id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={urlFor(post.mainImage).url()} alt={post.title} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/70 to-accent/60 opacity-80"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-pulse">Travel Stories</h1>
              <h2 className="text-2xl md:text-4xl font-light opacity-90 mb-12">& Travel Guides</h2>
              
              {featuredPosts[currentSlide] && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-white/20">
                  <div className="text-accent font-semibold mb-2">Featured Story</div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{featuredPosts[currentSlide].title}</h3>
                  <p className="opacity-90 mb-6">{featuredPosts[currentSlide].excerpt}</p>
                  {/* --- THIS IS THE CORRECTED PART --- */}
                  <Link href={`/${locale}/blog/${featuredPosts[currentSlide].slug.current}`} className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors">
                    <Play className="w-4 h-4" /> Read Story
                  </Link>
                  {/* --- END OF CORRECTION --- */}
                </div>
              )}

              <div className="flex justify-center gap-2">
                {featuredPosts.map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-accent' : 'bg-white/30'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-8 h-8 rounded-full border-2 border-white/50 mx-auto flex items-center justify-center animate-spin-slow">
              <Rss className="w-4 h-4" />
            </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="text" placeholder="Search articles, travel tips, guides..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"/>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Latest Articles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Explore our collection of travel guides, insider tips, and inspiring stories.</p>
            </div>
            {isLoading ? (
              <div className="text-center py-16">Loading...</div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post._id} post={post} locale={locale} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16"><p className="text-gray-500">No articles found.</p></div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-heading font-bold mb-4">Stay Updated with Our Latest Stories</h2>
            <p className="text-xl opacity-90 mb-8">Get travel tips, guides, and inspiration delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-accent focus:outline-none"/>
              <button type="submit" className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

