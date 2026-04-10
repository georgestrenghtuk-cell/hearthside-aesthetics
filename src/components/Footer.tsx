import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-warm-dark py-12 border-t border-warm-medium/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-no-background.png" alt="Veluwse Pellets" className="h-8" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-warm-cream/60 text-sm">
            <Link to="/" className="hover:text-warm-orange transition-colors">Home</Link>
            <Link to="/producten" className="hover:text-warm-orange transition-colors">Producten</Link>
            <Link to="/over-ons" className="hover:text-warm-orange transition-colors">Over Ons</Link>
            <Link to="/contact" className="hover:text-warm-orange transition-colors">Contact</Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-warm-medium/15 text-center text-warm-cream/40 text-xs">
          © {new Date().getFullYear()} Veluwse Pellets. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
