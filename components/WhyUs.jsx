'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    icon: '🏆',
    title: 'Certifié RGE',
    description:
      'Notre certification RGE vous permet de bénéficier des aides de l\'État (MaPrimeRénov\', CEE) pour vos travaux.',
  },
  {
    icon: '⚡',
    title: 'Intervention rapide',
    description:
      'Devis gratuit sous 24h et intervention planifiée dans la semaine. Dépannage urgent disponible 7j/7 en saison.',
  },
  {
    icon: '🛡️',
    title: 'Garantie 2 ans',
    description:
      'Toutes nos installations sont couvertes par une garantie de 2 ans pièces et main d\'œuvre.',
  },
  {
    icon: '👨‍🔧',
    title: 'Techniciens qualifiés',
    description:
      'Notre équipe est formée aux dernières technologies et aux marques leaders du marché.',
  },
  {
    icon: '💶',
    title: 'Tarifs transparents',
    description:
      'Pas de mauvaise surprise : devis détaillé avant chaque intervention, sans frais cachés.',
  },
  {
    icon: '🌿',
    title: 'Éco-responsable',
    description:
      'Nous utilisons des fluides frigorigènes nouvelle génération et recyclons les anciens équipements.',
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-medium tracking-widest uppercase">
            Nos engagements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Pourquoi choisir ClimPro ?
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Depuis plus de 10 ans, nous accompagnons les particuliers et
            professionnels avec sérieux et transparence.
          </p>
        </div>

        {/* Grille */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex gap-4"
            >
              <div className="text-3xl shrink-0">{reason.icon}</div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bandeau chiffres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-blue-600 rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center"
        >
          {[
            { value: '10+', label: 'ans d\'expérience' },
            { value: '500+', label: 'installations réalisées' },
            { value: '98%', label: 'clients satisfaits' },
            { value: '24h', label: 'délai de réponse' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
