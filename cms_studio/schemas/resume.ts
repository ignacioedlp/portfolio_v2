import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'surname',
      title: 'Surname',
      type: 'string',
    }),
    defineField({
      name: 'degrees',
      title: 'Degrees',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            {
              name: "site",
              type: "string",
            },
            {
              name: "degree",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "startDate",
              type: "date",
            },
            {
              name: "endDate",
              type: "date",
            }
          ],
        },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'number'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string'
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string'
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string'
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'string'
    }),
    defineField({
      name: "cv_spanish",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "cv_english",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})