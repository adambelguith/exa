'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    formation: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        formation: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Notre Adresse",
      info: "Tunis, Tunisie",
      color: "#265b8f",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      info: "contact@exa-formation.com",
      color: "#ac1f2c",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Téléphone",
      info: "+216 XX XXX XXX",
      color: "#46c0b5",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horaires",
      info: "Lun - Ven: 9h00 - 18h00",
      color: "#265b8f",
    },
  ];

  const formations = [
    "PMS - Project Management System",
    "Stratégie Business & Management",
    "Management pour Startups",
    "Leadership & Gestion d'Équipe",
    "Gestion de Projet Agile",
    "Développement Web Full Stack",
    "Marketing Digital",
    "Data Science & Machine Learning",
    "Design UX/UI",
    "Cybersécurité",
    "Anglais Professionnel",
    "Autre",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - SOLID COLOR */}
      <section className="pt-32 pb-20 bg-[#46c0b5] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">📞</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Contactez-Nous
            </h1>
            <p className="text-xl opacity-90 leading-relaxed animate-fadeInUp">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
              et vous accompagner dans votre projet de formation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#265b8f] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.info}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <SectionTitle
                title="Envoyez-nous un Message"
                subtitle="Remplissez le formulaire ci-dessous"
                centered={false}
                accentColor="teal"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#46c0b5] focus:border-transparent transition-all outline-none"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#46c0b5] focus:border-transparent transition-all outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#46c0b5] focus:border-transparent transition-all outline-none"
                    placeholder="+212 XXX-XXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="formation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Formation d'intérêt
                  </label>
                  <select
                    id="formation"
                    name="formation"
                    value={formData.formation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#46c0b5] focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Sélectionnez une formation</option>
                    {formations.map((formation, index) => (
                      <option key={index} value={formation}>
                        {formation}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#46c0b5] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Message envoyé avec succès ! Nous vous répondrons bientôt.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#46c0b5] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3aa89e] transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <SectionTitle
                  title="Pourquoi Nous Contacter ?"
                  subtitle="Nous sommes là pour vous aider"
                  centered={false}
                  accentColor="blue"
                />

                <div className="space-y-6">
                  {[
                    {
                      icon: "💬",
                      title: "Conseils Personnalisés",
                      description: "Obtenez des recommandations sur les formations adaptées",
                      color: "#265b8f",
                    },
                    {
                      icon: "📋",
                      title: "Informations Détaillées",
                      description: "Recevez toutes les informations sur nos programmes",
                      color: "#ac1f2c",
                    },
                    {
                      icon: "📅",
                      title: "Planification",
                      description: "Organisez une visite ou un rendez-vous",
                      color: "#46c0b5",
                    },
                    {
                      icon: "🎯",
                      title: "Financement",
                      description: "Découvrez les options de financement disponibles",
                      color: "#265b8f",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-[#ecf6fd] rounded-lg"
                    >
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 shadow-md"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#265b8f] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <Card className="bg-[#265b8f] text-white">
                <h3 className="text-2xl font-bold mb-4">Liens Rapides</h3>
                <div className="space-y-3">
                  <a
                    href="/formations"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  >
                    📚 Consulter nos formations
                  </a>
                  <a
                    href="/a-propos"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  >
                    ℹ️ En savoir plus sur EXA
                  </a>
                  <a
                    href="/"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  >
                    🏠 Retour à l'accueil
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Trouvez-nous"
            subtitle="Visitez notre centre de formation"
            accentColor="red"
          />

          <div className="bg-[#ecf6fd] rounded-2xl shadow-xl overflow-hidden border-4 border-[#46c0b5]">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#46c0b5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold text-lg">
                  Intégration de Google Maps ici
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Tunis, Tunisie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Questions Fréquentes"
            subtitle="Trouvez rapidement des réponses à vos questions"
            accentColor="teal"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Comment puis-je m'inscrire à une formation ?",
                answer: "Vous pouvez vous inscrire en remplissant le formulaire de contact ci-dessus ou en nous contactant directement par téléphone ou email.",
                color: "#265b8f",
              },
              {
                question: "Quels sont les modes de paiement acceptés ?",
                answer: "Nous acceptons les paiements par virement bancaire, chèque, et espèces. Des facilités de paiement sont disponibles.",
                color: "#ac1f2c",
              },
              {
                question: "Les formations sont-elles certifiantes ?",
                answer: "Oui, toutes nos formations délivrent un certificat reconnu. Certaines offrent également des certifications internationales.",
                color: "#46c0b5",
              },
              {
                question: "Puis-je suivre les formations à distance ?",
                answer: "Oui, nous proposons des formations en présentiel, en ligne ou en mode hybride selon vos préférences.",
                color: "#265b8f",
              },
              {
                question: "Y a-t-il des prérequis pour les formations ?",
                answer: "Les prérequis varient selon les formations. Contactez-nous pour obtenir des informations détaillées.",
                color: "#ac1f2c",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-l-4" style={{ borderColor: faq.color }}>
                <h3 className="text-lg font-bold text-[#265b8f] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - SOLID COLOR */}
      <section className="py-20 bg-[#ac1f2c] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="text-6xl mb-6">❓</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vous avez encore des questions ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            N'hésitez pas à nous contacter, notre équipe est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+212522123456"
              className="inline-block bg-white text-[#ac1f2c] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📞 Appelez-nous
            </a>
            <a
              href="mailto:contact@exa-formation.com"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#ac1f2c] transition-all duration-300"
            >
              ✉️ Envoyez un Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
