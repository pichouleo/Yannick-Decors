import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Devis Gratuit | Yannick Décors',
  alternates: { canonical: 'https://yannickdecors.pro/contact' },
}

export default function ContactPage() {
  return <ContactClient />
}