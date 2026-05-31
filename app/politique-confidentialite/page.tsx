import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Yannick Décors',
  description: 'Politique de confidentialité et protection des données personnelles — Yannick Décors.',
  robots: 'noindex',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="bg-slate py-16">
        <div className="container-site">
          <h1 className="font-title text-cream mb-2" style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}>
            Politique de confidentialité
          </h1>
          <p className="text-cream/60 text-lg">Dernière mise à jour : mai 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site max-w-3xl">
          <div className="space-y-10">

            <Section title="Responsable du traitement">
              <p><strong>Yannick Décors</strong> — Yannick Pichou</p>
              <p>22 Rte de l'Étoile, 27110 Sainte-Opportune-du-Bosc</p>
              <p>Email : <a href="mailto:yannick.pichou@sfr.fr" className="text-terra hover:underline">yannick.pichou@sfr.fr</a></p>
              <p>Téléphone : <a href="tel:+33622740767" className="text-terra hover:underline">06 22 74 07 67</a></p>
            </Section>

            <Section title="Données collectées">
              <p>Lors de l'utilisation du formulaire de contact, nous collectons les données suivantes :</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Nom et prénom</li>
                <li>Numéro de téléphone</li>
                <li>Adresse email</li>
                <li>Type de travaux souhaités</li>
                <li>Description du projet</li>
              </ul>
            </Section>

            <Section title="Finalité du traitement">
              <p>Les données collectées sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Répondre à votre demande de devis</li>
                <li>Vous contacter dans le cadre de votre projet</li>
                <li>Assurer le suivi de la relation commerciale</li>
              </ul>
              <p className="mt-2">Elles ne sont jamais cédées, vendues ou transmises à des tiers.</p>
            </Section>

            <Section title="Durée de conservation">
              <p>Vos données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, conformément aux recommandations de la CNIL.</p>
            </Section>

            <Section title="Vos droits">
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              </ul>
              <p className="mt-2">Pour exercer ces droits, contactez-nous par email à <a href="mailto:yannick.pichou@sfr.fr" className="text-terra hover:underline">yannick.pichou@sfr.fr</a> ou par téléphone au 06 22 74 07 67.</p>
            </Section>

            <Section title="Sécurité">
              <p>Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.</p>
            </Section>

            <Section title="Cookies">
              <p>Ce site n'utilise pas de cookies de tracking ou publicitaires. Seuls des cookies techniques indispensables au fonctionnement du site peuvent être déposés.</p>
            </Section>

            <Section title="Contact et réclamation">
              <p>Pour toute question relative à la protection de vos données, contactez-nous à <a href="mailto:yannick.pichou@sfr.fr" className="text-terra hover:underline">yannick.pichou@sfr.fr</a>.</p>
              <p className="mt-2">Vous avez également le droit d'introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-terra hover:underline">www.cnil.fr</a></p>
            </Section>

          </div>

          <div className="mt-12 pt-8 border-t-2 border-border flex gap-6">
            <Link href="/" className="text-terra hover:underline font-body font-semibold">← Retour à l'accueil</Link>
            <Link href="/mentions-legales" className="text-terra hover:underline font-body font-semibold">Mentions légales</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-terra pl-6">
      <h2 className="font-title text-2xl text-dark mb-4">{title}</h2>
      <div className="text-muted text-base leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}