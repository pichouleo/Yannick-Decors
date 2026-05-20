import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles, getArticleBySlug } from '@/lib/blog-data'
import { BrushUnderline } from '@/components/BrushStroke'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | Blog Yannick Décors`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  // Convertir le contenu markdown simple en HTML
  const htmlContent = article.content
    .split('\n\n')
    .map((block) => {
      if (block.startsWith('## ')) {
        return `<h2 class="font-title text-4xl text-dark mt-10 mb-4">${block.slice(3)}</h2>`
      }
      if (block.startsWith('**') && block.endsWith('**')) {
        return `<p class="text-dark font-semibold text-lg mb-4">${block.slice(2, -2)}</p>`
      }
      if (block.trim().startsWith('- ')) {
        const items = block.trim().split('\n').map((l) => l.slice(2))
        return `<ul class="space-y-2 mb-6 pl-0">${items.map((i) => `<li class="flex items-start gap-3 text-base text-dark"><span class="mt-1 flex-shrink-0 w-5 h-5 bg-terra text-white flex items-center justify-center text-xs font-bold">✓</span>${i}</li>`).join('')}</ul>`
      }
      // Inline bold
      const parsed = block.replace(/\*\*(.+?)\*\*/g, '<strong class="text-dark font-semibold">$1</strong>')
      return `<p class="text-dark text-lg leading-relaxed mb-6">${parsed}</p>`
    })
    .join('\n')

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      {/* Header */}
      <section className="bg-slate py-20">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-cream/50 hover:text-terra transition-colors text-base font-body">← Blog</Link>
            <span className="text-cream/30">/</span>
            <span className="text-terra text-base font-body font-semibold">{article.category}</span>
          </div>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="bg-terra/20 text-terra border border-terra/30 text-sm font-body font-semibold px-3 py-1">{article.category}</span>
            <span className="text-cream/40 text-sm">{article.date}</span>
            <span className="text-cream/40 text-sm">· {article.readTime} de lecture</span>
          </div>
          <h1 className="font-title text-cream mb-0" style={{ fontSize: 'clamp(36px, 5vw, 64px)', maxWidth: '760px' }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Corps article */}
      <section className="bg-cream py-16 border-t-2 border-border">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Article */}
            <article className="lg:col-span-2">
              <p className="text-muted text-xl leading-relaxed mb-8 border-l-4 border-terra pl-6 font-body italic">
                {article.excerpt}
              </p>
              <BrushUnderline className="mb-10" />
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
              {/* CTA inline */}
              <div className="mt-12 bg-slate p-8 border-l-4 border-terra">
                <p className="font-title text-2xl text-cream mb-2">Un projet en tête ?</p>
                <p className="text-cream/60 text-base mb-6">Contactez Yannick Décors pour un devis gratuit dans l'Eure et Seine-Maritime.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary text-base">Devis gratuit</Link>
                  <a href={PHONE_HREF} className="btn-phone text-base"><PhoneIcon className="w-4 h-4" />{PHONE_DISPLAY}</a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="border-2 border-border p-6 mb-8">
                <p className="font-body font-semibold text-dark text-sm uppercase tracking-widest mb-4">Appeler directement</p>
                <a
                  href={PHONE_HREF}
                  className="font-title text-slate hover:text-terra transition-colors block mb-4"
                  style={{ fontSize: '28px', lineHeight: '1.1' }}
                >
                  {PHONE_DISPLAY}
                </a>
                <a href={PHONE_HREF} className="btn-phone w-full justify-center text-base">
                  <PhoneIcon className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </div>

              <div className="border-2 border-border p-6 mb-8">
                <p className="font-body font-semibold text-dark text-sm uppercase tracking-widest mb-4">Services</p>
                <ul className="space-y-2">
                  {['Peinture intérieure', 'Peinture extérieure', 'Enduits', 'Revêtements'].map((s) => (
                    <li key={s}>
                      <Link href="/services" className="text-muted hover:text-terra transition-colors text-base flex items-center gap-2">
                        <span className="text-terra">→</span> {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {others.length > 0 && (
                <div className="border-2 border-border p-6">
                  <p className="font-body font-semibold text-dark text-sm uppercase tracking-widest mb-4">Autres articles</p>
                  <div className="space-y-4">
                    {others.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`} className="group block">
                        <p className="font-title text-xl text-dark group-hover:text-terra transition-colors leading-snug">{a.title}</p>
                        <p className="text-muted text-sm mt-1">{a.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
}
