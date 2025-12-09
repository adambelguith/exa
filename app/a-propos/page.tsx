'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function APropos() {
  const values = [
    {
      icon: "📊",
      title: "Expertise PMS",
      description: "Spécialisation en Project Management System et méthodologies agiles",
      color: "#265b8f",
    },
    {
      icon: "🎯",
      title: "Stratégie Business",
      description: "Formations en stratégie d'entreprise et management adaptées au marché tunisien",
      color: "#ac1f2c",
    },
    {
      icon: "🚀",
      title: "Focus Startups",
      description: "Accompagnement spécialisé pour entrepreneurs et dirigeants de startups",
      color: "#46c0b5",
    },
    {
      icon: "💼",
      title: "Compétences Managériales",
      description: "Développement des compétences en leadership et gestion d'équipe",
      color: "#265b8f",
    },
  ];

  const team = [
    {
      name: "Dr. Mohamed Alami",
      role: "Directeur Général",
      description: "Expert en PMS et stratégie business avec 15 ans d'expérience dans le management d'entreprises",
      color: "#265b8f",
      icon: "👨‍💼",
    },
    {
      name: "Sarah Bennani",
      role: "Directrice Pédagogique",
      description: "Spécialiste en management stratégique et accompagnement de startups en Tunisie",
      color: "#ac1f2c",
      icon: "👩‍🏫",
    },
    {
      name: "Karim Idrissi",
      role: "Responsable PMS & Stratégie",
      description: "Expert en Project Management System et méthodologies agiles pour startups",
      color: "#46c0b5",
      icon: "👨‍💻",
    },
  ];

  const achievements = [
      {
        year: "2014",
        title: "Création d'EXA",
        description: "Lancement du centre de formation spécialisé en PMS et stratégie business pour startups en Tunisie",
        color: "#265b8f",
      },
    {
      year: "2017",
      title: "Certification Qualité",
      description: "Obtention de la certification Qualiopi pour la qualité de nos formations",
      color: "#ac1f2c",
    },
    {
      year: "2020",
      title: "Expansion Digitale",
      description: "Lancement de notre plateforme de formation en ligne",
      color: "#46c0b5",
    },
      {
        year: "2024",
        title: "500+ Diplômés",
        description: "Plus de 500 entrepreneurs et dirigeants formés en PMS et stratégie business, avec un taux de réussite de 85%",
        color: "#265b8f",
      },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - SOLID COLOR */}
      <section className="pt-32 pb-20 bg-[#265b8f] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🏫</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              À Propos d'EXA
            </h1>
            <p className="text-xl opacity-90 leading-relaxed animate-fadeInUp">
              Expert Skills Academy est un centre de formation spécialisé en <strong>PMS (Project Management System)</strong>, 
              <strong>stratégie business</strong> et <strong>management</strong> pour startups en Tunisie. 
              Nous formons les entrepreneurs et dirigeants de demain.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#ecf6fd] border-l-4 border-[#265b8f]">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-[#265b8f] mb-4">Notre Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Devenir le centre de formation de référence en <strong>PMS et stratégie business</strong> en Tunisie, 
                reconnu pour l'excellence de nos programmes en management et le succès des startups que nous formons. 
                Nous aspirons à créer un écosystème où chaque entrepreneur peut développer son plein potentiel 
                et réussir sur le marché tunisien.
              </p>
            </Card>

            <Card className="bg-[#ecf6fd] border-l-4 border-[#ac1f2c]">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold text-[#ac1f2c] mb-4">Notre Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Offrir des formations spécialisées en <strong>PMS, stratégie business et management</strong> de haute qualité, 
                adaptées aux besoins spécifiques des <strong>startups tunisiennes</strong>. Nous nous engageons à accompagner 
                chaque entrepreneur et dirigeant dans son parcours d'apprentissage, en mettant l'accent sur les compétences 
                managériales et stratégiques essentielles pour réussir en Tunisie.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Nos Valeurs"
            subtitle="Les principes qui guident notre action au quotidien"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: value.color }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#265b8f] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Notre Histoire"
            subtitle="Une décennie d'excellence et d'innovation"
            accentColor="blue"
          />

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start mb-12 last:mb-0 animate-slideInLeft"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ backgroundColor: achievement.color }}
                  >
                    {achievement.year}
                  </div>
                </div>
                <div className="ml-8 flex-grow">
                  <div 
                    className="rounded-xl shadow-lg p-6 border-l-4"
                    style={{ borderColor: achievement.color }}
                  >
                    <h3 className="text-2xl font-bold text-[#265b8f] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Notre Équipe"
            subtitle="Des experts passionnés à votre service"
            accentColor="red"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden p-0">
                <div 
                  className="h-40 flex items-center justify-center text-7xl"
                  style={{ backgroundColor: member.color }}
                >
                  {member.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#265b8f] mb-2">
                    {member.name}
                  </h3>
                  <div 
                    className="font-semibold mb-3 text-white px-3 py-1 rounded-full inline-block"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mt-3">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Pourquoi Nous Choisir ?"
            subtitle="Les avantages qui font la différence"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Formateurs Qualifiés",
                description: "Nos formateurs sont des experts reconnus dans leur domaine avec une solide expérience professionnelle",
                icon: "👨‍🏫",
                color: "#265b8f",
              },
              {
                title: "Certification Reconnue",
                description: "Nos formations sont certifiantes et reconnues par les entreprises et les institutions",
                icon: "🏆",
                color: "#ac1f2c",
              },
              {
                title: "Suivi Personnalisé",
                description: "Chaque étudiant bénéficie d'un accompagnement personnalisé tout au long de sa formation",
                icon: "🎯",
                color: "#46c0b5",
              },
              {
                title: "Équipements Modernes",
                description: "Des salles de formation équipées avec les dernières technologies et outils",
                icon: "💻",
                color: "#265b8f",
              },
              {
                title: "Flexibilité",
                description: "Formations en présentiel, en ligne ou en mode hybride selon vos disponibilités",
                icon: "⏰",
                color: "#ac1f2c",
              },
              {
                title: "Réseau Professionnel",
                description: "Accès à un large réseau d'entreprises partenaires pour faciliter votre insertion",
                icon: "🤝",
                color: "#46c0b5",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#265b8f] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - SOLID COLOR */}
      <section className="py-20 bg-[#46c0b5] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎓</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez-Nous Aujourd'hui !
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Faites le premier pas vers votre réussite professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/formations"
              size="large"
              className="bg-white text-[#46c0b5] hover:bg-gray-100"
            >
              Découvrir nos Formations
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-[#46c0b5]"
            >
              Nous Contacter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
