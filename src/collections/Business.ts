import type { CollectionConfig } from 'payload'

export const Business: CollectionConfig = {
  slug: 'business',
  labels: {
    singular: 'Business',
    plural: 'Businesses',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'type',
  },
  fields: [
    {
      name: 'type',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
      label: 'Type',
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        position: 'sidebar',
      },
      required: false,
      label: 'Description',
    },
    {
      name: 'cover_image',
      type: 'upload',
      admin: {
        position: 'sidebar',
      },
      relationTo: 'media',
      required: true,
      label: 'Cover Image',
    },
    {
      name: 'status',
      type: 'select',
      admin: {
        position: 'sidebar',
      },
      required: true,
      defaultValue: 'draft',
      label: 'Status',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
    {
      name: 'projects',
      type: 'array',
      label: 'Projects',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Project Title',
        },
        {
          name: 'short_detail',
          type: 'textarea',
          required: false,
          label: 'Short Detail',
        },
        {
          name: 'bullets',
          type: 'array',
          label: 'Bullets',
          fields: [
            {
              name: 'item',
              type: 'text',
              required: true,
              label: 'Item',
            },
          ],
        },
        {
          name: 'main_image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Main Image',
        },
        {
          name: 'gallery',
          type: 'array',
          label: 'Gallery Images',
          fields: [
            {
              name: 'no',
              type: 'number',
              required: true,
              label: 'No.',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Image',
            },
          ],
        },
      ],
    },
  ],
}
