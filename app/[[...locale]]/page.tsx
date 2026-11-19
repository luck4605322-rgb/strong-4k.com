import { notFound } from 'next/navigation'
import { SitePage } from '@/components/site-page'
import { RegionPage } from '@/components/region-page'
import { resolveRoute } from '@/lib/routing'

export default async function Page({
  params,
}: {
  params: Promise<{ locale?: string[] }>
}) {
  const { locale: segments } = await params
  const route = resolveRoute(segments)

  // "/" (no segment) is the English home; anything unknown is a 404.
  if (!route) notFound()
  if (route.kind === 'region') return <RegionPage landing={route.landing} />
  return <SitePage locale={route.locale} />
}
