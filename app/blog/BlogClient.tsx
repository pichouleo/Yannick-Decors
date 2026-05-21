'use client'
import Link from 'next/link'
import { articles } from '@/lib/blog-data'
import { BrushUnderline } from '@/components/BrushStroke'
import { motion } from 'framer-motion'

const catColors: Record<string, string> = {
  Conseils:   'bg-terra/10 text-terra border-terra/30',
  Extérieur:  'bg-slate/10 text-slate border-slate/30',
  Patrimoine: 'bg-[#6B8F71]/10 text-[#4F7155] border-[#6B8F71]/30',
  Tarifs:     'bg-[#7A706A]/10 text-[#5C5550] border-[#7A706A]/30',
}

export default function BlogClient() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate py-20">
        <div className="container-site">
          <motion.span
            className="section-tag text-terra/80"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Conseils & guides
          </motion.span>
          <motion.h1
            className="font-title text-cream mb-6"
            style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Blog peinture
            <br />
            <span className="text-terra">& décoration</span>
          </motion.h1>
          <motion.p
            className="text-cream/60 text-xl max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Conseils pratiques, guides d'entretien et tendances déco pour vos projets en Normandie.
          </motion.p>
        </div>
      </section>

      {/* Introduction SEO */}
      <motion.section
        className="bg-cream py-20 border-b-2 border-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-site text-center max-w-2xl mx-auto">
          <span className="section-tag text-terra/80 mb-6 block">Le blog de l'artisan</span>
          <h2 className="font-title text-dark mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
            Conseils d'un peintre normand,<br />
            <span className="text-terra">directement du terrain.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            15 ans d'expérience dans l'Eure et la Seine-Maritime. Je partage ici mes conseils
            pour vous aider à mieux préparer vos projets de peinture en Normandie.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-12 border-2 border-border">
            {[
              { value: '4', label: 'Articles' },
              { value: '15+', label: "Ans d'expérience" },
              { value: '70km', label: 'Zone Neubourg' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className={`py-6 px-4 ${i < 2 ? 'border-r-2 border-border' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="font-title text-3xl text-terra mb-1">{s.value}</p>
                <p className="text-muted text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="text-sm font-body font-semibold tracking-widest uppercase">Lire les articles</span>
            <svg className="w-6 h-6 text-terra animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </motion.section>

      {/* Articles */}
      <section className="bg-cream py-20">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-0 border-2 border-border">
            {articles.map((article, i) => {
              const catClass = catColors[article.category] || 'bg-terra/10 text-terra border-terra/30'
              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className={`group block p-10 hover:bg-[#EEECE6] transition-colors ${
                      i % 2 === 0 && i < articles.length - 1 ? 'border-r-0 md:border-r-2 border-border' : ''
                    } ${i < articles.length - 2 ? 'border-b-2 border-border' : ''}`}
                    style={{
                      borderRight: i % 2 === 0 ? '2px solid #D6D4CE' : 'none',
                      borderBottom: i < articles.length - 2 ? '2px solid #D6D4CE' : 'none',
                    }}
                  >
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}