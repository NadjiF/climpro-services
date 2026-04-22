'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAF7F2]">

      {/* Grain subtile pour la chaleur */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-screen">

        {/* GAUCHE : contenu */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-20 lg:py-24">
          <div className="max-w-xl w-full">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-white text-slate-700 text-sm px-4 py-2 rounded-full mb-8 font-medium border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8FBFE0] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FBFE0]" />
              </span>
              Certifié RGE — Région Toulousaine
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold leading-[1.02] tracking-[-0.02em] mb-8 text-slate-900"
            >
              Pose & entretien de{' '}
              <span className="relative inline-block">
                <span className="relative z-10">climatisation</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full h-[0.35em] z-0"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                    d="M2 8 Q 75 2, 150 6 T 298 5"
                    stroke="#8FBFE0"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {' '}par des experts
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed"
            >
              Une équipe toulousaine qui installe et entretient vos systèmes de climatisation et de chauffage. Devis gratuit sous 24h, intervention rapide.
            </motion.p>

            {/* Boutons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-7 py-3.5 rounded-full transition-all text-sm shadow-[0_4px_16px_rgba(15,23,42,0.12)] hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)] hover:-translate-y-0.5"
              >
                Demander un devis gratuit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-7 py-3.5 rounded-full transition-all text-sm shadow-[0_4px_16px_rgba(15,23,42,0.12)] hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)] hover:-translate-y-0.5"
              >
                Découvrir nos services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { value: '10+', label: "ans d'expérience" },
                { value: '500+', label: 'clients satisfaits' },
                { value: '24h', label: 'délai de réponse' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* DROITE : image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative hidden lg:block overflow-hidden"
        >
          <img
            src="/hero-tech.jpg"
            alt="Unités de climatisation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Fondu vers le fond crème à gauche */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent" />
          {/* Léger voile bleu pour la cohérence */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#8FBFE0]/10" />

          {/* Carte flottante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.25)] border border-white"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8FBFE0]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="font-display font-semibold text-slate-900">Intervention sous 24h</div>
                <div className="text-sm text-slate-600">7j/7 en saison estivale</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Flèche scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-6 sm:left-10 lg:left-16 xl:left-24 hidden sm:flex flex-col items-start gap-2"
      >
        <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-9 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 h-1.5 bg-slate-500 rounded-full"
          />
        </div>
      </motion.div>

    </section>
  )
}
