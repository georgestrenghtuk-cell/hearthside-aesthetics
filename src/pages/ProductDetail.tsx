import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Mail, Flame } from "lucide-react";
import Layout from "@/components/Layout";
import { getProductBySlug, products } from "@/data/products";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) return <NotFound />;

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <Layout>
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            to="/producten"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Terug naar assortiment
          </Link>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="relative bg-card rounded-2xl border border-border overflow-hidden">
              {product.tag && (
                <span className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full z-10">
                  {product.tag}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                Premium Houtpellets
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
              </p>
              <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>

              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4" /> Vraag Offerte Aan
                </Link>
                <Link
                  to="/producten"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground hover:border-primary hover:text-primary px-6 py-3 rounded-xl font-medium transition-all"
                >
                  Andere Producten
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Flame className="w-5 h-5 text-primary" /> Specificaties
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.specs.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 bg-card rounded-xl border border-border"
                >
                  <span className="text-muted-foreground text-sm">{s.label}</span>
                  <span className="text-foreground font-semibold text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <article className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Over {product.name}
            </h2>
            <div className="space-y-8">
              {product.seoDescription.map((section, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {section.heading}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Andere Producten
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                to={`/producten/${p.slug}`}
                key={p.slug}
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
              >
                {p.tag && (
                  <span className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full z-10">
                    {p.tag}
                  </span>
                )}
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <span className="text-primary font-bold text-sm">{p.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
