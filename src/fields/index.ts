import type { Field } from 'payload'

// SEO Fields - Usado en Posts, Pages, etc.
export const seoFields: Field[] = [
  {
    name: 'seo',
    type: 'group',
    label: 'SEO',
    fields: [
      {
        name: 'title',
        type: 'text',
        label: 'Meta Título',
      },
      {
        name: 'description',
        type: 'textarea',
        label: 'Meta Descripción',
      },
      {
        name: 'keywords',
        type: 'text',
        label: 'Palabras clave',
      },
    ],
  },
]

// Status Field - Para publicar/borrador
export const statusField: Field = {
  name: 'status',
  type: 'select',
  options: ['draft', 'published'],
  defaultValue: 'draft',
  label: 'Estado',
}

// Slug Field - URL amigable
export const slugField: Field = {
  name: 'slug',
  type: 'text',
  unique: true,
  index: true,
  label: 'URL Slug',
  admin: {
    placeholder: 'auto-generado-desde-titulo',
  },
}

// Author Field - Referencia a usuarios
export const authorField: Field = {
  name: 'author',
  type: 'relationship',
  relationTo: 'users',
  label: 'Autor',
}

// Featured Image Field
export const featuredImageField: Field = {
  name: 'featuredImage',
  type: 'upload',
  relationTo: 'media',
  label: 'Imagen Destacada',
}

// Timestamps Group
export const timestampFields: Field = {
  name: 'timestamps',
  type: 'group',
  label: 'Fechas',
  fields: [
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Publicado el',
    },
    {
      name: 'updatedAt',
      type: 'date',
      label: 'Actualizado el',
    },
  ],
}

// Re-export content fields
export * from './content'
