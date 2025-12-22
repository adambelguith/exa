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

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        formation: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const services = [
    "Conseil en Affaires et Accompagnement",
    "Recrutement IT et Gestion de Carrière",
    "Conseil en GRH",
    "Audit RH",
    "Formation en Management",
    "Formation en Leadership",
    "Formation PMP",
    "Pitching et Présentation de Projets",
    "Coaching et TOT",
    "Marketing Digital et Branding",
    "Optimisation Profils LinkedIn",
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
            <p className="text-xl opacity-90 leading-relaxed animate-fadeInUp mb-8">
              Vous avez un projet, un besoin en compétences ou un objectif de montée en performance ?
            </p>
            <p className="text-2xl font-bold opacity-95 leading-relaxed animate-fadeInUp">
              EXSA vous accompagne avec des solutions pratiques, flexibles et sur mesure, adaptées à votre réalité et à vos ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* What EXSA Offers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="🎯 Que propose EXSA concrètement ?"
            subtitle="Des formations et accompagnements à fort impact, conçus pour être immédiatement applicables"
            accentColor="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "💼", title: "Management & leadership", color: "#265b8f" },
              { icon: "🚀", title: "Entrepreneuriat & création de projets", color: "#ac1f2c" },
              { icon: "📊", title: "Gestion de projets & performance", color: "#46c0b5" },
              { icon: "💻", title: "Digital & transformation", color: "#265b8f" },
              { icon: "🧠", title: "Soft skills & développement professionnel", color: "#ac1f2c" },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-shadow">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#265b8f]">
                  {item.title}
                </h3>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-[#ac1f2c]">
              👉 Pas de théorie inutile. Des résultats mesurables.
            </p>
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

              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
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
                    Service d'intérêt
                  </label>
                  <select
                    id="formation"
                    name="formation"
                    value={formData.formation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#46c0b5] focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Sélectionnez une formation</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
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

                {formStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-[#46c0b5] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3aa89e] transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le Message'
                  )}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <SectionTitle
                  title="📝 Comment s'inscrire ou démarrer ?"
                  subtitle="C'est simple et rapide"
                  centered={false}
                  accentColor="blue"
                />

                <div className="space-y-6">
                  {[
                    {
                      icon: "1️⃣",
                      title: "Vous remplissez le formulaire de contact",
                      description: "Décrivez votre besoin, projet ou objectif de formation",
                      color: "#265b8f",
                    },
                    {
                      icon: "2️⃣",
                      title: "Un expert EXSA analyse votre besoin",
                      description: "Nous étudions votre profil et vos objectifs",
                      color: "#46c0b5",
                    },
                    {
                      icon: "3️⃣",
                      title: "Nous vous orientons vers la solution la plus adaptée",
                      description: "Formation sur mesure ou parcours complet personnalisé",
                      color: "#ac1f2c",
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

                <div className="mt-6 p-4 bg-[#46c0b5]/10 rounded-lg border-l-4 border-[#46c0b5]">
                  <p className="text-[#265b8f] font-bold">
                    ⏱️ Réponse rapide – accompagnement personnalisé dès le premier contact.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <Card className="bg-[#265b8f] text-[#265b8f]">
                <h3 className="text-2xl font-bold mb-4">📞 Nous Contacter</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/21656890361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  >
                    � WhatsApp: +216 56 890 361
                  </a>
                  <a
                    href="tel:+21627212448"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  >
                    📱 Téléphone: +216 27 212 448
                  </a>
                  <div className="p-3 bg-white/10 rounded-lg">
                    📍 3, Rue des amandes, Résidence Ryma, Khzema Est, Sousse
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="🧠 À quoi s'attendre après votre inscription ?"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Un parcours adapté",
                description: "À votre niveau et à vos objectifs",
                color: "#265b8f",
              },
              {
                icon: "💼",
                title: "Des cas réels",
                description: "Et des outils professionnels",
                color: "#46c0b5",
              },
              {
                icon: "🤝",
                title: "Un suivi personnalisé",
                description: "Et un coaching adapté",
                color: "#ac1f2c",
              },
              {
                icon: "⚡",
                title: "Compétences exploitables",
                description: "Directement sur le terrain",
                color: "#265b8f",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#265b8f] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Flexibility Section */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="💳 Paiement & flexibilité"
            subtitle="Parce que chaque situation est différente"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "💰",
                title: "Paiement flexible",
                description: "Options de paiement adaptées à votre situation financière",
                color: "#265b8f",
              },
              {
                icon: "🎓",
                title: "Solutions adaptées",
                description: "Pour étudiants, startups et entreprises",
                color: "#46c0b5",
              },
              {
                icon: "🧩",
                title: "Formations modulaires",
                description: "Ou parcours complets selon vos besoins",
                color: "#ac1f2c",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#265b8f] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[#265b8f] to-[#1e4a72] text-white p-8 md:p-12">
              <div className="text-center">
                <div className="text-6xl mb-6">🏢</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Entreprises & équipes
                </h2>
                <p className="text-xl leading-relaxed mb-4">
                  Vous souhaitez former ou accompagner votre équipe ?
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  EXSA conçoit des programmes sur mesure, alignés sur vos enjeux stratégiques, votre secteur d'activité et vos objectifs de performance.
                </p>
                <div className="mt-8">
                  <a
                    href="#contact-form"
                    className="inline-block bg-white text-[#265b8f] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Demander un devis entreprise
                  </a>
                </div>
              </div>
            </Card>
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
              href="https://wa.me/21656890361"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#ac1f2c] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📞 WhatsApp: +216 56 890 361
            </a>
            <a
              href="tel:+21627212448"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#ac1f2c] transition-all duration-300"
            >
              📱 Appelez: +216 27 212 448
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
