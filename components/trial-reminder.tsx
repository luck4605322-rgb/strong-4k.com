'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, Send, X, Zap } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/site'
import { TELEGRAM_LINK, useLanguage } from '@/components/language-provider'

const SHOWN_KEY = 'strong8k-trial-popup-shown'
const SHOW_AFTER_MS = 10_000

const TRIAL_MESSAGE = encodeURIComponent(
  'Hi STRONG 8K IPTV! I would like a 24h FREE TRIAL. Please activate my test line.',
)

export function TrialReminder() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  // Show once per session after the visitor has stayed 10 seconds
  useEffect(() => {
    let shown = false
    try {
      shown = window.sessionStorage.getItem(SHOWN_KEY) === '1'
    } catch {}
    if (shown) return
    const timer = window.setTimeout(() => {
      setOpen(true)
      try {
        window.sessionStorage.setItem(SHOWN_KEY, '1')
      } catch {}
    }, SHOW_AFTER_MS)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-reminder-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-sm rounded-3xl border border-emerald-400/30 bg-slate-950 p-6 text-center shadow-[0_0_50px_-10px_rgba(52,211,153,0.5)]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-1.5 text-blue-100/60 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-emerald-300">
          <Zap className="h-3.5 w-3.5" aria-hidden="true" />
          {t('trial')}
        </span>

        <h2 id="trial-reminder-title" className="mt-4 text-xl font-bold text-white">
          {t('popupTitle')}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-blue-100/70">{t('popupBody')}</p>

        <div className="mt-5 grid gap-2.5">
          <a
            href={`${WHATSAPP_LINK}?text=${TRIAL_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-emerald-950 transition hover:bg-emerald-400"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t('whatsapp')}
          </a>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-400"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {t('telegram')}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-4 text-xs text-blue-200/50 underline-offset-4 transition hover:text-white hover:underline"
        >
          {t('popupLater')}
        </button>
      </div>
    </div>
  )
}
