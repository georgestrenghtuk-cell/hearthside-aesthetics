import { Flame } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, hsl(25 40% 12%) 0%, hsl(25 35% 18%) 40%, hsl(25 60% 25%) 70%, hsl(25 90% 35%) 100%)",
      }}
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-warm-orange/10 rounded-full blur-3xl animate-pulse-warm" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-warm-amber/8 rounded-full blur-3xl animate-pulse-warm" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Flame className="w-6 h-6 text-warm-orange" />
            <span className="text-warm-orange text-sm font-semibold uppercase tracking-widest">
              Premium Houtpellets
            </span>
            <Flame className="w-6 h-6 text-warm-orange" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-cream mb-6 leading-tight">
            Warmte uit de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-orange to-warm-amber">
              Veluwe
            </span>
          </h1>

          <p className="text-lg md:text-xl text-warm-cream/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hoogwaardige ENplus A1 gecertificeerde pellets voor optimale
            warmte. Betaalbaar, duurzaam en geleverd aan uw deur.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/producten"
              className="bg-primary hover:bg-warm-amber text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-warm-orange/25"
            >
              Bekijk Assortiment
            </Link>
            <Link
              to="/contact"
              className="border border-warm-cream/30 text-warm-cream hover:border-warm-orange hover:text-warm-orange px-8 py-4 rounded-xl text-lg font-medium transition-all"
            >
              Neem Contact Op
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-warm-cream/50 text-sm">
            <span>✓ ENplus A1 Gecertificeerd</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Betalen na Levering</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 91 Tevreden Klanten</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
