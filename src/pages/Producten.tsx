import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { products } from "@/data/products";

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>{children}</div>;
};

const Producten = () => {
  return (
    <Layout>
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 14%) 100%)" }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Ons Assortiment</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Premium Pellets voor Elke Kachel</h1>
          <p className="text-white/70 max-w-xl mx-auto">Van budget-vriendelijk tot premium — wij hebben de perfecte pellet voor uw situatie.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <FadeSection className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                to={`/producten/${product.slug}`}
                key={product.slug}
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 flex flex-col"
              >
                {product.tag && <span className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full z-10">{product.tag}</span>}
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-muted">
                  <img src={product.image} alt={product.name} loading="lazy" width={640} height={640} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h2>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{product.price}</span>
                  <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Bekijk <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </FadeSection>
      </section>

      <section className="py-16 bg-muted/50">
        <FadeSection className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Waarom Onze Pellets?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { emoji: "🌿", title: "Duurzaam", desc: "Gemaakt van restproducten uit duurzaam beheerde bossen" },
              { emoji: "🔥", title: "Hoge Warmte", desc: "Maximale energie per kilo door laag vochtgehalte" },
              { emoji: "✨", title: "Schoon", desc: "Minimale asrest, uw kachel blijft langer schoon" },
              { emoji: "💰", title: "Scherpe Prijs", desc: "Rechtstreeks van leverancier, geen tussenpersonen" },
            ].map((b, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                <span className="text-2xl">{b.emoji}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-muted-foreground text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      <section className="py-16" style={{ background: "linear-gradient(135deg, hsl(25 90% 45%) 0%, hsl(35 95% 50%) 100%)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Vragen over onze producten?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 rounded-xl text-lg font-bold hover:bg-foreground/90 transition-all hover:scale-105 shadow-xl">
            Neem Contact Op
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Producten;
