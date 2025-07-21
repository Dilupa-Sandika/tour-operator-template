// src/lib/sanity/schemas/tour.ts
import { defineField, defineType } from 'sanity'
import { PackageIcon } from '@sanity/icons'

export default defineType({
  name: 'tour',
  title: 'Tours',
  type: 'document',
  icon: PackageIcon,
  groups: [
    { name: 'details', title: 'Tour Details', default: true },
    { name: 'seo', title: 'SEO Settings' },
  ],
  fields: [
    // --- DETAILS TAB ---
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'reference',
      to: [{ type: 'destination' }],
      group: 'details',
      description: 'The main destination this tour belongs to.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Tour Title',
      type: 'string',
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'details',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      group: 'details',
      options: {
        list: [
          { title: 'Easy', value: 'easy' },
          { title: 'Moderate', value: 'moderate' },
          { title: 'Challenging', value: 'challenging' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'duration_type',
      title: 'Duration Type',
      type: 'string',
      group: 'details',
      options: {
        list: [
          { title: 'Half Day', value: 'half-day' },
          { title: 'Full Day', value: 'full-day' },
          { title: 'Multi Day', value: 'multi-day' },
        ],
      },
    }),
    defineField({
      name: 'images',
      title: 'Tour Images',
      type: 'array',
      group: 'details',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alternative text', type: 'string' }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      group: 'details',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'duration',
      title: 'Duration (Text)',
      type: 'string',
      group: 'details',
      description: 'A more descriptive duration, e.g., "Approx. 8 hours"',
    }),
    defineField({
      name: 'location',
      title: 'General Location',
      type: 'string',
      group: 'details',
      description: 'e.g., "South Coast", "Hill Country"',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'details',
      options: {
        list: [
          { title: 'Cultural', value: 'cultural' },
          { title: 'Adventure', value: 'adventure' },
          { title: 'Wildlife', value: 'wildlife' },
          { title: 'Beach', value: 'beach' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'details',
      rows: 4,
      description: 'A brief summary shown on tour cards.',
    }),
    defineField({
      name: 'included',
      title: "What's Included",
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'notIncluded',
      title: "What's Not Included",
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
    }),
     defineField({
      name: 'featured',
      title: 'Featured Tour',
      type: 'boolean',
      group: 'details',
      description: 'Display this tour on the homepage.',
      initialValue: false,
    }),

    // --- SEO TAB ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Appears in the browser tab and search results. Keep it under 60 characters.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'The short description shown by Google. Keep it under 160 characters.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      destination: 'destination.name',
      media: 'images.0.asset',
    },
    prepare(selection) {
      const { title, destination, media } = selection
      return {
        title: title,
        subtitle: `In ${destination || 'Unknown Destination'}`,
        media: media,
      }
    },
  },
})







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// src/lib/sanity/schemas/tour.ts

/*
import { defineField, defineType } from 'sanity'
import { PackageIcon } from '@sanity/icons'

export default defineType({
  name: 'tour',
  title: 'Tours',
  type: 'document',
  icon: PackageIcon,
  fields: [
    // This is the new field that links a tour to a destination
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'reference',
      to: [{ type: 'destination' }], // This creates the link
      description: 'The main destination this tour belongs to.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Tour Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Tour Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alternative text', type: 'string' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "Full Day", "Approx. 8 hours"',
    }),
    defineField({
      name: 'location',
      title: 'General Location',
      type: 'string',
      description: 'e.g., "South Coast", "Hill Country"',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cultural', value: 'cultural' },
          { title: 'Adventure', value: 'adventure' },
          { title: 'Wildlife', value: 'wildlife' },
          { title: 'Beach', value: 'beach' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 4,
      description: 'A brief summary shown on tour cards.',
    }),
    defineField({
      name: 'included',
      title: "What's Included",
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'notIncluded',
      title: "What's Not Included",
      type: 'array',
      of: [{ type: 'string' }],
    }),
     defineField({
      name: 'featured',
      title: 'Featured Tour',
      type: 'boolean',
      description: 'Display this tour on the homepage.',
      initialValue: false,
    }),
    // You can add more detailed fields here if needed
  ],
  preview: {
    select: {
      title: 'title',
      destination: 'destination.name',
      media: 'images.0.asset',
    },
    prepare(selection) {
      const { title, destination, media } = selection
      return {
        title: title,
        subtitle: `In ${destination || 'Unknown Destination'}`,
        media: media,
      }
    },
  },
}) */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
export const tourSchema = {
  name: 'tour',
  title: 'Tours',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tour Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Tour',
      type: 'boolean',
      description: 'Display this tour on the homepage'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cultural', value: 'cultural' },
          { title: 'Adventure', value: 'adventure' },
          { title: 'Wildlife', value: 'wildlife' },
          { title: 'Beach', value: 'beach' },
          { title: 'Family', value: 'family' },
          { title: 'Luxury', value: 'luxury' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          { title: 'Easy', value: 'easy' },
          { title: 'Moderate', value: 'moderate' },
          { title: 'Challenging', value: 'challenging' }
        ]
      }
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "3 Days", "Full Day", "Half Day"'
    },
    {
      name: 'groupSize',
      title: 'Group Size',
      type: 'string',
      description: 'e.g., "Up to 8 people", "Private tour"'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Main locations covered in this tour'
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0)
    },
    {
      name: 'originalPrice',
      title: 'Original Price (USD)',
      type: 'number',
      description: 'Optional: Show crossed-out original price for discounts'
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for tour cards'
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed tour description with rich text'
    },
    {
      name: 'highlights',
      title: 'Tour Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key highlights of the tour'
    },
    {
      name: 'included',
      title: 'What\'s Included',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Services and items included in the tour'
    },
    {
      name: 'excluded',
      title: 'What\'s Not Included',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Services and items not included in the tour'
    },
    {
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'activities', title: 'Activities', type: 'array', of: [{ type: 'string' }] }
          ]
        }
      ]
    },
    {
      name: 'images',
      title: 'Tour Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }
          ]
        }
      ],
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'meetingPoint',
      title: 'Meeting Point',
      type: 'object',
      fields: [
        { name: 'name', title: 'Location Name', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' },
        { name: 'coordinates', title: 'GPS Coordinates', type: 'geopoint' },
        { name: 'instructions', title: 'Meeting Instructions', type: 'text' }
      ]
    },
    {
      name: 'whatToBring',
      title: 'What to Bring',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Items guests should bring'
    },
    {
      name: 'bookingPolicy',
      title: 'Booking Policy',
      type: 'text',
      description: 'Booking terms and conditions'
    },
    {
      name: 'cancellationPolicy',
      title: 'Cancellation Policy',
      type: 'text',
      description: 'Cancellation terms and refund policy'
    },
    {
      name: 'languages',
      title: 'Guide Languages',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Languages spoken by guides'
    },
    {
      name: 'ageRestriction',
      title: 'Age Restriction',
      type: 'string',
      description: 'Age requirements if any'
    },
    {
      name: 'accessibility',
      title: 'Accessibility Information',
      type: 'text',
      description: 'Accessibility features and limitations'
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this tour was first published'
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Whether this tour is currently available for booking',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      category: 'category',
      price: 'price'
    },
    prepare(selection: any) {
      const { title, media, category, price } = selection;
      return {
        title,
        subtitle: `${category} - $${price} USD`,
        media
      };
    }
  }
};

// src/lib/sanity/schemas/blogPost.ts
export const blogPostSchema = {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief description for blog post previews'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }
          ]
        }
      ]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags for better categorization'
    },
    {
      name: 'relatedTours',
      title: 'Related Tours',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tour' }] }],
      description: 'Tours related to this blog post'
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Display this post prominently'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage'
    },
    prepare(selection: any) {
      const { title, author, media } = selection;
      return {
        title,
        subtitle: `by ${author}`,
        media
      };
    }
  }
};

// src/lib/sanity/schemas/testimonial.ts
export const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City or region'
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string'
    },
    {
      name: 'avatar',
      title: 'Customer Photo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
          { title: '2 Stars', value: 2 },
          { title: '1 Star', value: 1 }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'review',
      title: 'Review Text',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'tour',
      title: 'Tour Experienced',
      type: 'reference',
      to: [{ type: 'tour' }]
    },
    {
      name: 'date',
      title: 'Review Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'images',
      title: 'Customer Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          }
        }
      ],
      description: 'Photos from their trip'
    },
    {
      name: 'videoTestimonial',
      title: 'Video Testimonial',
      type: 'object',
      fields: [
        {
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'YouTube, Vimeo, or direct video URL'
        },
        {
          name: 'thumbnail',
          title: 'Video Thumbnail',
          type: 'image',
          options: {
            hotspot: true,
          }
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show prominently on homepage'
    },
    {
      name: 'verified',
      title: 'Verified Customer',
      type: 'boolean',
      description: 'Mark as verified customer',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tour.title',
      media: 'avatar',
      rating: 'rating'
    },
    prepare(selection: any) {
      const { title, subtitle, media, rating } = selection;
      return {
        title,
        subtitle: `${rating}★ - ${subtitle}`,
        media
      };
    }
  }
};

// src/lib/sanity/schemas/siteSettings.ts
export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Phone Number', type: 'string' },
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'address', title: 'Physical Address', type: 'text' },
        { name: 'businessHours', title: 'Business Hours', type: 'string' }
      ]
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' }
      ]
    },
    {
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Default Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Default Meta Description', type: 'text' },
        { name: 'keywords', title: 'Default Keywords', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', title: 'Default OG Image', type: 'image' }
      ]
    },
    {
      name: 'analytics',
      title: 'Analytics & Tracking',
      type: 'object',
      fields: [
        { name: 'googleAnalyticsId', title: 'Google Analytics ID', type: 'string' },
        { name: 'facebookPixelId', title: 'Facebook Pixel ID', type: 'string' },
        { name: 'clarityProjectId', title: 'Microsoft Clarity Project ID', type: 'string' }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings'
      };
    }
  }
};

// src/lib/sanity/client.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// src/lib/sanity/queries.ts
export const TOURS_QUERY = `
  *[_type == "tour" && isActive == true] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    category,
    difficulty,
    duration,
    groupSize,
    location,
    price,
    originalPrice,
    description,
    highlights,
    images,
    featured,
    publishedAt
  }
`;

export const FEATURED_TOURS_QUERY = `
  *[_type == "tour" && featured == true && isActive == true] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    category,
    difficulty,
    duration,
    groupSize,
    location,
    price,
    originalPrice,
    description,
    highlights,
    images,
    publishedAt
  }
`;

export const TOUR_BY_SLUG_QUERY = `
  *[_type == "tour" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    category,
    difficulty,
    duration,
    groupSize,
    location,
    price,
    originalPrice,
    description,
    fullDescription,
    highlights,
    included,
    excluded,
    itinerary,
    images,
    meetingPoint,
    whatToBring,
    bookingPolicy,
    cancellationPolicy,
    languages,
    ageRestriction,
    accessibility,
    seo,
    publishedAt
  }
`;

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(featured desc, date desc) {
    _id,
    name,
    location,
    country,
    avatar,
    rating,
    review,
    "tour": tour->title,
    date,
    images,
    videoTestimonial,
    featured,
    verified
  }
`;

export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && featured == true] | order(date desc) [0...5] {
    _id,
    name,
    location,
    country,
    avatar,
    rating,
    review,
    "tour": tour->title,
    date,
    images,
    videoTestimonial,
    verified
  }
`;

export const BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    "author": author->name,
    publishedAt,
    readingTime,
    tags,
    featured
  }
`;

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    favicon,
    contactInfo,
    socialMedia,
    seo,
    analytics
  }
`;

// Export all schemas
export const schemas = [
  tourSchema,
  blogPostSchema,
  testimonialSchema,
  siteSettingsSchema
]; */