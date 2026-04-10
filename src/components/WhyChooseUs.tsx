import { Leaf, Flame, Sparkles, BadgeEuro } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Duurzaam",
    description: "Onze pellets zijn gemaakt van restproducten uit duurzaam beheerde bossen. CO₂-neutraal stoken.",
  },
  {
    icon: Flame,
    title: "Hoge Warmte-afgifte",
    description: "Maximale energie per kilogram dankzij laag vochtgehalte en hoge densiteit.",
  },
  {
    icon: Sparkles,
    title: "Schone Verbranding",
    description: "Minimale asrest en roet — uw kachel en schoorsteen blijven langer schoon.",
  },
  {
    icon: BadgeEuro,
    title: "Scherpe Prijzen",
    description: "Rechtstreeks van leverancier, geen tussenpersonen. De beste prijs-kwaliteit verhouding.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="waarom" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Waarom Veluwse Pellets
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Kwaliteit die u Voelt
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Al jaren de betrouwbare keuze voor duizenden huishoudens in Nederland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
