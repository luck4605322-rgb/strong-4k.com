import { Globe2 } from 'lucide-react'

const PACKAGES = [
  {
    flag: '🇮🇹',
    title: 'Italy — IPTV Italia',
    channels: ['Serie A', 'Sky IT', 'Mediaset', 'RAI'],
    note: 'Full 4K/8K Italian coverage',
  },
  {
    flag: '🇫🇷',
    title: 'France — IPTV France',
    channels: ['Canal+', 'Ligue 1', 'TNT', 'RMC Sports'],
    note: 'Complete French bouquet',
  },
  {
    flag: '🇩🇪',
    title: 'Germany — IPTV Deutschland',
    channels: ['Bundesliga', 'Sky DE', 'DAZN'],
    note: 'Every Bundesliga matchday',
  },
  {
    flag: '🇬🇧🇺🇸',
    title: 'UK & USA',
    channels: ['Premier League', 'NFL', 'NBA', 'PPV Events'],
    note: 'Live sports & pay-per-view',
  },
]

export function Coverage() {
  return (
    <section id="coverage" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-200">
            <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
            Global Coverage
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold text-white sm:text-4xl">
            Worldwide Channel Coverage — Premium IPTV for Italy, Europe &amp; Americas
          </h2>
          <p className="mt-4 text-pretty text-blue-100/70">
            Region-optimized servers deliver crystal-clear local and international channels for
            every country, all in one subscription.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-neon"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="text-3xl" aria-hidden="true">
                {p.flag}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.channels.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-blue-100/90"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-blue-200/60">{p.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
