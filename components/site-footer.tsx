import { MessageCircle, Send } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/site'
import { LegalModals } from '@/components/legal-modals'

const TELEGRAM_LINK = 'https://t.me/IPTVstrong8k_admin'

const KEYWORDS = [
  'STRONG 8K',
  'IPTV Italia',
  'IPTV France',
  'IPTV Deutschland',
  'IPTV España',
  'Buy IPTV 8K',
  'IPTV Serie A',
  'Anti-Freeze IPTV',
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <img
              src="/images/strong-8k-logo-mark.png"
              alt="STRONG 8K IPTV logo"
              width={56}
              height={56}
              className="h-14 w-14 drop-shadow-[0_0_14px_rgba(96,165,250,0.5)]"
            />
            <span className="mt-3 text-xl font-extrabold tracking-tight text-white">
              STRONG <span className="text-blue-400">8K</span> IPTV
            </span>
            <p className="mt-2 max-w-md text-sm text-blue-100/60">
              Premium 8K/4K IPTV streaming worldwide. 20,000+ live channels, zero buffering,
              instant activation.
            </p>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-neon transition hover:from-blue-400 hover:to-indigo-400"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp & Telegram Support
          </a>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-sky-400/25 bg-sky-400/10 px-6 py-3 text-sm font-bold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/20"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Telegram Support: @IPTVstrong8k_admin
          </a>

          <ul className="flex flex-wrap justify-center gap-2">
            {KEYWORDS.map((k) => (
              <li
                key={k}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/60"
              >
                {k}
              </li>
            ))}
          </ul>

          <LegalModals />

          <p className="text-xs text-blue-200/40">
            © {new Date().getFullYear()} STRONG 8K IPTV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
