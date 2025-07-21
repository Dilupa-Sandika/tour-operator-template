// File Path: src/components/home/BlogSection.tsx

'use client';

import { Calendar, User, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Mock featured blog posts for home page
const featuredBlogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Sri Lanka's Cultural Triangle",
    excerpt: "Discover the ancient wonders of Anuradhapura, Polonnaruwa, and Sigiriya in this comprehensive guide.",
    category: "Travel Guides",
    author: "Priya Jayasinghe",
    publishedAt: "2024-03-15",
    readTime: "8 min read",
    image: "/api/placeholder/400/300",
    slug: "ultimate-guide-cultural-triangle"
  },
  {
    id: 2,
    title: "Best Time to Visit Sri Lanka: Weather Guide",
    excerpt: "Learn about the island's two monsoon seasons and discover the perfect time to visit each region.",
    category: "Travel Tips",
    author: "Rohan Fernando",
    publishedAt: "2024-03-10",
    readTime: "6 min read",
    image: "/api/placeholder/400/300",
    slug: "best-time-visit-sri-lanka"
  },
  {
    id: 3,
    title: "Wildlife Safari in Yala: What to Expect",
    excerpt: "Get ready for an unforgettable wildlife adventure in Yala National Park with leopards and elephants.",
    category: "Wildlife",
    author: "Samantha Silva",
    publishedAt: "2024-03-08",
    readTime: "5 min read",
    image: "/api/placeholder/400/300",
    slug: "wildlife-safari-yala"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Travel Stories & Guides
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
              Latest Travel Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover insider tips, hidden gems, and inspiring stories to help you plan your perfect Sri Lankan adventure.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBlogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white text-sm">{post.category}</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary font-semibold hover:text-secondary transition-colors text-sm group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              View All Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}