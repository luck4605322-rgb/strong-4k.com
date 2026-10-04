'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/site'
import { useLanguage, LanguageSelector } from '@/components/language-provider'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/strong-8k-logo-mark.png"
        alt="STRONG 8K IPTV logo"
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]"
      />
      <span className="text-lg font-extrabold leading-none tracking-tight text-white">
        STRONG <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">8K</span>
        <span className="ml-1 align-top text-[0.6rem] font-bold tracking-[0.2em] text-blue-200/70">IPTV</span>
      </span>
    </span>
  )
}

export function SiteHeader() {
  const { t } = useLanguage()
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0d0518]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" aria-label="STRONG 8K IPTV home" className="transition hover:opacity-90">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-blue-100/80 md:flex">
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#reseller" className="transition hover:text-white">Reseller</a>
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2.5 text-sm font-bold text-white shadow-neon transition hover:from-blue-400 hover:to-indigo-400"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t('whatsapp')}</span>
            <span className="sm:hidden">Order</span>
          </a>
        </div>
      </div>
    </header>
  )
}
