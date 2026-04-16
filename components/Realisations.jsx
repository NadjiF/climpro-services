'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const realisations = [
  {
    title: 'Climatisation villa — Toulouse',
    description: 'Installation d\'un système multi-split Daikin 3 pièces',
    tag: 'Particulier',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
  },
  {
    title: 'Bureaux professionnels — Blagnac',
    description: 'Climatisation gainable pour 300m² de bureaux',
    tag: 'Professionnel',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: 'Appartement — Colomiers',
    description: 'Remplacement d\'un ancien système par un modèle inverter',
    tag: 'Particulier',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
  },
  {
    title: 'Restaurant — Toulouse centre',
    description: 'Installation complète cuisine + salle avec unités murales',
    tag: 'Professionnel',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  {
    title: 'Maison individuelle — Muret',
    description: 'Pompe à chaleur air/air Atlantic avec 4 unités intérieures',
    tag: 'Particulier',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
  },
  {
    title: 'Cabinet médical — Tournefeuille',
    description: 'Système discret gainable pour salles d\'attente et bureaux',
    tag: 'Professionnel',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Realisations() {
  return (
    <section id="realisations" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-medium tracking-widest uppercase">
            Notre travail
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Nos réalisations
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Quelques exemples de chantiers réalisés en région toulousaine,
            pour particuliers et professionnels.
          </p>
        </div>

        {/* Grille */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {realisations.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Texte */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
