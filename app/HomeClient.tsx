'use client'
import Link from 'next/link'
import Image from 'next/image'
import { BrushDivider, BrushUnderline } from '@/components/BrushStroke'
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <WhyYannick />
      <GalleryPreview />
      <Testimonials />
      <Zone />
      <CTAFinal />
    </>
  )
}

function Hero() {
  return (
    <section className="relative bg-slate overflow-hidden" style={{ paddingTop: '60px', paddingBottom: '0' }} aria-label="Présentation Yannick Décors">
      {/* Photo de fond */}
      <div className="absolute inset-0">
        <Image src="/yannick-decors-hero.png" alt="" fill className="object-cover opacity-40" aria-hidden="true" priority />
        <div className="absolute inset-0 bg-slate/30" />
      </div>
      <div className="container-site relative z-10">
        <div className="grid gap-12 items-end pb-20 pt-8">
          <div>
            <motion.span className="section-tag text-terra/90" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              Artisan peintre indépendant · Normandie
            </motion.span>
            <motion.h1 className="font-title text-cream mb-6" style={{ fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: '1.1' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Votre habitat,<br /><span className="text-terra">peint avec soin.</span>
            </motion.h1>
            <motion.p className="text-cream/70 text-lg leading-relaxed mb-8 max-w-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              Votre habitat peint avec soin par Yannick — artisan peintre indépendant basé à Saint&nbsp;Opportune&nbsp;du&nbsp;Bosc, dans l'Eure et la Seine-Maritime.{' '}
              <strong className="text-cream">Devis gratuit.</strong>
            </motion.p>
            <motion.div className="bg-terra/20 border-l-4 border-terra px-6 py-4 mb-8 max-w-sm" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <p className="text-cream/70 text-sm font-body font-semibold uppercase tracking-wider mb-1">Appelez directement</p>
              <a href={PHONE_HREF} className="font-title text-cream hover:text-terra transition-colors" style={{ fontSize: '36px', lineHeight: '1' }} aria-label={`Appeler Yannick au ${PHONE_DISPLAY}`}>
                {PHONE_DISPLAY}
              </a>
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}>
              <Link href="/contact" className="btn-primary text-lg"><EnvelopeIcon className="w-5 h-5" />Devis gratuit</Link>
              <Link href="/realisations" className="btn-outline border-cream text-cream hover:bg-cream hover:text-slate text-lg">Voir les réalisations</Link>
            </motion.div>
          </div>
        </div>
      </div>
      <BrushDivider color="#F5F4F0" />
    </section>
  )
}

function PaintTextureBg() {
  return (
    <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5F4F0" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative flex items-end justify-center h-full min-h-[400px]">
      <motion.div className="w-full h-full flex items-end justify-center" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <Image src="/yannick-decors-hero.png" alt="" width={600} height={400} className="object-contain opacity-20 w-full h-auto" style={{ transform: 'scale(1.3)', transformOrigin: 'center bottom' }} aria-hidden="true" priority />
      </motion.div>
    </div>
  )
}

function Services() {
  const items = [
    { icon: <HomeIcon className="w-8 h-8" />, title: 'Peinture intérieure', desc: 'Murs, plafonds, boiseries, escaliers. Finitions mates, velours ou satinées.' },
    { icon: <BuildingIcon className="w-8 h-8" />, title: 'Extérieur & ravalement', desc: 'Façades, colombages, volets, portes et ferronneries normandes.' },
    { icon: <SpackleIcon className="w-8 h-8" />, title: 'Enduits & préparation', desc: 'Lissage, ratissage, rebouchage. Support parfait avant peinture.' },
    { icon: <FloorIcon className="w-8 h-8" />, title: 'Pose de revêtements', desc: 'Sols souples, parquet, papiers peints, toiles de verre.' },
  ]
  return (
    <section className="bg-cream py-24" id="services">
      <div className="container-site">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Nos prestations</span>
          <h2 className="section-h2">Ce que je réalise pour vous</h2>
          <BrushUnderline className="mx-auto mt-2 mb-0" />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-border">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href="/services" className={`group flex flex-col gap-5 p-8 h-full hover:bg-slate hover:text-cream transition-colors duration-200 ${i < 3 ? 'border-r-0 lg:border-r-2 border-border' : ''} border-b-2 lg:border-b-0`} style={{ borderRight: i < 3 ? '2px solid #D6D4CE' : 'none', borderBottom: '0' }}>
                <div className="text-terra group-hover:text-terra/80 transition-colors">{item.icon}</div>
                <div>
                  <h3 className="font-title text-2xl mb-2 group-hover:text-cream">{item.title}</h3>
                  <p className="text-muted text-base group-hover:text-cream/70 leading-relaxed">{item.desc}</p>
                </div>
                <span className="mt-auto font-body font-semibold text-terra group-hover:text-terra/80 text-base flex items-center gap-1">
                  En savoir plus
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div className="text-center mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Link href="/services" className="btn-slate text-lg">Voir tous les services</Link>
        </motion.div>
      </div>
    </section>
  )
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 1500
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <p ref={ref} className="font-title text-terra" style={{ fontSize: '56px', lineHeight: '1' }}>
      {count}{suffix}
    </p>
  )
}

function Stats() {
  const stats = [
    { value: 30, suffix: '+', label: "Années d'expérience", sub: 'depuis 1990' },
    { value: 500, suffix: '+', label: 'Chantiers réalisés', sub: 'en Normandie' },
    { value: 70, suffix: 'km', label: "Rayon d'intervention", sub: 'autour du Neubourg' },
    { value: 100, suffix: '%', label: 'Satisfaction client', sub: 'avis vérifiés' },
  ]
  return (
    <section className="bg-slate py-20">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-white/10">
          {stats.map((s, i) => (
            <motion.div key={s.label} className={`px-8 py-10 text-center ${i < 3 ? 'border-r-0 md:border-r-2 border-white/10' : ''} border-b-2 lg:border-b-0 border-white/10 last:border-b-0 last:border-r-0`} style={{ borderRight: i < 3 ? '2px solid rgba(255,255,255,0.1)' : 'none' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <CountUp target={s.value} suffix={s.suffix} />
              <p className="text-cream font-body font-semibold text-lg mt-2">{s.label}</p>
              <p className="text-cream/40 text-sm mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyYannick() {
  const reasons = [
    { num: '01', title: 'Artisan indépendant', desc: "C'est moi qui réalise vos travaux, du début à la fin. Pas de sous-traitance. Vous avez affaire directement à votre peintre — disponible, présent et responsable." },
    { num: '02', title: 'Devis gratuit & transparent', desc: 'Chaque devis est détaillé : fournitures, temps de travail, nombre de couches. Pas de mauvaises surprises. Réponse sous 48h après visite.' },
    { num: '03', title: 'Qualité & garantie', desc: "J'utilise exclusivement des peintures professionnelles haut de gamme. Mon travail est soigné et garanti. Votre satisfaction est ma priorité." },
  ]
  return (
    <section className="bg-cream py-24 relative overflow-hidden">
      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-tag">Pourquoi me choisir ?</span>
            <h2 className="section-h2">L'artisan que vous méritez</h2>
            <BrushUnderline className="mt-2 mb-8" />
            <p className="section-lead mb-10">En Normandie, les artisans sérieux sont rares. Je vous propose un travail consciencieux, des conseils honnêtes et une relation directe sans intermédiaire.</p>
            <a href={PHONE_HREF} className="btn-phone"><PhoneIcon className="w-5 h-5" />{PHONE_DISPLAY}</a>
          </motion.div>
          <div className="space-y-0 border-2 border-border">
            {reasons.map((r, i) => (
              <motion.div key={r.num} className={`flex gap-6 p-8 ${i < reasons.length - 1 ? 'border-b-2 border-border' : ''}`} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <span className="font-title text-terra/30" style={{ fontSize: '48px', lineHeight: '1', flexShrink: 0 }}>{r.num}</span>
                <div>
                  <h3 className="font-title text-2xl text-dark mb-2">{r.title}</h3>
                  <p className="text-muted text-base leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GalleryPreview() {
  const items = [
    { src: '/images/gallery/murs-plafond-escaliers-sainte-opportune.jpeg', alt: 'Peinture murs, plafond et escaliers — Sainte-Opportune-du-Bosc', label: 'Murs, plafond & escaliers — Sainte-Opportune' },
    { src: '/images/gallery/enduit-lasure-colombages-vitot.jpg', alt: 'Enduit et lasure sur colombages normands — Vitot', label: 'Enduit & colombages — Vitot' },
    { src: '/images/gallery/papier-peint-corneville.jpg', alt: 'Pose papier peint et peinture intérieure — Corneville-sur-Risle', label: 'Papier peint — Corneville-sur-Risle' },
  ]
  return (
    <section className="bg-slate py-24">
      <BrushDivider color="#3D4451" flip className="mb-0 -mt-px" />
      <div className="container-site">
        <motion.div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div>
            <span className="section-tag text-terra/80">Réalisations récentes</span>
            <h2 className="section-h2-light">Un aperçu de nos chantiers</h2>
          </div>
          <Link href="/realisations" className="btn-outline border-cream text-cream hover:bg-cream hover:text-slate whitespace-nowrap self-start sm:self-auto">Voir tout</Link>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-0 border-2 border-white/10">
          {items.map((item, i) => (
            <motion.div key={item.src} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href="/realisations" className={`group relative aspect-[4/3] block overflow-hidden ${i < 2 ? 'border-r-2 border-white/10' : ''}`}>
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-slate/0 group-hover:bg-slate/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate to-transparent p-5">
                  <p className="text-cream font-body font-semibold text-base">{item.label}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const temoignages = [
    { text: "Yannick a réalisé la peinture de notre salon et notre chambre. Travail impeccable, ponctuel et très professionnel. Les finitions sont parfaites. Je recommande sans hésiter !", author: 'Marie-Claire D.', lieu: 'Le Neubourg' },
    { text: "Excellent artisan, sérieux et de confiance. Il a rénové l'ensemble de notre façade avec un résultat remarquable. Le devis était clair et respecté. Très satisfait.", author: 'Jean-Pierre L.', lieu: 'Évreux' },
    { text: "Merci à M.Pichou pour ces prestations de haute qualité. Je recommande fortement.", author: 'Hugo Garcia', lieu: 'Avis Google ⭐' },
  ]
  return (
    <section className="bg-cream py-24 border-t-2 border-border">
      <div className="container-site">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Témoignages</span>
          <h2 className="section-h2">Ce que disent nos clients</h2>
          <BrushUnderline className="mx-auto mt-2" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-0 border-2 border-border items-stretch">
          {temoignages.map((t, i) => (
            <motion.div key={t.author} className={`p-10 flex flex-col h-full ${i < temoignages.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2 border-border' : ''}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
              <p className="font-title text-terra/20 leading-none mb-4" style={{ fontSize: '80px', lineHeight: '0.8' }}>"</p>
              <p className="text-dark text-lg leading-relaxed mb-6 -mt-4">{t.text}</p>
              <div className="flex items-center gap-4 pt-4 border-t-2 border-border mt-auto">
                <div className="w-10 h-10 bg-slate/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-title text-slate text-xl">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-dark text-base">{t.author}</p>
                  <p className="text-muted text-sm">{t.lieu}</p>
                </div>
                <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, j) => <StarIcon key={j} className="w-4 h-4 text-terra" />)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Zone() {
  const villes = ['Le Neubourg', 'Évreux', 'Bernay', 'Louviers', 'Pont-Audemer', 'Brionne', 'Conches', 'Elbeuf', 'Rouen', 'Lisieux']
  return (
    <section className="bg-cream py-24 border-t-2 border-border">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-tag">Zone d'intervention</span>
            <h2 className="section-h2">Je me déplace chez vous</h2>
            <BrushUnderline className="mt-2 mb-6" />
            <p className="section-lead mb-6">Basé à <strong className="text-dark">Saint Opportune du Bosc</strong>, j'interviens dans un rayon de{' '}<strong className="text-dark">70 km autour du Neubourg</strong>, principalement dans l'Eure et la Seine-Maritime.</p>
            <div className="flex gap-4 mb-8">
              <span className="bg-slate text-cream font-body font-bold px-5 py-3 text-lg">Eure (27)</span>
              <span className="bg-slate text-cream font-body font-bold px-5 py-3 text-lg">Seine-Maritime (76)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {villes.map((v) => <span key={v} className="border-2 border-border text-dark text-base px-3 py-1.5 font-body">{v}</span>)}
              <span className="border-2 border-terra/40 text-muted text-base px-3 py-1.5 font-body italic">et alentours…</span>
            </div>
          </motion.div>
          <motion.div className="border-2 border-border bg-cream p-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <ZoneMapSvg />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ZoneMapSvg() {
  return (
    <svg viewBox="0 0 400 360" className="w-full max-w-sm mx-auto" role="img" aria-label="Carte zone d'intervention — 70km autour du Neubourg">
      <circle cx="200" cy="180" r="160" fill="#F0EEE8" stroke="#D6D4CE" strokeWidth="1.5"/>
      <circle cx="200" cy="180" r="110" fill="#EBE9E2" stroke="#D6D4CE" strokeWidth="1"/>
      <circle cx="200" cy="180" r="70" fill="#E3E0D8" stroke="#C4956A" strokeWidth="2" strokeDasharray="6 3"/>
      <circle cx="200" cy="180" r="12" fill="#C4956A"/>
      <circle cx="200" cy="180" r="20" fill="none" stroke="#C4956A" strokeWidth="2.5"/>
      {[[260,150],[155,125],[305,215],[145,235],[240,270],[130,175]].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="5" fill="#3D4451"/>)}
      <text x="200" y="214" textAnchor="middle" fontSize="11" fontWeight="700" fill="#C4956A" fontFamily="Georgia,serif">Le Neubourg</text>
      <text x="200" y="48" textAnchor="middle" fontSize="10" fill="#9CA0AB">70 km</text>
      <text x="260" y="148" fontSize="10" fill="#3D4451" fontFamily="sans-serif">Évreux</text>
      <text x="110" y="122" fontSize="10" fill="#3D4451" fontFamily="sans-serif">Bernay</text>
      <text x="308" y="213" fontSize="10" fill="#3D4451" fontFamily="sans-serif">Louviers</text>
      <text x="95" y="233" fontSize="10" fill="#3D4451" fontFamily="sans-serif">Conches</text>
      <rect x="320" y="20" width="64" height="44" fill="#C4956A"/>
      <text x="352" y="43" textAnchor="middle" fontSize="18" fontWeight="700" fill="white" fontFamily="Georgia,serif">70km</text>
    </svg>
  )
}

function CTAFinal() {
  return (
    <motion.section className="bg-slate py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="container-site text-center">
        <span className="section-tag text-terra/80">Devis gratuit</span>
        <h2 className="font-title text-cream mb-6" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>Prêt à démarrer votre projet ?</h2>
        <p className="text-cream/60 text-xl max-w-xl mx-auto mb-10 leading-relaxed">Contactez-moi pour un devis gratuit et sans engagement. Je vous réponds sous 48h.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link href="/contact" className="btn-primary text-xl px-10" style={{ minHeight: '60px' }}><EnvelopeIcon className="w-6 h-6" />Demander mon devis gratuit</Link>
          <a href={PHONE_HREF} className="btn-phone text-xl px-10" style={{ minHeight: '60px' }}><PhoneIcon className="w-6 h-6" />{PHONE_DISPLAY}</a>
        </div>
        <p className="text-cream/40 text-base">{ADDRESS}</p>
      </div>
    </motion.section>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
}
function EnvelopeIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
}
function HomeIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
}
function BuildingIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
}
function SpackleIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
}
function FloorIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
}
function StarIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
}