'use client'

import { ShieldCheck, Timer, Zap } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { painCopy } from '@/lib/pain-points'
import { CtaGroup, type CtaItem } from '@/components/cta-group'

type CtaBandProps = {
  /** Which track the band is closing: retail pricing or B2B packages */
  track: 'retail' | 'b2b'
  id?: string
}

const HEADLINE: Record<CtaBandProps['track'], Record<string, { title: string; sub: string }>> = {
  retail: {
    en: {
      title: 'Not sure yet? Test the server for 24 hours, free.',
      sub: 'Full 8K/4K access, every country package, no card required. Most customers order the 1-year plan right after the trial line.',
    },
    it: {
      title: 'Non sei ancora convinto? Prova il server 24 ore, gratis.',
      sub: 'Accesso completo 8K/4K, tutti i pacchetti paese, nessuna carta richiesta. La maggior parte dei clienti ordina il piano annuale subito dopo la prova.',
    },
    fr: {
      title: 'Pas encore décidé ? Testez le serveur 24 h, gratuitement.',
      sub: 'Accès 8K/4K complet, tous les pays, sans carte bancaire. La plupart des clients prennent l’abonnement annuel juste après l’essai.',
    },
    de: {
      title: 'Noch unsicher? Testen Sie den Server 24 Stunden kostenlos.',
      sub: 'Voller 8K/4K-Zugang, alle Länderpakete, keine Karte nötig. Die meisten Kunden buchen danach direkt das Jahresabo.',
    },
    es: {
      title: '¿Aún no lo tienes claro? Prueba el servidor 24 h gratis.',
      sub: 'Acceso 8K/4K completo, todos los países, sin tarjeta. La mayoría de clientes contrata el plan anual justo después de la prueba.',
    },
  },
  b2b: {
    en: {
      title: 'Launch your IPTV business with 120 credits — panel included.',
      sub: 'White-label admin panel, bulk sub-account creation, lowest cost per line. Pay once, resell at your own margin.',
    },
    it: {
      title: 'Avvia la tua attività IPTV con 120 crediti — pannello incluso.',
      sub: 'Pannello admin white-label, creazione massiva di sub-account, costo per linea più basso. Paghi una volta e rivendi con il tuo margine.',
    },
    fr: {
      title: 'Lancez votre activité IPTV avec 120 crédits — panneau inclus.',
      sub: 'Panneau admin white-label, création groupée de sous-comptes, coût par ligne le plus bas. Vous payez une fois, vous revendez à votre marge.',
    },
    de: {
      title: 'Starten Sie Ihr IPTV-Geschäft mit 120 Guthaben — Panel inklusive.',
      sub: 'White-Label-Admin-Panel, Massenanlage von Sub-Accounts, niedrigste Kosten pro Linie. Einmal zahlen, mit eigener Marge weiterverkaufen.',
    },
    es: {
      title: 'Lanza tu negocio IPTV con 120 créditos — panel incluido.',
      sub: 'Panel admin white-label, creación masiva de subcuentas, coste por línea más bajo. Pagas una vez y revendes con tu margen.',
    },
  },
}

export function CtaBand({ track, id }: CtaBandProps) {
  const { language } = useLanguage()
  const copy = painCopy(language)
  const headline = HEADLINE[track][language] ?? HEADLINE[track].en

  const items: CtaItem[] =
    track === 'retail'
      ? [
          { label: copy.ctaTrial, intent: 'trial', tone: 'primary', icon: 'trial' },
          { label: copy.ctaOrder, intent: 'order', tone: 'ghost', icon: 'order' },
          { label: copy.ctaReseller, intent: 'reseller', tone: 'amber', icon: 'reseller' },
        ]
      : [
          { label: copy.ctaReseller, intent: 'reseller', tone: 'primary', icon: 'reseller' },
          { label: copy.ctaOrder, intent: 'order', tone: 'ghost', icon: 'order' },
        ]

  return (
    <section id={id} className="relative px-4 pb-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-amber-500/15 p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-balance text-2xl font-bold text-white sm:text-3xl">{headline.title}</h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-blue-100/75">{headline.sub}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-blue-200/70">
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                99.9% Uptime
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
                Anti-Freeze 10.0
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Timer className="h-3.5 w-3.5 text-sky-300" aria-hidden="true" />
                Instant Line Delivery within 5 mins
              </li>
            </ul>
          </div>
          <div>
            <CtaGroup items={items} />
          </div>
        </div>
      </div>
    </section>
  )
}
