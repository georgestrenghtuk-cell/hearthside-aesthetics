import { MapPin, ShieldCheck, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="over-ons" className="py-20 bg-muted/50">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Over Ons</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Veluwse Pellets — Warmte met Karakter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">Vanuit het hart van de Veluwe leveren wij hoogwaardige houtpellets door heel Nederland. Met persoonlijke service, eerlijke prijzen en kwaliteit waar u op kunt vertrouwen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><MapPin className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-2">Afhaallocaties</h3>
              <p className="text-muted-foreground text-sm">Heerde • Voorhout • Marum</p>
              <p className="text-muted-foreground text-xs mt-1">Of bezorgd aan uw deur</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-2">Betrouwbaar</h3>
              <p className="text-muted-foreground text-sm">91 positieve reviews en een 4,9 gemiddelde score</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><Heart className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-2">Persoonlijk</h3>
              <p className="text-muted-foreground text-sm">Geen callcenter, maar direct contact met ons team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
