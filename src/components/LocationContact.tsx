import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";

const LocationContact = () => {
  // Coordenadas exactas que me proporcionaste
  const lat = 20.641224904265872;
  const lng = -103.23394640662276;
  const address = "Barro Petatillo 16, Col. Reyna Alta";

  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-soft"> 
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Columna de Información */}
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
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Visítanos</p>
                  <p className="text-muted-foreground text-sm">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/60">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Llámanos</p>
                  <p className="text-muted-foreground text-sm">+52 33 3117 1642</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/60">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-secondary">Horario</p>
                  <p className="text-muted-foreground text-sm">Lun - Sáb · 9:00 - 19:00</p>
                </div>
              </div>
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                {/* href actualizado con tu número de WhatsApp oficial */}
                <a href="https://wa.me/523331171642" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Escríbenos por WhatsApp
                </a>
              </Button>

              {/* Botón dinámico "Cómo llegar" basado en tu ejemplo */}
              <Button variant="outline" size="xl" asChild>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                </a>
              </Button>
            </div>
          </div>

          {/* Columna del Mapa (Estructura idéntica al ejemplo con tus coordenadas) */}
          <div className="rounded-3xl overflow-hidden shadow-warm border-4 border-background aspect-square lg:aspect-auto lg:h-[520px] relative">
            <iframe
              title="Ubicación Woof Peludogs"
              src={`https://www.google.com/maps?ll=${lat},${lng}&q=${lat},${lng}&z=17&output=embed`}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocationContact;

