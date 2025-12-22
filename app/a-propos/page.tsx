'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function APropos() {
  const values = [
    {
      icon: "🎯",
      title: "Personnalisation",
      description: "Chaque parcours est conçu selon vos besoins et objectifs spécifiques.",
      color: "#265b8f",
    },
    {
      icon: "⚡",
      title: "Flexibilité",
      description: "Nos formations et accompagnements s'adaptent à votre rythme et à votre contexte.",
      color: "#46c0b5",
    },
    {
      icon: "⭐",
      title: "Qualité",
      description: "Contenus actualisés et méthodologies éprouvées pour des résultats mesurables.",
      color: "#ac1f2c",
    },
    {
      icon: "🤝",
      title: "Intégrité",
      description: "Transparence, éthique et engagement envers vos succès.",
      color: "#265b8f",
    },
  ];

  const targets = [
    {
      icon: "🚀",
      title: "Startups & porteurs de projets",
      color: "#265b8f",
    },
    {
      icon: "🏢",
      title: "PME",
      color: "#ac1f2c",
    },
    {
      icon: "👤",
      title: "Etudiants & professionnels",
      color: "#46c0b5",
    },
    {
      icon: "🌍",
      title: "ONG",
      color: "#265b8f",
    },
  ];

  const expertise = [
    {
      icon: "🌍",
      title: "Expérience locale & internationale",
      description: "Consultants actifs sur le terrain, experts en startups, PME, ONG et projets à impact.",
      color: "#265b8f",
    },
    {
      icon: "📊",
      title: "Domaines clés",
      description: "Management stratégique, gestion de projets, digitalisation, gestion des risques.",
      color: "#ac1f2c",
    },
    {
      icon: "🛠️",
      title: "Savoir-faire concret",
      description: "Outils professionnels, études de cas réels, et accompagnement opérationnel pour chaque client.",
      color: "#46c0b5",
    },
  ];

  const pedagogicalApproach = [
    {
      icon: "💼",
      title: "100 % pratique et opérationnelle",
      description: "Apprentissage sur des cas réels et projets concrets.",
      color: "#265b8f",
    },
    {
      icon: "👨‍🏫",
      title: "Coaching et suivi personnalisé",
      description: "Nous vous guidons à chaque étape.",
      color: "#46c0b5",
    },
    {
      icon: "🧩",
      title: "Modules flexibles ou parcours complets",
      description: "Adaptés aux besoins et objectifs de chacun.",
      color: "#ac1f2c",
    },
  ];

  const whyChooseUs = [
    {
      icon: "🎯",
      title: "Solutions sur mesure et flexibles",
      color: "#265b8f",
    },
    {
      icon: "👨‍💼",
      title: "Experts de haut niveau avec expérience terrain",
      color: "#ac1f2c",
    },
    {
      icon: "⭐",
      title: "Accompagnement premium pour des résultats concrets",
      color: "#46c0b5",
    },
    {
      icon: "💡",
      title: "Apprentissage pratique pour appliquer immédiatement",
      color: "#265b8f",
    },
    {
      icon: "📈",
      title: "Impact réel sur vos projets et votre développement",
      color: "#ac1f2c",
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
              À Propos d'EXSA
            </h1>
            <p className="text-xl opacity-90 leading-relaxed animate-fadeInUp">
              EXSA – Expert Skills Academy est un cabinet de formation et d'accompagnement référent dans l'étude et la gestion de projets, 
              le business management, l'e-commerce, la digitalisation et le développement professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-20 bg-gradient-to-br from-white via-[#ecf6fd] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Qui sommes-nous ?"
            accentColor="blue"
          />
          <div className="max-w-6xl mx-auto">
            {/* Main Introduction */}
            <div className="bg-gradient-to-r from-[#265b8f] to-[#1e4a6f] text-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-6">
                <div className="hidden md:block text-7xl">🎓</div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">EXSA – Expert Skills Academy</h3>
                  <p className="text-xl leading-relaxed opacity-95">
                    Un cabinet de formation et d'accompagnement référent dans l'étude et la gestion de projets, 
                    le business management, l'e-commerce, la digitalisation et le développement professionnel.
                  </p>
                </div>
              </div>
            </div>

            {/* Priority Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8 border-l-8 border-[#ac1f2c]">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🎯</div>
                <div>
                  <h4 className="text-2xl font-bold text-[#265b8f] mb-3">Notre priorité est simple :</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    👉 Former et accompagner la nouvelle génération d'entrepreneurs, de PME et de professionnels, afin de transformer leurs idées et initiatives en projets durables, rentables et compétitifs.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-gradient-to-br from-[#46c0b5] to-[#3aa89e] text-white rounded-2xl shadow-xl p-8 md:p-10 mb-8">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                EXSA s'adresse particulièrement à :
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-3">🏢</div>
                  <p className="text-lg font-semibold">Les PME souhaitant structurer, optimiser et développer leurs activités</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-3">🚀</div>
                  <p className="text-lg font-semibold">Les porteurs de projets et startups, de la phase d'idée au lancement et à la croissance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-3">🌍</div>
                  <p className="text-lg font-semibold">Les personnels d'ONGs et organisations, engagés dans des projets à impact</p>
                </div>
              </div>
            </div>

            {/* Expertise & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white border-t-4 border-[#265b8f] hover:shadow-2xl transition-shadow">
                <div className="text-5xl mb-4">💼</div>
                <h4 className="text-xl font-bold text-[#265b8f] mb-3">Notre Équipe</h4>
                <p className="text-gray-700 leading-relaxed">
                  Grâce à une équipe de formateurs et consultants dotés d'une expérience solide, locale et internationale, EXSA propose des programmes de formation pratiques, interactifs et 100 % opérationnels, conçus pour répondre aux besoins réels du marché et des organisations.
                </p>
              </Card>
              <Card className="bg-white border-t-4 border-[#46c0b5] hover:shadow-2xl transition-shadow">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-[#46c0b5] mb-3">Notre Approche</h4>
                <p className="text-gray-700 leading-relaxed">
                  Chez EXSA, nous combinons <strong>expertise terrain, pédagogie orientée résultats et outils digitaux modernes</strong>, afin d'offrir une expérience de formation personnalisée, flexible et à forte valeur ajoutée.
                </p>
              </Card>
            </div>

            {/* Ambition */}
            <div className="bg-gradient-to-r from-[#ac1f2c] to-[#8a1823] text-white rounded-2xl shadow-2xl p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="text-6xl">🎯</div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Notre ambition</h4>
                  <p className="text-xl leading-relaxed opacity-95">
                    Être votre partenaire de confiance, en vous accompagnant à chaque étape — de la conception du projet à sa mise en œuvre — pour garantir des résultats concrets et mesurables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-l-4 border-[#ac1f2c]">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold text-[#ac1f2c] mb-4">Notre Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous accompagnons <strong>startups, PME, porteurs de projets et professionnels</strong> à transformer leurs idées en projets durables, rentables et performants.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Grâce à des formations pratiques et un accompagnement personnalisé, nous vous aidons à développer vos compétences, structurer vos projets et atteindre vos objectifs avec efficacité.
              </p>
            </Card>

            <Card className="bg-white border-l-4 border-[#265b8f]">
              <div className="text-5xl mb-4">🌍</div>
              <h2 className="text-3xl font-bold text-[#265b8f] mb-4">Notre Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                EXSA aspire à devenir un <strong>acteur de référence en formation et accompagnement en Afrique, en Europe et à l'international</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nous voulons créer un impact concret sur les compétences, les entreprises et les sociétés en développant des talents adaptés aux réalités du marché et aux enjeux de demain.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Nos Valeurs"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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

      {/* Expertise Section */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Notre Expertise"
            accentColor="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
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

      {/* Targets Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Nos Cibles"
            subtitle="EXSA accompagne :"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {targets.map((target, index) => (
              <Card key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg"
                  style={{ backgroundColor: target.color }}
                >
                  {target.icon}
                </div>
                <h3 className="text-lg font-bold text-[#265b8f]">
                  {target.title}
                </h3>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg font-medium">
            Quel que soit votre profil, EXSA s'adapte à votre réalité.
          </p>
        </div>
      </section>

      {/* Pedagogical Approach */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Notre Approche Pédagogique"
            accentColor="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pedagogicalApproach.map((item, index) => (
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

      {/* Quality & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Qualité & Certifications"
            accentColor="teal"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <div className="text-5xl mb-4">📜</div>
              <h3 className="text-xl font-bold text-[#265b8f] mb-3">
                Formations certifiées et agréées par l'État
              </h3>
            </Card>
            <Card className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-[#265b8f] mb-3">
                Contenus actualisés régulièrement
              </h3>
            </Card>
            <Card className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#265b8f] mb-3">
                Évaluation des acquis et outputs mesurables
              </h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose EXSA */}
      <section className="py-20 bg-[#ecf6fd]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Pourquoi choisir EXSA ?"
            accentColor="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#265b8f]">
                  {item.title}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - SOLID COLOR */}
      <section className="py-20 bg-[#265b8f] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Construisons votre projet ensemble
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Transformez vos idées en projets durables et performants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/formations"
              size="large"
              className="bg-[#46c0b5] text-white hover:bg-[#3aa89e]"
            >
              Explorez nos formations
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-[#265b8f]"
            >
              Inscrivez-vous dès maintenant
            </Button>
          </div>
          <div className="mt-8">
            <Button
              href="/contact"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-[#265b8f]"
            >
              Parlez à un expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
