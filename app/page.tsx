'use client';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import SectionTitle from './components/SectionTitle';
import AnimatedSection from './components/AnimatedSection';
import ScrollReveal from './components/ScrollReveal';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  // Rotating Features List - One by One Display
  const featuresList = [
    { icon: "🎯", text: "Stratégie business adaptée" },
    { icon: "🚀", text: "Accompagnement startups" },
    { icon: "💻", text: "Formation Informatique & IT" },
    { icon: "📱", text: "Marketing Digital & Communication" },
    { icon: "🌍", text: "Formation Langues (Français, Anglais, Arabe)" }
  ];

  // Checklist items for animation
  const checklistItems = [
    "Modules flexibles ou parcours certifiants complets",
    "Certifications reconnues et agréées par l'État",
    "Une expérience de formation personnalisée, pratique et orientée résultats, avec un accompagnement premium"
  ];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const [currentChecklistIndex, setCurrentChecklistIndex] = useState(0);
  const [isChecklistVisible, setIsChecklistVisible] = useState(true);

  // Animation for rotating features list
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current item
      setIsVisible(false);
      setTimeout(() => {
        // Change to next item while invisible
        setCurrentFeatureIndex((prev) => (prev + 1) % featuresList.length);
        // Fade in new item
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }, 500); // Fade out duration
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [featuresList.length]);

  // Animation for checklist items
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current item
      setIsChecklistVisible(false);
      setTimeout(() => {
        // Change to next item while invisible
        setCurrentChecklistIndex((prev) => (prev + 1) % checklistItems.length);
        // Fade in new item
        setTimeout(() => {
          setIsChecklistVisible(true);
        }, 100);
      }, 500); // Fade out duration
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [checklistItems.length]);

  const stats = [
    { number: "500+", label: "Porteurs de Projets, PMS, Startups", color: "#ac1f2c" },
    { number: "30+", label: "Formations Disponibles", color: "#265b8f" },
    { number: "95%", label: "Taux de Satisfaction", color: "#46c0b5" },
    { number: "10+", label: "Années d'Expérience", color: "#ac1f2c" },
  ];

  const features = [
    {
      icon: "🧩",
      title: "Des formations 100 % sur mesure",
      description:
        "Chaque apprenant est unique. Nos programmes sont personnalisés selon votre profil, vos objectifs et votre niveau, afin de garantir un apprentissage efficace et directement applicable.",
      color: "#265b8f",
    },
    {
      icon: "🌐",
      title: "Une flexibilité totale (en ligne / présentiel)",
      description:
        "Formations en ligne, en présentiel ou hybrides, avec des horaires adaptables à votre rythme professionnel et personnel.",
      color: "#ac1f2c",
    },
    {
      icon: "🎯",
      title: "Une approche pratique et orientée résultats",
      description:
        "Chez EXSA, vous apprenez en faisant : études de cas réels, ateliers pratiques, outils professionnels et accompagnement pas à pas.",
      color: "#46c0b5",
    },
    {
      icon: "🤝",
      title: "Un accompagnement personnalisé",
      description:
        "Au-delà de la formation, nous vous accompagnons avec du coaching, du consulting et un suivi adapté à votre projet ou à votre évolution professionnelle.",
      color: "#265b8f",
    },
    {
      icon: "👨‍🏫",
      title: "Des formateurs experts et certifiés",
      description:
        "Nos formations sont animées par des consultants et formateurs expérimentés, disposant d'une expertise locale et internationale, et orientés résultats concrets.",
      color: "#ac1f2c",
    },
    {
      icon: "📜",
      title: "Certifications reconnues et agréées par l'État",
      description:
        "Un véritable atout pour renforcer votre crédibilité, valoriser votre parcours et accélérer votre carrière ou votre business.",
      color: "#46c0b5",
    },
  ];

  const formations = [
    {
      title: "Étude de projet & entrepreneuriat",
      description: "Étude de marché, validation d'idée, Business Model Canvas (BMC), business plan, cadre juridique & administratif",
      duration: "Variable",
      level: "Tous niveaux",
      icon: "🚀",
      color: "#265b8f",
    },
    {
      title: "Business Management",
      description: "Gestion d'entreprise, management stratégique, pilotage de la performance, contrôle de gestion",
      duration: "Variable",
      level: "Tous niveaux",
      icon: "💼",
      color: "#ac1f2c",
    },
    {
      title: "E-commerce & Digital Business",
      description: "Création de boutiques en ligne, digital marketing, branding digital, automatisation, outils digitaux & IA",
      duration: "Variable",
      level: "Tous niveaux",
      icon: "🛒",
      color: "#46c0b5",
    },
    {
      title: "Soft Skills & Leadership",
      description: "Leadership, intelligence émotionnelle, communication, gestion d'équipe, développement personnel",
      duration: "Variable",
      level: "Tous niveaux",
      icon: "🧠",
      color: "#265b8f",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - ASYMMETRIC LAYOUT WITH POWERFUL VIDEO */}
      <section className="relative min-h-[600px] lg:min-h-screen overflow-hidden">
        {/* Mobile Background - Powerful Gradient Design */}
        <div className="absolute inset-0 w-full h-full lg:hidden bg-gradient-to-br from-[#265b8f] via-[#1e4a72] to-[#ac1f2c]">
          {/* Mobile Decorative Elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#46c0b5]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-10 w-80 h-80 bg-[#ac1f2c]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#46c0b5]/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          {/* Geometric patterns for mobile */}
          <div className="absolute top-40 right-5 w-32 h-32 border-4 border-[#46c0b5]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-40 left-5 w-24 h-24 border-4 border-white/10 rounded-full animate-pulse"></div>
        </div>

        {/* Video Background - Desktop Only (lg and above) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Sequence 01.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
        
        <div className="relative grid lg:grid-cols-[55%_45%] min-h-[600px] lg:min-h-screen">
          
          {/* LEFT SIDE - Content with Solid Background - POWERFUL DESIGN */}
          <div className="relative flex items-center justify-center px-6 lg:px-16 py-12 lg:py-0 z-10 bg-transparent lg:bg-gradient-to-r lg:from-[#265b8f] lg:via-[#1e4a72]/98 lg:to-transparent lg:-mr-px">
            {/* Desktop Decorative Elements - Hidden on Mobile */}
            <div className="hidden lg:block absolute top-20 left-10 w-40 h-40 bg-[#46c0b5]/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="hidden lg:block absolute bottom-20 left-10 w-64 h-64 bg-[#ac1f2c]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="hidden lg:block absolute top-1/2 right-10 w-32 h-32 bg-[#46c0b5]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10 max-w-3xl">

                {/* <div className="animate-fadeInUp mb-4 lg:mb-6" style={{ animationDelay: '0.15s' }}>
                  <Image
                    src="/logo-white.png"
                    alt="EXSA"
                    width={84}
                    height={84}
                    priority
                    className="h-16 w-auto lg:h-24 drop-shadow-2xl"
                  />
                </div> */}

                {/* Main Heading - MASSIVE */}
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white pt-6 md:mb-16 lg:mb-24 leading-[1.1] animate-fadeInUp transform hover:scale-[1.02] transition-transform duration-500" style={{ animationDelay: '0.2s' }}>
                  Expert Skills<br />
                  <span className="text-[#46c0b5] drop-shadow-2xl">Academy</span>
                </h1>

                {/* Description - Larger & More Powerful */}
                <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>


                  <div className="min-h-[80px] lg:min-h-[100px] flex items-start">
                    <div 
                      key={currentChecklistIndex}
                      className={`flex items-start space-x-3 transition-all duration-700 ease-in-out ${
                        isChecklistVisible 
                          ? 'opacity-100 translate-x-0 scale-100' 
                          : 'opacity-0 -translate-x-12 scale-90'
                      }`}
                    >
                      <span className="text-[#46c0b5] text-2xl lg:text-3xl mt-1 transform transition-transform duration-300">✓</span>
                      <p className="text-lg lg:text-xl text-white/95 font-semibold leading-relaxed">
                        {checklistItems[currentChecklistIndex]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features List - Rotating One by One Display - Enhanced Animation */}
                <div className="mb-8 lg:mb-12 min-h-[60px] lg:min-h-[80px] flex items-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                  <div 
                    key={currentFeatureIndex}
                    className={`flex items-center space-x-4 text-white transition-all duration-700 ease-in-out ${
                      isVisible 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-0 -translate-x-12 scale-90'
                    }`}
                  >
                    <span className="text-3xl lg:text-5xl transform transition-transform duration-300 hover:scale-125 hover:rotate-12">
                      {featuresList[currentFeatureIndex].icon}
                    </span>
                    <span className="text-xl lg:text-3xl font-black drop-shadow-lg">
                      {featuresList[currentFeatureIndex].text}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons - Larger & More Powerful */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <Button 
                    href="/formations" 
                    size="large" 
                    className="bg-[#ac1f2c] text-white hover:bg-[#8d1924] shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-lg lg:text-2xl px-8 py-4 lg:px-16 lg:py-7 font-black rounded-2xl"
                  >
                    🎓 Nos Formations
                  </Button>
                  <Button 
                    href="/contact" 
                    variant="outline" 
                    size="large" 
                    className="border-4 border-white text-white hover:bg-white hover:text-[#265b8f] shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-lg lg:text-2xl px-8 py-4 lg:px-16 lg:py-7 font-black rounded-2xl"
                  >
                    📞 Contact
                  </Button>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE - Pure Video (No Blue in Center) - Hidden on Mobile */}
            <div className="hidden lg:block relative lg:h-screen">
              {/* Ultra Minimal Left Edge Blend Only */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-24  pointer-events-none"></div>
              
              {/* Subtle Vignette for Depth */}
              <div className="absolute inset-0 pointer-events-none"></div>


              {/* Floating Info Badge */}
              <div className="absolute top-8 right-8 z-20 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 shadow-2xl">
                  <span className="text-white font-semibold text-sm">🎬 Centre de Formation EXSA</span>
                </div>
              </div>
            </div>

          </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block z-30">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-sm font-medium drop-shadow-lg">Scroll</span>
            <svg
              className="w-6 h-6 text-white drop-shadow-lg"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section - SOLID COLORS with Scroll Animation */}
      <AnimatedSection direction="left" color="#265b8f">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal
                  key={index}
                  animation="zoom"
                  delay={index * 100}
                  duration={600}
                >
                  <div
                    className="relative text-center p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 overflow-hidden group min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex flex-col items-center justify-center"
                    style={{ backgroundColor: stat.color }}
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-3 text-white drop-shadow-lg">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm lg:text-base font-bold text-white/95 uppercase tracking-wide leading-tight">
                        {stat.label}
                      </div>
                    </div>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section with Curtain Reveal */}
      <AnimatedSection direction="right" color="#46c0b5">
        <section className="py-20 bg-[#ecf6fd]">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal animation="fade" duration={800}>
            <SectionTitle
              title="Pourquoi Choisir EXSA ?"
              accentColor="teal"
            />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal
                  key={index}
                  animation="slide"
                  direction="up"
                  delay={index * 150}
                  duration={700}
                >
                  <Card className="text-center group relative overflow-hidden hover:shadow-2xl">
                    {/* Background glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                      style={{ backgroundColor: feature.color }}
                    ></div>
                    
                    <div className="relative z-10">
                      <div 
                        className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mb-6 mx-auto shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                        style={{ backgroundColor: feature.color }}
                      >
                        <span className="transform group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-[#265b8f] mb-4 group-hover:text-[#ac1f2c] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Formations Preview - SOLID COLORS with Scroll Animation */}
      <AnimatedSection direction="top" color="#ac1f2c">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal animation="fade" duration={800}>
              <SectionTitle
                title="Nos Formations Populaires"
                subtitle="Découvrez nos programmes de formation les plus demandés"
                accentColor="blue"
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {formations.map((formation, index) => (
                <ScrollReveal
                  key={index}
                  animation="flip"
                  direction="up"
                  delay={index * 200}
                  duration={800}
                >
                  <Card className="overflow-hidden p-0 h-full flex flex-col">
                    <div 
                      className="h-28 md:h-32 lg:h-36 flex items-center justify-center text-5xl md:text-6xl transition-transform duration-300 hover:scale-110"
                      style={{ backgroundColor: formation.color }}
                    >
                      {formation.icon}
                    </div>
                    <div className="p-5 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-[#265b8f] mb-3 leading-tight">
                        {formation.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed flex-grow">{formation.description}</p>
                      <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {formation.duration}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          {formation.level}
                        </span>
                      </div>
                      <div className="w-full">
                        <a 
                          href="/formations"
                          className="block w-full text-center px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                          style={{ backgroundColor: formation.color }}
                        >
                          En savoir plus
                        </a>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="zoom" delay={600} duration={600}>
              <div className="text-center mt-12">
                <Button href="/formations" size="large" variant="secondary">
                  Voir toutes les formations
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section - SOLID COLOR with Slide Animation */}
      <AnimatedSection direction="bottom" color="#265b8f">
        <section className="py-20 bg-[#ac1f2c] text-white relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <ScrollReveal animation="zoom" duration={600}>
              <div className="text-6xl mb-6">🎯</div>
            </ScrollReveal>
            <ScrollReveal animation="slide" direction="up" delay={100} duration={700}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à Commencer Votre Formation ?
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade" delay={200} duration={600}>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Rejoignez des centaines d'étudiants qui ont transformé leur carrière avec nos formations
              </p>
            </ScrollReveal>
            <ScrollReveal animation="slide" direction="up" delay={300} duration={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-[#ac1f2c] hover:bg-[#f8f9fa] hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 font-black text-xl px-12 py-5 rounded-2xl shadow-xl"
                >
                  S'inscrire Maintenant
                </a>
                <a
                  href="/a-propos"
                  className="border-4 border-white text-white hover:bg-white hover:text-[#ac1f2c] hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 font-black text-xl px-12 py-5 rounded-2xl shadow-xl"
                >
                  En savoir plus
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
