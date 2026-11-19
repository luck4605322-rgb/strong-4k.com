import type { MetadataRoute } from 'next'
import { SEO_LOCALES, pathFor } from '@/lib/seo-content'
import { REGION_LANDINGS, REGION_SLUGS, regionPath } from '@/lib/region-landings'
import { SITE_URL, homeAlternates, regionAlternates } from '@/lib/routing'

export const dynamic = 'force-static'

// Pinned on purpose: `new Date()` rewrites every <lastmod> on each build, and
// Google starts ignoring lastmod entirely when the values are unstable.
// Bump this constant whenever the copy actually changes.
const LAST_MODIFIED = new Date('2026-11-19T00:00:00.000Z')

const HOME_LANGUAGES = homeAlternates()

export default function sitemap(): MetadataRoute.Sitemap {
  // 1) Multilingual home pages — 12 locales, full hreflang cluster on each entry.
  const homePages: MetadataRoute.Sitemap = SEO_LOCALES.map((locale) => ({
    url: `${SITE_URL}${pathFor(locale)}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: locale === 'en' ? 1 : 0.8,
    alternates: { languages: HOME_LANGUAGES },
  }))

  // 2) Country landing pages — one language each, targeting the regional query
  //    ("IPTV Italia", "IPTV France", "IPTV Deutschland", "IPTV España").
  //    They self-reference + x-default instead of joining the 12-language
  //    cluster, otherwise Google would expect Arabic/French versions of a page
  //    that only exists in Italian.
  const regionPages: MetadataRoute.Sitemap = REGION_SLUGS.map((slug) => {
    const url = `${SITE_URL}${regionPath(slug)}/`
    return {
      url,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: { languages: regionAlternates(REGION_LANDINGS[slug].locale, url) },
    }
  })

  return [...homePages, ...regionPages]
}
