'use client'

import { motion } from 'framer-motion'

/* --- Icônes (style Lucide, trait fin) --- */
const IconTrophy = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

const IconZap = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
  </svg>
)

const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const IconUsers = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const IconWallet = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
)

const IconLeaf = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.3c1.2 2 2 4.74 2 6.3 0 5.5-4.78 11.4-10.2 11.4Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>
)

const reasons = [
  { Icon: IconTrophy, title: 'Certifié RGE', description: "Notre certification RGE vous permet de bénéficier des aides de l'État (MaPrimeRénov', CEE) pour vos travaux." },
  { Icon: IconZap, title: 'Intervention rapide', description: 'Devis gratuit sous 24h et intervention planifiée dans la semaine. Dépannage urgent disponible 7j/7 en saison.' },
  { Icon: IconShield, title: 'Garantie 2 ans', description: "Toutes nos installations sont couvertes par une garantie de 2 ans pièces et main d'œuvre." },
  { Icon: IconUsers, title: 'Techniciens qualifiés', description: 'Notre équipe est formée aux dernières technologies et aux marques leaders du marché.' },
  { Icon: IconWallet, title: 'Tarifs transparents', description: 'Pas de mauvaise surprise : devis détaillé avant chaque intervention, sans frais cachés.' },
  { Icon: IconLeaf, title: 'Éco-responsable', description: 'Nous utilisons des fluides frigorigènes nouvelle génération et recyclons les anciens équipements.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: '10+', label: "ans d'expérience" },
  { value: '500+', label: 'installations réalisées' },
  { value: '98%', label: 'clients satisfaits' },
  { value: '24h', label: 'délai de réponse' },
]

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 text-slate-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="w-8 h-px bg-[#8FBFE0]" />
            Nos engagements
            <span className="w-8 h-px bg-[#8FBFE0]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Pourquoi choisir ClimPro&nbsp;?
          </h2>
          <p className="text-slate-600 mt-5 max-w-xl mx-auto leading-relaxed">
            Depuis plus de 10 ans, nous accompagnons les particuliers et
            professionnels avec sérieux et transparence.
          </p>
        </div>

        {/* Grille raisons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
        >
          {reasons.map((reason) => {
            const { Icon } = reason
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="group"
              >
                <div className="text-slate-900 mb-5">
                  <Icon />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    {reason.title}
                  </h3>
                  <span className="h-px flex-1 bg-slate-200 group-hover:bg-[#8FBFE0] transition-colors duration-300" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bandeau chiffres — sombre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-24 bg-slate-900 rounded-3xl p-10 md:p-14 overflow-hidden"
        >
          {/* Halo lumineux décoratif */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#8FBFE0]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#8FBFE0]/5 blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="relative inline-flex items-center gap-2.5 text-[#8FBFE0] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            <span className="w-6 h-px bg-[#8FBFE0]" />
            En quelques chiffres
          </div>

          {/* Grille stats */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`${i !== 0 ? 'md:border-l md:border-white/10 md:pl-6' : ''}`}
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-[#8FBFE0] tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300 mt-3 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
