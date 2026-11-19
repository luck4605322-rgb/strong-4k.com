'use client'

import { Activity, Check, Crown, Gauge, MonitorPlay, ServerCog, ShieldCheck, Timer, Users, X } from 'lucide-react'
import { painCopy } from '@/lib/pain-points'
import { useLanguage } from '@/components/language-provider'
import { CtaGroup } from '@/components/cta-group'

const RETAIL_ICONS = [ShieldCheck, Gauge, Timer, MonitorPlay]
const RESELLER_ICONS = [Users, ServerCog, Activity]

/**
 * Dual-track pain-point block.
 *
 * SEO intent: this is the section that ranks for the "problem" queries
 * ("IPTV buffering during Serie A", "IPTV reseller panel") instead of the
 * transactional ones. Each card keeps the keyword inside a human-readable
 * benefit sentence — no keyword lists in the DOM.
 */
export function PainPoints() {
  const { language } = useLanguage()
  const copy = painCopy(language)

  return (
    <section id="why" className="relative px-4 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.14),transparent_55%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-200">
            {copy.eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold text-white sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-pretty text-blue-100/70">{copy.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* ---------- Retail track ---------- */}
          <article className="relative overflow-hidden rounded-3xl border border-blue-400/25 bg-gradient-to-b from-blue-500/12 via-card to-card p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-blue-100">
              {copy.retailLabel}
            </span>
            <h3 className="mt-4 text-balance text-2xl font-bold text-white">{copy.retailTitle}</h3>
            <p className="mt-3 text-sm text-pretty text-blue-100/70">{copy.retailSub}</p>

            <ul className="mt-7 space-y-4">
              {copy.retailPoints.map((point, i) => {
                const Icon = RETAIL_ICONS[i] ?? ShieldCheck
                return (
                  <li key={point.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/15 text-blue-300">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-blue-100/70">{point.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8">
              <CtaGroup
                items={[
                  { label: copy.ctaTrial, intent: 'trial', tone: 'primary', icon: 'trial' },
                  { label: copy.ctaOrder, intent: 'order', tone: 'ghost', icon: 'order' },
                ]}
              />
            </div>
          </article>

          {/* ---------- B2B track ---------- */}
          <article className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-gradient-to-b from-amber-400/12 via-card to-card p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-amber-100">
              <Crown className="h-3.5 w-3.5" aria-hidden="true" />
              {copy.resellerLabel}
            </span>
            <h3 className="mt-4 text-balance text-2xl font-bold text-white">{copy.resellerTitle}</h3>
            <p className="mt-3 text-sm text-pretty text-blue-100/70">{copy.resellerSub}</p>

            <ul className="mt-7 space-y-4">
              {copy.resellerPoints.map((point, i) => {
                const Icon = RESELLER_ICONS[i] ?? Crown
                return (
                  <li key={point.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/15 text-amber-300">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-blue-100/70">{point.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8">
              <CtaGroup
                items={[
                  { label: copy.ctaReseller, intent: 'reseller', tone: 'primary', icon: 'reseller' },
                  { label: copy.ctaTrial, intent: 'trial', tone: 'ghost', icon: 'trial' },
                ]}
              />
            </div>
          </article>
        </div>

        {/* ---------- Comparison table ---------- */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-white sm:text-2xl">{copy.compareTitle}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-blue-100/65">{copy.compareSub}</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th scope="col" className="px-4 py-4 font-semibold text-blue-200/70 sm:px-6" />
                  <th scope="col" className="px-4 py-4 font-semibold text-red-300/85 sm:px-6">
                    {copy.compareBadLabel}
                  </th>
                  <th scope="col" className="px-4 py-4 font-semibold text-emerald-300 sm:px-6">
                    {copy.compareGoodLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.rows.map((row) => (
                  <tr key={row.label} className="border-t border-white/5 align-top">
                    <th scope="row" className="px-4 py-4 font-semibold text-white sm:px-6">
                      {row.label}
                    </th>
                    <td className="px-4 py-4 text-blue-100/60 sm:px-6">
                      <span className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" aria-hidden="true" />
                        {row.bad}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-blue-100/85 sm:px-6">
                      <span className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                        {row.good}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
