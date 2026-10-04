'use client'

import { Check, Crown, MessageCircle, Send } from 'lucide-react'
import { whatsappOrderLink } from '@/lib/site'
import { RESELLER_I18N, TELEGRAM_LINK, useLanguage } from '@/components/language-provider'

const RESELLER_TIERS = [
  { credits: '120 credits', price: '$230', perCredit: '≈ $1.92 / credit', highlight: false },
  { credits: '240 credits', price: '$440', perCredit: '≈ $1.83 / credit', highlight: true },
  { credits: '360 credits', price: '$640', perCredit: '≈ $1.78 / credit', highlight: false },
]

export function ResellerPricing() {
  const { language } = useLanguage()
  const copy = RESELLER_I18N[language]

  return (
    <section id="reseller" className="relative px-4 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(251,191,36,0.1),transparent_55%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-200">
            <Crown className="h-3.5 w-3.5" aria-hidden="true" />
            {copy.badge}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold text-white sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-pretty text-blue-100/70">{copy.subtitle}</p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {RESELLER_TIERS.map((tier) => (
            <article
              key={tier.credits}
              className={`relative flex flex-col rounded-3xl border transition ${
                tier.highlight
                  ? 'border-2 border-amber-400/70 bg-gradient-to-b from-amber-400/15 via-blue-500/10 to-card p-9 shadow-[0_0_40px_-8px_rgba(251,191,36,0.5)] md:scale-105 md:-translate-y-2'
                  : 'border-white/10 bg-card p-8 hover:border-amber-400/30'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-1.5 text-xs font-extrabold text-amber-950 shadow-[0_0_20px_-2px_rgba(251,191,36,0.7)]">
                  <Crown className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.mostPopular}
                </span>
              )}

              <h3 className={`text-lg font-semibold ${tier.highlight ? 'text-amber-200' : 'text-blue-100'}`}>
                {tier.credits}
              </h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                <span className="pb-1 text-xs text-blue-200/60">{tier.perCredit}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {copy.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-blue-100/85">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.highlight ? 'text-amber-400' : 'text-blue-400'}`} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-2">
                <a
                  href={whatsappOrderLink(`Reseller ${tier.credits}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-amber-950 shadow-[0_0_20px_-4px_rgba(251,191,36,0.7)] hover:from-amber-300 hover:to-orange-400'
                      : 'border border-white/15 bg-white/5 text-white hover:border-amber-400/50 hover:bg-white/10'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {copy.order}
                </a>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-400/25 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/20"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {copy.telegram}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-blue-200/60">{copy.note}</p>
      </div>
    </section>
  )
}
