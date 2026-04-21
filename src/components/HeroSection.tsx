import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";

const HeroSection = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-soft paw-bg">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
            <Sparkles className="w-4 h-4" /> Estética canina profesional
          </span>
          <h1 className="mt-6 font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-secondary">
            Activa el <span className="text-primary italic">modo guapo</span> de tu perro
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Baño, corte y cuidado profesional para que tu peludo luzca limpio, sano y feliz.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/523334353637" target="_blank" rel="noreferrer">
                <MessageCircle /> Agendar por WhatsApp
              </a>
            </Button>
            <Button variant="outlineWarm" size="xl" asChild>
              <a href="#servicios">Ver servicios <ArrowRight /></a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-secondary/70">
            <div>
              <p className="font-display font-black text-3xl text-secondary">+500</p>
              <p>peludos felices</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-display font-black text-3xl text-secondary">5★</p>
              <p>valoración promedio</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-warm rounded-[3rem] blur-2xl opacity-30" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-warm border-4 border-background animate-float">
            <img
              src={heroDog}
              alt="Perro feliz disfrutando de un baño profesional en Woof Peludogs"
              width={1280}
              height={1280}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-card px-5 py-3 flex items-center gap-3 animate-wag">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">🦴</div>
            <div className="leading-tight">
              <p className="font-bold text-secondary text-sm">Sin estrés</p>
              <p className="text-xs text-muted-foreground">trato amoroso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
