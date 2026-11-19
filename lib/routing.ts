import { SEO_LOCALES, isSeoLocale, pathFor, type SeoLocale } from '@/lib/seo-content'
import {
  REGION_SLUGS,
  isRegionSlug,
  regionLanding,
  regionPath,
  type RegionLanding,
  type RegionSlug,
} from '@/lib/region-landings'

export const SITE_URL = 'https://strong-4k.com'

export type Route =
  | { kind: 'home'; locale: SeoLocale; path: string; canonical: string }
  | {
      kind: 'region'
      locale: SeoLocale
      slug: RegionSlug
      landing: RegionLanding
      path: string
      canonical: string
    }

function withTrailingSlash(path: string) {
  return path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`
}

/**
 * Single source of truth for URL -> (locale, page kind) resolution.
 *
 * The site is one optional catch-all (`app/[[...locale]]`), so the country
 * landing pages live at the top level too (`/iptv-italia/`, `/iptv-france/` ...).
 * Keeping the keyword in the path segment is deliberate: "iptv-italia" in the
 * URL is one of the strongest on-page signals for the regional query.
 */
export function resolveRoute(segments?: string[]): Route | null {
  const raw = segments?.[0]

  // "/" -> English home
  if (raw === undefined) {
    const path = '/'
    return { kind: 'home', locale: 'en', path, canonical: `${SITE_URL}${path}` }
  }

  // A second segment is never valid in this architecture.
  if (segments && segments.length > 1) return null

  if (isRegionSlug(raw)) {
    const landing = regionLanding(raw)
    if (!landing) return null
    const path = withTrailingSlash(regionPath(raw))
    return {
      kind: 'region',
      locale: landing.locale,
      slug: raw,
      landing,
      path,
      canonical: `${SITE_URL}${path}`,
    }
  }

  if (isSeoLocale(raw)) {
    const path = withTrailingSlash(pathFor(raw))
    return { kind: 'home', locale: raw, path, canonical: `${SITE_URL}${path}` }
  }

  return null
}

export function routeLocale(segments?: string[]): SeoLocale {
  return resolveRoute(segments)?.locale ?? 'en'
}

/** Params list for `generateStaticParams` (one HTML per locale + per region). */
export function staticRouteParams(): { locale: string[] }[] {
  return [
    { locale: [] as string[] },
    ...SEO_LOCALES.filter((l) => l !== 'en').map((l) => ({ locale: [l] as string[] })),
    ...REGION_SLUGS.map((slug) => ({ locale: [slug] as string[] })),
  ]
}

/**
 * hreflang cluster for the multilingual home pages. English is x-default because
 * it is also served from the root URL with no redirect.
 */
export function homeAlternates(): Record<string, string> {
  const alternates: Record<string, string> = { 'x-default': `${SITE_URL}/`, en: `${SITE_URL}/` }
  for (const locale of SEO_LOCALES) {
    if (locale === 'en') continue
    alternates[locale] = `${SITE_URL}${withTrailingSlash(pathFor(locale))}`
  }
  return alternates
}

/**
 * Country landing pages are single-language, so they only self-reference plus
 * x-default (pointing at the English home). Cross-linking them to the 12-language
 * cluster would tell Google the Italian landing page also exists in Arabic,
 * which is false and collapses the cluster.
 */
export function regionAlternates(locale: SeoLocale, canonical: string): Record<string, string> {
  return { [locale]: canonical, 'x-default': `${SITE_URL}/` }
}
