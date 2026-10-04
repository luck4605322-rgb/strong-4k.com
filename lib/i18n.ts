export type Locale = 'en' | 'zh' | 'fr' | 'de' | 'es' | 'it'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
}

const translations: Record<Locale, Record<string, string>> = {
  en: {},
  zh: {
    '20,000+ Live Channels · 8K / 4K Ultra HD': '20,000+ 个直播频道 · 8K / 4K 超高清',
    'STRONG 8K IPTV — The #1 Premium IPTV Service in Italy, France & Worldwide': 'STRONG 8K IPTV — 意大利、法国及全球首选高级 IPTV 服务',
    'Stream 20,000+ local & international live TV channels including IPTV Italia, France, Germany, UK, USA, and Spain in 8K/4K quality with zero buffering.': '以 8K/4K 画质畅享 20,000+ 个本地及国际直播频道，覆盖意大利、法国、德国、英国、美国和西班牙，流畅无缓冲。',
    'Chat on WhatsApp': '通过 WhatsApp 咨询',
    'Get 24h Free Trial': '获取 24 小时免费试用',
    'Anti-Freeze 10.0 · 99.9% Uptime · Instant Activation': 'Anti-Freeze 10.0 · 99.9% 在线率 · 即时激活',
    'Global Coverage': '全球覆盖',
    'Worldwide Channel Coverage — Premium IPTV for Italy, Europe & Americas': '全球频道覆盖 — 面向意大利、欧洲及美洲的高级 IPTV',
    'Region-optimized servers deliver crystal-clear local and international channels for every country, all in one subscription.': '区域优化服务器为每个国家提供清晰稳定的本地及国际频道，一个订阅即可畅享。',
    'STRONG 8K IPTV Subscription Plans': 'STRONG 8K IPTV 订阅套餐',
    'One subscription, every country, every device. No contracts, activate in minutes via WhatsApp.': '一个订阅，覆盖所有国家和设备。无需合约，通过 WhatsApp 几分钟即可激活。',
    'Popular Choice': '热门选择',
    'Best Value': '超值之选',
    'Order via WhatsApp': '通过 WhatsApp 订购',
    'Works on Every Device': '支持所有设备',
    'Frequently Asked Questions — STRONG IPTV': '常见问题 — STRONG IPTV',
    'Everything you need to know about STRONG 8K IPTV setup, channels and trials.': '关于 STRONG 8K IPTV 设置、频道和试用，你需要了解的一切。',
    'WhatsApp Support': 'WhatsApp 客服',
    'Premium 8K/4K IPTV streaming worldwide. 20,000+ live channels, zero buffering, instant activation.': '全球高级 8K/4K IPTV 串流。20,000+ 个直播频道，零缓冲，即时激活。',
    'All rights reserved.': '版权所有。',
  },
  fr: {}, de: {}, es: {}, it: {},
}

export function translate(locale: Locale, text: string) {
  return translations[locale][text] || text
}

export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en'
  const language = navigator.language.toLowerCase()
  if (language.startsWith('zh')) return 'zh'
  if (language.startsWith('fr')) return 'fr'
  if (language.startsWith('de')) return 'de'
  if (language.startsWith('es')) return 'es'
  if (language.startsWith('it')) return 'it'
  return 'en'
}

export { translations }

export const supportedLocales = Object.keys(localeNames) as Locale[]

export function translated(locale: Locale, text: string) {
  return translate(locale, text)
}

export const dictionary = translations

export const getLocaleLabel = (locale: Locale) => localeNames[locale]

export const localeStorageKey = 'strong-8k-locale'

export const defaultLocale: Locale = 'en'

export const getTranslation = translate

export const availableLocales = supportedLocales

export const languageNames = localeNames

export const isLocale = (value: string): value is Locale => supportedLocales.includes(value as Locale)

export const localeFromNavigator = detectLocale

export const translateText = translate

export const i18n = { translate, detectLocale }

export const localeOptions = supportedLocales.map((value) => ({ value, label: localeNames[value] }))
