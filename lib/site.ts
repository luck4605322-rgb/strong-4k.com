export const WHATSAPP_NUMBER_DISPLAY = '+86 18573887383'
export const WHATSAPP_LINK = 'https://wa.me/8618573887383'

export function whatsappOrderLink(plan?: string) {
  if (!plan) return WHATSAPP_LINK
  const text = encodeURIComponent(
    `Hi STRONG 8K IPTV! I want to order the ${plan} plan. Please share the payment & activation details.`,
  )
  return `${WHATSAPP_LINK}?text=${text}`
}

export const REGIONS = [
  { country: 'it', label: 'Italy' },
  { country: 'fr', label: 'France' },
  { country: 'de', label: 'Germany' },
  { country: 'es', label: 'Spain' },
  { country: 'gb', label: 'UK' },
  { country: 'us', label: 'USA' },
]
