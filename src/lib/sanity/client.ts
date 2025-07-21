// src/lib/sanity/client.ts

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Get the project details from the environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = '2024-07-15'

// This is the main client for fetching data
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // useCdn: false is recommended for development
})

// --- THIS IS THE MISSING PART ---
// This is the helper function for generating image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
// --- END OF MISSING PART ---
