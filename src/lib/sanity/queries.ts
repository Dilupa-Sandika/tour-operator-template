// src/lib/sanity/queries.ts
import { groq } from 'next-sanity';

// Query to get all tours and their destination info
export const toursQuery = groq`
  *[_type == "tour"] | order(featured desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    price,
    duration,
    location,
    "destination": destination->{
      name,
      "slug": slug.current
    },
    images[]{
      asset->{
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    featured
  }
`;

// Query to get a single tour by its slug
export const tourQuery = groq`
  *[_type == "tour" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    price,
    duration,
    location,
    category,
    "destination": destination->{
      name,
      "slug": slug.current
    },
    images[]{
      asset->{
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    included,
    notIncluded,
    featured
  }
`;

// Query to get all destinations
export const destinationsQuery = groq`
  *[_type == "destination"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    image {
      asset->{
        url,
        "lqip": metadata.lqip
      }
    }
  }
`;

// Query to get tours for a specific destination slug
export const toursByDestinationQuery = groq`
  *[_type == "tour" && destination->slug.current == $destinationSlug] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    price,
    duration,
    location,
    images[]{
      asset->{
        url,
        "lqip": metadata.lqip
      },
      alt
    }
  }
`;




/*import { groq } from 'next-sanity';

export const toursQuery = groq`
  *[_type == "tour"] | order(featured desc, createdAt desc) {
    _id,
    title,
    slug,
    description,
    price,
    duration,
    location,
    category,
    images[] {
      asset->{
        url,
        _id
      },
      alt
    },
    featured,
    createdAt
  }
`;

export const tourQuery = groq`
  *[_type == "tour" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    price,
    duration,
    location,
    category,
    groupSize,
    images[] {
      asset->{
        url,
        _id
      },
      alt
    },
    included,
    notIncluded,
    itinerary[] {
      title,
      description,
      time
    },
    featured,
    createdAt,
    updatedAt
  }
`;

export const featuredToursQuery = groq`
  *[_type == "tour" && featured == true] | order(createdAt desc) [0...4] {
    _id,
    title,
    slug,
    description,
    price,
    duration,
    location,
    images[0] {
      asset->{
        url,
        _id
      },
      alt
    }
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(createdAt desc) {
    _id,
    name,
    country,
    rating,
    comment,
    image {
      asset->{
        url
      }
    },
    tour->{
      title,
      slug
    }
  }
`; */