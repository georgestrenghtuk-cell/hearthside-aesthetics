import { Star } from "lucide-react";

const reviews = [
  {
    name: "Klaas",
    rating: 5,
    text: "Prima pellets 👌👌 alleen al om de afbeelding op de zakjes zou je ze moeten kopen!! Contact netjes verlopen, net als levering!!",
  },
  {
    name: "Anne Hendrika Dootjes",
    rating: 5,
    text: "Zeer tevreden met premium pellets! De pellets branden snel en geven een hoge warmte afgifte. Ook het glazen deurtje van de kachel blijft schoner dan met andere pellets. Een echte aanrader!",
  },
  {
    name: "Pedro Bulkens",
    rating: 5,
    text: "Prima pellets, goede service.",
  },
  {
    name: "Gerwin Witteveen",
    rating: 5,
    text: "Fijne pellets en goede prijs, altijd netjes over de drempel geleverd, en betalen na levering.",
  },
  {
    name: "D Beurskens",
    rating: 5,
    text: "Wij zijn nu 2 jaar klant van VeluwsePellets en kan niks anders zeggen dan dat ze prima kwaliteit pellets leveren en een uitermate goede service die je echt nog maar zelden tegenkomt.",
  },
];

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, hsl(25 40% 12%) 0%, hsl(25 35% 20%) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-warm-orange text-sm font-semibold uppercase tracking-widest">
            Klantbeoordelingen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-cream mt-3 mb-4">
            Wat Onze Klanten Zeggen
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-warm-amber text-warm-amber" />
              ))}
            </div>
            <span className="text-warm-cream text-2xl font-bold">4,9</span>
            <span className="text-warm-cream/60">/ 5</span>
          </div>
          <p className="text-warm-cream/50 text-sm mt-1">
            Gebaseerd op 91 Google beoordelingen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-warm-medium/30 backdrop-blur-sm border border-warm-medium/20 rounded-2xl p-6 hover:border-warm-orange/30 transition-all"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warm-amber text-warm-amber" />
                ))}
              </div>
              <p className="text-warm-cream/80 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-warm-orange/20 flex items-center justify-center text-warm-orange font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <span className="text-warm-cream font-medium text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
