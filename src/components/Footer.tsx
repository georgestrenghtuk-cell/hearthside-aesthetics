import { Link } from "react-router-dom";
import paymentIdealWero from "@/assets/payment-ideal-wero.png";
import paymentKlarna from "@/assets/payment-klarna.png";
import paymentRiverty from "@/assets/payment-riverty.png";
import paymentBillink from "@/assets/payment-billink.png";
import paymentBank from "@/assets/payment-bank.png";
import paymentCard from "@/assets/payment-card.png";
import paymentCash from "@/assets/payment-cash.png";

const paymentMethods = [
  { name: "iDEAL & Wero", image: paymentIdealWero },
  { name: "Bankoverschrijving", image: paymentBank },
  { name: "Contant (Heerde)", image: paymentCash },
  { name: "Riverty", image: paymentRiverty },
  { name: "Billink", image: paymentBillink },
  { name: "Creditkaart", image: paymentCard },
  { name: "Klarna", image: paymentKlarna },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 border-t border-muted-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-no-background.png" alt="Veluwse Pellets" className="h-8" />
          </Link>

          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-background/50 text-xs font-medium uppercase tracking-widest">Betaalmethoden</span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="h-10 w-auto bg-background/10 rounded-lg border border-background/10 px-3 py-1.5 flex items-center justify-center"
                  title={method.name}
                >
                  <img
                    src={method.image}
                    alt={method.name}
                    loading="lazy"
                    className="h-6 w-auto object-contain grayscale brightness-200"
                  />
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