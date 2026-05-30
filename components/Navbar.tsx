'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { PHONE_DISPLAY, PHONE_HREF, NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 72)
  onScroll() // appel immédiat au chargement
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Barre téléphone top — mobile uniquement */}
      <div className="bg-slate text-cream text-sm font-body font-semibold py-2 px-4 text-center md:hidden">
        <a href={PHONE_HREF} className="flex items-center justify-center gap-2 hover:text-terra transition-colors">
          <PhoneIcon className="w-4 h-4" />
          Appelez-nous : {PHONE_DISPLAY}
        </a>
      </div>

      <header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-cream/80 backdrop-blur-xl shadow-[0_2px_0_0_#D6D4CE]'
      : 'bg-cream border-b-2 border-border'
  }`}
>
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px] gap-6">

            {/* Logo */}
            <Link href="/" aria-label="Yannick Décors — Accueil">
              <div className="relative h-20 w-44 flex-shrink-0">
                <Image
                  src="/logo-yannick-decors.png"
                  alt="Logo Yannick Décors — Artisan Peintre en Normandie"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 font-body font-medium text-base transition-colors relative group ${
  active ? 'text-terra' : 'text-dark hover:text-terra'
}`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-terra transition-transform duration-200 origin-left ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Téléphone + CTA desktop */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <a
                href={PHONE_HREF}
                className="hidden xl:flex items-center gap-2 text-dark hover:text-terra transition-colors font-body font-semibold text-base"
                aria-label={`Appeler Yannick au ${PHONE_DISPLAY}`}
              >
                <PhoneIcon className="w-5 h-5 text-terra" />
                {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-primary text-base px-6" style={{ minHeight: '44px' }}>
                Devis gratuit
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-dark hover:text-terra transition-colors border-2 border-transparent hover:border-border"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-cream pt-[120px] flex flex-col overflow-y-auto"
          >
            <nav className="flex-1 px-6">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between py-5 border-b-2 border-border text-2xl font-title transition-colors ${
                      active ? 'text-terra' : 'text-dark hover:text-terra'
                    }`}
                  >
                    {link.label}
                    <svg className="w-5 h-5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                )
              })}
            </nav>

            {/* CTA mobile */}
            <div className="px-6 pb-10 pt-6 space-y-4">
              <a
                href={PHONE_HREF}
                onClick={() => setMenuOpen(false)}
                className="btn-phone w-full justify-center text-xl"
              >
                <PhoneIcon className="w-6 h-6" />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-slate w-full justify-center text-xl"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}
