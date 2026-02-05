import type { CollectionConfig } from 'payload'

export const BrandLogos: CollectionConfig = {
  slug: 'brand-logos',
  labels: {
    singular: 'Brand Logo',
    plural: 'Brand Logos',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name_en',
  },
  fields: [
    {
      name: 'name_th',
      type: 'text',
      required: true,
      label: 'Name (TH)',
    },
    {
      name: 'name_en',
      type: 'text',
      required: true,
      label: 'Name (EN)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: false,
    },
  ],
}
