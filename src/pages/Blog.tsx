import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogPosts = [
  { title: "Hoe kies je de juiste houtpellets?", excerpt: "Niet alle pellets zijn hetzelfde. Leer waar je op moet letten bij het kiezen van de juiste pellets voor jouw kachel en situatie.", date: "15 maart 2026", image: "🔥", readTime: "5 min" },
  { title: "Pelletkachel onderhoud: 5 essentiële tips", excerpt: "Met goed onderhoud gaat je pelletkachel langer mee en brandt hij efficiënter. Ontdek onze 5 praktische tips voor een schone kachel.", date: "8 maart 2026", image: "🛠️", readTime: "4 min" },
  { title: "Duurzaam verwarmen met houtpellets", excerpt: "Waarom houtpellets een milieuvriendelijk alternatief zijn voor gas en hoe je je CO2-voetafdruk verkleint met de juiste keuze.", date: "1 maart 2026", image: "🌿", readTime: "6 min" },
  { title: "ENplus A1 certificering: wat betekent het?", excerpt: "Je ziet het overal op pelletverpakkingen, maar wat houdt ENplus A1 precies in en waarom is het belangrijk voor jou?", date: "22 februari 2026", image: "📋", readTime: "3 min" },
  { title: "Pellets opslaan: zo doe je dat goed", excerpt: "De manier waarop je pellets opslaat heeft direct invloed op de kwaliteit van verbranding. Lees hier hoe je ze het beste bewaart.", date: "15 februari 2026", image: "📦", readTime: "4 min" },
  { title: "Kosten vergelijken: pellets vs gas vs elektrisch", excerpt: "Benieuwd of een pelletkachel voordeliger is dan gas of elektrisch verwarmen? Wij rekenen het voor je uit.", date: "8 februari 2026", image: "💰", readTime: "7 min" },
];

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>{children}</div>;
};

const Blog = () => {
  return (
    <Layout>
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 14%) 100%)" }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Kennis & Tips</h1>
          <p className="text-white/70 max-w-xl mx-auto">Alles wat je moet weten over houtpellets, pelletkachels en duurzaam verwarmen.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <FadeSection className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <article key={i} className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-44 bg-muted flex items-center justify-center text-5xl">{post.image}</div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="text-muted-foreground text-xs">{post.readTime} leestijd</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </FadeSection>
      </section>
    </Layout>
  );
};

export default Blog;
