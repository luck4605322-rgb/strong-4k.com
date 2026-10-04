import { CreditCard, Lock, Zap } from 'lucide-react'

const PAYMENTS = ['Visa', 'MasterCard', 'PayPal', 'USDT Crypto']

const GUARANTEES = [
  { icon: Lock, label: 'SSL 256-Bit Secure Checkout' },
  { icon: Zap, label: 'Instant Automated Delivery' },
  { icon: CreditCard, label: 'All Major Payment Methods' },
]

export function TrustBadges() {
  return (
    <section aria-label="Payment security and guarantees" className="px-4 pb-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8">
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {PAYMENTS.map((p) => (
            <li
              key={p}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold tracking-wide text-white"
            >
              {p}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {GUARANTEES.map(({ icon: Icon, label }) => (
            <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-blue-100/80">
              <Icon className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
