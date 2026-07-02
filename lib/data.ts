export type LocalizedText = { en: string; fr: string };

export type Meal = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: LocalizedText;
};

export type Shop = {
  slug: string;
  name: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  image: string;
  tag: LocalizedText;
  description: LocalizedText;
  meals: Meal[];
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const shops: Shop[] = [
  {
    slug: "green-garden-kitchen",
    name: "Green Garden Kitchen",
    rating: 4.9,
    reviews: 1240,
    deliveryTime: "20-30 min",
    image: img("photo-1512621776951-a57141f2eefd"),
    tag: { en: "Healthy", fr: "Sain" },
    description: {
      en: "Fresh salads, grain bowls and healthy plates made daily with seasonal ingredients from local farms.",
      fr: "Salades fraîches, bols de céréales et assiettes saines préparés chaque jour avec des ingrédients de saison issus de fermes locales.",
    },
    meals: [
      {
        id: "ggk-power-bowl",
        name: "Garden Power Bowl",
        price: 9.5,
        image: img("photo-1512621776951-a57141f2eefd"),
        description: {
          en: "Quinoa, roasted vegetables, avocado and tahini dressing.",
          fr: "Quinoa, légumes rôtis, avocat et sauce tahini.",
        },
      },
      {
        id: "ggk-salmon-bowl",
        name: "Grilled Salmon Bowl",
        price: 12.9,
        image: img("photo-1540189549336-e6e99c3679fe"),
        description: {
          en: "Grilled salmon, brown rice, edamame and sesame sauce.",
          fr: "Saumon grillé, riz complet, edamame et sauce sésame.",
        },
      },
      {
        id: "ggk-avocado-toast",
        name: "Avocado Toast",
        price: 7.5,
        image: img("photo-1482049016688-2d3e1b311543"),
        description: {
          en: "Sourdough bread, smashed avocado, poached egg and herbs.",
          fr: "Pain au levain, avocat écrasé, œuf poché et herbes fraîches.",
        },
      },
      {
        id: "ggk-detox-salad",
        name: "Detox Green Salad",
        price: 8.2,
        image: img("photo-1546069901-ba9599a7e63c"),
        description: {
          en: "Kale, spinach, cucumber, green apple and citrus vinaigrette.",
          fr: "Kale, épinards, concombre, pomme verte et vinaigrette aux agrumes.",
        },
      },
    ],
  },
  {
    slug: "bella-napoli",
    name: "Bella Napoli",
    rating: 4.8,
    reviews: 980,
    deliveryTime: "25-35 min",
    image: img("photo-1574071318508-1cdbab80d002"),
    tag: { en: "Italian", fr: "Italien" },
    description: {
      en: "Wood-fired pizzas and homemade pasta, straight from Italy. Family recipes since 1962.",
      fr: "Pizzas au feu de bois et pâtes maison, tout droit venues d'Italie. Recettes familiales depuis 1962.",
    },
    meals: [
      {
        id: "bn-margherita",
        name: "Pizza Margherita",
        price: 10.5,
        image: img("photo-1574071318508-1cdbab80d002"),
        description: {
          en: "Tomato, mozzarella di bufala, fresh basil and olive oil.",
          fr: "Tomate, mozzarella di bufala, basilic frais et huile d'olive.",
        },
      },
      {
        id: "bn-pepperoni",
        name: "Pizza Pepperoni",
        price: 12.0,
        image: img("photo-1565299624946-b28f40a0ae38"),
        description: {
          en: "Spicy pepperoni, mozzarella and oregano on a crispy crust.",
          fr: "Pepperoni épicé, mozzarella et origan sur une pâte croustillante.",
        },
      },
      {
        id: "bn-tagliatelle",
        name: "Tagliatelle al Pesto",
        price: 11.4,
        image: img("photo-1621996346565-e3dbc646d9a9"),
        description: {
          en: "Fresh tagliatelle, basil pesto, pine nuts and parmesan.",
          fr: "Tagliatelles fraîches, pesto de basilic, pignons et parmesan.",
        },
      },
      {
        id: "bn-tiramisu",
        name: "Tiramisu",
        price: 5.9,
        image: img("photo-1551024506-0bccd828d307"),
        description: {
          en: "Classic tiramisu with mascarpone, coffee and cocoa.",
          fr: "Tiramisu classique au mascarpone, café et cacao.",
        },
      },
    ],
  },
  {
    slug: "burger-society",
    name: "Burger Society",
    rating: 4.7,
    reviews: 1560,
    deliveryTime: "15-25 min",
    image: img("photo-1568901346375-23c9450c58cd"),
    tag: { en: "Burgers", fr: "Burgers" },
    description: {
      en: "Gourmet burgers with premium beef, artisan buns and signature sauces, grilled to order.",
      fr: "Burgers gourmets au bœuf premium, pains artisanaux et sauces signature, grillés à la commande.",
    },
    meals: [
      {
        id: "bs-classic-smash",
        name: "Classic Smash",
        price: 9.9,
        image: img("photo-1568901346375-23c9450c58cd"),
        description: {
          en: "Smashed beef patty, cheddar, pickles and house sauce.",
          fr: "Steak de bœuf smashé, cheddar, pickles et sauce maison.",
        },
      },
      {
        id: "bs-double-cheese",
        name: "Double Cheese",
        price: 12.5,
        image: img("photo-1553979459-d2229ba7433b"),
        description: {
          en: "Double beef, double cheddar, caramelized onions and bacon.",
          fr: "Double bœuf, double cheddar, oignons caramélisés et bacon.",
        },
      },
      {
        id: "bs-ribeye",
        name: "Grilled Ribeye",
        price: 16.9,
        image: img("photo-1600891964092-4316c288032e"),
        description: {
          en: "Grilled ribeye steak with herb butter and crispy fries.",
          fr: "Entrecôte grillée, beurre aux herbes et frites croustillantes.",
        },
      },
      {
        id: "bs-bbq-ribs",
        name: "BBQ Ribs",
        price: 14.5,
        image: img("photo-1544025162-d76694265947"),
        description: {
          en: "Slow-cooked pork ribs glazed with smoky BBQ sauce.",
          fr: "Travers de porc cuits lentement, glacés à la sauce BBQ fumée.",
        },
      },
    ],
  },
  {
    slug: "sakura-sushi",
    name: "Sakura Sushi",
    rating: 4.9,
    reviews: 870,
    deliveryTime: "30-40 min",
    image: img("photo-1579871494447-9811cf80d66c"),
    tag: { en: "Japanese", fr: "Japonais" },
    description: {
      en: "Hand-rolled sushi and Japanese classics prepared by master chefs with fish delivered daily.",
      fr: "Sushis roulés à la main et classiques japonais préparés par des chefs experts, avec du poisson livré chaque jour.",
    },
    meals: [
      {
        id: "ss-salmon-roll",
        name: "Salmon Roll Set",
        price: 13.9,
        image: img("photo-1579871494447-9811cf80d66c"),
        description: {
          en: "12 pieces of fresh salmon rolls with wasabi and ginger.",
          fr: "12 pièces de rolls au saumon frais, wasabi et gingembre.",
        },
      },
      {
        id: "ss-chef-platter",
        name: "Chef's Sushi Platter",
        price: 18.5,
        image: img("photo-1553621042-f6e147245754"),
        description: {
          en: "Chef's selection of nigiri, maki and sashimi of the day.",
          fr: "Sélection du chef : nigiri, maki et sashimi du jour.",
        },
      },
      {
        id: "ss-tonkotsu-ramen",
        name: "Tonkotsu Ramen",
        price: 12.9,
        image: img("photo-1569718212165-3a8278d5f624"),
        description: {
          en: "Rich pork broth, noodles, soft egg and chashu pork.",
          fr: "Bouillon de porc riche, nouilles, œuf mollet et porc chashu.",
        },
      },
    ],
  },
  {
    slug: "spice-route",
    name: "Spice Route",
    rating: 4.6,
    reviews: 640,
    deliveryTime: "25-35 min",
    image: img("photo-1585937421612-70a008356fbe"),
    tag: { en: "Indian", fr: "Indien" },
    description: {
      en: "Rich curries and tandoori specialties with authentic spices, slow-cooked the traditional way.",
      fr: "Currys riches et spécialités tandoori aux épices authentiques, mijotés à la manière traditionnelle.",
    },
    meals: [
      {
        id: "sr-butter-chicken",
        name: "Butter Chicken",
        price: 11.9,
        image: img("photo-1585937421612-70a008356fbe"),
        description: {
          en: "Creamy tomato curry with tender chicken and basmati rice.",
          fr: "Curry crémeux à la tomate, poulet tendre et riz basmati.",
        },
      },
      {
        id: "sr-biryani",
        name: "Chicken Biryani",
        price: 12.4,
        image: img("photo-1563379091339-03b21ab4a4f8"),
        description: {
          en: "Fragrant basmati rice with spiced chicken and fresh herbs.",
          fr: "Riz basmati parfumé, poulet épicé et herbes fraîches.",
        },
      },
      {
        id: "sr-samosas",
        name: "Vegetable Samosas",
        price: 5.5,
        image: img("photo-1601050690597-df0568f70950"),
        description: {
          en: "Crispy samosas filled with potatoes, peas and spices.",
          fr: "Samosas croustillants aux pommes de terre, petits pois et épices.",
        },
      },
    ],
  },
  {
    slug: "le-petit-cafe",
    name: "Le Petit Café",
    rating: 4.8,
    reviews: 720,
    deliveryTime: "20-30 min",
    image: img("photo-1504754524776-8f4f37790ca0"),
    tag: { en: "Brunch", fr: "Brunch" },
    description: {
      en: "Artisan brunch, pastries and specialty coffee all day long, baked fresh every morning.",
      fr: "Brunch artisanal, pâtisseries et café de spécialité toute la journée, cuits chaque matin.",
    },
    meals: [
      {
        id: "pc-pancakes",
        name: "Pancake Stack",
        price: 8.9,
        image: img("photo-1567620905732-2d1ec7ab7445"),
        description: {
          en: "Fluffy pancakes with maple syrup, berries and butter.",
          fr: "Pancakes moelleux, sirop d'érable, fruits rouges et beurre.",
        },
      },
      {
        id: "pc-brunch-plate",
        name: "Brunch Plate",
        price: 12.5,
        image: img("photo-1525351484163-7529414344d8"),
        description: {
          en: "Eggs, toast, avocado, bacon and roasted tomatoes.",
          fr: "Œufs, toast, avocat, bacon et tomates rôties.",
        },
      },
      {
        id: "pc-cheesecake",
        name: "Berry Cheesecake",
        price: 6.4,
        image: img("photo-1565958011703-44f9829ba187"),
        description: {
          en: "Creamy cheesecake topped with a red berry coulis.",
          fr: "Cheesecake crémeux nappé d'un coulis de fruits rouges.",
        },
      },
      {
        id: "pc-latte-croissant",
        name: "Latte & Croissant",
        price: 5.2,
        image: img("photo-1509042239860-f550ce710b93"),
        description: {
          en: "Specialty latte served with a fresh butter croissant.",
          fr: "Latte de spécialité servi avec un croissant pur beurre.",
        },
      },
    ],
  },
];

export function getShop(slug: string): Shop | undefined {
  return shops.find((shop) => shop.slug === slug);
}

export function getMeal(mealId: string): { meal: Meal; shop: Shop } | undefined {
  for (const shop of shops) {
    const meal = shop.meals.find((m) => m.id === mealId);
    if (meal) return { meal, shop };
  }
  return undefined;
}

export function allMeals(): { meal: Meal; shop: Shop }[] {
  return shops.flatMap((shop) => shop.meals.map((meal) => ({ meal, shop })));
}

export function shopLikeCount(shop: Shop, likes: string[]): number {
  return shop.meals.filter((meal) => likes.includes(meal.id)).length;
}

// Shops are ranked by their rating boosted by how many of their meals
// the user liked, so well-rated and liked shops surface first.
export function shopScore(shop: Shop, likes: string[]): number {
  return shop.rating * 10 + shopLikeCount(shop, likes) * 5;
}

export function sortedShops(likes: string[]): Shop[] {
  return [...shops].sort((a, b) => shopScore(b, likes) - shopScore(a, likes));
}
