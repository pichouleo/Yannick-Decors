import { MetadataRoute } from 'next'
import { articles } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://yannickdecors.netlify.app'
  const now  = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                   lastModified: now, changeFrequency: 'monthly',  priority: 1    },
    { url: `${base}/services`,     lastModified: now, changeFrequency: 'monthly',  priority: 0.9  },
    { url: `${base}/realisations`, lastModified: now, changeFrequency: 'monthly',  priority: 0.8  },
    { url: `${base}/blog`,         lastModified: now, changeFrequency: 'weekly',   priority: 0.7  },
    { url: `${base}/contact`,      lastModified: now, changeFrequency: 'yearly',   priority: 0.85 },
  ]

  const blogPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url:             `${base}/blog/${a.slug}`,
    lastModified:    now,
    changeFrequency: 'yearly' as const,
    priority:        0.6,
  }))

  return [...staticPages, ...blogPages]
}
