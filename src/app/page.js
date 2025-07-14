import HeroSection from './layouts/HeroSection'

export async function generateMetadata() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/app-config-meta-data`, {
    cache: 'no-store', // Optional: fetch every time
  })
  const json = await res.json()
  const seo = json?.seo ?? {}

  return {
    title: seo.meta_title || 'Default Title',
    description: seo.meta_description || 'Default description',
    keywords: seo.meta_keywords || 'keyword1, keyword2',
    openGraph: {
      title: seo.og_title || 'Default OG Title',
      description: seo.og_description || 'Default OG Description',
      type: seo.og_type || 'website',
      images: [seo.og_image || 'https://example.com/og.jpg'],
      url: seo.og_url || 'https://example.com',
    },
    twitter: {
      card: seo.twitter_card || 'summary_large_image',
      title: seo.twitter_title || 'Default Twitter Title',
      description: seo.twitter_description || 'Default Twitter Description',
      images: [seo.twitter_image || 'https://example.com/twitter.jpg'],
    },
    icons: {
      icon: '/favicon.ico',
    },
  }
}
export default function Home() {
  return (
    <>
      <div className="mx-auto w-full overflow-y-hidden">
        <HeroSection />
      </div>
    </>
  )
}
