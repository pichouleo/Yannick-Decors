import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Yannick Décors | Artisan Peintre Normandie Le Neubourg',
  description: 'Artisan peintre indépendant basé au Neubourg. Peinture intérieure, extérieure, enduits et revêtements dans un rayon de 70km. Devis gratuit.',
  alternates: {
    canonical: 'https://yannickdecors.pro',
  },
}

export default function HomePage() {
  return <HomeClient />
}