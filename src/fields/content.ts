import type { CollectionSlug, Field } from 'payload'

// Content Fields - Para articles, posts, etc.
export const contentFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
    label: 'Título',
  },
  {
    name: 'content',
    type: 'richText',
    required: true,
    label: 'Contenido',
  },
  {
    name: 'excerpt',
    type: 'textarea',
    label: 'Resumen corto',
  },
]

// Category Field - Para clasificar contenido
export const categoryField = (relationTo: CollectionSlug = 'categories' as CollectionSlug): Field => ({
  name: 'category',
  type: 'relationship',
  relationTo: relationTo,
  label: 'Categoría',
})

// Tags Field - Para etiquetar contenido
export const tagsField: Field = {
  name: 'tags',
  type: 'array',
  label: 'Etiquetas',
  fields: [
    {
      name: 'tag',
      type: 'text',
      required: true,
    },
  ],
}

// CTA (Call to Action) Field
export const ctaField: Field = {
  name: 'cta',
  type: 'group',
  label: 'Llamada a la acción',
  fields: [
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texto del botón',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'URL del botón',
    },
  ],
}

// Rating Field
export const ratingField: Field = {
  name: 'rating',
  type: 'number',
  min: 0,
  max: 5,
  label: 'Calificación (0-5)',
}

// Active/Enabled Field
export const activeField: Field = {
  name: 'active',
  type: 'checkbox',
  defaultValue: true,
  label: 'Activo',
}
