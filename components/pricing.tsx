import { Check, Flame, MessageCircle, Send } from 'lucide-react'
import { whatsappOrderLink } from '@/lib/site'

const TELEGRAM_LINK = 'https://t.me/IPTVstrong8k_admin'

const PLANS = [
  {
    name: '1 Month',
    price: '$6.99',
    period: '/month',
    tag: null as string | null,
    features: ['Full 8K/4K Access', 'Anti-Freeze 10.0', 'All Countries Included', '20,000+ Channels'],
    highlight: false,
  },
  {
    name: '6 Months',
    price: '$22.99',
    period: '/6 months',
    tag: 'Popular Choice',
    features: ['Everything in 1 Month', 'Save More vs Monthly', 'Priority Anti-Freeze Servers', 'Full EPG Guide'],
    highlight: false,
  },
  {
    name: '1 Year',
    price: '$32.99',
    period: '/12 months',
    tag: 'MOST POPULAR',
    features: ['Everything included', 'Lowest price per month', 'VIP Support 24/7', 'Free 24h trial on request'],
    highlight: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_55%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
            STRONG 8K IPTV Subscription Plans
          </h2>
          <p className="mt-4 text-pretty text-blue-100/70">
            One subscription, every country, every device. No contracts, activate in minutes via
            WhatsApp.
          </p>
          <p className="mt-3 text-xs font-medium text-blue-200/55">
            All major currencies accepted (€ / £ / $) · Instant Auto-Currency Conversion on Checkout
          </p>
        </div>

        <div className="mt-14 grid items-center gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border transition ${
                plan.highlight
                  ? 'border-2 border-amber-400/70 bg-gradient-to-b from-amber-400/15 via-blue-500/10 to-card p-9 shadow-[0_0_40px_-8px_rgba(251,191,36,0.5)] md:scale-105 md:-translate-y-2'
                  : 'border-white/10 bg-card p-8 hover:border-blue-400/30'
              }`}
            >
              {plan.tag && (
                <span
                  className={`absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-extrabold ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-amber-950 shadow-[0_0_20px_-2px_rgba(251,191,36,0.7)]'
                      : 'border border-blue-400/40 bg-blue-500/15 text-blue-100'
                  }`}
                >
                  {plan.highlight && <Flame className="h-3.5 w-3.5" aria-hidden="true" />}
                  {plan.tag}
                </span>
              )}

              <h3 className={`text-lg font-semibold ${plan.highlight ? 'text-amber-200' : 'text-blue-100'}`}>{plan.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="pb-1 text-sm text-blue-200/60">{plan.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-blue-100/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-2">
                <a
                  href={whatsappOrderLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-amber-950 shadow-[0_0_20px_-4px_rgba(251,191,36,0.7)] hover:from-amber-300 hover:to-orange-400'
                      : 'border border-white/15 bg-white/5 text-white hover:border-blue-400/50 hover:bg-white/10'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Order via WhatsApp
                </a>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-400/25 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/20"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Order via Telegram
                </a>
              </div>
              <ul className="mt-5 space-y-1.5 text-xs text-blue-200/60">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />Instant Line Delivery within 5 mins</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />24/7 VIP Technical Assistance</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
