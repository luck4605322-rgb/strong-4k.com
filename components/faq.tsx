import { ChevronDown } from 'lucide-react'
import { faqFor } from '@/lib/faq-data'
import { whatsappIntentLink } from '@/lib/site'
import type { SeoLocale } from '@/lib/seo-content'

const HEADING: Record<string, { title: string; sub: string; cta: string }> = {
  en: {
    title: 'IPTV FAQ — setup, free trial, anti-freeze & reseller panel',
    sub: 'The 12 questions buyers actually ask before ordering a STRONG 8K IPTV subscription.',
    cta: 'Still have a question? Message us on WhatsApp',
  },
  it: {
    title: 'FAQ IPTV — installazione, prova gratuita, anti-freeze e pannello reseller',
    sub: 'Le 12 domande che i clienti fanno davvero prima di ordinare un abbonamento STRONG 8K IPTV.',
    cta: 'Hai ancora una domanda? Scrivici su WhatsApp',
  },
  fr: {
    title: 'FAQ IPTV — installation, essai gratuit, anti-freeze et panneau revendeur',
    sub: 'Les 12 questions que les clients posent vraiment avant de commander un abonnement STRONG 8K IPTV.',
    cta: 'Une question ? Écrivez-nous sur WhatsApp',
  },
  de: {
    title: 'IPTV FAQ — Einrichtung, kostenloser Test, Anti-Freeze & Reseller-Panel',
    sub: 'Die 12 Fragen, die Käufer wirklich stellen, bevor sie ein STRONG 8K IPTV Abo bestellen.',
    cta: 'Noch eine Frage? Schreiben Sie uns auf WhatsApp',
  },
  es: {
    title: 'FAQ IPTV — instalación, prueba gratis, anti-freeze y panel de revendedor',
    sub: 'Las 12 preguntas que los clientes hacen de verdad antes de comprar una suscripción STRONG 8K IPTV.',
    cta: '¿Aún tienes dudas? Escríbenos por WhatsApp',
  },
}

/**
 * FAQ block — server component on purpose.
 *
 * 1. Rendered with native <details>/<summary>, so every question and answer is in
 *    the server HTML (no hydration needed) and stays crawlable. Open/closed state
 *    is a browser default, which is what Google expects for FAQ rich results.
 * 2. Content comes from lib/faq-data.ts, the same module StructuredData uses, so
 *    the FAQPage JSON-LD can never drift from what the page renders (mismatched
 *    FAQ markup is the #1 cause of rich-result penalties).
 */
export function Faq({ locale }: { locale: SeoLocale }) {
  const faqs = faqFor(locale)
  const copy = HEADING[locale] ?? HEADING.en

  return (
    <section id="faq" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-center text-3xl font-bold text-white sm:text-4xl">
          {copy.title}
        </h2>
        <p className="mt-4 text-center text-blue-100/70">{copy.sub}</p>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-card [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white transition hover:text-blue-200">
                <h3 className="text-base font-semibold">{item.q}</h3>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-blue-400 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-blue-100/75">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappIntentLink('trial')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400/50 hover:bg-white/10"
          >
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
