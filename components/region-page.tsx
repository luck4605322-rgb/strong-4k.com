import { ArrowRight, Check, ChevronDown, Globe, MessageCircle, Send, ShieldCheck, Zap } from 'lucide-react'
import { CtaGroup } from '@/components/cta-group'
import { LanguageProvider } from '@/components/language-provider'
import { SiteFooter } from '@/components/site-footer'
import { REGION_LANDINGS, REGION_SLUGS, regionPath, type RegionLanding } from '@/lib/region-landings'
import { painCopy } from '@/lib/pain-points'
import { SITE_URL } from '@/lib/routing'
import { TELEGRAM_HANDLE, TELEGRAM_LINK, whatsappIntentLink } from '@/lib/site'

const HOME_LABEL: Record<string, string> = {
  it: 'Home',
  fr: 'Accueil',
  de: 'Startseite',
  es: 'Inicio',
}

/**
 * Country landing page (server component).
 *
 * Every string is rendered on the server so the H1, channel list and FAQ are in
 * the exported HTML — this is the page that has to rank for "IPTV Italia" style
 * queries, so nothing here can depend on client-side hydration.
 */
export function RegionPage({ landing }: { landing: RegionLanding }) {
  const copy = painCopy(landing.locale)
  const canonical = `${SITE_URL}${regionPath(landing.slug)}/`

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `STRONG 8K IPTV — ${landing.primaryKeyword}`,
    description: landing.metaDescription,
    url: canonical,
    image: [`${SITE_URL}/images/og-image.png`],
    sku: `STRONG8K-${landing.slug.toUpperCase()}`,
    brand: { '@type': 'Brand', name: 'STRONG 8K IPTV' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1200',
      reviewCount: '1200',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '6.99',
      highPrice: '32.99',
      offerCount: '3',
      offers: [
        { name: '1 Month', price: '6.99' },
        { name: '6 Months', price: '22.99' },
        { name: '1 Year', price: '32.99' },
      ].map((plan) => ({
        '@type': 'Offer',
        name: `STRONG 8K IPTV — ${landing.primaryKeyword} — ${plan.name}`,
        price: plan.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${canonical}#plans`,
      })),
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: landing.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'STRONG 8K IPTV', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: landing.primaryKeyword, item: canonical },
    ],
  }

  const otherRegions = REGION_SLUGS.filter((slug) => slug !== landing.slug)

  return (
    <LanguageProvider initialLanguage={landing.locale}>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0d0518]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <a href="/" className="inline-flex items-center gap-2.5">
            <img
              src="/images/strong-8k-logo-mark.png"
              alt="STRONG 8K IPTV logo"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="text-base font-extrabold tracking-tight text-white">
              STRONG <span className="text-sky-400">8K</span> IPTV
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/" className="text-sm font-medium text-blue-100/70 transition hover:text-white">
              {HOME_LABEL[landing.locale] ?? 'Home'}
            </a>
            <a
              href={whatsappIntentLink('trial')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2.5 text-sm font-bold text-white transition hover:from-blue-400 hover:to-indigo-400"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative min-h-screen text-foreground">
        {/* ---------------- Hero ---------------- */}
        <section className="relative isolate overflow-hidden px-4 pt-32 pb-20">
          <div className="absolute inset-0 -z-20">
            <img
              src="/images/soccer-hero.png"
              alt={`${landing.primaryKeyword} — ${landing.leagues.slice(0, 3).join(', ')} in 8K/4K`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a0b2e]/90 via-[#2a0f45]/85 to-[#0d0518]/97" />

          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 backdrop-blur">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              {landing.countryName} · Anti-Freeze 10.0 · 99.9% Uptime
            </span>

            <h1 className="mt-6 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              {landing.h1}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-blue-100/80 sm:text-lg">
              {landing.sub}
            </p>

            <div className="mt-8">
              <CtaGroup
                layout="row"
                items={[
                  { label: landing.cta.trial, intent: 'trial', tone: 'primary', icon: 'trial' },
                  { label: landing.cta.order, intent: 'order', tone: 'ghost', icon: 'order' },
                  { label: landing.cta.reseller, intent: 'reseller', tone: 'amber', icon: 'reseller' },
                ]}
              />
            </div>

            <p className="mt-6 text-xs uppercase tracking-widest text-blue-200/50">
              Instant Line Delivery within 5 mins · Support All Devices · 24 Hours Free Trial
            </p>
          </div>
        </section>

        {/* ---------------- Intro + bullets ---------------- */}
        <section className="px-4 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-balance text-2xl font-bold text-white sm:text-3xl">
                {landing.primaryKeyword}: {landing.leagues.slice(0, 3).join(' · ')}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-blue-100/75">{landing.intro}</p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {landing.bullets.map((bullet) => (
                  <li key={bullet.title} className="rounded-2xl border border-white/10 bg-card p-5">
                    <p className="flex items-start gap-2 text-sm font-bold text-white">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      {bullet.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/65">{bullet.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <h2 className="text-sm font-bold uppercase tracking-wide text-blue-200/70">
                  {landing.countryName} channels included
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {landing.channels.map((channel) => (
                    <li key={channel} className="flex items-start gap-2 text-sm text-blue-100/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                      {channel}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <h2 className="text-sm font-bold uppercase tracking-wide text-blue-200/70">
                  Competitions covered
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {landing.leagues.map((league) => (
                    <li
                      key={league}
                      className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100"
                    >
                      {league}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-blue-200/55">
                  All competitions are included in the same subscription — no add-on, no extra cost.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-6">
                <p className="text-sm font-bold text-amber-100">{copy.retailPoints[0].title}</p>
                <p className="mt-2 text-xs leading-relaxed text-amber-100/70">
                  {copy.retailPoints[2].title} — {copy.retailPoints[2].desc}
                </p>
                <a
                  href={whatsappIntentLink('trial')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2.5 text-xs font-bold text-amber-950"
                >
                  {landing.cta.trial}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* ---------------- Plans ---------------- */}
        <section id="plans" className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              {landing.primaryKeyword} pricing
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-blue-100/65">
              One subscription, every country package included. Activation within 5 minutes after
              payment by PayPal, card or crypto.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { name: '1 Month', price: '$6.99', note: 'Full 8K/4K access' },
                { name: '6 Months', price: '$22.99', note: 'Priority anti-freeze servers' },
                { name: '1 Year', price: '$32.99', note: 'Lowest price per month · VIP support' },
              ].map((plan) => (
                <article
                  key={plan.name}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    plan.name === '1 Year'
                      ? 'border-amber-400/60 bg-gradient-to-b from-amber-400/12 to-card'
                      : 'border-white/10 bg-card'
                  }`}
                >
                  <h3 className="text-base font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-3xl font-extrabold text-white">{plan.price}</p>
                  <p className="mt-3 flex-1 text-sm text-blue-100/65">{plan.note}</p>
                  <a
                    href={whatsappIntentLink('order')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
                      plan.name === '1 Year'
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-amber-950'
                        : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {landing.cta.order}
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <CtaGroup
                layout="row"
                items={[
                  { label: landing.cta.trial, intent: 'trial', tone: 'primary', icon: 'trial' },
                  { label: landing.cta.reseller, intent: 'reseller', tone: 'amber', icon: 'reseller' },
                ]}
              />
            </div>
          </div>
        </section>

        {/* ---------------- FAQ (native details = crawlable without JS) ---------------- */}
        <section id="faq" className="px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              {landing.primaryKeyword} — FAQ
            </h2>
            <div className="mt-10 space-y-3">
              {landing.faq.map((item) => (
                <details
                  key={item.q}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-card"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white marker:content-none">
                    {item.q}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-blue-400 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-blue-100/75">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Internal links ---------------- */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-card p-6">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue-200/70">
              <Globe className="h-4 w-4" aria-hidden="true" />
              More countries
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {otherRegions.map((slug) => (
                <li key={slug}>
                  <a
                    href={`${regionPath(slug)}/`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-100/85 transition hover:border-blue-400/40 hover:text-white"
                  >
                    {REGION_LANDINGS[slug].primaryKeyword}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-100/85 transition hover:border-blue-400/40 hover:text-white"
                >
                  STRONG 8K IPTV — all languages
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
            <p className="mt-4 flex items-center gap-2 text-xs text-blue-200/50">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              99.9% uptime · Anti-Freeze 10.0 · Support all devices
            </p>
          </div>
        </section>

        {/* ---------------- Closing CTA ---------------- */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-amber-500/15 p-8 text-center sm:p-12">
            <h2 className="text-balance text-2xl font-bold text-white sm:text-3xl">
              {landing.cta.trial}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100/75">
              Message us on WhatsApp or Telegram ({TELEGRAM_HANDLE}) and receive a full-access test
              line for {landing.countryName} in a few minutes.
            </p>
            <div className="mt-7">
              <CtaGroup
                layout="row"
                items={[
                  { label: landing.cta.order, intent: 'order', tone: 'primary', icon: 'order' },
                  { label: landing.cta.trial, intent: 'trial', tone: 'ghost', icon: 'trial' },
                ]}
              />
            </div>
            <p className="mt-5 text-xs text-blue-200/50">
              Telegram:{' '}
              <a href={TELEGRAM_LINK} className="underline hover:text-blue-200" rel="noopener noreferrer">
                {TELEGRAM_HANDLE}
              </a>{' '}
              · WhatsApp <Send className="inline h-3 w-3" aria-hidden="true" /> +86 18573887383
            </p>
          </div>
        </section>

        <SiteFooter />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
    </LanguageProvider>
  )
}
