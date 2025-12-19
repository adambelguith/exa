# EXSA - Expert Skills Academy

Site web professionnel pour Expert Skills Academy, un centre de formation professionnelle moderne et innovant.

## 🎯 À Propos

Expert Skills Academy (EXSA) est un centre de formation dédié à l'excellence et au développement des compétences professionnelles. Notre site web présente nos offres de formation et notre expertise dans le domaine de la formation professionnelle.

## ✨ Fonctionnalités

- **Design Moderne & Responsive** : Interface utilisateur élégante avec une expérience optimale sur tous les appareils
- **Animations Fluides** : Transitions et animations soignées pour une navigation agréable
- **Slider Héro** : Présentation dynamique avec rotation automatique des messages clés
- **Catalogue de Formations** : Filtrage par catégorie et présentation détaillée des programmes
- **Formulaire de Contact** : Interface intuitive pour les demandes d'information
- **Navigation Interactive** : Menu responsive avec animations et transitions

## 🎨 Palette de Couleurs

Le site utilise la charte graphique officielle d'EXSA :

- **Rouge Principal** : `#ac1f2c` - Pour les éléments d'accent et appels à l'action
- **Bleu Principal** : `#265b8f` - Pour les titres et éléments de structure
- **Turquoise** : `#46c0b5` - Pour les highlights et éléments interactifs
- **Bleu Clair** : `#ecf6fd` - Pour les arrière-plans et sections

## 🔤 Typographie

- **Texte Occidental** : Axiforma - Police moderne et professionnelle
- **Texte Arabe** : Jali - Police élégante pour le contenu arabe

## 📄 Pages

1. **Accueil** (`/`) - Page d'accueil avec slider héro, statistiques, et aperçu des formations
2. **À Propos** (`/a-propos`) - Présentation du centre, valeurs, équipe, et historique
3. **Nos Formations** (`/formations`) - Catalogue complet des formations avec filtres par catégorie
4. **Contact** (`/contact`) - Formulaire de contact, informations pratiques, et FAQ

## 🚀 Démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build pour la Production

```bash
# Créer le build de production
npm run build

# Lancer le serveur de production
npm start
```

## 🛠️ Technologies Utilisées

- **Next.js 16** - Framework React pour la production
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **CSS Animations** - Animations personnalisées fluides

## 📁 Structure du Projet

```
exsa/
├── app/
│   ├── components/         # Composants réutilisables
│   │   ├── Navigation.tsx  # Navigation avec menu responsive
│   │   ├── Footer.tsx      # Pied de page
│   │   ├── Button.tsx      # Bouton personnalisé
│   │   ├── Card.tsx        # Carte de contenu
│   │   └── SectionTitle.tsx # Titre de section
│   ├── a-propos/           # Page À Propos
│   ├── formations/         # Page Formations
│   ├── contact/            # Page Contact
│   ├── globals.css         # Styles globaux et animations
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Page d'accueil
├── public/                 # Fichiers statiques
└── README.md
```

## 🎯 Composants Clés

### Navigation
- Menu responsive avec toggle mobile
- Animation au scroll
- Liens avec effets hover personnalisés

### Cards
- Cartes avec hover effects
- Bordures colorées personnalisables
- Layout flexible

### Buttons
- Trois variantes : primary, secondary, outline
- Trois tailles : small, medium, large
- Animations hover et transitions

### SectionTitle
- Titres de section cohérents
- Ligne décorative avec gradient
- Alignement personnalisable

## 🌐 Langue

Le site est entièrement en **français**, adapté au marché francophone.

## 📝 Personnalisation

Pour personnaliser le site :

1. **Couleurs** : Modifiez les variables CSS dans `app/globals.css`
2. **Contenu** : Éditez directement les fichiers de page dans `app/`
3. **Composants** : Ajoutez ou modifiez les composants dans `app/components/`
4. **Logo** : Remplacez le logo dans la navigation (actuellement un placeholder EXSA)

## 🔜 Améliorations Futures

- Intégration Google Maps pour la localisation
- Système d'inscription en ligne
- Espace étudiant avec authentification
- Blog/Actualités
- Témoignages vidéo
- Galerie photos
- Chat en direct

## 📧 Contact

Pour toute question concernant le site :
- Email : contact@exsa-formation.com
- Téléphone : +212 522-123-456

## 📄 Licence

© 2024 Expert Skills Academy. Tous droits réservés.
