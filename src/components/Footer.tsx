import { Link } from "react-router-dom";

// Payment method images - replace the src with your own payment icons
const paymentMethods = [
  { name: "iDEAL", src: "/payments/ideal.png" },
  { name: "Bankoverschrijving", src: "/payments/bankoverschrijving.png" },
  { name: "Contant (Heerde)", src: "/payments/contant.png" },
  { name: "Riverty", src: "/payments/riverty.png" },
  { name: "Billink", src: "/payments/billink.png" },
  { name: "Creditkaart", src: "/payments/creditkaart.png" },
  { name: "Klarna", src: "/payments/klarna.png" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-8 border-t border-muted-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-no-background.png" alt="Veluwse Pellets" className="h-7" />
          </Link>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {paymentMethods.map((method) => (
              <img
                key={method.name}
                src={method.src}
                alt={method.name}
                title={method.name}
                className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-background/10 text-center text-background/40 text-xs">
          © {new Date().getFullYear()} Veluwse Pellets. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
