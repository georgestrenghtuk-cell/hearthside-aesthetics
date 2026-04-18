import { useState } from "react";
import { Phone, Mail, MessageSquare, Loader2 } from "lucide-react";
import { z } from "zod";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Web3Forms public access key — veilig in frontend, werkt direct op Vercel
const WEB3FORMS_ACCESS_KEY = "69f77512-2073-4d04-875b-876a65d81904";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(100, "Naam te lang"),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  message: z.string().trim().min(1, "Bericht is verplicht").max(2000, "Bericht te lang"),
});

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>{children}</div>;
};

const Contact = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Controleer je gegevens", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
          subject: `Nieuw contactbericht van ${parsed.data.name}`,
          from_name: "Veluwse Pellets Website",
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Bericht verzonden!", description: "We nemen zo snel mogelijk contact met u op." });
        setForm({ name: "", email: "", message: "" });
        setShowForm(false);
      } else {
        throw new Error(data.message || "Versturen mislukt");
      }
    } catch (err) {
      toast({ title: "Er ging iets mis", description: "Probeer het later opnieuw of bel ons.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20" style={{ background: "linear-gradient(135deg, hsl(0 0% 8%) 0%, hsl(0 0% 14%) 100%)" }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Neem Contact Op</h1>
          <p className="text-white/70 max-w-xl mx-auto">Heeft u vragen over onze pellets of uw bestelling? Wij helpen u graag!</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <FadeSection className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="tel:+31612345678" className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all text-center group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><Phone className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-1">Telefoon</h3>
              <p className="text-muted-foreground text-sm">Bel ons voor snelle hulp</p>
            </a>
            <a href="mailto:contact.larssupplies@gmail.com" className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all text-center group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><Mail className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-1">E-mail</h3>
              <p className="text-muted-foreground text-sm">contact.larssupplies@gmail.com</p>
            </a>
            <button
              type="button"
              onClick={() => setShowForm((v) => !v)}
              className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><MessageSquare className="w-6 h-6 text-primary" /></div>
              <h3 className="font-bold text-foreground mb-1">Stuur een Bericht</h3>
              <p className="text-muted-foreground text-sm">Vul het contactformulier in</p>
            </button>
          </div>

          {showForm && (
            <div className="bg-card rounded-2xl border border-border p-6 md:p-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-4 duration-500">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Stuur ons een bericht</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Naam</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Uw naam" maxLength={100} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="uw@email.nl" maxLength={255} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Waar kunnen wij u mee helpen?" maxLength={2000} rows={6} required />
                </div>
                <Button type="submit" disabled={submitting} className="w-full" size="lg">
                  {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Verzenden...</>) : "Verstuur Bericht"}
                </Button>
              </form>
            </div>
          )}
        </FadeSection>
      </section>
    </Layout>
  );
};

export default Contact;
