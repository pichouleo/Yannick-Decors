'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

const categories = ['Tous', 'Intérieur', 'Extérieur', 'Enduits', 'Revêtements'] as const
type Cat = typeof categories[number]

const realisations = [
  { src: '/images/gallery/interieur-salon.svg',    alt: 'Peinture intérieure salon — finition velours blanc cassé, Évreux',            label: 'Salon — Évreux',               cat: 'Intérieur'   },
  { src: '/images/gallery/interieur-chambre.svg',  alt: 'Peinture chambre vert sauge — finition mate, Le Neubourg',                    label: 'Chambre — Le Neubourg',        cat: 'Intérieur'   },
  { src: '/images/gallery/facade-colombages.svg',  alt: 'Ravalement façade colombages normands — Bernay',                              label: 'Façade colombages — Bernay',   cat: 'Extérieur'   },
  { src: '/images/gallery/volets-boiseries.svg',   alt: 'Peinture volets terracotta et boiseries — Conches-en-Ouche',                  label: 'Volets — Conches-en-Ouche',    cat: 'Extérieur'   },
  { src: '/images/gallery/enduit-lissage.svg',     alt: 'Enduit de lissage mur abîmé — préparation avant peinture, Brionne',          label: 'Enduit lissage — Brionne',     cat: 'Enduits'     },
  { src: '/images/gallery/papier-peint.svg',        alt: 'Pose papier peint panoramique — Louviers',                                   label: 'Papier peint — Louviers',      cat: 'Revêtements' },
  { src: '/images/gallery/interieur-salon.svg',    alt: 'Peinture cuisine semi-brillante — Pont-Audemer',                              label: 'Cuisine — Pont-Audemer',       cat: 'Intérieur'   },
  { src: '/images/gallery/enduit-lissage.svg',     alt: 'Enduit plafond salle de bain — finition lisse, Bourg-Achard',                 label: 'Plafond SdB — Bourg-Achard',  cat: 'Enduits'     },
  { src: '/images/gallery/volets-boiseries.svg',   alt: 'Parquet stratifié pose dans salon — Elbeuf',                                 label: 'Parquet — Elbeuf',             cat: 'Revêtements' },
]

export default function RealisationsPage() {
  const [activeCat, setActiveCat] = useState<Cat>('Tous')

  const filtered = activeCat === 'Tous' ? realisations : realisations.filter((r) => r.cat === activeCat)

  return (
    <>
      {/* Header */}
      <section className="bg-slate py-20">
        <div className="container-site">
          <span className="section-tag text-terra/80">Portfolio</span>
          <h1 className="font-title text-cream mb-6" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            Nos réalisations
            <br />
            <span className="text-terra">en Normandie</span>
          </h1>
          <p className="text-cream/60 text-xl max-w-2xl">
            Chaque chantier est unique. Découvrez quelques exemples de travaux réalisés par Yannick Décors en Normandie.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="bg-cream border-b-2 border-border sticky top-[72px] z-30">
        <div className="container-site py-0">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`flex-shrink-0 px-6 py-4 font-body font-semibold text-base transition-colors border-b-4 whitespace-nowrap ${
                  activeCat === cat
                    ? 'border-terra text-terra'
                    : 'border-transparent text-muted hover:text-dark hover:border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="bg-cream py-16">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-border">
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className={`relative aspect-[4/3] overflow-hidden group ${
                  i % 3 < 2 ? 'border-r-0 sm:border-r-2 border-border' : ''
                } border-b-2 border-border last:border-b-0`}
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? '2px solid #D6D4CE' : 'none',
                  borderBottom: i < filtered.length - (filtered.length % 3 || 3) ? '2px solid #D6D4CE' : 'none',
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate/0 group-hover:bg-slate/50 transition-all duration-300" />
                {/* Label */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-dark text-sm font-body font-semibold px-3 py-1">
                    {item.cat}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-cream font-body font-semibold text-base">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted text-lg py-20">Aucune réalisation dans cette catégorie pour le moment.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate py-20 border-t-2 border-white/10">
        <div className="container-site text-center">
          <h2 className="section-h2-light mb-4">Votre projet est le prochain ?</h2>
          <p className="text-cream/60 text-xl max-w-lg mx-auto mb-10">
            Contactez-moi pour un devis gratuit. Je me déplace dans un rayon de 70km autour du Neubourg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-xl px-10" style={{ minHeight: '60px' }}>
              Demander mon devis gratuit
            </Link>
            <a href={PHONE_HREF} className="btn-phone text-xl px-10" style={{ minHeight: '60px' }}>
              <PhoneIcon className="w-6 h-6" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
}
