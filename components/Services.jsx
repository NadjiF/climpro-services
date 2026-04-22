'use client'

import { motion } from 'framer-motion'

/* --- Icônes (style Lucide) --- */
const IconSnowflake = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h20" />
    <path d="M12 2v20" />
    <path d="m20 16-4-4 4-4" />
    <path d="m4 8 4 4-4 4" />
    <path d="m16 4-4 4-4-4" />
    <path d="m8 20 4-4 4 4" />
  </svg>
)

const IconWrench = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

const IconSiren = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
    <path d="M5 21a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1z" />
    <path d="M21 12h1" />
    <path d="M18.5 4.5 18 5" />
    <path d="M2 12h1" />
    <path d="M12 2v1" />
    <path d="m4.929 4.929.707.707" />
    <path d="M12 12v6" />
  </svg>
)

const IconDroplet = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </svg>
)

const services = [
  {
    Icon: IconSnowflake,
    title: 'Pose de climatisation',
    description:
      'Installation de systèmes split, multi-split et gainables pour particuliers et professionnels. Marques Daikin, Mitsubishi, Atlantic.',
    details: ['Bilan thermique offert', 'Pose en 1 journée', 'Garantie 2 ans'],
  },
  {
    Icon: IconWrench,
    title: 'Entretien & maintenance',
    description:
      "Contrats d'entretien annuels pour garantir les performances et la durée de vie de vos équipements.",
    details: ['Nettoyage des filtres', 'Contrôle du circuit frigorifique', "Rapport d'intervention"],
  },
  {
    Icon: IconSiren,
    title: 'Dépannage urgent',
    description:
      'Intervention rapide en cas de panne. Nous nous déplaçons dans toute la région toulousaine sous 24h.',
    details: ['7j/7 en saison', 'Devis avant intervention', 'Pièces en stock'],
  },
  {
    Icon: IconDroplet,
    title: 'Plomberie générale',
    description:
      'Réparation de fuites, remplacement de chauffe-eau, installation sanitaire pour particuliers.',
    details: ['Diagnostic offert', 'Intervention même jour', 'Matériel certifié'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-slate-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="w-8 h-px bg-[#8FBFE0]" />
            Ce que nous faisons
            <span className="w-8 h-px bg-[#8FBFE0]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Nos prestations
          </h2>
          <p className="text-slate-600 mt-5 max-w-xl mx-auto leading-relaxed">
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
          {services.map((service) => {
            const { Icon } = service
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl p-7 border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_10px_30px_-8px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:border-slate-200 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#8FBFE0]/25 group-hover:bg-[#8FBFE0]/40 flex items-center justify-center text-slate-800 mb-6 transition-colors">
                  <Icon />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-5 border-t border-slate-100">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FBFE0] shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
