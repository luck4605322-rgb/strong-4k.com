import { SEO_LANG_LABEL, SEO_LOCALES, isSeoLocale, pathFor, type SeoLocale } from '@/lib/seo-content'

// Crawlable internal links between locale versions. The header switcher is a
// client-side dropdown, so without this block the new locale routes would only
// be discoverable via sitemap.xml.
export function LanguageLinks({ locale }: { locale: SeoLocale }) {
  if (!isSeoLocale(locale)) return null

  return (
    <nav
      aria-label="Language versions"
      className="relative mx-auto max-w-5xl px-4 py-10"
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-200/50">
        Available languages
      </h2>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {SEO_LOCALES.map((code) => {
          const href = `${pathFor(code)}/`
          const active = code === locale
          return (
            <li key={code}>
              <a
                href={href === '/' ? '/' : href}
                hrefLang={code}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'font-semibold text-white underline underline-offset-4'
                    : 'text-blue-100/70 transition hover:text-white'
                }
              >
                {SEO_LANG_LABEL[code]}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
