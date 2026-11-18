import type { MetadataRoute } from 'next'
import { SEO_LOCALES, pathFor } from '@/lib/seo-content'

const BASE_URL = 'https://strong-4k.com'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // hreflang cluster shared by every entry, so each locale page advertises all
  // of its siblings plus x-default.
  const languages: Record<string, string> = { 'x-default': `${BASE_URL}/` }
  for (const locale of SEO_LOCALES) {
    languages[locale] = `${BASE_URL}${pathFor(locale)}/`
  }

  return SEO_LOCALES.map((locale) => ({
    url: `${BASE_URL}${pathFor(locale)}/`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: locale === 'en' ? 1 : 0.8,
    alternates: { languages },
  }))
}
