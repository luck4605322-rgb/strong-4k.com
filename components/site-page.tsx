import { Hero } from '@/components/hero'
import { Coverage } from '@/components/coverage'
import { Pricing } from '@/components/pricing'
import { ResellerPricing } from '@/components/reseller-pricing'
import { Features } from '@/components/features'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { TrialReminder } from '@/components/trial-reminder'
import { LanguageProvider } from '@/components/language-provider'
import { SiteHeader } from '@/components/site-header'
import { TrustProof } from '@/components/trust-proof'
import { TrustBadges } from '@/components/trust-badges'
import { SeoLongform } from '@/components/seo-longform'
import { LongTailFaq } from '@/components/longtail-faq'
import { LanguageLinks } from '@/components/language-links'
import { StructuredData } from '@/components/structured-data'
import { PainPoints } from '@/components/pain-points'
import { CtaBand } from '@/components/cta-band'
import { RegionLinks } from '@/components/region-links'
import type { SeoLocale } from '@/lib/seo-content'

// Page order is intentional and conversion-driven:
//   1. Hero            -> promise + 3 CTAs above the fold
//   2. Coverage        -> "is my country/league there?"
//   3. TrustProof      -> social proof before the price
//   4. PainPoints      -> dual-track (retail / B2B) objection handling
//   5. Pricing         -> retail plans + CTA band right underneath
//   6. ResellerPricing -> B2B packages + CTA band right underneath
//   7. RegionLinks     -> crawlable internal links to the country landing pages
//   8. TrustBadges / Features / SeoLongform / FAQ / LongTailFaq / LanguageLinks
//
// NOTE: Product / FAQPage / Organization JSON-LD is rendered here (not in the
// root layout) so each locale route gets its own localized FAQPage markup.
// Do not add a second Product script — duplicate Product markup triggers
// missing-field warnings in Google Rich Results.
export function SitePage({ locale }: { locale: SeoLocale }) {
  return (
    <LanguageProvider initialLanguage={locale}>
      <main id="top" className="relative min-h-screen text-foreground">
        <SiteHeader />
        <Hero />
        <Coverage />
        <TrustProof />
        <PainPoints />
        <Pricing />
        <CtaBand track="retail" id="cta-trial" />
        <ResellerPricing />
        <CtaBand track="b2b" id="cta-reseller" />
        <RegionLinks />
        <TrustBadges />
        <Features />
        <SeoLongform locale={locale} />
        <Faq locale={locale} />
        <LongTailFaq locale={locale} />
        <LanguageLinks locale={locale} />
        <SiteFooter />
        <FloatingWhatsApp />
        <TrialReminder />
      </main>
      <StructuredData locale={locale} />
    </LanguageProvider>
  )
}
