import { Heart, ShieldCheck, Star } from "lucide-react";
import logo from "@/assets/WoolfPeludogsLogo1.png";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-gradient-cocoa text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 paw-bg opacity-20" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
          <img src={logo} alt="Logo Woof Peludogs" width={512} height={512} className="relative w-72 h-72 animate-float" />
        </div>

        <div>
          <p className="text-primary-glow font-bold uppercase tracking-widest text-sm">Nosotros</p>
          <h2 className="mt-3 font-display font-black text-4xl md:text-5xl">
            Más que estética, es <span className="text-primary-glow italic">amor</span> por tu peludo
          </h2>
          <p className="mt-5 text-lg text-secondary-foreground/80 max-w-xl">
            En Woof Peludogs nos dedicamos a cuidar la imagen y bienestar de tu mascota con paciencia, cuidado y respeto.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, title: "Con cariño", desc: "Cada visita es única." },
              { icon: ShieldCheck, title: "Seguros", desc: "Protocolos higiénicos." },
              { icon: Star, title: "Expertos", desc: "Años de experiencia." },
            ].map((b) => (
              <div key={b.title} className="p-5 rounded-2xl bg-secondary-foreground/5 backdrop-blur border border-secondary-foreground/10">
                <b.icon className="w-6 h-6 text-primary-glow" />
                <p className="mt-3 font-bold">{b.title}</p>
                <p className="text-sm text-secondary-foreground/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
