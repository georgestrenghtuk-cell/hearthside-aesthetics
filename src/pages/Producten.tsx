import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const products = [
  {
    name: "Forge Pellets",
    description: "Premium ENplus A1 pellets met hoge warmte-afgifte en minimale asrest.",
    price: "Vanaf €4,49/zak",
    tag: "Bestseller",
  },
  {
    name: "Anvil Pellets",
    description: "Uitstekende kwaliteit pellets voor een constante en efficiënte verbranding.",
    price: "Vanaf €4,29/zak",
    tag: "Populair",
  },
  {
    name: "Piniera Pellets",
    description: "Betrouwbare pellets van naaldhout met een schone verbranding.",
    price: "Vanaf €4,19/zak",
    tag: null,
  },
  {
    name: "Ten Damme Pellets",
    description: "Nederlandse kwaliteitspellets, lokaal geproduceerd en duurzaam.",
    price: "Vanaf €4,39/zak",
    tag: null,
  },
  {
    name: "My Pellets",
    description: "Betaalbare pellets zonder in te leveren op kwaliteit.",
    price: "Vanaf €3,99/zak",
    tag: "Voordelig",
  },
  {
    name: "Pellet Kachel",
    description: "Ontdek onze selectie pelletkachels voor optimaal comfort thuis.",
    price: "Bekijk opties",
    tag: "Nieuw",
  },
];

const Producten = () => {
  return (
    <Layout>
      {/* Header */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, hsl(25 40% 12%) 0%, hsl(25 35% 20%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <span className="text-warm-orange text-sm font-semibold uppercase tracking-widest">
            Ons Assortiment
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-warm-cream mt-3 mb-4">
            Premium Pellets voor Elke Kachel
          </h1>
          <p className="text-warm-cream/70 max-w-xl mx-auto">
            Van budget-vriendelijk tot premium — wij hebben de perfecte pellet voor uw situatie.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <a
                key={i}
                href="https://www.veluwsepellets.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-warm-orange/5 transition-all hover:-translate-y-1"
              >
                {product.tag && (
                  <span className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warm-orange/20 to-warm-amber/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🔥</span>
                </div>

                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{product.price}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why our pellets */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Waarom Onze Pellets?
          </h2>
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
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, hsl(25 90% 45%) 0%, hsl(35 95% 50%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Direct Bestellen?
          </h2>
          <a
            href="https://www.veluwsepellets.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-warm-dark text-warm-cream px-10 py-4 rounded-xl text-lg font-bold hover:bg-warm-medium transition-all hover:scale-105 shadow-xl"
          >
            Naar de Webshop
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Producten;
