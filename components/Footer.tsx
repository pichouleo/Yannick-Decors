import Link from 'next/link'
import Image from 'next/image'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS, ZONE, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-dk text-cream/80">
      {/* Bande téléphone */}
      <div className="bg-terra py-6 border-b-4 border-terra-dk">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-body font-semibold text-lg text-center sm:text-left">
            Un projet de peinture en Normandie ? Appelez directement.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white text-terra font-body font-bold px-8 hover:bg-cream transition-colors whitespace-nowrap"
            style={{ minHeight: '56px', fontSize: '22px' }}
            aria-label={`Appeler Yannick Décors au ${PHONE_DISPLAY}`}
          >
            <PhoneIcon className="w-6 h-6 flex-shrink-0" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Corps */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Yannick Décors — Accueil">
              <div className="relative h-14 w-44 mb-6">
                <Image
                  src="/logo-yannick-decors.svg"
                  alt="Logo Yannick Décors Artisan Peintre"
                  fill
                  className="object-contain object-left brightness-0 invert opacity-80"
                />
              </div>
            </Link>
            <p className="text-cream/60 text-base leading-relaxed mb-6">
              Artisan peintre indépendant en Normandie. Devis gratuit, interventions sous 48h.
            </p>
            <div className="space-y-2">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-cream hover:text-terra transition-colors font-semibold text-base">
                <PhoneIcon className="w-4 h-4 text-terra flex-shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-cream/60 hover:text-terra transition-colors text-base">
                <EnvelopeIcon className="w-4 h-4 text-terra flex-shrink-0" />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body font-semibold text-cream text-base uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/60 hover:text-terra transition-colors text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body font-semibold text-cream text-base uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3 text-cream/60 text-base">
              {['Peinture intérieure', 'Peinture extérieure', 'Ravalement de façade', 'Enduits & lissage', 'Pose de revêtements'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-terra transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Adresse */}
          <div>
            <h3 className="font-body font-semibold text-cream text-base uppercase tracking-widest mb-6">Localisation</h3>
            <address className="not-italic space-y-3 text-cream/60 text-base">
              <p>{ADDRESS}</p>
              <p>
                <span className="text-cream font-semibold">Zone :</span><br />
                {ZONE}
              </p>
            </address>
            <Link href="/contact" className="btn-terra mt-6 inline-flex items-center gap-2 bg-terra hover:bg-terra-dk text-white font-semibold px-6 transition-colors" style={{ minHeight: '44px', fontSize: '16px' }}>
              Devis gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-sm">
            © {year} Yannick Décors — Artisan Peintre en Normandie. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-cream/40 text-sm">
            <Link href="/contact" className="hover:text-cream transition-colors">Contact</Link>
            <span>Saint Opportune du Bosc, 27110</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}
