import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";

const LocationContact = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-soft"> 
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Contacto</p>
            <h2 className="mt-3 font-display font-black text-4xl md:text-5xl text-secondary">
              Agenda tu cita hoy
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-lg">
              Escríbenos por WhatsApp y reservamos el horario perfecto para tu peludo.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/60">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><MapPin /></div>
                <div>
                  <p className="font-bold text-secondary">Visítanos</p>
                  <p className="text-muted-foreground text-sm">Avenida Siempre Viva</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/60">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Phone /></div>
                <div>
                  <p className="font-bold text-secondary">Llámanos</p>
                  <p className="text-muted-foreground text-sm">+52 333 435 3637</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/60">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Clock /></div>
                <div>
                  <p className="font-bold text-secondary">Horario</p>
                  <p className="text-muted-foreground text-sm">Lun - Sáb · 9:00 - 19:00</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="xl" className="mt-8" asChild>
              <a href="https://wa.me/523334353637" target="_blank" rel="noreferrer">
                <MessageCircle /> Escríbenos por WhatsApp
              </a>
            </Button>
          </div>

          
        </div>
      </div>
    </section>
  );
};
/*
<div className="rounded-3xl overflow-hidden shadow-warm border-4 border-background aspect-square lg:aspect-auto lg:h-[520px]">
            <iframe
              title="Ubicación Woof Peludogs"
              //Este enlace de OpenStreetMap es el que genera la imagen interactiva del mapa 
              src="https://www.openstreetmap.org/export/embed.html?bbox=-103.4%2C20.6%2C-103.3%2C20.7&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          */

export default LocationContact;
