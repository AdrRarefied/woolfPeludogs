import { HeartHandshake, Sparkles, Leaf, Smile } from "lucide-react";

const features = [
  { icon: HeartHandshake, title: "Atención sin estrés", desc: "Manejo paciente y cariñoso." },
  { icon: Smile, title: "Trato personalizado", desc: "Servicio según cada peludo." },
  { icon: Leaf, title: "Productos de calidad", desc: "Suaves, dermatológicos, seguros." },
  { icon: Sparkles, title: "Resultados visibles", desc: "Brillo, suavidad y olor rico." },
];

const IconFeatures = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group p-6 rounded-3xl bg-card shadow-card hover:shadow-warm transition-bounce hover:-translate-y-1 border border-border/50"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center text-primary-foreground shadow-soft mb-4 group-hover:scale-110 transition-bounce">
              <f.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-lg text-secondary">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconFeatures;
