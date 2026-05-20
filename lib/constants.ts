export const PHONE_DISPLAY = '06 22 74 07 67'
export const PHONE_HREF    = 'tel:+33622740767'
export const EMAIL         = 'yannick.pichou@sfr.fr'
export const ADDRESS       = 'Saint Opportune du Bosc, Normandie'
export const ZONE          = 'Rayon 70 km autour du Neubourg — Eure & Seine-Maritime'

export const NAV_LINKS = [
  { href: '/',             label: 'Accueil'       },
  { href: '/services',     label: 'Services'      },
  { href: '/realisations', label: 'Réalisations'  },
  { href: '/blog',         label: 'Blog'          },
  { href: '/contact',      label: 'Contact'       },
]

export const JSON_LD_BASE = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://yannick-decors.fr',
  name: 'Yannick Décors',
  description: 'Artisan peintre indépendant en Normandie — Peinture intérieure, extérieure, enduits, revêtements.',
  telephone: '+33622740767',
  email: 'yannick.pichou@sfr.fr',
  url: 'https://yannick-decors.fr',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Saint Opportune du Bosc',
    addressLocality: 'Saint Opportune du Bosc',
    addressRegion: 'Normandie',
    postalCode: '27110',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Eure' },
    { '@type': 'AdministrativeArea', name: 'Seine-Maritime' },
  ],
}
