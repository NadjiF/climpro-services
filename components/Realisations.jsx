'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const realisations = [
  {
    title: 'Climatisation villa — Toulouse',
    description: "Installation d'un système multi-split Daikin 3 pièces pour une villa contemporaine.",
    tag: 'Particulier',
    image: '/living.jpg',
    objectPosition: 'center',
  },
  {
    title: 'Bureaux professionnels — Blagnac',
    description: 'Climatisation gainable pour 300m² de bureaux',
    tag: 'Professionnel',
    image: '/office.jpg',
    objectPosition: 'center',
  },
  {
    title: 'Appartement — Colomiers',
    description: "Remplacement d'un ancien système par un modèle inverter Daikin",
    tag: 'Particulier',
    image: '/livingAir.jpg',
    objectPosition: 'center top',
  },
  {
    title: 'Espace coworking — Toulouse centre',
    description: 'Climatisation plafonnière pour plateau tertiaire en étage',
    tag: 'Professionnel',
    image: '/officeAir.jpg',
    objectPosition: 'center top',
  },
  {
    title: 'Maison individuelle — Muret',
    description: 'Pompe à chaleur air/air Atlantic avec 4 unités intérieures',
    tag: 'Particulier',
    image: '/air.jpg',
    objectPosition: 'center',
  },
  {
    title: 'Cabinet médical — Tournefeuille',
    description: "Système discret pour salles d'attente et bureaux",
    tag: 'Professionnel',
    image: '/house.jpg',
    objectPosition: 'center',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/* --- Carte réutilisable --- */
function Card({ item, className = '', imageClassName = '' }) {
  const isPro = item.tag === 'Professionnel'
  return (
    <motion.div
      variants={cardVariants}
      className={`group bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_10px_30px_-8px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col ${className}`}
    >
      <div className={`relative overflow-hidden ${imageClassName}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectPosition: item.objectPosition || 'center' }}
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay gradient subtil au hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Tag */}
        <span
          className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${
            isPro
              ? 'bg-slate-900/85 text-white'
              : 'bg-white/90 text-slate-900'
          }`}
        >
          {item.tag}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-base font-bold text-slate-900 mb-2 tracking-tight leading-tight">
          {item.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Realisations() {
  const [featured, ...others] = realisations

  return (
    <section id="realisations" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-slate-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="w-8 h-px bg-[#8FBFE0]" />
            Notre travail
            <span className="w-8 h-px bg-[#8FBFE0]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Nos réalisations
          </h2>
          <p className="text-slate-600 mt-5 max-w-xl mx-auto leading-relaxed">
            Quelques exemples de chantiers réalisés en région toulousaine,
            pour particuliers et professionnels.
          </p>
        </div>

       {/* Grille bento */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
>
  {/* Ligne 1 : grande carte featured (2 colonnes) + 1 carte normale */}
  <Card
    item={featured}
    className="lg:col-span-2"
    imageClassName="h-72 lg:h-80"
  />
  <Card item={others[0]} imageClassName="h-52 lg:h-80" />

  {/* Lignes 2-3 : 4 cartes normales */}
  <Card item={others[1]} imageClassName="h-52" />
  <Card item={others[2]} imageClassName="h-52" />
  <Card item={others[3]} imageClassName="h-52" />
  <Card item={others[4]} imageClassName="h-52" />
</motion.div>

      </div>
    </section>
  )
}
