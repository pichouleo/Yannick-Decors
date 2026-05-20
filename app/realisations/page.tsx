import type { Metadata } from 'next'
import RealisationsClient from './RealisationsClient'

export const metadata: Metadata = {
  title: 'Réalisations | Yannick Décors',
  alternates: { canonical: 'https://yannickdecors.pro/realisations' },
}

export default function RealisationsPage() {
  return <RealisationsClient />
}