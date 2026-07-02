export type Language = "en" | "fr";

const en = {
  nav: {
    home: "Home",
    restaurants: "Restaurants",
    howItWorks: "How it works",
    partners: "Partners",
    orderNow: "Order now",
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
      "Discover the highest-rated restaurants in your area, hand-picked for quality, taste and reliable delivery.",
    orderNow: "Order Now",
    reviews: "reviews",
    items: [
      {
        name: "Green Garden Kitchen",
        description: "Fresh salads, grain bowls and healthy plates made daily.",
        tag: "Healthy",
      },
      {
        name: "Bella Napoli",
        description: "Wood-fired pizzas and homemade pasta, straight from Italy.",
        tag: "Italian",
      },
      {
        name: "Burger Society",
        description: "Gourmet burgers with premium beef and signature sauces.",
        tag: "Burgers",
      },
      {
        name: "Sakura Sushi",
        description: "Hand-rolled sushi and Japanese classics by master chefs.",
        tag: "Japanese",
      },
      {
        name: "Spice Route",
        description: "Rich curries and tandoori specialties with authentic spices.",
        tag: "Indian",
      },
      {
        name: "Le Petit Café",
        description: "Artisan brunch, pastries and specialty coffee all day long.",
        tag: "Brunch",
      },
    ],
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
  footer: {
    rights: "All rights reserved.",
  },
};

const fr: typeof en = {
  nav: {
    home: "Accueil",
    restaurants: "Restaurants",
    howItWorks: "Comment ça marche",
    partners: "Partenaires",
    orderNow: "Commander",
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
      "Découvrez les restaurants les mieux notés de votre région, sélectionnés pour leur qualité, leur goût et leur fiabilité.",
    orderNow: "Commander",
    reviews: "avis",
    items: [
      {
        name: "Green Garden Kitchen",
        description:
          "Salades fraîches, bols de céréales et assiettes saines préparés chaque jour.",
        tag: "Sain",
      },
      {
        name: "Bella Napoli",
        description:
          "Pizzas au feu de bois et pâtes maison, tout droit venues d'Italie.",
        tag: "Italien",
      },
      {
        name: "Burger Society",
        description:
          "Burgers gourmets au bœuf premium et sauces signature.",
        tag: "Burgers",
      },
      {
        name: "Sakura Sushi",
        description:
          "Sushis roulés à la main et classiques japonais par des chefs experts.",
        tag: "Japonais",
      },
      {
        name: "Spice Route",
        description:
          "Currys riches et spécialités tandoori aux épices authentiques.",
        tag: "Indien",
      },
      {
        name: "Le Petit Café",
        description:
          "Brunch artisanal, pâtisseries et café de spécialité toute la journée.",
        tag: "Brunch",
      },
    ],
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
  footer: {
    rights: "Tous droits réservés.",
  },
};

export const translations: Record<Language, typeof en> = { en, fr };

export type Translation = typeof en;
