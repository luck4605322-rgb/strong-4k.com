'use client'

import { Quote, Star } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function TrustProof() {
  const { t } = useLanguage()
  return (
    <section aria-label="Customer reviews" className="px-4 pb-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-6 py-5 text-center sm:flex-row sm:text-left">
        <div>
          <div className="flex items-center justify-center gap-1 text-amber-300 sm:justify-start" aria-label="4.9 out of 5 stars">
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />)}
            <span className="ml-2 text-sm font-bold text-white">4.9/5</span>
          </div>
          <p className="mt-1 text-sm text-emerald-50/80">{t('trust')}</p>
        </div>
        <div className="flex max-w-sm items-center gap-3 text-sm italic text-white/85">
          <Quote className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
          <span>{t('review')}</span>
        </div>
      </div>
    </section>
  )
}
