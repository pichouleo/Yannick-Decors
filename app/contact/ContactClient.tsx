'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { BrushUnderline } from '@/components/BrushStroke'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS, ZONE } from '@/lib/constants'
import Link from 'next/link'

const schema = z.object({
  nom:       z.string().min(2, 'Votre nom est requis'),
  telephone: z.string().min(10, 'Numéro de téléphone requis'),
  email:     z.string().email('Adresse email invalide'),
  travaux:   z.string().min(1, 'Veuillez choisir un type de travaux'),
  message:   z.string().min(10, 'Décrivez votre projet (10 caractères minimum)'),
})
type F = z.infer<typeof schema>

export default function ContactPage() {
  const [status, setStatus]   = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
  const [serverMsg, setServerMsg] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<F>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: F) => {
    setStatus('sending')
    try {
      const res  = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      if (res.ok && json.success) { setStatus('ok'); setServerMsg(json.message); reset() }
      else                        { setStatus('err'); setServerMsg(json.message || 'Erreur inconnue.') }
    } catch {
      setStatus('err'); setServerMsg(`Erreur réseau. Appelez directement au ${PHONE_DISPLAY}`)
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-slate py-20">
        <div className="container-site">
          <span className="section-tag text-terra/80">Contact</span>
          <h1 className="font-title text-cream mb-4" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            Demandez votre{' '}
            <span className="text-terra">devis gratuit</span>
          </h1>
          <p className="text-cream/60 text-xl max-w-xl">
            Remplissez le formulaire ou appelez directement. Je vous réponds sous 48h.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 border-t-2 border-border">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* ── Formulaire ── */}
            <div className="lg:col-span-3">
              <h2 className="section-h2 mb-2">Votre projet</h2>
              <BrushUnderline className="mb-8" />

              {status === 'ok' ? (
                <div className="border-2 border-[#6B8F71] bg-[#EFF6EF] p-10 text-center">
                  <p className="font-title text-3xl text-dark mb-3">Message envoyé !</p>
                  <p className="text-muted text-lg mb-6">{serverMsg}</p>
                  <button onClick={() => setStatus('idle')} className="btn-slate text-base px-8">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6 border-2 border-border p-8">
                  {/* Nom + Téléphone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Nom et prénom" error={errors.nom?.message} required>
                      <input id="nom" type="text" autoComplete="name" placeholder="Jean Dupont" {...register('nom')} />
                    </Field>
                    <Field label="Téléphone" error={errors.telephone?.message} required>
                      <input id="telephone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" {...register('telephone')} />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field label="Email" error={errors.email?.message} required>
                    <input id="email" type="email" autoComplete="email" placeholder="jean.dupont@email.fr" {...register('email')} />
                  </Field>

                  {/* Type de travaux */}
                  <Field label="Type de travaux" error={errors.travaux?.message} required>
                    <select id="travaux" {...register('travaux')} defaultValue="">
                      <option value="" disabled>Choisir un type de travaux…</option>
                      <option value="interieure">Peinture intérieure</option>
                      <option value="exterieure">Peinture extérieure et ravalement</option>
                      <option value="enduits">Enduits et préparation</option>
                      <option value="revetements">Pose de revêtements</option>
                      <option value="autre">Autre / Non défini</option>
                    </select>
                  </Field>

                  {/* Message */}
                  <Field label="Décrivez votre projet" error={errors.message?.message} required>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Surface approximative, état actuel, délai souhaité, commune…"
                      {...register('message')}
                    />
                  </Field>

                  {status === 'err' && (
                    <div className="border-2 border-red-300 bg-red-50 text-red-700 px-5 py-4 text-base">{serverMsg}</div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full text-xl justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ minHeight: '60px' }}
                  >
                    {status === 'sending' ? (
                      <><SpinIcon className="w-5 h-5 animate-spin" />Envoi en cours…</>
                    ) : (
                      <><SendIcon className="w-5 h-5" />Envoyer ma demande de devis</>
                    )}
                  </button>

                  <p className="text-muted text-sm text-center">Vos données sont uniquement utilisées pour traiter votre demande.</p>
                </form>
              )}
            </div>

            {/* ── Coordonnées ── */}
            <div className="lg:col-span-2 space-y-0">
              {/* Téléphone — élément principal */}
              <div className="bg-slate p-8 border-b-4 border-terra">
                <p className="font-body font-semibold text-cream/60 text-sm uppercase tracking-widest mb-3">Appel direct</p>
                <a
                  href={PHONE_HREF}
                  className="font-title text-cream hover:text-terra transition-colors block mb-4"
                  style={{ fontSize: '40px', lineHeight: '1.1' }}
                  aria-label={`Appeler Yannick au ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-cream/50 text-base mb-6">Lundi – Vendredi · 8h – 18h</p>
                <a
                  href={PHONE_HREF}
                  className="btn-phone w-full justify-center text-xl"
                  style={{ minHeight: '60px' }}
                >
                  <PhoneIcon className="w-6 h-6" />
                  Appeler maintenant
                </a>
              </div>

              {/* Email + adresse */}
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
            </div>
          </div>
        </div>
      </section>
      {/* Liens internes */}
      <section className="bg-cream py-12 border-t-2 border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services" className="flex items-center justify-between p-6 border-2 border-border hover:border-terra hover:text-terra transition-colors">
              <span className="font-body font-semibold text-lg">Voir nos services</span>
              <svg className="w-5 h-5 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
            <Link href="/realisations" className="flex items-center justify-between p-6 border-2 border-border hover:border-terra hover:text-terra transition-colors">
              <span className="font-body font-semibold text-lg">Voir nos réalisations</span>
              <svg className="w-5 h-5 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Champ de formulaire ────────────────────────────────────────────────── */
function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-body font-semibold text-dark text-base mb-2">
        {label}{required && <span className="text-terra ml-1">*</span>}
      </label>
      <div style={{ borderColor: error ? '#EF4444' : undefined }}>
        {children}
      </div>
      {error && <p className="mt-2 text-red-500 text-sm font-body">{error}</p>}
    </div>
  )
}

/* ─── Icônes ─────────────────────────────────────────────────────────────── */
function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
}
function SendIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
}
function SpinIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
}