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
            <span className="text-blue-600 text-sm font-medium tracking-widest uppercase">
              Contactez-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Demandez votre devis gratuit
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Remplissez le formulaire et nous vous recontactons sous 24h avec
              un devis détaillé et sans engagement.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📍', label: 'Zone d\'intervention', value: 'Toulouse et environs (30km)' },
                { icon: '📞', label: 'Téléphone', value: '05 61 00 00 00' },
                { icon: '✉️', label: 'Email', value: 'contact@climpro-services.fr' },
                { icon: '🕐', label: 'Horaires', value: 'Lun–Ven 8h–18h / Sam 9h–12h' },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{info.label}</div>
                    <div className="text-sm font-medium text-gray-800 mt-0.5">{info.value}</div>
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
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-4 rounded-xl transition-colors text-sm"
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
