import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { JSON_LD_BASE } from '@/lib/constants'
import PageTransition from '@/components/PageTransition'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yannickdecors.netlify.app'),
  title: {
    default: 'Yannick Décors | Artisan Peintre Normandie',
    template: '%s | Yannick Décors',
  },
  description: 'Artisan peintre indépendant basé au Neubourg. Peinture intérieure, extérieure, enduits et revêtements dans un rayon de 70km. Devis gratuit.',
  keywords: [
    'artisan peintre Normandie',
    'peintre Eure',
    'peintre Seine-Maritime',
    'ravalement façade Normandie',
    'enduit peinture Le Neubourg',
    'peintre Saint Opportune du Bosc',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Yannick Décors',
    images: [{ 
      url: '/og-image.png', 
      width: 1200, 
      height: 630,
      alt: 'Yannick Décors — Artisan Peintre en Normandie'
    }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/yannick-decors-favicon.png',
    apple: '/yannick-decors-favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Stack+Sans+Text:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_BASE) }}
        />
      </head>
      import PageTransition from '@/components/PageTransition'

<body className="font-body bg-cream text-dark antialiased">
  <Navbar />
  <main>
    <PageTransition>
      {children}
    </PageTransition>
  </main>
  <Footer />
</body>
    </html>
  )
}