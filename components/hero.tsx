'use client'

import { MessageCircle, Send, Zap } from 'lucide-react'
import { REGIONS, WHATSAPP_LINK } from '@/lib/site'
import { Flag, TELEGRAM_HANDLE, TELEGRAM_LINK, useLanguage } from '@/components/language-provider'
import { TrialModal } from '@/components/trial-modal'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 text-center">
      {/* Dynamic soccer match video background */}
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/soccer-hero.png"
          aria-hidden="true"
        >
          <source src="/videos/soccer-hero.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dark purple gradient overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a0b2e]/85 via-[#2a0f45]/80 to-[#0d0518]/95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(147,51,234,0.35),transparent_60%)]" />

      <div className="mx-auto max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 backdrop-blur">
          <Zap className="h-3.5 w-3.5" aria-hidden="true" />
          {t('heroBadge')}
        </span>

        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white text-neon-glow sm:text-5xl md:text-6xl">
          {t('heroTitle')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-blue-100/80 sm:text-lg">
          {t('heroSubtitle')}
        </p>

        {/* Region badges */}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {REGIONS.map((r) => (
            <li
              key={r.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/90 backdrop-blur transition hover:border-blue-400/40 hover:bg-blue-500/10"
            >
              <Flag country={r.country} label={r.label} />
              {r.label}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-4 text-base font-bold text-white shadow-neon transition hover:from-blue-400 hover:to-indigo-400 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {t('whatsapp')}
          </a>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-blue-400/50 hover:bg-white/10 sm:w-auto"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            {t('telegram')} <span className="hidden text-xs text-blue-200/70 sm:inline">({TELEGRAM_HANDLE})</span>
          </a>
          <TrialModal triggerLabel={t('trial')} />
        </div>

        <p className="mt-6 text-xs uppercase tracking-widest text-blue-200/50">
          Anti-Freeze 10.0 · 99.9% Uptime · Instant Activation
        </p>
      </div>
    </section>
  )
}
