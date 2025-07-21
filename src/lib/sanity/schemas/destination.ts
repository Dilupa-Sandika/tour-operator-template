// src/lib/sanity/schemas/destination.ts
import { defineField, defineType } from 'sanity'
import { EarthGlobeIcon } from '@sanity/icons'

export default defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  icon: EarthGlobeIcon,
  groups: [
    { name: 'overview', title: 'Overview', default: true },
    { name: 'attractions', title: 'Top Attractions' },
    { name: 'practical', title: 'Practical Info' },
    { name: 'pageContent', title: 'Page Content' },
  ],
  fields: [
    // --- OVERVIEW TAB ---
    defineField({
      name: 'name',
      title: 'Destination Name',
      type: 'string',
      group: 'overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'overview',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Hero Image',
      type: 'image',
      group: 'overview',
      options: { hotspot: true },
    }),
    defineField({
      name: 'overviewDescription',
      title: 'Main Overview Description',
      description: 'The large block of text under "Discover [Destination Name]"',
      type: 'array', 
      of: [{ type: 'block' }],
      group: 'overview',
    }),
    defineField({
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'object',
      group: 'overview',
      fields: [
        { name: 'location', title: 'Location (Province)', type: 'string' },
        { name: 'population', title: 'Population', type: 'string' },
        { name: 'timeZone', title: 'Time Zone', type: 'string' },
        { name: 'bestMonths', title: 'Best Months to Visit', type: 'string' },
      ],
    }),

    // --- PAGE CONTENT TAB ---
    defineField({
        name: 'heroTags',
        title: 'Hero Section Tags',
        description: 'The small info boxes on the main image.',
        type: 'object',
        group: 'pageContent',
        fields: [
            { name: 'bestFor', title: 'Best for', type: 'string', description: 'e.g., Culture & Shopping' },
            { name: 'duration', title: 'Typical Duration', type: 'string', description: 'e.g., 2-3 Days' },
            { name: 'climate', title: 'Climate', type: 'string', description: 'e.g., Tropical' },
        ]
    }),
    defineField({
      name: 'whyVisitPoints',
      title: '"Why Visit" Section',
      description: 'The three iconic points explaining why to visit.',
      type: 'array',
      group: 'pageContent',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Point Title', type: 'string' },
          { name: 'description', title: 'Point Description', type: 'text' },
        ],
      }],
    }),
    defineField({
        name: 'ctaSection',
        title: '"Ready to Explore" CTA Section',
        description: 'The call-to-action banner above the footer.',
        type: 'object',
        group: 'pageContent',
        fields: [
            { name: 'headline', title: 'Headline', type: 'string', description: 'e.g., Ready to Explore Colombo?' },
            { name: 'subheadline', title: 'Sub-headline', type: 'text' },
        ]
    }),

    // --- TOP ATTRACTIONS TAB ---
    defineField({
      name: 'topAttractions',
      title: 'Top Attractions',
      type: 'array',
      group: 'attractions',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Attraction Name', type: 'string' },
          { name: 'image', title: 'Image', type: 'image' },
          { name: 'description', title: 'Description', type: 'text' },
        ],
      }],
    }),

    // --- PRACTICAL INFO TAB ---
    defineField({
      name: 'bestTimeToVisit',
      title: 'Best Time to Visit',
      type: 'array', of: [{ type: 'block' }],
      group: 'practical',
    }),
    defineField({
      name: 'gettingAround',
      title: 'Getting Around',
      type: 'array', of: [{ type: 'block' }],
      group: 'practical',
    }),
    defineField({
      name: 'localTips',
      title: 'Local Tips',
      type: 'array', of: [{ type: 'block' }],
      group: 'practical',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
