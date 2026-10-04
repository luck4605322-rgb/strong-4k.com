import { ShieldCheck, Activity, ListChecks, Languages, Tv, MonitorSmartphone } from 'lucide-react'

const FEATURES = [
  { icon: ShieldCheck, title: 'Anti-Freeze Server', desc: 'Anti-Freeze 10.0 technology for buffer-free streaming.' },
  { icon: Activity, title: '99.9% Uptime', desc: 'Enterprise-grade servers keep you online 24/7.' },
  { icon: ListChecks, title: 'Full EPG Guide', desc: 'Complete electronic program guide for every channel.' },
  { icon: Languages, title: 'Multi-language', desc: 'Multiple audio tracks & subtitles on demand.' },
]

const DEVICES = [
  { name: 'Amazon Fire TV', icon: '▣' },
  { name: 'Smart TV', icon: '▤' },
  { name: 'Android', icon: '●' },
  { name: 'Apple TV', icon: '' },
  { name: 'MAG', icon: '◆' },
  { name: 'VLC Player', icon: '▶' },
]

export function Features() {
  return (
    <section id="features" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-card p-6 transition hover:border-blue-400/40"
            >
              <div className="inline-flex rounded-xl bg-blue-500/15 p-3 text-blue-300">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-100/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-card p-8 md:p-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="inline-flex items-center gap-2 text-blue-300">
              <MonitorSmartphone className="h-5 w-5" aria-hidden="true" />
              <Tv className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-white">Works on Every Device</h3>
            <p className="max-w-2xl text-sm text-blue-100/70">
              Set up STRONG 8K IPTV on any platform with Xtream Codes API or M3U playlist support.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {DEVICES.map((device) => (
              <li key={device.name} className="flex min-w-32 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-blue-100/90 transition hover:border-blue-400/40 hover:bg-blue-500/10">
                <span className="text-lg text-blue-300" aria-hidden="true">{device.icon}</span>
                {device.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
