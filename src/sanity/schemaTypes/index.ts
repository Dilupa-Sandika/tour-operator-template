import { type SchemaTypeDefinition } from 'sanity'

// Import schemas from the lib directory
import tour from '../../lib/sanity/schemas/tour'
import destination from '../../lib/sanity/schemas/destination'
import author from '../../lib/sanity/schemas/author'
import blogPost from '../../lib/sanity/schemas/blogPost'
import testimonial from '../../lib/sanity/schemas/testimonial'
import siteSettings from '../../lib/sanity/schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    tour,
    destination,
    author,
    blogPost,
    testimonial,
    siteSettings,
  ],
}
