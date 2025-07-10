import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beaible-consulting.de'
  const lastModified = new Date()

  // Statische Hauptseiten
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Service-Seiten (KI-Beratungsangebote)
  const servicePages = [
    {
      slug: 'ki-first-audit',
      title: 'KI-First-Audit',
      priority: 0.9,
    },
    {
      slug: 'ki-medienkompetenz',
      title: 'KI-Medienkompetenz',
      priority: 0.9,
    },
    {
      slug: 'change-management',
      title: 'Change Management',
      priority: 0.9,
    },
    {
      slug: 'strategieberatung',
      title: 'Strategieberatung',
      priority: 0.9,
    },
    {
      slug: 'ki-first-audit-stufe-1',
      title: 'KI-First-Audit Stufe 1',
      priority: 0.8,
    },
    {
      slug: 'ki-first-audit-stufe-2',
      title: 'KI-First-Audit Stufe 2',
      priority: 0.8,
    },
    {
      slug: 'ki-medienkompetenz-foerdern',
      title: 'KI-Medienkompetenz fördern',
      priority: 0.8,
    },
    {
      slug: 'ki-landarzt-konzept',
      title: 'KI-Landarzt-Konzept',
      priority: 0.8,
    },
  ].map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: service.priority,
  }))

  return [...staticPages, ...servicePages]
}