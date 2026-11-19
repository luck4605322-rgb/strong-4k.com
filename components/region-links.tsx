'use client'

import { ArrowRight, Globe } from 'lucide-react'
import { REGION_LANDINGS, REGION_SLUGS, regionPath } from '@/lib/region-landings'
import { useLanguage } from '@/components/language-provider'

const LABEL: Record<string, { title: string; desc: string }> = {
  'iptv-italia': {
    title: 'IPTV Italia',
    desc: 'Serie A, Sky IT, DAZN, RAI e Mediaset in 8K/4K — prova gratuita 24 ore.',
  },
  'iptv-france': {
    title: 'IPTV France',
    desc: 'Ligue 1, Champions League, Canal+ et beIN Sports en 8K/4K — essai gratuit 24 h.',
  },
  'iptv-deutschland': {
    title: 'IPTV Deutschland',
    desc: 'Bundesliga, DFB-Pokal, Sky DE und DAZN in 8K/4K — 24 Stunden kostenlos testen.',
  },
  'iptv-espana': {
    title: 'IPTV España',
    desc: 'LaLiga, Copa del Rey, Movistar+ y DAZN en 8K/4K — prueba gratis de 24 h.',
  },
}

/**
 * Crawlable internal links to the country landing pages.
 *
 * These are real <a href> anchors (not JS handlers) because Google needs a static
 * path to discover /iptv-italia/ etc. The anchor text is exactly the regional
 * query we want each landing page to rank for.
 */
export function RegionLinks() {
  const { language } = useLanguage()
  const isEnglish = language === 'en'

  return (
    <section id="regions" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-200">
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            Local coverage
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold text-white sm:text-4xl">
            {isEnglish
              ? 'Dedicated IPTV pages for Italy, France, Germany & Spain'
              : 'Dedicated IPTV pages for Italy, France, Germany & Spain'}
          </h2>
          <p className="mt-4 text-pretty text-blue-100/70">
            Local servers, local channels, local commentary. Pick your country to see the channel
            list, league coverage and pricing.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REGION_SLUGS.map((slug) => {
            const landing = REGION_LANDINGS[slug]
            const label = LABEL[slug]
            return (
              <li key={slug}>
                <a
                  href={`${regionPath(slug)}/`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card p-6 transition hover:border-blue-400/40 hover:bg-blue-500/5"
                >
                  <div>
                    <p className="text-base font-bold text-white">{label.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/65">{label.desc}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 transition group-hover:text-blue-200">
                    {landing.primaryKeyword}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
