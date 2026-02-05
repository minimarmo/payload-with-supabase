import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'cover_image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Cover Image',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'knowledge',
      label: 'Category',
      options: [
        {
          label: 'Knowledge',
          value: 'knowledge',
        },
        {
          label: 'News',
          value: 'news',
        },
      ],
    },
    {
      name: 'orientation',
      type: 'select',
      required: true,
      defaultValue: 'horizontal',
      label: 'Orientation',
      options: [
        {
          label: 'Horizontal',
          value: 'horizontal',
        },
        {
          label: 'Vertical',
          value: 'vertical',
        },
      ],
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
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'array',
      label: 'Content Sections',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Image',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'aspect',
          type: 'text',
          required: false,
          label: 'Aspect',
          admin: {
            description: 'Aspect ratio of the image (e.g., 16/9, 1/1, 4/3)',
          },
        },
        {
          name: 'layout',
          type: 'select',
          required: true,
          label: 'Layout',
          options: [
            {
              label: 'Image Top, Text Bottom',
              value: 'top_bottom',
            },
            {
              label: 'Image Bottom, Text Top',
              value: 'bottom_top',
            },
            {
              label: 'Image Left, Text Right',
              value: 'left_right',
            },
            {
              label: 'Image Right, Text Left',
              value: 'right_left',
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'link_facebook',
          type: 'text',
          required: false,
          label: 'Facebook Link',
        },
        {
          name: 'link_instagram',
          type: 'text',
          required: false,
          label: 'Instagram Link',
        },
        {
          name: 'link_tiktok',
          type: 'text',
          required: false,
          label: 'TikTok Link',
        },
      ],
    },
  ],
}
