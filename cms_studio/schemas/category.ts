import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'techs',
      title: 'Techs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tech'}}],
    }),
    defineField({
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
    }),
  ],
})
