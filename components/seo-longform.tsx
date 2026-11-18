import { seoContent, type SeoLocale } from '@/lib/seo-content'

// Server component: rendered into the static HTML of every locale route so
// crawlers get real long-form, per-language copy (previously the page had
// only client-side swapped UI strings and no indexable body text).
export function SeoLongform({ locale }: { locale: SeoLocale }) {
  const { headline, intro, sections } = seoContent(locale)

  return (
    <section id="guide" className="relative mx-auto max-w-5xl px-4 py-20">
      <article className="prose-invert max-w-none">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-6 text-pretty text-base leading-relaxed text-blue-100/80 sm:text-lg">
          {intro}
        </p>

        <div className="mt-12 grid gap-10">
          {sections.map((section) => (
            <div key={section.h2}>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{section.h2}</h3>
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 text-pretty text-sm leading-relaxed text-blue-100/75 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
