import { Link } from "react-router-dom";
import { Flame, Star, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import USPBar from "@/components/USPBar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  { name: "Klaas", text: "Prima pellets 👌👌 alleen al om de afbeelding op de zakjes zou je ze moeten kopen!!" },
  { name: "Anne Hendrika", text: "Zeer tevreden met premium pellets! De pellets branden snel en geven een hoge warmte afgifte." },
  { name: "Gerwin Witteveen", text: "Fijne pellets en goede prijs, altijd netjes over de drempel geleverd." },
];

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(25 40% 12%) 0%, hsl(25 35% 18%) 40%, hsl(25 60% 25%) 70%, hsl(25 90% 35%) 100%)",
        }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-warm-orange/10 rounded-full blur-3xl animate-pulse-warm" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Flame className="w-6 h-6 text-warm-orange" />
              <span className="text-warm-orange text-sm font-semibold uppercase tracking-widest">Premium Houtpellets</span>
              <Flame className="w-6 h-6 text-warm-orange" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-cream mb-6 leading-tight">
              Warmte uit de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-orange to-warm-amber">Veluwe</span>
            </h1>
            <p className="text-lg md:text-xl text-warm-cream/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Hoogwaardige ENplus A1 gecertificeerde pellets voor optimale warmte. Betaalbaar, duurzaam en geleverd aan uw deur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/producten" className="bg-primary hover:bg-warm-amber text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-warm-orange/25">
                Bekijk Assortiment
              </Link>
              <Link to="/contact" className="border border-warm-cream/30 text-warm-cream hover:border-warm-orange hover:text-warm-orange px-8 py-4 rounded-xl text-lg font-medium transition-all">
                Neem Contact Op
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <USPBar />

      {/* Featured products */}
      <section className="py-20 bg-muted/50">
        <FadeSection className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Populaire Pellets</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Ontdek Ons Assortiment</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">Van premium tot voordelig — voor elke kachel de juiste pellet.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { name: "Forge Pellets", tag: "Bestseller", price: "Vanaf €4,49/zak" },
              { name: "Anvil Pellets", tag: "Populair", price: "Vanaf €4,29/zak" },
              { name: "My Pellets", tag: "Voordelig", price: "Vanaf €3,99/zak" },
            ].map((p, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 text-center">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{p.tag}</span>
                <h3 className="text-lg font-bold text-foreground mt-4 mb-2">{p.name}</h3>
                <p className="text-primary font-bold text-sm">{p.price}</p>
              </div>
            ))}
          </div>
          <Link to="/producten" className="inline-flex items-center gap-2 bg-primary hover:bg-warm-amber text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105">
            Bekijk Alle Producten <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeSection>
      </section>

      {/* Reviews */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(25 40% 12%) 0%, hsl(25 35% 20%) 100%)" }}>
        <FadeSection className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-warm-amber text-warm-amber" />)}
            </div>
            <span className="text-warm-cream text-xl font-bold">4,9</span>
            <span className="text-warm-cream/60 text-sm">/ 5 — 91 reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-cream mb-10">Wat Klanten Zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {reviews.map((r, i) => (
              <div key={i} className="bg-warm-medium/30 border border-warm-medium/20 rounded-2xl p-6 text-left">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-warm-amber text-warm-amber" />)}
                </div>
                <p className="text-warm-cream/80 text-sm mb-4">"{r.text}"</p>
                <span className="text-warm-cream font-medium text-sm">{r.name}</span>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(25 90% 45%) 0%, hsl(35 95% 50%) 100%)" }}>
        <FadeSection className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Klaar voor Warme Winters?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">Bestel vandaag nog en geniet van snelle levering en betaling na ontvangst.</p>
          <Link to="/producten" className="inline-flex items-center gap-2 bg-warm-dark text-warm-cream px-10 py-4 rounded-xl text-lg font-bold hover:bg-warm-medium transition-all hover:scale-105 shadow-xl">
            Bekijk Ons Assortiment
          </Link>
        </FadeSection>
      </section>
    </Layout>
  );
};

export default Index;
