'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { POLICY_I18N, useLanguage, type PolicyKey } from '@/components/language-provider'

function PolicyDialog({ policyKey, onClose }: { policyKey: PolicyKey; onClose: () => void }) {
  const { t, language } = useLanguage()
  const policy = POLICY_I18N[language][policyKey]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${policyKey}-policy-title`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-7 text-left shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-1.5 text-blue-100/60 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <h2 id={`${policyKey}-policy-title`} className="pr-8 text-xl font-bold text-white">
          {t(policyKey)}
        </h2>
        <p className="mt-1 text-xs text-blue-200/50">{policy.updated}</p>

        <div className="mt-5 space-y-5">
          {policy.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="text-sm font-semibold text-blue-100">{section.heading}</h3>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-1.5 text-sm leading-relaxed text-blue-100/70">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export function LegalModals() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<PolicyKey | null>(null)

  return (
    <>
      <div className="flex items-center gap-5 text-xs text-blue-200/50">
        <button
          type="button"
          onClick={() => setOpen('privacy')}
          className="underline-offset-4 transition hover:text-white hover:underline"
        >
          {t('privacy')}
        </button>
        <span aria-hidden="true" className="text-white/15">
          ·
        </span>
        <button
          type="button"
          onClick={() => setOpen('refund')}
          className="underline-offset-4 transition hover:text-white hover:underline"
        >
          {t('refund')}
        </button>
      </div>

      {open && <PolicyDialog policyKey={open} onClose={() => setOpen(null)} />}
    </>
  )
}
