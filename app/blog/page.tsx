import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog Peinture Normandie | Yannick Décors',
  description: 'Conseils, tendances et guides pratiques sur la peinture et la décoration en Normandie par votre artisan peintre local.',
  alternates: {
    canonical: 'https://yannickdecors.pro/blog',
  },
}

export default function BlogPage() {
  return <BlogClient />
}