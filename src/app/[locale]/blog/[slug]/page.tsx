// src/app/[locale]/blog/[slug]/page.tsx

import { client, urlFor } from '@/lib/sanity/client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { Calendar, User } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

// Define the type for a single post
interface Post {
  title: string;
  mainImage: any;
  publishedAt: string;
  author: { name: string; image: any; };
  body: any[];
  seoTitle?: string;
  seoDescription?: string;
}

// Query to get a single post by its slug
const postQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    author->{ name, image },
    body,
    seoTitle,
    seoDescription
  }
`;

// This function generates the SEO metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch<Post>(postQuery, { slug: params.slug });
  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || '',
  };
}

// This is the main page component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<Post>(postQuery, { slug: params.slug });

  if (!post) {
    return (
        <div className="text-center py-20">
            <h1 className="text-2xl font-bold">Blog post not found.</h1>
            <Link href="/blog" className="text-primary hover:underline mt-4 inline-block">Return to Blog</Link>
        </div>
    );
  }

  const postDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Custom components for rendering rich text
  const ptComponents = {
    types: {
      image: ({ value }: { value: any }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(800).fit('max').auto('format').url()}
            className="rounded-lg my-8"
          />
        )
      },
    },
  }

  return (
    <article className="bg-white">
      <header className="relative h-[60vh]">
        <img 
          src={urlFor(post.mainImage).url()} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold font-heading">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                {/* --- THIS IS THE CORRECTED PART --- */}
                {/* We check if the author image exists before showing it */}
                {post.author.image ? (
                  <img src={urlFor(post.author.image).width(40).height(40).url()} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                )}
                {/* --- END OF CORRECTION --- */}
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{postDate}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <PortableText value={post.body} components={ptComponents} />
        </div>
      </div>
    </article>
  );
}

