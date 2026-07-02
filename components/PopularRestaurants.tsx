import Image from "next/image";
import { Star, Clock, ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

type Restaurant = {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  tag: string;
  image: string;
};

const restaurants: Restaurant[] = [
  {
    name: "Green Garden Kitchen",
    description: "Fresh salads, grain bowls and healthy plates made daily.",
    rating: 4.9,
    reviews: 1240,
    deliveryTime: "20-30 min",
    tag: "Healthy",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bella Napoli",
    description: "Wood-fired pizzas and homemade pasta, straight from Italy.",
    rating: 4.8,
    reviews: 980,
    deliveryTime: "25-35 min",
    tag: "Italian",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Burger Society",
    description: "Gourmet burgers with premium beef and signature sauces.",
    rating: 4.7,
    reviews: 1560,
    deliveryTime: "15-25 min",
    tag: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sakura Sushi",
    description: "Hand-rolled sushi and Japanese classics by master chefs.",
    rating: 4.9,
    reviews: 870,
    deliveryTime: "30-40 min",
    tag: "Japanese",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Spice Route",
    description: "Rich curries and tandoori specialties with authentic spices.",
    rating: 4.6,
    reviews: 640,
    deliveryTime: "25-35 min",
    tag: "Indian",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Le Petit Café",
    description: "Artisan brunch, pastries and specialty coffee all day long.",
    rating: 4.8,
    reviews: 720,
    deliveryTime: "20-30 min",
    tag: "Brunch",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
  },
];

export default function PopularRestaurants() {
  return (
    <section id="restaurants" className="bg-surface">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Popular near you"
          title="Loved by thousands of customers"
          description="Discover the highest-rated restaurants in your area, hand-picked for quality, taste and reliable delivery."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-700">
                  {restaurant.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {restaurant.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700">
                    <Star
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                    {restaurant.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-500">
                  {restaurant.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {restaurant.deliveryTime}
                    <span aria-hidden="true">&middot;</span>
                    {restaurant.reviews.toLocaleString()} reviews
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700"
                  >
                    Order Now
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
