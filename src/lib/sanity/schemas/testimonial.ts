// src/lib/sanity/schemas/testimonial.ts
import { defineField, defineType } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerImage',
      title: 'Customer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "London, UK"',
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tourTaken',
      title: 'Tour Taken',
      type: 'reference',
      to: { type: 'tour' },
      description: 'Optional: Link to the tour this customer experienced.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Check this to feature the testimonial on the homepage.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'location',
      media: 'customerImage',
    },
  },
})
