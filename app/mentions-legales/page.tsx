import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales | Yannick Décors',
  description: 'Mentions légales du site Yannick Décors — Artisan peintre en Normandie.',
  robots: 'noindex',
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-slate py-16">
        <div className="container-site">
          <h1 className="font-title text-cream mb-2" style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}>
            Mentions légales
          </h1>
          <p className="text-cream/60 text-lg">Informations légales du site yannickdecors.pro</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="container-site max-w-3xl">
          <div className="space-y-10">

            <Section title="Éditeur du site">
              <p><strong>Yannick Décors</strong></p>
              <p>Artisan peintre indépendant</p>
              <p>22 Rte de l'Étoile, 27110 Sainte-Opportune-du-Bosc</p>
              <p>SIRET : 751 747 049 00011</p>
              <p>Téléphone : <a href="tel:+33622740767" className="text-terra hover:underline">06 22 74 07 67</a></p>
              <p>Email : <a href="mailto:yannick.pichou@sfr.fr" className="text-terra hover:underline">yannick.pichou@sfr.fr</a></p>
            </Section>

            <Section title="Hébergement">
              <p>Ce site est hébergé par :</p>
              <p><strong>Netlify, Inc.</strong></p>
              <p>512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis</p>
              <p>Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-terra hover:underline">www.netlify.com</a></p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p>L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de Yannick Décors, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
            </Section>

            <Section title="Données personnelles">
              <p>Les informations recueillies via le formulaire de contact sont destinées uniquement à l'usage de Yannick Décors dans le cadre de la relation commerciale. Conformément à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous au 06 22 74 07 67 ou par email.</p>
            </Section>

            <Section title="Cookies">
              <p>Ce site n'utilise pas de cookies de suivi ou de publicité. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.</p>
            </Section>

            <Section title="Responsabilité">
              <p>Yannick Décors s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. Yannick Décors ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus suite à l'utilisation de ces informations.</p>
            </Section>

            <Section title="Liens externes">
              <p>Ce site peut contenir des liens vers des sites externes. Yannick Décors n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
            </Section>

            <Section title="Droit applicable">
              <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </Section>

          </div>

          <div className="mt-12 pt-8 border-t-2 border-border">
            <Link href="/" className="text-terra hover:underline font-body font-semibold">
              ← Retour à l'accueil
            </Link>
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