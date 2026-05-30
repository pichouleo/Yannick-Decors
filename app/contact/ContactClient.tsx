'use client'

import { useState } from 'react'
import { BrushUnderline } from '@/components/BrushStroke'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS, ZONE } from '@/lib/constants'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const TRAVAUX = [
  { value: 'interieure', label: 'Peinture intérieure', emoji: '🏠' },
  { value: 'exterieure', label: 'Peinture extérieure', emoji: '🏡' },
  { value: 'enduits', label: 'Enduits & préparation', emoji: '🪣' },
  { value: 'revetements', label: 'Pose de revêtements', emoji: '🪵' },
  { value: 'autre', label: 'Autre projet', emoji: '✏️' },
]

type FormData = {
  travaux: string
  nom: string
  telephone: string
  email: string
  message: string
}

export default function ContactClient() {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
  const [serverMsg, setServerMsg] = useState('')
  const [data, setData] = useState<FormData>({ travaux: '', nom: '', telephone: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [rgpd, setRgpd] = useState(false)

  const next = () => { setError(''); setStep(s => s + 1) }
  const back = () => { setError(''); setStep(s => s - 1) }

  const validate = () => {
    if (step === 0 && !data.travaux) { setError('Choisissez un type de travaux'); return false }
    if (step === 1 && data.nom.length < 2) { setError('Votre nom est requis'); return false }
    if (step === 2 && data.telephone.length < 10) { setError('Numéro de téléphone invalide'); return false }
    if (step === 3 && !/\S+@\S+\.\S+/.test(data.email)) { setError('Email invalide'); return false }
    if (step === 4 && data.message.length < 10) { setError('Décrivez votre projet (10 caractères min.)'); return false }
    return true
  }

  const handleNext = () => { if (validate()) next() }

  const handleSubmit = async () => {
  if (!validate()) return
  if (!rgpd) { setError('Vous devez accepter la politique de confidentialité'); return }
  setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      if (res.ok && json.success) { setStatus('ok'); setServerMsg(json.message) }
      else { setStatus('err'); setServerMsg(json.message || 'Erreur inconnue.') }
    } catch {
      setStatus('err'); setServerMsg(`Erreur réseau. Appelez directement au ${PHONE_DISPLAY}`)
    }
  }

  const steps = [
    /* 0 — Type de travaux */
    <div key="travaux" className="space-y-4">
      <p className="font-title text-2xl text-dark mb-6">Quel type de travaux souhaitez-vous ?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {TRAVAUX.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => { setData(d => ({ ...d, travaux: t.value })); setError('') }}
            className={`flex items-center gap-4 p-5 border-2 text-left transition-all duration-200 ${
              data.travaux === t.value
                ? 'border-terra bg-terra/10 text-dark'
                : 'border-border hover:border-terra/50 text-dark'
            }`}
          >
            <span className="text-2xl">{t.emoji}</span>
            <span className="font-body font-semibold text-lg">{t.label}</span>
          </button>
        ))}
      </div>
    </div>,

    /* 1 — Nom */
    <div key="nom" className="space-y-4">
      <p className="font-title text-2xl text-dark mb-6">Quel est votre nom ?</p>
      <input
        type="text"
        autoComplete="name"
        placeholder="Jean Dupont"
        value={data.nom}
        onChange={e => setData(d => ({ ...d, nom: e.target.value }))}
        onKeyDown={e => e.key === 'Enter' && handleNext()}
        className="field w-full text-xl"
        style={{ minHeight: '60px' }}
        autoFocus
      />
    </div>,

    /* 2 — Téléphone */
    <div key="telephone" className="space-y-4">
      <p className="font-title text-2xl text-dark mb-6">Votre numéro de téléphone ?</p>
      <input
        type="tel"
        autoComplete="tel"
        placeholder="06 12 34 56 78"
        value={data.telephone}
        onChange={e => setData(d => ({ ...d, telephone: e.target.value }))}
        onKeyDown={e => e.key === 'Enter' && handleNext()}
        className="field w-full text-xl"
        style={{ minHeight: '60px' }}
        autoFocus
      />
    </div>,

    /* 3 — Email */
    <div key="email" className="space-y-4">
      <p className="font-title text-2xl text-dark mb-6">Votre adresse email ?</p>
      <input
        type="email"
        autoComplete="email"
        placeholder="jean.dupont@email.fr"
        value={data.email}
        onChange={e => setData(d => ({ ...d, email: e.target.value }))}
        onKeyDown={e => e.key === 'Enter' && handleNext()}
        className="field w-full text-xl"
        style={{ minHeight: '60px' }}
        autoFocus
      />
    </div>,

    /* 4 — Message */
<div key="message" className="space-y-4">
  <p className="font-title text-2xl text-dark mb-6">Décrivez votre projet</p>
  <textarea
    rows={5}
    placeholder="Surface approximative, état actuel, délai souhaité, commune…"
    value={data.message}
    onChange={e => setData(d => ({ ...d, message: e.target.value }))}
    className="field w-full text-lg resize-none"
    autoFocus
  />
  <div className="flex items-start gap-3 mt-4">
    <input
      type="checkbox"
      id="rgpd"
      checked={rgpd}
      onChange={e => setRgpd(e.target.checked)}
      className="mt-1 w-5 h-5 flex-shrink-0 accent-terra cursor-pointer"
    />
    <label htmlFor="rgpd" className="text-muted text-sm leading-relaxed cursor-pointer">
      J'accepte que mes données personnelles soient utilisées pour traiter ma demande de devis, conformément au RGPD. *
    </label>
  </div>
</div>,
  ]

  const totalSteps = steps.length

  return (
    <>
      {/* Header */}
      <section className="bg-slate py-20">
        <div className="container-site">
          <motion.span className="section-tag text-terra/80" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Contact
          </motion.span>
          <motion.h1 className="font-title text-cream mb-4" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            Demandez votre{' '}<span className="text-terra">devis gratuit</span>
          </motion.h1>
          <motion.p className="text-cream/60 text-xl max-w-xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Remplissez le formulaire ou appelez directement. Je vous réponds sous 48h.
          </motion.p>
        </div>
      </section>

      {/* Formulaire + Coordonnées */}
      <motion.section className="bg-cream py-16 border-t-2 border-border" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Formulaire wizard */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="section-h2 mb-2">Votre projet</h2>
              <BrushUnderline className="mb-8" />

              {status === 'ok' ? (
                <motion.div className="border-2 border-[#6B8F71] bg-[#EFF6EF] p-10 text-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                  <p className="font-title text-3xl text-dark mb-3">Message envoyé !</p>
                  <p className="text-muted text-lg mb-6">{serverMsg}</p>
                  <button onClick={() => { setStatus('idle'); setStep(0); setData({ travaux: '', nom: '', telephone: '', email: '', message: '' }) }} className="btn-slate text-base px-8">
                    Envoyer une autre demande
                  </button>
                </motion.div>
              ) : (
                <div className="border-2 border-border p-8">

                  {/* Barre de progression */}
                  <div className="flex gap-2 mb-8">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div key={i} className={`h-1 flex-1 transition-all duration-300 ${i <= step ? 'bg-terra' : 'bg-border'}`} />
                    ))}
                  </div>

                  {/* Étape courante */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      {steps[step]}
                    </motion.div>
                  </AnimatePresence>

                  {/* Erreur */}
                  {error && (
                    <motion.p className="text-red-500 text-base mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {error}
                    </motion.p>
                  )}

                  {/* Erreur serveur */}
                  {status === 'err' && (
                    <div className="border-2 border-red-300 bg-red-50 text-red-700 px-5 py-4 text-base mt-4">{serverMsg}</div>
                  )}

                  {/* Boutons navigation */}
                  <div className="flex gap-4 mt-8">
                    {step > 0 && (
                      <button type="button" onClick={back} className="btn-outline text-lg px-8">
                        ← Retour
                      </button>
                    )}
                    {step < totalSteps - 1 ? (
                      <button type="button" onClick={handleNext} className="btn-primary text-lg flex-1 justify-center" style={{ minHeight: '56px' }}>
                        Continuer →
                      </button>
                    ) : (
                      <button type="button" onClick={handleSubmit} disabled={status === 'sending'} className="btn-primary text-lg flex-1 justify-center disabled:opacity-60" style={{ minHeight: '56px' }}>
                        {status === 'sending' ? (
                          <><SpinIcon className="w-5 h-5 animate-spin" />Envoi en cours…</>
                        ) : (
                          <><SendIcon className="w-5 h-5" />Envoyer ma demande</>
                        )}
                      </button>
                    )}
                  </div>

                  <p className="text-muted text-sm text-center mt-4">
                    Étape {step + 1} sur {totalSteps} · Vos données sont sécurisées
                  </p>
                </div>
              )}
            </motion.div>

            {/* Coordonnées */}
            <motion.div className="lg:col-span-2 space-y-0" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-slate p-8 border-b-4 border-terra">
                <p className="font-body font-semibold text-cream/60 text-sm uppercase tracking-widest mb-3">Appel direct</p>
                <a href={PHONE_HREF} className="font-title text-cream hover:text-terra transition-colors block mb-4" style={{ fontSize: '40px', lineHeight: '1.1' }} aria-label={`Appeler Yannick au ${PHONE_DISPLAY}`}>
                  {PHONE_DISPLAY}
                </a>
                <p className="text-cream/50 text-base mb-6">Lundi – Vendredi · 8h – 18h</p>
                <a href={PHONE_HREF} className="btn-phone w-full justify-center text-xl" style={{ minHeight: '60px' }}>
                  <PhoneIcon className="w-6 h-6" />
                  Appeler maintenant
                </a>
              </div>
              <div className="border-2 border-border border-t-0 p-8 space-y-6">
                <div>
                  <p className="font-body font-semibold text-dark text-sm uppercase tracking-widest mb-2">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-dark hover:text-terra transition-colors text-base font-semibold break-all">{EMAIL}</a>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="font-body font-semibold text-dark text-sm uppercase tracking-widest mb-2">Adresse</p>
                  <p className="text-dark text-base font-semibold">{ADDRESS}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="font-body font-semibold text-dark text-sm uppercase tracking-widest mb-2">Zone d'intervention</p>
                  <p className="text-dark text-base">{ZONE}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Liens internes */}
      <motion.section className="bg-cream py-12 border-t-2 border-border" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/services', label: 'Voir nos services' },
              { href: '/realisations', label: 'Voir nos réalisations' },
            ].map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={link.href} className="flex items-center justify-between p-6 border-2 border-border hover:border-terra hover:text-terra transition-colors">
                  <span className="font-body font-semibold text-lg">{link.label}</span>
                  <svg className="w-5 h-5 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
}
function SendIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
}
function SpinIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
}