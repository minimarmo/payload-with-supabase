import type { CollectionConfig } from 'payload'

export const Faq: CollectionConfig = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'question_th',
  },
  fields: [
    {
      name: 'question_th',
      type: 'text',
      required: true,
      label: 'Question (TH)',
    },
    {
      name: 'question_en',
      type: 'text',
      required: false,
      label: 'Question (EN)',
    },
    {
      name: 'answer_th',
      type: 'textarea',
      required: true,
      label: 'Answer (TH)',
    },
    {
      name: 'answer_en',
      type: 'textarea',
      required: false,
      label: 'Answer (EN)',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'available',
      options: [
        {
          label: 'Available',
          value: 'available',
        },
        {
          label: 'Disable',
          value: 'disable',
        },
      ],
    },
  ],
}
