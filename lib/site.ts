export const WHATSAPP_NUMBER_DISPLAY = '+86 18573887383'
export const WHATSAPP_LINK = 'https://wa.me/8618573887383'

export function whatsappOrderLink(plan?: string) {
  if (!plan) return WHATSAPP_LINK
  const text = encodeURIComponent(
    `Hi STRONG 8K IPTV! I want to order the ${plan} plan. Please share the payment & activation details.`,
  )
  return `${WHATSAPP_LINK}?text=${text}`
}

export const TELEGRAM_LINK = 'https://t.me/IPTVstrong8k_admin'
export const TELEGRAM_HANDLE = '@IPTVstrong8k_admin'

export function whatsappCustomLink(message: string) {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`
}

// Pre-filled intents. Each CTA on the page carries its own message so the
// support team can route the lead without asking a single qualifying question,
// which is the difference between a 2 % and a 6 % WhatsApp conversion rate.
export const TRIAL_INTENT = 'trial'
export const ORDER_INTENT = 'order'
export const RESELLER_INTENT = 'reseller'

export type CtaIntent = typeof TRIAL_INTENT | typeof ORDER_INTENT | typeof RESELLER_INTENT

const INTENT_MESSAGES: Record<CtaIntent, string> = {
  trial:
    'Hi STRONG 8K IPTV! I want the 24 hours free trial. My device is: (Firestick / Smart TV / Android Box / iPhone). Please send me the test line.',
  order:
    'Hi STRONG 8K IPTV! I want to buy an IPTV subscription. Please send me the plans, payment methods and activation details.',
  reseller:
    'Hi STRONG 8K IPTV! I want to start an IPTV reseller business. Please send the credit packages (120/240/360), panel pricing and white-label details.',
}

export function whatsappIntentLink(intent: CtaIntent) {
  return whatsappCustomLink(INTENT_MESSAGES[intent])
}

export const REGIONS = [
  { country: 'it', label: 'Italy' },
  { country: 'fr', label: 'France' },
  { country: 'de', label: 'Germany' },
  { country: 'es', label: 'Spain' },
  { country: 'gb', label: 'UK' },
  { country: 'us', label: 'USA' },
]
