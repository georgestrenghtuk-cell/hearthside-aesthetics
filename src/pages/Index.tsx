import { Link } from "react-router-dom";
import { Flame, Star, ArrowRight, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import USPBar from "@/components/USPBar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import productPlaceholder from "@/assets/product-placeholder.jpg";
import heroPellets from "@/assets/hero-pellets.jpg";
import { products } from "@/data/products";

const reviews = [
  { name: "Klaas", text: "Prima pellets 👌👌 alleen al om de afbeelding op de zakjes zou je ze moeten kopen!!" },
  { name: "Anne Hendrika", text: "Zeer tevreden met premium pellets! De pellets branden snel en geven een hoge warmte afgifte." },
  { name: "Gerwin Witteveen", text: "Fijne pellets en goede prijs, altijd netjes over de drempel geleverd." },
];

const blogPosts = [
  { title: "Hoe kies je de juiste houtpellets?", excerpt: "Niet alle pellets zijn hetzelfde. Leer waar je op moet letten bij het kiezen van de juiste pellets voor jouw kachel.", date: "15 maart 2026", image: "🔥" },
  { title: "Pelletkachel onderhoud: 5 essentiële tips", excerpt: "Met goed onderhoud gaat je pelletkachel langer mee en brandt hij efficiënter. Ontdek onze 5 tips.", date: "8 maart 2026", image: "🛠️" },
  { title: "Duurzaam verwarmen met houtpellets", excerpt: "Waarom houtpellets een milieuvriendelijk alternatief zijn voor gas en hoe je je CO2-voetafdruk verkleint.", date: "1 maart 2026", image: "🌿" },
];

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroPellets}
          alt="Premium houtpellets bij een warm vuur"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 5% / 0.85) 0%, hsl(0 0% 8% / 0.7) 40%, hsl(25 30% 15% / 0.6) 70%, hsl(25 90% 25% / 0.55) 100%)",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-warm" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Flame className="w-6 h-6 text-primary" />
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Premium Houtpellets</span>
              <Flame className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Warmte uit de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Veluwe</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Hoogwaardige ENplus A1 gecertificeerde pellets voor optimale warmte. Betaalbaar, duurzaam en geleverd aan uw deur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/producten" className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-primary/25">
                Bekijk Assortiment
              </Link>
              <Link to="/contact" className="border border-white/30 text-white hover:border-primary hover:text-primary px-8 py-4 rounded-xl text-lg font-medium transition-all">
                Neem Contact Op
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <div className="-mt-16 relative z-10">
        <USPBar />
      </div>

      {/* Featured products */}
      <section className="py-20 bg-muted/50">
        <FadeSection className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Populaire Pellets</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Ontdek Ons Assortiment</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">Van premium tot voordelig — voor elke kachel de juiste pellet.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { slug: "forge-pellets", name: "Forge Pellets", tag: "Bestseller", price: "Vanaf €4,49/zak" },
              { slug: "anvil-pellets", name: "Anvil Pellets", tag: "Populair", price: "Vanaf €4,29/zak" },
              { slug: "my-pellets", name: "My Pellets", tag: "Voordelig", price: "Vanaf €3,99/zak" },
            ].map((p) => {
              const product = products.find((pr) => pr.slug === p.slug);
              return (
                <Link
                  to={`/producten/${p.slug}`}
                  key={p.slug}
                  className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 text-left"
                >
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">{p.tag}</span>
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-muted">
                    <img src={product?.image ?? productPlaceholder} alt={p.name} loading="lazy" width={640} height={640} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="text-primary font-bold text-sm">{p.price}</p>
                </Link>
              );
            })}
          </div>
          <Link to="/producten" className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105">
            Bekijk Alle Producten <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeSection>
      </section>

      {/* Reviews */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 14%) 100%)" }}>
        <FadeSection className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            </div>
            <span className="text-white text-xl font-bold">4,9 / 5</span>
            <span className="text-sm text-white">— 91 reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Wat Klanten Zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-white/80 text-sm mb-4">"{r.text}"</p>
                <span className="text-white font-medium text-sm">{r.name}</span>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-background">
        <FadeSection className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Laatste Artikelen</h2>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors">
              <BookOpen className="w-4 h-4" /> Bekijk alle artikelen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, i) => (
              <Link to="/blog" key={i} className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <div className="h-40 bg-muted flex items-center justify-center text-5xl">{post.image}</div>
                <div className="p-6">
                  <span className="text-muted-foreground text-xs">{post.date}</span>
                  <h3 className="text-lg font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(25 90% 45%) 0%, hsl(35 95% 50%) 100%)" }}>
        <FadeSection className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Klaar voor Warme Winters?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">Bestel vandaag nog en geniet van snelle levering en betaling na ontvangst.</p>
          <Link to="/producten" className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 rounded-xl text-lg font-bold hover:bg-foreground/90 transition-all hover:scale-105 shadow-xl">
            Bekijk Ons Assortiment
          </Link>
        </FadeSection>
      </section>
    </Layout>
  );
};

export default Index;
