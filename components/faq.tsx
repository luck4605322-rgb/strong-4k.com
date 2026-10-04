'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { RESELLER_I18N, useLanguage } from '@/components/language-provider'

const FAQS = [
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
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const { language } = useLanguage()
  const reseller = RESELLER_I18N[language]
  const faqs = [...FAQS, { q: reseller.faqQ, a: reseller.faqA }]

  return (
    <section id="faq" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-center text-3xl font-bold text-white sm:text-4xl">
          Frequently Asked Questions — STRONG IPTV
        </h2>
        <p className="mt-4 text-center text-blue-100/70">
          Everything you need to know about STRONG 8K IPTV setup, channels and trials.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-card"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white transition hover:text-blue-200"
                  >
                    {item.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-blue-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-blue-100/75">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
