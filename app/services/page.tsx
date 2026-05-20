import type { Metadata } from 'next'
import Link from 'next/link'
import { BrushUnderline } from '@/components/BrushStroke'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services de peinture en Normandie | Yannick Décors',
  description:
    'Peinture intérieure, extérieure, ravalement, enduits et revêtements. Artisan peintre dans l\'Eure et Seine-Maritime. Devis gratuit sans engagement.',
    alternates: {
    canonical: 'https://yannickdecors.pro/services',
  },
}

const services = [
  {
    id: 'interieure',
    num: '01',
    title: 'Peinture intérieure',
    intro:
      "Murs, plafonds, boiseries, escaliers… Je prends en charge l'ensemble de vos travaux de peinture intérieure avec les meilleures finitions professionnelles.",
    points: [
      'Murs, plafonds, boiseries et escaliers',
      'Peintures haut de gamme, finitions soignées',
      'Finitions mates, velours, satinées ou brillantes',
      'Conseils personnalisés sur l\'harmonie des couleurs',
      'Zone d\'intervention : Eure et Seine-Maritime',
    ],
    detail:
      'Chaque chantier débute par une inspection minutieuse des supports. Je prépare soigneusement les surfaces (rebouchage, ponçage, impression) avant toute application. Le résultat final est net, homogène et durable.',
  },
  {
    id: 'exterieure',
    num: '02',
    title: 'Peinture extérieure & ravalement',
    intro:
      'Façades normandes, colombages, volets et ferronneries. Je protège et embellis vos extérieurs avec des produits adaptés au climat normand.',
    points: [
      'Ravalement de façade et peinture extérieure',
      'Lasure sur boiseries et colombages normands',
      'Peinture de volets, portes et ferronneries',
      'Protection contre humidité et intempéries normandes',
    ],
    detail:
      "La Normandie exige des produits spécifiques résistants à l'humidité permanente. J'utilise des peintures microporeuses et des lasures professionnelles qui laissent respirer les matériaux tout en les protégeant durablement.",
  },
  {
    id: 'enduits',
    num: '03',
    title: 'Enduits & préparation des supports',
    intro:
      "Un bon travail de peinture commence par des supports parfaitement préparés. Je réalise tous les travaux d'enduit nécessaires à un résultat impeccable.",
    points: [
      'Enduit de lissage sur murs et plafonds abîmés',
      'Ratissage complet et rebouchage des imperfections',
      'Pose de bandes à joint pour placo',
      'Préparation optimale des supports avant peinture',
    ],
    detail:
      "Les maisons normandes anciennes ont souvent des murs irréguliers. Mon travail d'enduit transforme les surfaces dégradées en bases parfaites pour la peinture. Résultat : un mur lisse, solide et esthétique.",
  },
  {
    id: 'revetements',
    num: '04',
    title: 'Pose de revêtements',
    intro:
      'Du sol au plafond, je pose tous types de revêtements intérieurs. Parquet, papier peint, sol souple… votre intérieur entièrement transformé.',
    points: [
      'Sol souple, PVC, dalles et moquettes',
      'Parquet stratifié et plinthes',
      'Papiers peints panoramiques et toiles de verre',
      'Dépose propre des anciens revêtements',
    ],
    detail:
      'La pose de revêtements est un métier de précision. Je travaille avec soin pour obtenir des raccords parfaits, des joints propres et un résultat esthétique qui durera dans le temps.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate py-20">
        <div className="container-site">
          <span className="section-tag text-terra/80">Prestations</span>
          <h1 className="font-title text-cream mb-6" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            Nos prestations de peinture
            <br />
            <span className="text-terra">en Normandie</span>
          </h1>
          <p className="text-cream/60 text-xl max-w-2xl leading-relaxed">
            Artisan peintre indépendant basé au Neubourg, j'interviens dans l'Eure et la Seine-Maritime
            pour tous vos travaux de peinture intérieure, extérieure, enduits et revêtements.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={i % 2 === 0 ? 'bg-cream py-20 border-t-2 border-border' : 'bg-[#EEECE6] py-20 border-t-2 border-border'}
        >
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Texte */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-title text-terra/25" style={{ fontSize: '64px', lineHeight: '1' }}>{service.num}</span>
                  <h2 className="section-h2 mb-0">{service.title}</h2>
                </div>
                <BrushUnderline className="mt-1 mb-6" />
                <p className="text-muted text-lg leading-relaxed mb-8">{service.intro}</p>
                <p className="text-dark text-base leading-relaxed mb-8 border-l-4 border-terra pl-5 italic">{service.detail}</p>

                <Link href="/contact" className="btn-primary text-lg">
                  Demander un devis pour ce service
                  <ArrowIcon className="w-5 h-5" />
                </Link>
              </div>

              {/* Liste bullet */}
              <div className={`border-2 border-border bg-white p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-title text-2xl text-dark mb-6">Ce que j'inclus</h3>
                <ul className="space-y-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-4 text-base text-dark">
                      <span className="mt-1 flex-shrink-0 w-6 h-6 bg-terra text-white flex items-center justify-center text-xs font-bold" aria-hidden="true">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t-2 border-border">
                  <a href={PHONE_HREF} className="flex items-center gap-3 text-slate hover:text-terra transition-colors font-semibold text-base">
                    <PhoneIcon className="w-5 h-5 text-terra flex-shrink-0" />
                    Appeler pour ce service : {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      {/* Liens internes */}
<section className="bg-cream py-12 border-t-2 border-border">
  <div className="container-site">
    <p className="font-title text-2xl text-dark mb-8 text-center">Découvrez aussi</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Link href="/realisations" className="flex items-center justify-between p-6 border-2 border-border hover:border-terra hover:text-terra transition-colors group">
        <span className="font-body font-semibold text-lg">Nos réalisations</span>
        <ArrowIcon className="w-5 h-5 text-terra" />
      </Link>
      <Link href="/blog" className="flex items-center justify-between p-6 border-2 border-border hover:border-terra hover:text-terra transition-colors group">
        <span className="font-body font-semibold text-lg">Blog & conseils</span>
        <ArrowIcon className="w-5 h-5 text-terra" />
      </Link>
      <Link href="/contact" className="flex items-center justify-between p-6 border-2 border-border hover:border-terra hover:text-terra transition-colors group">
        <span className="font-body font-semibold text-lg">Demander un devis</span>
        <ArrowIcon className="w-5 h-5 text-terra" />
      </Link>
    </div>
  </div>
</section>
      {/* CTA bas de page */}
      <section className="bg-slate py-20 border-t-2 border-white/10">
        <div className="container-site text-center">
          <h2 className="section-h2-light mb-6">Demandez votre devis gratuit</h2>
          <p className="text-cream/60 text-xl max-w-lg mx-auto mb-10">
            Je me déplace pour évaluer votre projet et vous remettre un devis détaillé, sans engagement, sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-xl px-10" style={{ minHeight: '60px' }}>
              Devis gratuit en ligne
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
function ArrowIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
}
