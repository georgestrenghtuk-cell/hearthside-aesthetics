import { Phone, Mail, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>{children}</div>;
};

const Contact = () => {
  return (
    <Layout>
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 14%) 100%)" }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Neem Contact Op</h1>
          <p className="text-white/70 max-w-xl mx-auto">Heeft u vragen over onze pellets of uw bestelling? Wij helpen u graag!</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <FadeSection className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="tel:+31612345678" className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all text-center group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><Phone className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-1">Telefoon</h3>
              <p className="text-muted-foreground text-sm">Bel ons voor snelle hulp</p>
            </a>
            <a href="mailto:info@veluwsepellets.nl" className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all text-center group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><Mail className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-1">E-mail</h3>
              <p className="text-muted-foreground text-sm">info@veluwsepellets.nl</p>
            </a>
            <div className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><MapPin className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-1">Afhaallocaties</h3>
              <p className="text-muted-foreground text-sm">Heerde • Voorhout • Marum</p>
            </div>
          </div>
        </FadeSection>
      </section>
    </Layout>
  );
};

export default Contact;
