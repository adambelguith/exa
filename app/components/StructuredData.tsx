'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "EXSA - Expert Skills Academy",
    "alternateName": "Expert Skills Academy",
    "url": "https://www.exsa.tn",
    "logo": "https://www.exsa.tn/logo.png",
    "description": "Centre de formation professionnelle N°1 en Tunisie spécialisé en entrepreneuriat, business management, e-commerce, digital marketing et gestion de projet. Accompagnement startup et PME avec certifications reconnues par l'État.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TN",
      "addressLocality": "Tunisie"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["French", "Arabic", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/exsa.tn",
      "https://www.linkedin.com/company/exsa",
      "https://www.instagram.com/exsa.tn"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EXSA - Expert Skills Academy",
    "url": "https://www.exsa.tn",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.exsa.tn/formations?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Formation Étude de projet & entrepreneuriat",
        "description": "Formation complète en entrepreneuriat: étude de marché, Business Model Canvas, business plan, cadre juridique et lancement de projet en Tunisie",
        "provider": {
          "@type": "Organization",
          "name": "EXSA - Expert Skills Academy"
        },
        "educationalLevel": "Tous niveaux",
        "courseMode": "Blended",
        "availableLanguage": "French"
      },
      {
        "@type": "Course",
        "name": "Formation Business Management",
        "description": "Formation en gestion d'entreprise, management stratégique, pilotage de la performance et contrôle de gestion pour PME et startups",
        "provider": {
          "@type": "Organization",
          "name": "EXSA - Expert Skills Academy"
        },
        "educationalLevel": "Tous niveaux",
        "courseMode": "Blended"
      },
      {
        "@type": "Course",
        "name": "Formation E-commerce & Digital Business",
        "description": "Formation création boutique en ligne, digital marketing, branding digital, automatisation et outils IA pour e-commerce",
        "provider": {
          "@type": "Organization",
          "name": "EXSA - Expert Skills Academy"
        },
        "educationalLevel": "Tous niveaux",
        "courseMode": "Blended"
      },
      {
        "@type": "Course",
        "name": "Formation Digital Marketing",
        "description": "Formation complète en marketing digital, stratégie marketing, techniques de vente et négociation commerciale",
        "provider": {
          "@type": "Organization",
          "name": "EXSA - Expert Skills Academy"
        },
        "educationalLevel": "Tous niveaux",
        "courseMode": "Blended"
      },
      {
        "@type": "Course",
        "name": "Formation Soft Skills & Leadership",
        "description": "Formation en leadership, intelligence émotionnelle, communication, gestion d'équipe et développement personnel",
        "provider": {
          "@type": "Organization",
          "name": "EXSA - Expert Skills Academy"
        },
        "educationalLevel": "Tous niveaux",
        "courseMode": "Blended"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.exsa.tn"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Formations",
        "item": "https://www.exsa.tn/formations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "À Propos",
        "item": "https://www.exsa.tn/a-propos"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.exsa.tn/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
