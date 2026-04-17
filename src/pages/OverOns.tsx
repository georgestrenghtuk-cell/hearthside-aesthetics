import { MapPin, ShieldCheck, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>{children}</div>;
};

const OverOns = () => {
  return (
    <Layout>
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 14%) 100%)" }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Over Ons</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Warmte met Karakter</h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
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
              <p className="text-muted-foreground text-sm">Heerde</p>
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
    </Layout>
  );
};

export default OverOns;
