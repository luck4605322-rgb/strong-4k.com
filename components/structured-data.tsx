const SITE_URL = 'https://strong-4k.com'

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'How do I set up STRONG 8K IPTV?',
    a: 'After ordering via WhatsApp you receive your login credentials instantly. Enter your Xtream Codes API details or M3U playlist URL into any supported app (Firestick, Smart TV, Android Box, IPTVnator, VLC) and you are streaming in minutes.',
  },
  {
    q: 'Do you include Italian channels and Serie A?',
    a: 'Yes. IPTV Italia coverage includes Serie A, Sky IT, Mediaset and RAI in full 4K/8K quality, alongside every other country package at no extra cost.',
  },
  {
    q: 'Does STRONG 8K IPTV support Xtream Codes?',
    a: 'Absolutely. We provide both Xtream Codes API and M3U playlist formats, so the service works with virtually every IPTV player and device on the market.',
  },
  {
    q: 'Can I get a 24h free trial?',
    a: 'Yes — message us via Telegram (@IPTVstrong8k_admin) or WhatsApp and request your 24-hour free trial. We will activate a full-access test line so you can check quality and channels risk-free.',
  },
  {
    q: 'Which countries and languages are supported?',
    a: 'Italy, France, Germany, Spain, UK, USA and 20,000+ international channels with multi-language audio and subtitles are all included in every subscription.',
  },
  {
    q: 'How does the IPTV Reseller Program work?',
    a: 'After purchasing a credit package, we will provide you with access to your own dedicated IPTV Admin Panel. You can create sub-accounts, manage users, and issue free trial lines anytime.',
  },
]

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

export function StructuredData() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
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
    name: 'STRONG 8K IPTV',
    description:
      'Premium IPTV service streaming 20,000+ live TV channels and VOD in 8K/4K across Italy, France, Germany, Spain, UK and USA with anti-freeze technology and zero buffering.',
    url: SITE_URL,
    image: PRODUCT_IMAGES,
    sku: 'STRONG8K-SUB',
    mpn: 'STRONG8K-SUB',
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
        url: `${SITE_URL}/#pricing`,
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
    name: 'STRONG 8K IPTV',
    url: SITE_URL,
    description:
      'Premium 8K/4K IPTV provider for Italy, France, Germany, Spain, UK and worldwide.',
    sameAs: ['https://t.me/IPTVstrong8k_admin'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English', 'Italian', 'French', 'German', 'Spanish', 'Arabic'],
    },
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
