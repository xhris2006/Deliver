export type Language = "en" | "fr";

const en = {
  nav: {
    home: "Home",
    meals: "Meals",
    shops: "Shops",
    orders: "My orders",
    help: "Help & support",
    orderNow: "Order now",
  },
  common: {
    back: "Back",
    featured: "Featured",
    reviews: "reviews",
    like: "Like this meal",
    unlike: "Remove like",
  },
  hero: {
    badge: "Trusted by 10,000+ food lovers",
    title: "Order from the best restaurants",
    titleHighlight: "near you",
    subtitle:
      "Browse local restaurants, explore curated menus and get your favorite meals delivered to your door in minutes. Fresh, fast and reliable — every single time.",
    browseCta: "Browse Restaurants",
    partnerCta: "Become a Partner",
    deliveryNote: "Average delivery under 30 min",
    imageAlt: "Fresh salad bowl with vegetables",
    ratingTitle: "4.9 / 5 rating",
    ratingSubtitle: "From 8,200+ reviews",
  },
  features: {
    eyebrow: "Why choose us",
    title: "Everything you need in one platform",
    description:
      "From browsing menus to tracking your courier, we designed every step of the experience to be simple, fast and enjoyable.",
    items: [
      {
        title: "Fast delivery",
        description:
          "Get your meals delivered in under 30 minutes with our optimized courier network.",
      },
      {
        title: "Verified restaurants",
        description:
          "Every partner restaurant is reviewed and verified for quality and hygiene standards.",
      },
      {
        title: "Easy payments",
        description:
          "Pay securely with card, mobile money or cash on delivery — whatever suits you best.",
      },
      {
        title: "Live chat",
        description:
          "Chat directly with restaurants and couriers to customize or follow up your order.",
      },
      {
        title: "Order tracking",
        description:
          "Follow your order in real time from the kitchen to your doorstep on a live map.",
      },
      {
        title: "Promotions",
        description:
          "Enjoy exclusive deals, loyalty rewards and daily discounts on your favorite dishes.",
      },
      {
        title: "Secure orders",
        description:
          "Your data and payments are protected with bank-level encryption at every step.",
      },
      {
        title: "24/7 support",
        description:
          "Our support team is available around the clock to help with any question or issue.",
      },
    ],
  },
  restaurants: {
    eyebrow: "Popular near you",
    title: "Loved by thousands of customers",
    description:
      "The highest-rated shops in your area — the more you like their meals, the more they are featured.",
    viewAll: "View all shops",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Your meal in three simple steps",
    description:
      "Ordering your next meal takes less than two minutes. Here is how it works.",
    steps: [
      {
        title: "Choose a restaurant",
        description:
          "Browse verified restaurants near you and filter by cuisine, rating or delivery time.",
      },
      {
        title: "Select your meals",
        description:
          "Explore the menu, customize your dishes and add everything you crave to your cart.",
      },
      {
        title: "Get your delivery",
        description:
          "Track your courier in real time and enjoy your food, delivered hot to your door.",
      },
    ],
  },
  partner: {
    eyebrow: "For restaurant owners",
    title: "Create your online restaurant",
    description:
      "Reach thousands of new customers and grow your business online. Set up your digital storefront in minutes — no technical skills required.",
    cta: "Join as a restaurant",
    imageAlt: "Chef preparing food in a professional kitchen",
    statValue: "500+",
    statLabel: "Partner restaurants",
    benefits: [
      {
        title: "Manage your menu",
        description:
          "Update dishes, prices and availability in seconds from a simple dashboard.",
      },
      {
        title: "Receive orders instantly",
        description:
          "Get notified in real time and manage incoming orders from one place.",
      },
      {
        title: "Chat with customers",
        description:
          "Answer questions and build loyalty with a built-in messaging system.",
      },
    ],
  },
  shopsPage: {
    title: "Find your shop",
    description:
      "Search among verified shops. The best rated and most liked ones are featured first.",
    searchPlaceholder: "Search a shop, a cuisine...",
    noResults: "No shop matches your search.",
  },
  shopPage: {
    menuTitle: "Available meals",
    report: "Report this shop",
    reported: "Shop reported",
    order: "Order",
  },
  mealsPage: {
    title: "All meals",
    description:
      "Browse every meal available on the platform. Like your favorites to feature their shops.",
    from: "From",
  },
  ordersPage: {
    title: "Recent orders",
    description: "Meals you recently ordered, most recent first.",
    empty: "You have not ordered anything yet.",
    emptyCta: "Discover the shops",
    reorder: "Order again",
  },
  helpPage: {
    title: "Help & support",
    description:
      "A question, a problem with an order? Our team is here to help you every day.",
    cards: [
      {
        title: "Live chat",
        description: "Chat with our support team, average reply under 2 minutes.",
      },
      {
        title: "Email",
        description: "Write to support@deliver.app, we reply within 24 hours.",
      },
      {
        title: "FAQ",
        description: "Find instant answers to the most common questions.",
      },
    ],
    addShopTitle: "Add your shop",
    addShopDescription:
      "Restaurant owner? Join the platform, publish your menu and start receiving orders today.",
    form: {
      name: "Shop name",
      namePlaceholder: "e.g. Chez Fatou",
      cuisine: "Cuisine type",
      cuisinePlaceholder: "e.g. African, Italian, Fast-food...",
      email: "Contact email",
      emailPlaceholder: "you@example.com",
      message: "Tell us about your shop",
      messagePlaceholder: "Your specialties, your address, your hours...",
      submit: "Submit my shop",
      success:
        "Thank you! Your request has been received. Our team will contact you within 48 hours.",
    },
  },
  report: {
    title: "Report this shop",
    description:
      "Tell us what is wrong. Our moderation team reviews every report.",
    reasons: [
      "Misleading information",
      "Hygiene concerns",
      "Wrong prices or fees",
      "Inappropriate content",
      "Other",
    ],
    commentLabel: "Details (optional)",
    commentPlaceholder: "Describe the problem...",
    cancel: "Cancel",
    submit: "Send report",
  },
  toast: {
    orderPlaced: "Order placed — find it in your recent orders.",
    reportSent: "Report sent. Thank you for helping the community.",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

const fr: typeof en = {
  nav: {
    home: "Accueil",
    meals: "Repas",
    shops: "Boutiques",
    orders: "Mes commandes",
    help: "Aide & support",
    orderNow: "Commander",
  },
  common: {
    back: "Retour",
    featured: "Mise en avant",
    reviews: "avis",
    like: "Aimer ce repas",
    unlike: "Retirer le like",
  },
  hero: {
    badge: "Approuvé par plus de 10 000 gourmets",
    title: "Commandez auprès des meilleurs restaurants",
    titleHighlight: "près de chez vous",
    subtitle:
      "Parcourez les restaurants locaux, explorez des menus soignés et faites-vous livrer vos plats préférés en quelques minutes. Frais, rapide et fiable — à chaque fois.",
    browseCta: "Voir les restaurants",
    partnerCta: "Devenir partenaire",
    deliveryNote: "Livraison moyenne en moins de 30 min",
    imageAlt: "Bol de salade fraîche avec des légumes",
    ratingTitle: "Note de 4,9 / 5",
    ratingSubtitle: "Sur plus de 8 200 avis",
  },
  features: {
    eyebrow: "Pourquoi nous choisir",
    title: "Tout ce qu'il vous faut sur une seule plateforme",
    description:
      "De la découverte des menus au suivi de votre livreur, chaque étape de l'expérience a été pensée pour être simple, rapide et agréable.",
    items: [
      {
        title: "Livraison rapide",
        description:
          "Recevez vos repas en moins de 30 minutes grâce à notre réseau de livreurs optimisé.",
      },
      {
        title: "Restaurants vérifiés",
        description:
          "Chaque restaurant partenaire est contrôlé et vérifié selon des normes de qualité et d'hygiène.",
      },
      {
        title: "Paiements faciles",
        description:
          "Payez en toute sécurité par carte, mobile money ou en espèces à la livraison.",
      },
      {
        title: "Chat en direct",
        description:
          "Discutez directement avec les restaurants et les livreurs pour personnaliser ou suivre votre commande.",
      },
      {
        title: "Suivi de commande",
        description:
          "Suivez votre commande en temps réel, de la cuisine jusqu'à votre porte, sur une carte en direct.",
      },
      {
        title: "Promotions",
        description:
          "Profitez d'offres exclusives, de récompenses fidélité et de réductions quotidiennes sur vos plats préférés.",
      },
      {
        title: "Commandes sécurisées",
        description:
          "Vos données et paiements sont protégés par un chiffrement de niveau bancaire à chaque étape.",
      },
      {
        title: "Assistance 24h/24",
        description:
          "Notre équipe d'assistance est disponible à toute heure pour répondre à vos questions.",
      },
    ],
  },
  restaurants: {
    eyebrow: "Populaires près de chez vous",
    title: "Adorés par des milliers de clients",
    description:
      "Les boutiques les mieux notées de votre région — plus vous aimez leurs repas, plus elles sont mises en avant.",
    viewAll: "Voir toutes les boutiques",
  },
  howItWorks: {
    eyebrow: "Comment ça marche",
    title: "Votre repas en trois étapes simples",
    description:
      "Commander votre prochain repas prend moins de deux minutes. Voici comment ça marche.",
    steps: [
      {
        title: "Choisissez un restaurant",
        description:
          "Parcourez les restaurants vérifiés près de chez vous et filtrez par cuisine, note ou délai de livraison.",
      },
      {
        title: "Sélectionnez vos plats",
        description:
          "Explorez le menu, personnalisez vos plats et ajoutez toutes vos envies au panier.",
      },
      {
        title: "Recevez votre livraison",
        description:
          "Suivez votre livreur en temps réel et savourez vos plats, livrés chauds à votre porte.",
      },
    ],
  },
  partner: {
    eyebrow: "Pour les restaurateurs",
    title: "Créez votre restaurant en ligne",
    description:
      "Touchez des milliers de nouveaux clients et développez votre activité en ligne. Créez votre vitrine numérique en quelques minutes — aucune compétence technique requise.",
    cta: "Rejoindre en tant que restaurant",
    imageAlt: "Chef préparant des plats dans une cuisine professionnelle",
    statValue: "500+",
    statLabel: "Restaurants partenaires",
    benefits: [
      {
        title: "Gérez votre menu",
        description:
          "Mettez à jour vos plats, prix et disponibilités en quelques secondes depuis un tableau de bord simple.",
      },
      {
        title: "Recevez les commandes instantanément",
        description:
          "Soyez notifié en temps réel et gérez les commandes entrantes depuis un seul endroit.",
      },
      {
        title: "Discutez avec vos clients",
        description:
          "Répondez aux questions et fidélisez grâce à une messagerie intégrée.",
      },
    ],
  },
  shopsPage: {
    title: "Trouvez votre boutique",
    description:
      "Cherchez parmi les boutiques vérifiées. Les mieux notées et les plus aimées sont mises en avant.",
    searchPlaceholder: "Chercher une boutique, une cuisine...",
    noResults: "Aucune boutique ne correspond à votre recherche.",
  },
  shopPage: {
    menuTitle: "Repas disponibles",
    report: "Signaler cette boutique",
    reported: "Boutique signalée",
    order: "Commander",
  },
  mealsPage: {
    title: "Tous les repas",
    description:
      "Parcourez tous les repas disponibles sur la plateforme. Aimez vos préférés pour mettre en avant leurs boutiques.",
    from: "Chez",
  },
  ordersPage: {
    title: "Commandes récentes",
    description: "Les repas que vous avez récemment commandés, du plus récent au plus ancien.",
    empty: "Vous n'avez encore rien commandé.",
    emptyCta: "Découvrir les boutiques",
    reorder: "Commander à nouveau",
  },
  helpPage: {
    title: "Aide & support",
    description:
      "Une question, un souci avec une commande ? Notre équipe est là pour vous aider tous les jours.",
    cards: [
      {
        title: "Chat en direct",
        description:
          "Discutez avec notre équipe support, réponse moyenne en moins de 2 minutes.",
      },
      {
        title: "Email",
        description:
          "Écrivez à support@deliver.app, nous répondons sous 24 heures.",
      },
      {
        title: "FAQ",
        description:
          "Trouvez des réponses instantanées aux questions les plus fréquentes.",
      },
    ],
    addShopTitle: "Ajouter votre boutique",
    addShopDescription:
      "Restaurateur ? Rejoignez la plateforme, publiez votre menu et commencez à recevoir des commandes dès aujourd'hui.",
    form: {
      name: "Nom de la boutique",
      namePlaceholder: "ex. Chez Fatou",
      cuisine: "Type de cuisine",
      cuisinePlaceholder: "ex. Africaine, Italienne, Fast-food...",
      email: "Email de contact",
      emailPlaceholder: "vous@exemple.com",
      message: "Parlez-nous de votre boutique",
      messagePlaceholder: "Vos spécialités, votre adresse, vos horaires...",
      submit: "Proposer ma boutique",
      success:
        "Merci ! Votre demande a bien été reçue. Notre équipe vous contactera sous 48 heures.",
    },
  },
  report: {
    title: "Signaler cette boutique",
    description:
      "Dites-nous ce qui ne va pas. Notre équipe de modération examine chaque signalement.",
    reasons: [
      "Informations trompeuses",
      "Problèmes d'hygiène",
      "Prix ou frais incorrects",
      "Contenu inapproprié",
      "Autre",
    ],
    commentLabel: "Détails (optionnel)",
    commentPlaceholder: "Décrivez le problème...",
    cancel: "Annuler",
    submit: "Envoyer le signalement",
  },
  toast: {
    orderPlaced: "Commande passée — retrouvez-la dans vos commandes récentes.",
    reportSent: "Signalement envoyé. Merci d'aider la communauté.",
  },
  footer: {
    rights: "Tous droits réservés.",
  },
};

export const translations: Record<Language, typeof en> = { en, fr };

export type Translation = typeof en;
