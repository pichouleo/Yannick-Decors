import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/lib/blog-data'
import { BrushUnderline } from '@/components/BrushStroke'

export const metadata: Metadata = {
  title: 'Blog Peinture Normandie | Yannick Décors',
  description: 'Conseils, tendances et guides pratiques sur la peinture et la décoration en Normandie par votre artisan peintre local.',
  alternates: {
    canonical: 'https://yannickdecors.pro/blog',
  },
}


const catColors: Record<string, string> = {
  Conseils:   'bg-terra/10 text-terra border-terra/30',
  Extérieur:  'bg-slate/10 text-slate border-slate/30',
  Patrimoine: 'bg-[#6B8F71]/10 text-[#4F7155] border-[#6B8F71]/30',
  Tarifs:     'bg-[#7A706A]/10 text-[#5C5550] border-[#7A706A]/30',
}

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate py-20">
        <div className="container-site">
          <span className="section-tag text-terra/80">Conseils & guides</span>
          <h1 className="font-title text-cream mb-6" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            Blog peinture
            <br />
            <span className="text-terra">& décoration</span>
          </h1>
          <p className="text-cream/60 text-xl max-w-2xl">
            Conseils pratiques, guides d'entretien et tendances déco pour vos projets en Normandie.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-cream py-20">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-0 border-2 border-border">
            {articles.map((article, i) => {
              const catClass = catColors[article.category] || 'bg-terra/10 text-terra border-terra/30'
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className={`group block p-10 hover:bg-[#EEECE6] transition-colors ${
                    i % 2 === 0 && i < articles.length - 1 ? 'border-r-0 md:border-r-2 border-border' : ''
                  } ${i < articles.length - 2 ? 'border-b-2 border-border' : ''}`}
                  style={{
                    borderRight: i % 2 === 0 ? '2px solid #D6D4CE' : 'none',
                    borderBottom: i < articles.length - 2 ? '2px solid #D6D4CE' : 'none',
                  }}
                >
                  {/* Badge catégorie */}
                  <span className={`inline-block border text-sm font-body font-semibold px-3 py-1 mb-4 ${catClass}`}>
                    {article.category}
                  </span>

                  <h2 className="font-title text-3xl text-dark mb-3 leading-tight group-hover:text-terra transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-muted text-base leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t-2 border-border">
                    <div className="flex items-center gap-3 text-muted text-sm">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <span className="font-body font-semibold text-terra group-hover:text-terra-dk transition-colors text-base flex items-center gap-1">
                      Lire
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
