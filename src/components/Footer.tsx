const Footer = () => {
  return (
    <footer className="bg-warm-dark py-12 border-t border-warm-medium/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo-no-background.png" alt="Veluwse Pellets" className="h-8" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-warm-cream/60 text-sm">
            <a href="#hero" className="hover:text-warm-orange transition-colors">Home</a>
            <a href="#producten" className="hover:text-warm-orange transition-colors">Producten</a>
            <a href="#reviews" className="hover:text-warm-orange transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-warm-orange transition-colors">Contact</a>
            <a
              href="https://www.veluwsepellets.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-orange transition-colors"
            >
              Webshop
            </a>
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
