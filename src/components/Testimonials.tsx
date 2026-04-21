import { Star } from "lucide-react";

const reviews = [
  {
    name: "María G.",
    pet: "dueña de Coco 🐩",
    text: "¡Mi Coco salió guapísimo y feliz! Se nota que lo trataron con muchísimo cariño. Repetiremos seguro.",
  },
  {
    name: "Daniel R.",
    pet: "dueño de Toby 🐕",
    text: "El mejor servicio de estética canina que he probado. Profesionales, puntuales y mi perro encantado.",
  },
  {
    name: "Laura M.",
    pet: "dueña de Nala 🐶",
    text: "Nala es muy nerviosa y aquí logran calmarla. El resultado siempre impecable y suavecita.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-widest text-sm">Testimonios</p>
          <h2 className="mt-3 font-display font-black text-4xl md:text-5xl text-secondary">
            Peludos felices, dueños tranquilos
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="p-7 rounded-3xl bg-card border border-border/60 shadow-card hover:shadow-warm transition-bounce hover:-translate-y-1"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-secondary/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t border-border/60">
                <p className="font-display font-bold text-secondary">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.pet}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
