'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ nom: '', email: '', telephone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Infos gauche */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 text-slate-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
  <span className="w-8 h-px bg-[#8FBFE0]" />
  Contactez-nous
</div>
<h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
  Demandez votre devis gratuit
</h2>
<p className="text-slate-600 leading-relaxed mb-10">
              Remplissez le formulaire et nous vous recontactons sous 24h avec
              un devis détaillé et sans engagement.
            </p>

            <div className="space-y-5">
  {[
    {
      label: "Zone d'intervention",
      value: 'Toulouse et environs (30km)',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: 'Téléphone',
      value: '05 61 00 00 00',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'contact@climpro-services.fr',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: 'Horaires',
      value: 'Lun–Ven 8h–18h / Sam 9h–12h',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ].map((info) => (
    <div key={info.label} className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8FBFE0]/25 flex items-center justify-center text-slate-800">
        {info.icon}
      </div>
      <div>
        <div className="text-[11px] text-slate-500 uppercase tracking-[0.15em] font-semibold">{info.label}</div>
        <div className="text-sm font-medium text-slate-900 mt-1">{info.value}</div>
      </div>
    </div>
  ))}
</div>
          </motion.div>

          {/* Formulaire droite */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    placeholder="06 00 00 00 00"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jean@exemple.fr"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Service souhaité
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="pose">Pose de climatisation</option>
                  <option value="entretien">Entretien & maintenance</option>
                  <option value="depannage">Dépannage urgent</option>
                  <option value="plomberie">Plomberie générale</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                />
              </div>

            <button
  type="submit"
  disabled={loading}
  className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium py-4 rounded-xl transition-all text-sm shadow-[0_4px_16px_rgba(15,23,42,0.12)] hover:shadow-[0_6px_20px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 disabled:hover:translate-y-0"
>
  {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
</button>

              {status === 'success' && (
                <p className="text-sm text-green-600 text-center">
                  ✅ Message envoyé ! Nous vous recontactons sous 24h.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500 text-center">
                  ❌ Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
