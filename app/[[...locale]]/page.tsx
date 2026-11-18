import { notFound } from 'next/navigation'
import { SitePage } from '@/components/site-page'
import { isSeoLocale } from '@/lib/seo-content'

export default async function Page({
  params,
}: {
  params: Promise<{ locale?: string[] }>
}) {
  const { locale: segments } = await params
  const raw = segments?.[0]

  // "/" (no segment) is the English home; anything unknown is a 404.
  if (raw === undefined) return <SitePage locale="en" />
  if (!isSeoLocale(raw)) notFound()
  return <SitePage locale={raw} />
}
