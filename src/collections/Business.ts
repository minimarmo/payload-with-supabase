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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Slug',
      admin: {
        position: 'sidebar',
        description: 'ใช้สำหรับ URL เช่น my-first-post (ตัวเล็ก, ใช้ - แทนเว้นวรรค)',
      },
      validate: (value: any) => {
        if (!value) return 'Slug is required'
        if (typeof value !== 'string') return 'Invalid slug'

        const v = value.trim()

        // ห้ามมีเว้นวรรค
        if (/\s/.test(v)) return 'Slug must not contain spaces'

        // อนุญาตเฉพาะ a-z 0-9 และ -
        if (!/^[a-z0-9-]+$/.test(v)) return 'Use only lowercase letters, numbers, and hyphens (-)'

        // กันขึ้นต้น/ลงท้ายด้วย -
        if (v.startsWith('-') || v.endsWith('-')) return 'Slug must not start or end with -'

        // กัน -- ติดกัน
        if (v.includes('--')) return 'Slug must not contain consecutive hyphens (--)'

        return true
      },
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
          name: 'long_detail',
          type: 'textarea',
          required: false,
          label: 'Long Detail',
          admin: {
            description: 'รายละเอียดแบบยาว (แสดงในหน้า Project Detail)',
          },
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
