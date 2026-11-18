import { seoContent, type SeoLocale } from '@/lib/seo-content'

// Server component: long-tail FAQ rendered as static HTML per language and
// mirrored in FAQPage structured data (components/structured-data.tsx).
export function LongTailFaq({ locale }: { locale: SeoLocale }) {
  const { faq } = seoContent(locale)
  if (!faq.length) return null

  return (
    <section id="faq-more" className="relative mx-auto max-w-4xl px-4 pb-20">
      <div className="grid gap-4">
        {faq.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-blue-400/30"
          >
            <summary className="cursor-pointer list-none text-left text-base font-semibold text-white marker:hidden">
              <h3 className="inline text-base font-semibold text-white">{item.q}</h3>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/75">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
