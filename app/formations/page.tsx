'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useState } from 'react';

export default function Formations() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const categories = [
    'Toutes',
    'Management',
    'Communication',
    'Business Management',
    'Coaching & Leadership',
    'Certification',
    'Marketing & Branding',
    'Performance & KPI',
    'Autres',
  ];

  const formations = [
    {
      title: "Formations en Management",
      category: "Management",
      description: "Des formations en management intégrant une approche unique",
      duration: "Variable",
      level: "Tous niveaux",
      price: "Sur demande",
      modules: ["Approche unique en management", "Techniques modernes de gestion", "Stratégies d'entreprise"],
      color: "#265b8f",
      icon: "📊",
    },
    {
      title: "Pitching & Présentation de Projets",
      category: "Communication",
      description: "Pitching, présentation des projets et prise de parole en public & techniques de communication",
      duration: "Variable",
      level: "Tous niveaux",
      price: "Sur demande",
      modules: ["Techniques de pitch", "Prise de parole en public", "Communication efficace"],
      color: "#ac1f2c",
      icon: "🎤",
    },
    {
      title: "Business Management",
      category: "Business Management",
      description: "Processus de gestion d'entreprises \"Business management\"",
      duration: "Variable",
      level: "Tous niveaux",
      price: "Sur demande",
      modules: ["Processus de gestion", "Optimisation des opérations", "Stratégie d'entreprise"],
      color: "#46c0b5",
      icon: "💼",
    },
    {
      title: "Optimisation des Profils LinkedIn",
      category: "Communication",
      description: "Apprenez à optimiser votre profil LinkedIn pour maximiser votre visibilité professionnelle",
      duration: "Variable",
      level: "Tous niveaux",
      price: "Sur demande",
      modules: ["Optimisation de profil", "Réseautage professionnel", "Personal branding"],
      color: "#265b8f",
      icon: "💼",
    },
    {
      title: "Techniques de Coaching et TOT",
      category: "Coaching & Leadership",
      description: "Techniques de Coaching et TOT (Training of Trainers)",
      duration: "Variable",
      level: "Intermédiaire à Avancé",
      price: "Sur demande",
      modules: ["Coaching professionnel", "Formation de formateurs", "Techniques pédagogiques"],
      color: "#ac1f2c",
      icon: "👔",
    },
    {
      title: "Leadership et Intelligence Émotionnelle",
      category: "Coaching & Leadership",
      description: "Leadership et intelligence émotionnelle (Softskills)",
      duration: "Variable",
      level: "Tous niveaux",
      price: "Sur demande",
      modules: ["Leadership", "Intelligence émotionnelle", "Softskills", "Gestion d'équipe"],
      color: "#46c0b5",
      icon: "🧠",
    },
    {
      title: "PMP - Project Management Professional",
      category: "Certification",
      description: "PMP (Project Management Professional) - Certification professionnelle en gestion de projet",
      duration: "Variable",
      level: "Avancé",
      price: "Sur demande",
      modules: ["Préparation PMP", "Gestion de projet", "Certification professionnelle"],
      color: "#265b8f",
      icon: "📋",
    },
    {
      title: "Marketing Digital et Branding",
      category: "Marketing & Branding",
      description: "Marketing digital et branding",
      duration: "Variable",
      level: "Tous niveaux",
      price: "Sur demande",
      modules: ["Marketing digital", "Branding", "Stratégies de communication", "Réseaux sociaux"],
      color: "#ac1f2c",
      icon: "📱",
    },
    {
      title: "Tableaux de Bord et KPI",
      category: "Performance & KPI",
      description: "Elaboration des tableaux de boards et évaluation des performances KPI",
      duration: "Variable",
      level: "Intermédiaire à Avancé",
      price: "Sur demande",
      modules: ["Tableaux de bord", "KPI et métriques", "Analyse de performance", "Reporting"],
      color: "#46c0b5",
      icon: "📊",
    },
    {
      title: "Veille Stratégique et Intelligence Économique",
      category: "Autres",
      description: "Veille stratégique et intelligence économique",
      duration: "Variable",
      level: "Intermédiaire à Avancé",
      price: "Sur demande",
      modules: ["Veille stratégique", "Intelligence économique", "Analyse de marché", "Concurrence"],
      color: "#265b8f",
      icon: "🔍",
    },
    {
      title: "Autres Formations",
      category: "Autres",
      description: "Et tout autre type de formation dans notre champs d'expertise",
      duration: "Variable",
      level: "Tous niveaux",
      price: "Sur demande",
      modules: ["Formations sur mesure", "Adaptées à vos besoins", "Dans notre champ d'expertise"],
      color: "#ac1f2c",
      icon: "🎓",
    },
  ];

  const filteredFormations = selectedCategory === 'Toutes'
    ? formations
    : formations.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - SOLID COLOR */}
      <section className="pt-32 pb-20 bg-[#265b8f] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">📚</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Nos Formations
            </h1>
            <p className="text-xl opacity-90 leading-relaxed animate-fadeInUp">
              Découvrez notre catalogue complet de formations professionnelles
              pour développer vos compétences et booster votre carrière
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md ${
                  selectedCategory === category
                    ? 'bg-[#ac1f2c] text-white scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation, index) => (
              <Card
                key={index}
                className="overflow-hidden p-0 flex flex-col h-full"
              >
                <div 
                  className="h-32 flex items-center justify-center text-6xl"
                  style={{ backgroundColor: formation.color }}
                >
                  {formation.icon}
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="px-3 py-1 text-white text-xs font-semibold rounded-full"
                      style={{ backgroundColor: formation.color }}
                    >
                      {formation.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#265b8f] mb-3">
                    {formation.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow">
                    {formation.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-[#46c0b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">Durée:</span>&nbsp;{formation.duration}
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-[#46c0b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-semibold">Niveau:</span>&nbsp;{formation.level}
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-[#46c0b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">Prix:</span>&nbsp;{formation.price}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[#265b8f] mb-2">
                      Modules principaux:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formation.modules.map((module, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#ecf6fd] text-xs text-[#265b8f] rounded-md border border-[#46c0b5]/30 font-medium"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button href="/contact" className="w-full mt-auto" style={{ backgroundColor: formation.color }}>
                    S'inscrire
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredFormations.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-[#265b8f] mb-2">
                Aucune formation trouvée
              </h3>
              <p className="text-gray-600">
                Essayez de sélectionner une autre catégorie
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Pourquoi Choisir Nos Formations ?"
            subtitle="Des avantages qui font la différence"
            accentColor="red"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Certification Reconnue",
                description: "Obtenez un certificat reconnu par les entreprises",
                color: "#265b8f",
              },
              {
                icon: "👨‍🏫",
                title: "Formateurs Experts",
                description: "Apprenez auprès de professionnels expérimentés",
                color: "#ac1f2c",
              },
              {
                icon: "💼",
                title: "Stages en Entreprise",
                description: "Bénéficiez d'une expérience pratique",
                color: "#46c0b5",
              },
              {
                icon: "📚",
                title: "Support Pédagogique",
                description: "Accédez à des ressources complètes",
                color: "#265b8f",
              },
              {
                icon: "🤝",
                title: "Suivi Personnalisé",
                description: "Profitez d'un accompagnement individuel",
                color: "#ac1f2c",
              },
              {
                icon: "⚡",
                title: "Modalités Flexibles",
                description: "Présentiel, en ligne ou hybride",
                color: "#46c0b5",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: benefit.color }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#265b8f] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Comment S'inscrire ?"
            subtitle="Un processus simple en 4 étapes"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choisir",
                description: "Sélectionnez la formation qui vous correspond",
                color: "#265b8f",
              },
              {
                step: "02",
                title: "Contacter",
                description: "Remplissez le formulaire de contact",
                color: "#ac1f2c",
              },
              {
                step: "03",
                title: "Valider",
                description: "Confirmez votre inscription",
                color: "#46c0b5",
              },
              {
                step: "04",
                title: "Commencer",
                description: "Démarrez votre parcours de formation",
                color: "#265b8f",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#265b8f] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - SOLID COLOR */}
      <section className="py-20 bg-[#ac1f2c] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Commencer Votre Formation ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd'hui pour plus d'informations sur nos programmes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="large"
              className="bg-white text-[#ac1f2c] hover:bg-gray-100"
            >
              Demander des Informations
            </Button>
            <Button
              href="/a-propos"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-[#ac1f2c]"
            >
              En savoir plus sur EXA
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
