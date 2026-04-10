import { ExternalLink } from "lucide-react";

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
    description: "Ontdek onze selectie pelletkachels voor optimaal comfort.",
    price: "Bekijk opties",
    tag: "Nieuw",
  },
];

const ProductShowcase = () => {
  return (
    <section id="producten" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Ons Assortiment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Premium Pellets voor Elke Kachel
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Van budget-vriendelijk tot premium — wij hebben de perfecte pellet
            voor uw situatie.
          </p>
        </div>

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

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
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

        <div className="text-center mt-10">
          <a
            href="https://www.veluwsepellets.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-warm-amber text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            Bekijk Alle Producten
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
