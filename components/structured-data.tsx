import { pathFor, type SeoLocale } from '@/lib/seo-content'
import { faqFor } from '@/lib/faq-data'

const SITE_URL = 'https://strong-4k.com'

const PLAN_OFFERS = [
  { name: '1 Month', price: '6.99' },
  { name: '6 Months', price: '22.99' },
  { name: '1 Year', price: '32.99' },
]

const SUPPORTED_COUNTRIES = ['IT', 'FR', 'DE', 'ES', 'GB', 'US']

// Matches the rating shown on the page: "4.9/5 Stars from 1,200+ Happy Customers"
const AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  bestRating: '5',
  worstRating: '1',
  ratingCount: '1200',
  reviewCount: '1200',
}

// At least one review is recommended by Google. The first review mirrors the
// testimonial quote visible on the page.
const REVIEWS = [
  {
    '@type': 'Review',
    name: 'Flawless on match night',
    reviewBody:
      'Worked smoothly during Champions League night! Zero buffering in 4K and every Italian channel I needed was there.',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: { '@type': 'Person', name: 'Marco R.' },
    datePublished: '2026-09-12',
  },
  {
    '@type': 'Review',
    name: 'Instant activation',
    reviewBody:
      'Ordered via WhatsApp and received my login details within minutes. Serie A and Sky IT stream perfectly on my Firestick.',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: { '@type': 'Person', name: 'Giulia B.' },
    datePublished: '2026-08-03',
  },
  {
    '@type': 'Review',
    name: 'Great value IPTV service',
    reviewBody:
      'Huge channel list for France, UK and USA. EPG guide is complete and support replied fast when I had a setup question.',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: { '@type': 'Person', name: 'Thomas L.' },
    datePublished: '2026-07-21',
  },
]

// One year out, kept as a stable date so the price offer stays valid for crawlers.
const PRICE_VALID_UNTIL = '2027-12-31'

// Digital product: no shipping cost, credentials delivered online within minutes.
const SHIPPING_DETAILS = {
  '@type': 'OfferShippingDetails',
  shippingRate: {
    '@type': 'MonetaryAmount',
    value: '0',
    currency: 'USD',
  },
  shippingDestination: {
    '@type': 'DefinedRegion',
    addressCountry: SUPPORTED_COUNTRIES,
  },
  deliveryTime: {
    '@type': 'ShippingDeliveryTime',
    handlingTime: {
      '@type': 'QuantitativeValue',
      minValue: 0,
      maxValue: 1,
      unitCode: 'HUR',
    },
    transitTime: {
      '@type': 'QuantitativeValue',
      minValue: 0,
      maxValue: 0,
      unitCode: 'HUR',
    },
  },
}

// 7-day money-back guarantee, handled remotely via customer support.
const MERCHANT_RETURN_POLICY = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: SUPPORTED_COUNTRIES,
  returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
  merchantReturnDays: 7,
  returnMethod: 'https://schema.org/ReturnByMail',
  returnFees: 'https://schema.org/FreeReturn',
  refundType: 'https://schema.org/FullRefund',
}

const PRODUCT_IMAGES = [`${SITE_URL}/images/strong-8k-logo-mark.png`]

export function StructuredData({ locale = 'en' }: { locale?: SeoLocale }) {
  const canonical = `${SITE_URL}${pathFor(locale)}/`

  // FAQPage must render exactly the questions visible in <Faq /> on this page.
  // Both read lib/faq-data.ts, so a copy edit can never desync the markup.
  const faqItems = faqFor(locale)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'STRONG 8K IPTV — 8K/4K Subscription with Anti-Freeze 10.0',
    description:
      'STRONG 8K IPTV subscription: 20,000+ live channels and 100,000+ VOD in 8K/4K for IPTV Italia (Serie A), IPTV France (Ligue 1), IPTV Deutschland (Bundesliga) and IPTV España (LaLiga), plus UK and USA. Anti-Freeze 10.0 servers, 99.9% uptime, instant line delivery within 5 minutes, support for Firestick, Smart TV, Android Box, iOS and MAG. 24 hours free trial and IPTV reseller panel with credit packages for B2B partners.',
    url: canonical,
    image: PRODUCT_IMAGES,
    sku: 'STRONG8K-SUB',
    mpn: 'STRONG8K-SUB',
    category: 'Internet Protocol Television (IPTV) Subscription',
    keywords:
      'Strong 4K/8K IPTV, IPTV Italia, IPTV France, IPTV Deutschland, IPTV España, Anti-Freeze 10.0 IPTV, 24 Hours Free Trial, Buy IPTV Subscription for Firestick & Smart TV, IPTV Reseller Panel, IPTV Credit Packages',
    audience: [
      { '@type': 'PeopleAudience', audienceType: 'Retail subscribers' },
      { '@type': 'BusinessAudience', audienceType: 'IPTV resellers and reseller panel partners' },
    ],
    brand: {
      '@type': 'Brand',
      name: 'STRONG 8K IPTV',
    },
    aggregateRating: AGGREGATE_RATING,
    review: REVIEWS,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '6.99',
      highPrice: '32.99',
      offerCount: String(PLAN_OFFERS.length),
      offers: PLAN_OFFERS.map((offer) => ({
        '@type': 'Offer',
        name: `STRONG 8K IPTV — ${offer.name}`,
        price: offer.price,
        priceCurrency: 'USD',
        priceValidUntil: PRICE_VALID_UNTIL,
        url: `${canonical}#pricing`,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        shippingDetails: SHIPPING_DETAILS,
        hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
      })),
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'STRONG 8K IPTV',
    alternateName: 'STRONG 4K IPTV',
    url: SITE_URL,
    logo: `${SITE_URL}/images/strong-8k-logo-mark.png`,
    image: `${SITE_URL}/images/og-image.png`,
    description:
      'Premium 8K/4K IPTV provider for Italy, France, Germany, Spain, UK and worldwide — retail subscriptions and IPTV reseller panel with credit packages.',
    sameAs: ['https://t.me/IPTVstrong8k_admin', 'https://wa.me/8618573887383'],
    areaServed: SUPPORTED_COUNTRIES.map((code) => ({ '@type': 'Country', name: code })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+8618573887383',
        url: 'https://wa.me/8618573887383',
        availableLanguage: [
          'English',
          'Italian',
          'French',
          'German',
          'Spanish',
          'Portuguese',
          'Arabic',
          'Turkish',
        ],
        areaServed: 'Worldwide',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}
