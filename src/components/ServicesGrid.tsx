import { Bath, Scissors, PawPrint, Ear, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Bath, name: "Baño Premium", desc: "Limpieza profunda con productos de alta calidad.", featured: true },
  { icon: Scissors, name: "Corte de pelo", desc: "Estilo según raza o personalizado." },
  { icon: PawPrint, name: "Corte de uñas", desc: "Evita molestias y problemas al caminar." },
  { icon: Ear, name: "Limpieza de oídos", desc: "Previene infecciones y mantiene la salud." },
  { icon: Sparkles, name: "Spa canino", desc: "Relajación y bienestar completo." },
];

const ServicesGrid = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-primary font-bold uppercase tracking-widest text-sm">Servicios</p>
          <h2 className="mt-3 font-display font-black text-4xl md:text-5xl text-secondary">
            Cuidado completo para cada peludo
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Servicios diseñados para mantener a tu mascota saludable, limpia y luciendo increíble.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.name}
              className={`p-8 rounded-3xl border transition-bounce hover:-translate-y-1 ${
                s.featured
                  ? "bg-gradient-cocoa text-secondary-foreground border-transparent shadow-warm"
                  : "bg-card text-card-foreground border-border/60 shadow-card hover:shadow-soft"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  s.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}
              >
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl">{s.name}</h3>
              <p className={`mt-2 ${s.featured ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
            </article>
          ))}

          <div className="p-8 rounded-3xl bg-primary/10 border-2 border-dashed border-primary/30 flex flex-col justify-center items-start">
            <h3 className="font-display font-bold text-2xl text-secondary">¿Algo especial?</h3>
            <p className="mt-2 text-muted-foreground">Pregúntanos por servicios personalizados.</p>
            <Button variant="hero" className="mt-5" asChild>
              <a href="https://wa.me/523331171642" target="_blank" rel="noreferrer">Pregunta ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
