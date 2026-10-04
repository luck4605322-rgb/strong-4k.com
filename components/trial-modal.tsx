'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/site'
import { TELEGRAM_LINK, useLanguage } from '@/components/language-provider'

const DEVICES = ['Smart TV', 'Firestick', 'Android Box', 'iOS / Apple TV', 'MAG', 'PC / VLC']
const COUNTRIES = ['Italy', 'France', 'Germany', 'Spain', 'UK', 'USA']

function buildMessage(device: string, country: string) {
  return `Hi STRONG 8K IPTV! I would like a 24h FREE TRIAL.\nDevice: ${device || 'Not specified'}\nCountry: ${country || 'Not specified'}\nPlease activate my test line.`
}

export function TrialModal({ triggerLabel }: { triggerLabel: string }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [device, setDevice] = useState('')
  const [country, setCountry] = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const message = encodeURIComponent(buildMessage(device, country))
  const whatsappHref = `${WHATSAPP_LINK}?text=${message}`
  const telegramHref = `${TELEGRAM_LINK}?text=${message}`

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-7 py-4 text-base font-extrabold text-emerald-950 shadow-neon-strong transition hover:bg-emerald-400 sm:w-auto"
      >
        {triggerLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="trial-modal-title"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-950 p-7 text-left shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 rounded-full p-1.5 text-blue-100/60 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <h2 id="trial-modal-title" className="text-xl font-bold text-white">
              {t('trial')}
            </h2>
            <p className="mt-2 text-sm text-blue-100/70">
              Select your device and country and we&apos;ll pre-fill your request for instant
              activation.
            </p>

            <fieldset className="mt-6">
              <legend className="text-xs font-semibold uppercase tracking-wide text-blue-200/60">
                Device
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {DEVICES.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDevice(d)}
                    aria-pressed={device === d}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                      device === d
                        ? 'border-emerald-400 bg-emerald-500/20 text-white'
                        : 'border-white/10 bg-white/5 text-blue-100/80 hover:border-blue-400/40'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-5">
              <legend className="text-xs font-semibold uppercase tracking-wide text-blue-200/60">
                Country
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {COUNTRIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCountry(c)}
                    aria-pressed={country === c}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                      country === c
                        ? 'border-emerald-400 bg-emerald-500/20 text-white'
                        : 'border-white/10 bg-white/5 text-blue-100/80 hover:border-blue-400/40'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-7 grid gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-emerald-950 transition hover:bg-emerald-400"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t('whatsapp')}
              </a>
              <a
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-sky-400"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {t('telegram')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
