import { Award, Truck, CreditCard } from "lucide-react";

const usps = [
  {
    icon: Award,
    title: "ENplus A1 Gecertificeerd",
    description: "Hoogste kwaliteitsstandaard voor houtpellets",
  },
  {
    icon: Truck,
    title: "Snelle Levering",
    description: "Binnen 3 werkdagen aan uw deur geleverd",
  },
  {
    icon: CreditCard,
    title: "Betalen na Levering",
    description: "Eerst zien, dan pas betalen — geen risico",
  },
];

const USPBar = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/30 hover:shadow-lg hover:shadow-warm-orange/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <usp.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{usp.title}</h3>
              <p className="text-muted-foreground text-sm">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPBar;
