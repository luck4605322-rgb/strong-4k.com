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

// NOTE: Product / FAQPage / Organization JSON-LD lives in
// components/structured-data.tsx (rendered in app/layout.tsx <head>).
// Do not re-add an inline Product script here — duplicate Product markup
// causes Google Rich Results to flag missing-field warnings.

export default function Page() {
  return (
    <LanguageProvider>
      <main id="top" className="relative min-h-screen text-foreground">
        <SiteHeader />
      <Hero />
      <Coverage />
      <TrustProof />
      <Pricing />
      <ResellerPricing />
      <TrustBadges />
      <Features />
      <Faq />
      <SiteFooter />
        <FloatingWhatsApp />
        <TrialReminder />
      </main>
    </LanguageProvider>
  )
}
