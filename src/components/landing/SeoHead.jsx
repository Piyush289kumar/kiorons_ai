'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function SeoHead({ tab = 'Home' }) {
  const [seoConfig, setSeoConfig] = useState({})

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/app-config-meta-data`)
      .then((res) => res.json())
      .then((data) => {
        setSeoConfig(data.seo)
      })
      .catch((err) => console.error('Failed to fetch App Config Meta Data', err))
  }, [])

  return (
    <Head>
      <title>{seoConfig.meta_title || `${tab} | Default Title`}</title>
      <meta name="description" content={seoConfig.meta_description || 'Default meta description'} />
      <meta name="keywords" content={seoConfig.meta_keywords || 'keyword1, keyword2'} />
      <link rel="canonical" href={seoConfig.canonical_url || 'https://example.com'} />

      {/* OG Tags */}
      <meta property="og:title" content={seoConfig.og_title || `${tab} | Default OG Title`} />
      <meta
        property="og:description"
        content={seoConfig.og_description || 'Default OG Description'}
      />
      <meta property="og:type" content={seoConfig.og_type || 'website'} />
      <meta property="og:image" content={seoConfig.og_image || 'https://example.com/og.jpg'} />
      <meta property="og:url" content={seoConfig.og_url || 'https://example.com'} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content={seoConfig.twitter_card || 'summary_large_image'} />
      <meta
        name="twitter:title"
        content={seoConfig.twitter_title || `${tab} | Default Twitter Title`}
      />
      <meta
        name="twitter:description"
        content={seoConfig.twitter_description || 'Default Twitter Description'}
      />
      <meta
        name="twitter:image"
        content={seoConfig.twitter_image || 'https://example.com/twitter.jpg'}
      />

      {/* Favicon */}
      {seoConfig.favicon_icon && (
        <link rel="icon" href={seoConfig.favicon_icon} type="image/x-icon" />
      )}
    </Head>
  )
}
