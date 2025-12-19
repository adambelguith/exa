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
      info: "3, Rue des amandes, Résidence Ryma, Khzema Est, Sousse, Tunisie",
      color: "#265b8f",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Téléphone / WhatsApp",
      info: "+216 56 890 361 / +216 27 212 448",
      color: "#46c0b5",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      title: "Facebook",
      info: "EXSAexpertskillsacademy",
      link: "https://www.facebook.com/EXSAexpertskillsacademy",
      color: "#265b8f",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: "Instagram",
      info: "@exsaconsulting25",
      link: "https://www.instagram.com/exsaconsulting25",
      color: "#ac1f2c",
    },
  ];

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
                {item.link ? (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-[#46c0b5] transition-colors"
                  >
                    {item.info}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm">{item.info}</p>
                )}
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
                      icon: "💼",
                      title: "Conseil en Affaires",
                      description: "Découvrez comment nous pouvons accompagner votre entreprise",
                      color: "#265b8f",
                    },
                    {
                      icon: "👥",
                      title: "Recrutement & GRH",
                      description: "Trouvez les meilleurs talents pour votre organisation",
                      color: "#46c0b5",
                    },
                    {
                      icon: "🎓",
                      title: "Formation Professionnelle",
                      description: "Développez les compétences de vos équipes",
                      color: "#ac1f2c",
                    },
                    {
                      icon: "📅",
                      title: "Rendez-vous Personnalisé",
                      description: "Planifiez une rencontre pour discuter de vos besoins",
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
                    📚 Nos Formations
                  </a>
                  <a
                    href="/a-propos"
                    className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  >
                    ℹ️ À Propos d'EXSA
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8!2d10.6!3d35.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ5JzQ2LjgiTiAxMMKwMzYnMDAuMCJF!5e0!3m2!1sen!2stn!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EXSA Location - 3, Rue des amandes, Résidence Ryma, Khzema Est, Sousse, Tunisie"
            ></iframe>
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
                question: "Quels sont vos domaines d'expertise ?",
                answer: "Nous offrons trois piliers de services : Conseil en Affaires et Accompagnement, Recrutement & Conseil en GRH, et Formation Professionnelle.",
                color: "#265b8f",
              },
              {
                question: "Comment bénéficier de vos services de conseil ?",
                answer: "Contactez-nous via le formulaire ou par téléphone pour discuter de vos besoins. Nous vous proposerons une solution personnalisée adaptée à votre entreprise.",
                color: "#46c0b5",
              },
              {
                question: "Proposez-vous des services de recrutement IT ?",
                answer: "Oui, nous sommes spécialisés dans le recrutement IT et la gestion de carrière, ainsi que dans le conseil en GRH et l'audit RH.",
                color: "#ac1f2c",
              },
              {
                question: "Les formations sont-elles certifiantes ?",
                answer: "Oui, toutes nos formations délivrent un certificat reconnu. Certaines offrent également des certifications professionnelles internationales comme le PMP.",
                color: "#265b8f",
              },
              {
                question: "Quels sont les modes de paiement acceptés ?",
                answer: "Nous acceptons les paiements par virement bancaire, chèque, et espèces. Des facilités de paiement sont disponibles sur demande.",
                color: "#46c0b5",
              },
              {
                question: "Travaillez-vous avec les startups ?",
                answer: "Absolument ! Nous offrons un accompagnement spécialisé pour les startups, incluant le conseil, le recrutement et la formation adaptés à leurs besoins.",
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
