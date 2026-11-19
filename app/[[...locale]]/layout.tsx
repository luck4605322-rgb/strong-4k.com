import type { Metadata, Viewport } from 'next'
import '../globals.css'
import { SEO_LANG_LABEL, seoContent } from '@/lib/seo-content'
import { KEYWORD_MATRIX } from '@/lib/pain-points'
import {
  SITE_URL,
  homeAlternates,
  regionAlternates,
  resolveRoute,
  routeLocale,
  staticRouteParams,
} from '@/lib/routing'

// One HTML per locale + one per country landing page (see lib/routing.ts).
export const dynamicParams = false

export function generateStaticParams() {
  return staticRouteParams()
}

const OG_LOCALE: Record<string, string> = {
  en: 'en_US',
  it: 'it_IT',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
  pt: 'pt_PT',
  nl: 'nl_NL',
  pl: 'pl_PL',
  ro: 'ro_RO',
  el: 'el_GR',
  tr: 'tr_TR',
  ar: 'ar_AR',
}

const OG_ALTERNATES = Object.values(OG_LOCALE).filter((l) => l !== 'en_US')

const EN_TITLE = 'STRONG 8K IPTV | IPTV Italia, France, Deutschland & 24h Free Trial'
const EN_DESCRIPTION =
  'STRONG 8K IPTV — premium 8K/4K IPTV subscription with 20,000+ live channels, Anti-Freeze 10.0, 99.9% uptime and a 24 hours free trial. IPTV Italia (Serie A), France (Ligue 1), Deutschland (Bundesliga) and España (LaLiga) on Firestick, Smart TV and Android Box. IPTV reseller panel and credit packages available.'

const OG_DESCRIPTION =
  'Stream 20,000+ live channels in 8K/4K with Anti-Freeze 10.0. IPTV for Italy, France, Germany, Spain, UK & USA — 24h free trial, instant activation within 5 minutes.'

// Retail + B2B keyword matrix, kept in one array so the metadata never drifts
// from the on-page copy (both read lib/pain-points.ts).
const META_KEYWORDS = [
  ...KEYWORD_MATRIX.brand,
  ...KEYWORD_MATRIX.retail,
  ...KEYWORD_MATRIX.retailIntent,
  ...KEYWORD_MATRIX.b2b,
  ...KEYWORD_MATRIX.b2bIntent,
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale?: string[] }>
}): Promise<Metadata> {
  const { locale: segments } = await params
  const route = resolveRoute(segments)

  // Unknown segment -> 404 page, emits nothing but a noindex shell.
  if (!route) {
    return { metadataBase: new URL(SITE_URL), title: 'Not found', robots: { index: false, follow: false } }
  }

  if (route.kind === 'region') {
    const { landing, canonical, locale } = route
    return {
      metadataBase: new URL(SITE_URL),
      title: landing.metaTitle,
      description: landing.metaDescription,
      keywords: landing.keywords,
      alternates: {
        canonical,
        languages: regionAlternates(locale, canonical),
      },
      openGraph: {
        title: landing.metaTitle,
        description: landing.metaDescription,
        type: 'website',
        url: canonical,
        siteName: 'STRONG 8K IPTV',
        locale: OG_LOCALE[locale] ?? 'en_US',
        alternateLocale: OG_ALTERNATES,
        images: [
          {
            url: '/images/og-image.png',
            width: 1200,
            height: 630,
            type: 'image/png',
            alt: landing.h1,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: landing.metaTitle,
        description: landing.metaDescription,
        images: ['/images/og-image.png'],
      },
      robots: { index: true, follow: true },
    }
  }

  const { locale, canonical } = route
  const title = locale === 'en' ? EN_TITLE : seoContent(locale).headline
  const description = locale === 'en' ? EN_DESCRIPTION : seoContent(locale).intro

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
      languages: homeAlternates(),
    },
    keywords: META_KEYWORDS,
    openGraph: {
      title,
      description: locale === 'en' ? OG_DESCRIPTION : description,
      type: 'website',
      url: canonical,
      siteName: 'STRONG 8K IPTV',
      locale: OG_LOCALE[locale] ?? 'en_US',
      alternateLocale: OG_ALTERNATES,
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: `STRONG 8K IPTV — ${SEO_LANG_LABEL[locale]} premium 8K/4K IPTV`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: locale === 'en' ? OG_DESCRIPTION : description,
      images: ['/images/og-image.png'],
    },
    robots: { index: true, follow: true },
  }
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050814',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale?: string[] }>
}) {
  const { locale: segments } = await params
  const locale = routeLocale(segments)
  const isRtl = locale === 'ar'

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className="dark">
      <head>
        {/* Speed up flag icon + hero media delivery on slow mobile networks */}
        <link rel="preconnect" href="https://flagcdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        <link rel="preload" as="video" href="/videos/soccer-hero.mp4" type="video/mp4" />
        <link rel="preload" as="image" href="/images/soccer-hero.png" fetchPriority="high" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
