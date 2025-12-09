'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedSection from '../components/AnimatedSection';

export default function Prestations() {
  const conseilAffaires = [
    { text: "Création, gestion et développement des entreprises et des projets", icon: "🏢" },
    { text: "Audit administratif et financier & restructuration des entreprises", icon: "📊" },
    { text: "Elaboration des BMC, analyse SWOT et analyse PESTEL", icon: "📋" },
    { text: "Etude de projet (Plan d'affaires)", icon: "📄" },
    { text: "Elaboration de pitch deck et présentation des projets", icon: "🎤" },
    { text: "Lancement et accompagnement des startups", icon: "🚀" },
    { text: "Gestion des projets IT", icon: "💻" },
    { text: "Transformation digitale des organisations", icon: "⚡" },
    { text: "Développement des Brands", icon: "🎨" },
    { text: "Mise en place de système de Gestion des Risques", icon: "🛡️" },
    { text: "Audit ISO 9001 - SMQ", icon: "✅" },
    { text: "Conseil en contrôle de Gestion des processus", icon: "🔄" },
    { text: "Conseil en import/export", icon: "🌍" },
  ];

  const recrutementGRH = [
    { text: "Recrutement IT et gestion de carrière", icon: "💼" },
    { text: "Conseil en GRH", icon: "👥" },
    { text: "Analyse de Besoin en RH", icon: "📈" },
    { text: "Audit RH", icon: "🔍" },
    { text: "Mise en place d'un SIRH", icon: "💾" },
    { text: "Audit social", icon: "📊" },
    { text: "Cadre juridique & conseil en code de travail et droit social", icon: "⚖️" },
    { text: "GPEC (Gestion prévisionnelle des emplois et des compétences)", icon: "📅" },
    { text: "Développement des performances et des compétences RH", icon: "📚" },
    { text: "Ergonomie et santé de travail", icon: "🏥" },
    { text: "R&D en RH 4.0", icon: "🔬" },
  ];

  const formations = [
    { text: "Des formations en management intégrant une approche unique", icon: "🎯" },
    { text: "Pitching, présentation des projets et prise de parole en public & techniques de communication", icon: "🎤" },
    { text: "Processus de gestion d'entreprises \"Business management\"", icon: "💼" },
    { text: "Optimisation des profils LinkedIn", icon: "💼" },
    { text: "Techniques de Coaching et TOT", icon: "👔" },
    { text: "Leadership et intelligence émotionnelle (Softskills)", icon: "🧠" },
    { text: "PMP (Project Management Professional)", icon: "📋" },
    { text: "Marketing digital et branding", icon: "📱" },
    { text: "Elaboration des tableaux de boards et évaluation des performances KPI", icon: "📊" },
    { text: "Veille stratégique et intelligence économique", icon: "🔍" },
    { text: "Et tout autre type de formation dans notre champs d'expertise", icon: "🎓" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Powerful Design */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#265b8f] via-[#1e4a72] to-[#ac1f2c] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#46c0b5]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ac1f2c]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#46c0b5]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal animation="zoom" duration={800}>
              <div className="text-7xl mb-6">💼</div>
            </ScrollReveal>
            <ScrollReveal animation="slide" direction="up" delay={100} duration={800}>
              <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl" style={{ 
                letterSpacing: '0.02em'
              }}>
                NOS PRÉSTATIONS
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade" delay={200} duration={800}>
              <p className="text-xl md:text-2xl opacity-95 leading-relaxed font-semibold max-w-3xl mx-auto">
                Découvrez notre gamme complète de services en <span className="text-[#46c0b5] font-bold">conseil</span>, 
                <span className="text-[#46c0b5] font-bold"> recrutement</span> et 
                <span className="text-[#46c0b5] font-bold"> formation</span> professionnelle
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Three Pillars Section - Powerful Animated Design */}
      <AnimatedSection direction="left" color="#265b8f">
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            
            <ScrollReveal animation="fade" duration={800}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-[#265b8f] mb-4">
                  Nos Trois Piliers d'Excellence
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-[#265b8f] via-[#46c0b5] to-[#ac1f2c] mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              {/* Column 1: CONSEIL EN AFFAIRES ET ACCOMPAGNEMENT */}
              <ScrollReveal animation="slide" direction="up" delay={0} duration={800}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:-rotate-1 transition-all duration-500 group border-t-8 border-[#265b8f]">
                  <div className="bg-gradient-to-br from-[#265b8f] to-[#1e4a72] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    <div className="text-5xl mb-4 relative z-10">💼</div>
                    <h2 className="text-2xl md:text-3xl font-black mb-2 relative z-10 leading-tight">
                      CONSEIL EN AFFAIRES
                    </h2>
                    <h3 className="text-lg font-semibold opacity-90 relative z-10">
                      ET ACCOMPAGNEMENT
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <ul className="space-y-4">
                      {conseilAffaires.map((item, index) => (
                        <li 
                          key={index} 
                          className="flex items-start group/item hover:bg-[#ecf6fd] p-3 rounded-lg transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                        >
                          <span className="text-2xl mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300">
                            {item.icon}
                          </span>
                          <span className="text-gray-700 leading-relaxed font-medium group-hover/item:text-[#265b8f] transition-colors">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-8 pb-8">
                    <Button 
                      href="/contact" 
                      className="w-full bg-[#265b8f] hover:bg-[#1e4a72] text-white"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Column 2: RECRUTEMENT ET CONSEIL EN GRH */}
              <ScrollReveal animation="slide" direction="up" delay={150} duration={800}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 group border-t-8 border-[#46c0b5]">
                  <div className="bg-gradient-to-br from-[#46c0b5] to-[#3aa89e] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    <div className="text-5xl mb-4 relative z-10">👥</div>
                    <h2 className="text-2xl md:text-3xl font-black mb-2 relative z-10 leading-tight">
                      RECRUTEMENT
                    </h2>
                    <h3 className="text-lg font-semibold opacity-90 relative z-10">
                      ET CONSEIL EN GRH
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <ul className="space-y-4">
                      {recrutementGRH.map((item, index) => (
                        <li 
                          key={index} 
                          className="flex items-start group/item hover:bg-[#ecf6fd] p-3 rounded-lg transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                        >
                          <span className="text-2xl mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300">
                            {item.icon}
                          </span>
                          <span className="text-gray-700 leading-relaxed font-medium group-hover/item:text-[#46c0b5] transition-colors">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-8 pb-8">
                    <Button 
                      href="/contact" 
                      className="w-full bg-[#46c0b5] hover:bg-[#3aa89e] text-white"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Column 3: FORMATION */}
              <ScrollReveal animation="slide" direction="up" delay={300} duration={800}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:-rotate-1 transition-all duration-500 group border-t-8 border-[#ac1f2c]">
                  <div className="bg-gradient-to-br from-[#ac1f2c] to-[#8d1924] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    <div className="text-5xl mb-4 relative z-10">🎓</div>
                    <h2 className="text-2xl md:text-3xl font-black mb-2 relative z-10 leading-tight">
                      FORMATION
                    </h2>
                    <h3 className="text-lg font-semibold opacity-90 relative z-10">
                      PROFESSIONNELLE
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <ul className="space-y-4">
                      {formations.map((item, index) => (
                        <li 
                          key={index} 
                          className="flex items-start group/item hover:bg-[#ecf6fd] p-3 rounded-lg transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                        >
                          <span className="text-2xl mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300">
                            {item.icon}
                          </span>
                          <span className="text-gray-700 leading-relaxed font-medium group-hover/item:text-[#ac1f2c] transition-colors">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-8 pb-8">
                    <Button 
                      href="/formations" 
                      className="w-full bg-[#ac1f2c] hover:bg-[#8d1924] text-white"
                    >
                      Voir nos formations
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Our Services - Animated */}
      <AnimatedSection direction="right" color="#46c0b5">
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal animation="fade" duration={800}>
              <SectionTitle
                title="Pourquoi Choisir Nos Services ?"
                subtitle="Une expertise reconnue et des résultats concrets"
                accentColor="teal"
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: "🏆",
                  title: "Excellence",
                  description: "Des services de qualité supérieure adaptés à vos besoins",
                  color: "#265b8f",
                },
                {
                  icon: "⚡",
                  title: "Réactivité",
                  description: "Une équipe disponible et réactive pour vous accompagner",
                  color: "#ac1f2c",
                },
                {
                  icon: "🎯",
                  title: "Expertise",
                  description: "Des consultants expérimentés dans tous les domaines",
                  color: "#46c0b5",
                },
                {
                  icon: "💡",
                  title: "Innovation",
                  description: "Des solutions modernes et innovantes pour votre entreprise",
                  color: "#265b8f",
                },
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  animation="zoom"
                  delay={index * 100}
                  duration={600}
                >
                  <div 
                    className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
                    style={{ borderTop: `4px solid ${item.color}` }}
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-500"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#265b8f] mb-3 group-hover:text-[#ac1f2c] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section - Powerful Gradient */}
      <AnimatedSection direction="bottom" color="#ac1f2c">
        <section className="py-20 bg-gradient-to-br from-[#ac1f2c] via-[#8d1924] to-[#265b8f] text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <ScrollReveal animation="zoom" duration={600}>
              <div className="text-6xl mb-6">🚀</div>
            </ScrollReveal>
            <ScrollReveal animation="slide" direction="up" delay={100} duration={700}>
              <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl">
                Prêt à Transformer Votre Entreprise ?
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade" delay={200} duration={600}>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 font-semibold">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider
              </p>
            </ScrollReveal>
            <ScrollReveal animation="slide" direction="up" delay={300} duration={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="/contact"
                  size="large"
                  className="bg-white text-[#ac1f2c] hover:bg-gray-100 shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-xl px-12 py-6 font-black"
                >
                  📞 Nous Contacter
                </Button>
                <Button
                  href="/formations"
                  variant="outline"
                  size="large"
                  className="border-4 border-white text-white hover:bg-white hover:text-[#ac1f2c] shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-xl px-12 py-6 font-black"
                >
                  🎓 Nos Formations
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
