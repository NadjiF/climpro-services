'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '❄️',
    title: 'Pose de climatisation',
    description:
      'Installation de systèmes split, multi-split et gainables pour particuliers et professionnels. Marques Daikin, Mitsubishi, Atlantic.',
    details: ['Bilan thermique offert', 'Pose en 1 journée', 'Garantie 2 ans'],
  },
  {
    icon: '🔧',
    title: 'Entretien & maintenance',
    description:
      'Contrats d\'entretien annuels pour garantir les performances et la durée de vie de vos équipements.',
    details: ['Nettoyage des filtres', 'Contrôle du circuit frigorifique', 'Rapport d\'intervention'],
  },
  {
    icon: '🚨',
    title: 'Dépannage urgent',
    description:
      'Intervention rapide en cas de panne. Nous nous déplaçons dans toute la région toulousaine sous 24h.',
    details: ['7j/7 en saison', 'Devis avant intervention', 'Pièces en stock'],
  },
  {
    icon: '🔩',
    title: 'Plomberie générale',
    description:
      'Réparation de fuites, remplacement de chauffe-eau, installation sanitaire pour particuliers.',
    details: ['Diagnostic offert', 'Intervention même jour', 'Matériel certifié'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-medium tracking-widest uppercase">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Nos prestations
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Des solutions adaptées à chaque besoin, réalisées par des techniciens
            qualifiés et certifiés RGE.
          </p>
        </div>

        {/* Grille de cartes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
