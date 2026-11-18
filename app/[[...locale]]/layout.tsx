import type { Metadata, Viewport } from 'next'
import '../globals.css'
import { SEO_LOCALES, SEO_LANG_LABEL, isSeoLocale, pathFor, seoContent } from '@/lib/seo-content'

const SITE_URL = 'https://strong-4k.com'

const OG_LOCALES = ['it_IT','fr_FR','de_DE','es_ES','pt_PT','nl_NL','pl_PL','ro_RO','el_GR','tr_TR','ar_AR']

const EN_TITLE = 'STRONG 8K IPTV Official | Premium IPTV Italia, France, Germany & Worldwide'
const EN_DESCRIPTION =
  'STRONG 8K IPTV - The #1 premium IPTV service. Stream 20,000+ local & international live TV channels including IPTV Italia, France, Germany, UK, USA and Spain in 8K/4K with zero buffering. Serie A, Ligue 1, Bundesliga, Premier League & more.'
const OG_DESCRIPTION =
  'Stream 20,000+ live TV channels in 8K/4K. Premium IPTV for Italy, France, Germany, UK, USA & Spain with zero buffering.'

// Single root layout (optional catch-all) so <html lang> / dir follow the route:
// "/" => en, "/it/" => it ... Static export pre-renders one HTML per param below.
export const dynamicParams = false

export function generateStaticParams() {
  return [
    { locale: [] as string[] },
    ...SEO_LOCALES.filter((l) => l !== 'en').map((l) => ({ locale: [l] as string[] })),
  ]
}

function languageAlternates(): Record<string, string> {
  const alternates: Record<string, string> = { 'x-default': `${SITE_URL}/` }
  for (const locale of SEO_LOCALES) alternates[locale] = `${SITE_URL}${pathFor(locale)}/`
  return alternates
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale?: string[] }>
}): Promise<Metadata> {
  const { locale: segments } = await params
  const raw = segments?.[0]
  const locale = isSeoLocale(raw) ? raw : 'en'
  const canonical = `${SITE_URL}${pathFor(locale)}/`

  const title = locale === 'en' ? EN_TITLE : seoContent(locale).headline
  const description = locale === 'en' ? EN_DESCRIPTION : seoContent(locale).intro

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical, languages: languageAlternates() },
    keywords: [
      'STRONG 8K',
      'STRONG IPTV',
      'IPTV Italia',
      'IPTV France',
      'IPTV Deutschland',
      'IPTV España',
      'Italy IPTV',
      'Germany IPTV',
      'Buy IPTV 8K',
      'IPTV Serie A',
      'Anti-Freeze IPTV',
      'Premium IPTV',
    ],
    generator: 'v0.app',
    openGraph: {
      title,
      description: locale === 'en' ? OG_DESCRIPTION : description,
      type: 'website',
      url: canonical,
      siteName: 'STRONG 8K IPTV',
      locale: locale === 'en' ? 'en_US' : locale,
      alternateLocale: OG_LOCALES,
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
  const raw = segments?.[0]
  const locale = isSeoLocale(raw) ? raw : 'en'
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
