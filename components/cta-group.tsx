'use client'

import { MessageCircle, Send, Sparkles, Crown } from 'lucide-react'
import {
  TELEGRAM_HANDLE,
  TELEGRAM_LINK,
  whatsappIntentLink,
  type CtaIntent,
} from '@/lib/site'

export type CtaItem = {
  label: string
  intent: CtaIntent
  /** primary = the single button we want 80 % of the clicks on */
  tone?: 'primary' | 'ghost' | 'amber' | 'sky'
  icon?: 'trial' | 'order' | 'reseller'
}

const TONE_CLASS: Record<NonNullable<CtaItem['tone']>, string> = {
  primary:
    'bg-gradient-to-r from-amber-400 to-orange-500 text-amber-950 shadow-[0_0_24px_-6px_rgba(251,191,36,0.8)] hover:from-amber-300 hover:to-orange-400',
  ghost:
    'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-blue-400/50 hover:bg-white/10',
  amber:
    'border border-amber-400/30 bg-amber-400/10 text-amber-100 hover:border-amber-300/60 hover:bg-amber-400/20',
  sky: 'border border-sky-400/25 bg-sky-400/10 text-sky-100 hover:border-sky-300/50 hover:bg-sky-400/20',
}

function ItemIcon({ icon }: { icon?: CtaItem['icon'] }) {
  if (icon === 'reseller') return <Crown className="h-4 w-4" aria-hidden="true" />
  if (icon === 'order') return <MessageCircle className="h-4 w-4" aria-hidden="true" />
  return <Sparkles className="h-4 w-4" aria-hidden="true" />
}

/**
 * Single conversion component reused at every CTA position (hero, under pricing,
 * under reseller packages, footer). Centralising it guarantees WhatsApp and
 * Telegram are always one click away, and each button carries a pre-filled
 * intent message so the lead arrives already qualified.
 */
export function CtaGroup({
  items,
  showTelegram = true,
  layout = 'stack',
  className = '',
}: {
  items: CtaItem[]
  showTelegram?: boolean
  layout?: 'stack' | 'row'
  className?: string
}) {
  return (
    <div
      className={`${layout === 'row' ? 'flex flex-wrap items-center justify-center gap-3' : 'grid gap-2.5'} ${className}`}
    >
      {items.map((item) => (
        <a
          key={`${item.intent}-${item.label}`}
          href={whatsappIntentLink(item.intent)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold transition ${TONE_CLASS[item.tone ?? 'ghost']}`}
        >
          <ItemIcon icon={item.icon} />
          {item.label}
        </a>
      ))}
      {showTelegram && (
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold transition ${TONE_CLASS.sky}`}
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Telegram
          <span className="text-xs font-normal text-sky-200/70">({TELEGRAM_HANDLE})</span>
        </a>
      )}
    </div>
  )
}
