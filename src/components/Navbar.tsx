import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Producten", href: "#producten" },
    { label: "Waarom Wij", href: "#waarom" },
    { label: "Reviews", href: "#reviews" },
    { label: "Over Ons", href: "#over-ons" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-dark/95 backdrop-blur-md border-b border-warm-medium/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo-no-background.png" alt="Veluwse Pellets" className="h-10 md:h-12" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-warm-cream/80 hover:text-warm-orange transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.veluwsepellets.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-warm-amber transition-colors"
          >
            Bestel Nu
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-warm-cream"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-dark/98 border-t border-warm-medium/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-warm-cream/80 hover:text-warm-orange transition-colors py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.veluwsepellets.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-warm-amber transition-colors mt-2"
            >
              Bestel Nu
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
