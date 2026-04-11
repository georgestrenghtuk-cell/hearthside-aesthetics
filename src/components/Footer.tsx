import { Link } from "react-router-dom";
import { CreditCard, Banknote, Building2, Wallet } from "lucide-react";

const paymentMethods = [
  { name: "iDEAL", icon: <Building2 size={18} />, highlight: true },
  { name: "Wero", icon: <Wallet size={18} />, highlight: true },
  { name: "Bankoverschrijving", icon: <Building2 size={18} /> },
  { name: "Contant (Heerde)", icon: <Banknote size={18} /> },
  { name: "Riverty", icon: <CreditCard size={18} /> },
  { name: "Billink", icon: <CreditCard size={18} /> },
  { name: "Creditkaart", icon: <CreditCard size={18} /> },
  { name: "Klarna", icon: <Wallet size={18} /> },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 border-t border-muted-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-no-background.png" alt="Veluwse Pellets" className="h-8" />
          </Link>

          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-background/50 text-xs font-medium uppercase tracking-widest">Betaalmethoden</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                    method.highlight
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-background/5 border-background/10 text-background/70"
                  }`}
                  title={method.name}
                >
                  {method.icon}
                  <span>{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 text-center text-background/40 text-xs">
          © {new Date().getFullYear()} Veluwse Pellets. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
