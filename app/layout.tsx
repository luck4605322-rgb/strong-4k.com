import type { Metadata, Viewport } from 'next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const SITE_URL = 'https://strong-4k.com'

// hreflang cluster: one entry per UI language + x-default fallback.
// Each ?lang=xx URL is honored by LanguageProvider (see components/language-provider.tsx),
// so every alternate URL serves real, crawlable translated content.
const LANGUAGE_ALTERNATES: Record<string, string> = {
  'x-default': SITE_URL,
  en: SITE_URL,
  it: `${SITE_URL}/?lang=it`,
  fr: `${SITE_URL}/?lang=fr`,
  de: `${SITE_URL}/?lang=de`,
  es: `${SITE_URL}/?lang=es`,
  pt: `${SITE_URL}/?lang=pt`,
  nl: `${SITE_URL}/?lang=nl`,
  pl: `${SITE_URL}/?lang=pl`,
  ro: `${SITE_URL}/?lang=ro`,
  el: `${SITE_URL}/?lang=el`,
  tr: `${SITE_URL}/?lang=tr`,
  ar: `${SITE_URL}/?lang=ar`,
}

const OG_LOCALES = [
  'it_IT',
  'fr_FR',
  'de_DE',
  'es_ES',
  'pt_PT',
  'nl_NL',
  'pl_PL',
  'ro_RO',
  'el_GR',
  'tr_TR',
  'ar_AR',
]

const OG_TITLE = 'STRONG 8K IPTV Official | Premium IPTV Italia, France, Germany & Worldwide'
const OG_DESCRIPTION =
  'Stream 20,000+ live TV channels in 8K/4K. Premium IPTV for Italy, France, Germany, UK, USA & Spain with zero buffering.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'STRONG 8K IPTV Official | Premium IPTV Italia, France, Germany & Worldwide',
  description:
    'STRONG 8K IPTV - The #1 premium IPTV service. Stream 20,000+ local & international live TV channels including IPTV Italia, France, Germany, UK, USA and Spain in 8K/4K with zero buffering. Serie A, Ligue 1, Bundesliga, Premier League & more.',
  alternates: {
    canonical: SITE_URL,
    languages: LANGUAGE_ALTERNATES,
  },
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
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: 'STRONG 8K IPTV',
    locale: 'en_US',
    alternateLocale: OG_LOCALES,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'STRONG 8K IPTV — Premium 8K/4K IPTV Service with 20,000+ live channels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050814',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Speed up flag icon + hero media delivery on slow mobile networks */}
        <link rel="preconnect" href="https://flagcdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        <link rel="preload" as="video" href="/videos/soccer-hero.mp4" type="video/mp4" />
        <link rel="preload" as="image" href="/images/soccer-hero.png" fetchPriority="high" />
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
