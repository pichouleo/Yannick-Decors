import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services Peinture Normandie | Yannick Décors',
  description: 'Peinture intérieure, extérieure, ravalement, enduits et revêtements. Artisan peintre dans l\'Eure et Seine-Maritime. Devis gratuit sans engagement.',
  alternates: {
    canonical: 'https://yannickdecors.pro/services',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}