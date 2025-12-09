'use client';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import SectionTitle from './components/SectionTitle';
import AnimatedSection from './components/AnimatedSection';
import ScrollReveal from './components/ScrollReveal';
import { useState, useEffect } from 'react';

export default function Home() {
  // Rotating Features List - One by One Display
  const featuresList = [
    { icon: "📊", text: "Formation PMS certifiante" },
    { icon: "🎯", text: "Stratégie business adaptée" },
    { icon: "🚀", text: "Accompagnement startups" },
    { icon: "💻", text: "Formation Informatique & IT" },
    { icon: "📱", text: "Marketing Digital & Communication" },
    { icon: "🌍", text: "Formation Langues (Français, Anglais, Arabe)" }
  ];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    }, 2000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [featuresList.length]);

  const stats = [
    { number: "500+", label: "Étudiants Formés", color: "#ac1f2c" },
    { number: "50+", label: "Formations Disponibles", color: "#265b8f" },
    { number: "95%", label: "Taux de Satisfaction", color: "#46c0b5" },
    { number: "10+", label: "Années d'Expérience", color: "#ac1f2c" },
  ];

  const features = [
    {
      icon: "📊",
      title: "PMS & Project Management",
      description: "Maîtrisez les systèmes de gestion de projets et les méthodologies agiles",
      color: "#265b8f",
    },
    {
      icon: "🎯",
      title: "Stratégie Business",
      description: "Développez votre vision stratégique et vos compétences en management d'entreprise",
      color: "#ac1f2c",
    },
    {
      icon: "🚀",
      title: "Accompagnement Startups",
      description: "Formations adaptées aux besoins spécifiques des startups tunisiennes",
      color: "#46c0b5",
    },
    {
      icon: "💼",
      title: "Compétences Managériales",
      description: "Leadership, gestion d'équipe et outils de management moderne",
      color: "#265b8f",
    },
  ];

  const formations = [
    {
      title: "PMS - Project Management System",
      description: "Maîtrisez les systèmes de gestion de projets et les outils PMS modernes",
      duration: "4 mois",
      level: "Intermédiaire à Avancé",
      icon: "📊",
      color: "#265b8f",
    },
    {
      title: "Stratégie Business & Management",
      description: "Développez votre vision stratégique et vos compétences en management d'entreprise",
      duration: "5 mois",
      level: "Tous niveaux",
      icon: "🎯",
      color: "#ac1f2c",
    },
    {
      title: "Management pour Startups",
      description: "Formation spécialisée pour entrepreneurs et dirigeants de startups en Tunisie",
      duration: "3 mois",
      level: "Débutant à Intermédiaire",
      icon: "🚀",
      color: "#46c0b5",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - ASYMMETRIC LAYOUT WITH POWERFUL VIDEO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background - Full Screen Behind Everything */}
        <div className="absolute inset-0 w-full h-full">
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
        
        <div className="relative grid lg:grid-cols-[55%_62%] min-h-screen">
          
          {/* LEFT SIDE - Content with Solid Background - POWERFUL DESIGN */}
          <div className="relative flex items-center justify-center px-8 lg:px-16 py-20 lg:py-0 z-10 bg-gradient-to-br from-[#265b8f] via-[#1e4a72] to-[#ac1f2c] lg:bg-gradient-to-r lg:from-[#265b8f] lg:via-[#1e4a72]/98 lg:to-transparent">
            {/* Enhanced Decorative Elements */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-[#46c0b5]/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#ac1f2c]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-10 w-32 h-32 bg-[#46c0b5]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10 max-w-3xl">
                {/* Logo - Larger */}
                <div className="lg:mt-24 mt-8 animate-fadeInUp">
                  <img 
                    src="/logo.png" 
                    alt="EXSA Logo" 
                    className="w-40 h-40 lg:w-48 lg:h-48 object-contain filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Main Heading - MASSIVE */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-8 leading-[1.1] animate-fadeInUp transform hover:scale-[1.02] transition-transform duration-500" style={{ animationDelay: '0.2s' }}>
                  Expert Skills<br />
                  <span className="text-[#46c0b5] drop-shadow-2xl">Academy</span>
                </h1>

                {/* Subtitle - Larger */}
                <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <div className="inline-block bg-[#46c0b5] text-white px-8 py-3 lg:px-10 lg:py-4 rounded-full font-black text-xl lg:text-2xl mb-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                    PMS & Stratégie Business
                  </div>
                </div>

                {/* Description - Larger & More Powerful */}
                <p className="text-2xl lg:text-3xl xl:text-4xl text-white/95 mb-10 leading-relaxed font-bold animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  Formations spécialisées en <strong className="text-[#46c0b5]">Project Management System</strong>, 
                  <strong className="text-[#46c0b5]"> stratégie business</strong> et <strong className="text-[#46c0b5]">management</strong> pour startups en Tunisie
                </p>

                {/* Features List - Rotating One by One Display - Enhanced Animation */}
                <div className="mb-12 min-h-[80px] flex items-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                  <div 
                    key={currentFeatureIndex}
                    className={`flex items-center space-x-4 text-white transition-all duration-700 ease-in-out ${
                      isVisible 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-0 -translate-x-12 scale-90'
                    }`}
                  >
                    <span className="text-4xl lg:text-5xl transform transition-transform duration-300 hover:scale-125 hover:rotate-12">
                      {featuresList[currentFeatureIndex].icon}
                    </span>
                    <span className="text-2xl lg:text-3xl font-black drop-shadow-lg">
                      {featuresList[currentFeatureIndex].text}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons - Larger & More Powerful */}
                <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp mb-8" style={{ animationDelay: '0.6s' }}>
                  <Button 
                    href="/formations" 
                    size="large" 
                    className="bg-[#46c0b5] text-white hover:bg-[#3aa89e] shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-xl lg:text-2xl px-12 py-6 lg:px-16 lg:py-7 font-black rounded-2xl"
                  >
                    🎓 Nos Formations
                  </Button>
                  <Button 
                    href="/contact" 
                    variant="outline" 
                    size="large" 
                    className="border-4 border-white text-white hover:bg-white hover:text-[#265b8f] shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-xl lg:text-2xl px-12 py-6 lg:px-16 lg:py-7 font-black rounded-2xl"
                  >
                    📞 Contact
                  </Button>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE - Pure Video (No Blue in Center) */}
            <div className="relative h-[50vh] lg:h-screen">
              {/* Ultra Minimal Left Edge Blend Only */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#265b8f]/15 to-transparent pointer-events-none"></div>
              
              {/* Subtle Vignette for Depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none"></div>


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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <ScrollReveal
                  key={index}
                  animation="zoom"
                  delay={index * 100}
                  duration={600}
                >
                  <div
                    className="relative text-center p-8 rounded-3xl shadow-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 overflow-hidden group"
                    style={{ backgroundColor: stat.color }}
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative z-10">
                      <div className="text-5xl md:text-6xl font-black mb-3 text-white drop-shadow-lg">
                        {stat.number}
                      </div>
                      <div className="text-sm md:text-base font-bold text-white/95 uppercase tracking-wide">
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
              title="Pourquoi Choisir EXA ?"
              subtitle="Spécialisés en PMS, stratégie business et management pour startups en Tunisie"
              accentColor="teal"
            />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {formations.map((formation, index) => (
                <ScrollReveal
                  key={index}
                  animation="flip"
                  direction="up"
                  delay={index * 200}
                  duration={800}
                >
                  <Card className="overflow-hidden p-0">
                    <div 
                      className="h-32 flex items-center justify-center text-6xl transition-transform duration-300 hover:scale-110"
                      style={{ backgroundColor: formation.color }}
                    >
                      {formation.icon}
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#265b8f] mb-3">
                        {formation.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{formation.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
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
                          className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  size="large"
                  className="bg-white text-[#ac1f2c] hover:bg-gray-100"
                >
                  S'inscrire Maintenant
                </Button>
                <Button
                  href="/a-propos"
                  variant="outline"
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-[#ac1f2c]"
                >
                  En savoir plus
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
