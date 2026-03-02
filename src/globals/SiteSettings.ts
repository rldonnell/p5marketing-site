import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Configuración del Sitio',
  admin: {
    group: 'Configuración',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      label: 'Nombre del Sitio',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      label: 'Descripción del Sitio',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'contactEmail',
      type: 'email',
      label: 'Email de Contacto',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Teléfono',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Enlaces Sociales',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
