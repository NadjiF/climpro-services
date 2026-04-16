'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-200">

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-blue-100 text-blue-700 text-sm px-4 py-1.5 rounded-full mb-6 font-medium"
        >
          Certifié RGE — Région Toulousaine
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900"
        >
          Pose & entretien de{' '}
          <span className="text-blue-600">climatisation</span>
          <br />
          par des experts
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto"
        >
          ClimPro Services installe et entretient vos systèmes de climatisation
          et de chauffage. Devis gratuit sous 24h, intervention rapide.
        </motion.p>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-colors text-sm"
          >
            Demander un devis gratuit
          </a>
          <a
            href="#services"
            className="bg-white hover:bg-gray-100 text-gray-700 font-medium px-8 py-4 rounded-full border border-gray-200 transition-colors text-sm"
          >
            Découvrir nos services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
>
  {[
    { value: '10+', label: "ans d'expérience" },
    { value: '500+', label: 'clients satisfaits' },
    { value: '24h', label: 'délai de réponse' },
  ].map((stat) => (
    <div key={stat.label} className="text-center">
      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
      <div className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</div>
    </div>
  ))}
</motion.div>

      </div>

      {/* Flèche scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>

    </section>
  )
}
