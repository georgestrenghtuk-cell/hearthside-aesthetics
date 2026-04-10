import { ExternalLink, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, hsl(25 90% 45%) 0%, hsl(35 95% 50%) 100%)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Klaar voor Warme Winters?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
          Bestel vandaag nog uw pellets en geniet van snelle levering,
          topkwaliteit en betaling na ontvangst.
        </p>

        <a
          href="https://www.veluwsepellets.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-warm-dark text-warm-cream px-10 py-4 rounded-xl text-lg font-bold hover:bg-warm-medium transition-all hover:scale-105 shadow-xl"
        >
          Bestel Nu in de Webshop
          <ExternalLink className="w-5 h-5" />
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-primary-foreground/80 text-sm">
          <a href="tel:+31612345678" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" />
            Bel ons
          </a>
          <a href="mailto:info@veluwsepellets.nl" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail className="w-4 h-4" />
            info@veluwsepellets.nl
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
