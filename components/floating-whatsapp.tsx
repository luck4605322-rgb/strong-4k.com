'use client'

import { MessageCircle, Send } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/site'

const TELEGRAM_LINK = 'https://t.me/IPTVstrong8k_admin'

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-2xl backdrop-blur">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-3 text-sm font-bold text-white transition hover:bg-emerald-400">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on Telegram" className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-3 py-3 text-sm font-bold text-white transition hover:bg-sky-400">
          <Send className="h-5 w-5" aria-hidden="true" />
          <span className="hidden sm:inline">Telegram</span>
        </a>
      </div>
    </div>
  )
}
