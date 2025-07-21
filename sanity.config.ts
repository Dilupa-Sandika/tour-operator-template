// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Import your schemas
import tour from './src/lib/sanity/schemas/tour'
import destination from './src/lib/sanity/schemas/destination'
import author from './src/lib/sanity/schemas/author'
import blogPost from './src/lib/sanity/schemas/blogPost'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = '2024-07-15'

// Add the new schemas to this list
const schemas = [
  tour,
  destination,
  author,
  blogPost,
]

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemas,
  },
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

