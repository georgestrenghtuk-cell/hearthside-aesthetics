import { MapPin, ShieldCheck, Heart, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  { name: "Klaas", text: "Prima pellets 👌👌 alleen al om de afbeelding op de zakjes zou je ze moeten kopen!! Contact netjes verlopen, net als levering!!" },
  { name: "Anne Hendrika Dootjes", text: "Zeer tevreden met premium pellets! De pellets branden snel en geven een hoge warmte afgifte. Ook het glazen deurtje van de kachel blijft schoner dan met andere pellets. Een echte aanrader!" },
  { name: "Pedro Bulkens", text: "Prima pellets, goede service." },
  { name: "Gerwin Witteveen", text: "Fijne pellets en goede prijs, altijd netjes over de drempel geleverd, en betalen na levering." },
  { name: "D Beurskens", text: "Wij zijn nu 2 jaar klant van VeluwsePellets en kan niks anders zeggen dan dat ze prima kwaliteit pellets leveren en een uitermate goede service die je echt nog maar zelden tegenkomt." },
];

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>{children}</div>;
};

const OverOns = () => {
  return (
    <Layout>
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(25 40% 12%) 0%, hsl(25 35% 20%) 100%)" }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-warm-orange text-sm font-semibold uppercase tracking-widest">Over Ons</span>
          <h1 className="text-3xl md:text-5xl font-bold text-warm-cream mt-3 mb-4">Warmte met Karakter</h1>
          <p className="text-warm-cream/70 max-w-2xl mx-auto leading-relaxed">
            Vanuit het hart van de Veluwe leveren wij hoogwaardige houtpellets door heel Nederland. Met persoonlijke service, eerlijke prijzen en kwaliteit waar u op kunt vertrouwen.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <FadeSection className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><MapPin className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-2">Afhaallocaties</h3>
              <p className="text-muted-foreground text-sm">Heerde • Voorhout • Marum</p>
              <p className="text-muted-foreground text-xs mt-1">Of bezorgd aan uw deur</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-2">Betrouwbaar</h3>
              <p className="text-muted-foreground text-sm">91 positieve reviews en een 4,9 gemiddelde score</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><Heart className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-2">Persoonlijk</h3>
              <p className="text-muted-foreground text-sm">Geen callcenter, maar direct contact met ons team</p>
            </div>
          </div>
        </FadeSection>
      </section>

      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(25 40% 12%) 0%, hsl(25 35% 20%) 100%)" }}>
        <FadeSection className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-warm-amber text-warm-amber" />)}
              </div>
              <span className="text-warm-cream text-xl font-bold">4,9</span>
              <span className="text-warm-cream/60 text-sm">/ 5 — 91 reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-warm-cream">Klantbeoordelingen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, i) => (
              <div key={i} className="bg-warm-medium/30 border border-warm-medium/20 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-warm-amber text-warm-amber" />)}
                </div>
                <p className="text-warm-cream/80 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-warm-orange/20 flex items-center justify-center text-warm-orange font-bold text-sm">{review.name.charAt(0)}</div>
                  <span className="text-warm-cream font-medium text-sm">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>
    </Layout>
  );
};

export default OverOns;
