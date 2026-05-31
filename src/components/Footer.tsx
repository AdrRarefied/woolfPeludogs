import logo from "@/assets/WoolfPeludogsLogo1.png";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  // Arreglo de objetos con la información real de tus redes sociales
  const socialLinks = [
    {
      Icon: Instagram,
      href: "https://www.instagram.com/woof.peludogs.estetica.canina?igsh=eGt4enpodTBoY3Uy",
      label: "Instagram de Woof Peludogs",
    },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/1BSvvcaVn2/",
      label: "Facebook de Woof Peludogs",
    },
    {
      Icon: MessageCircle,
      href: "https://wa.me/523331171642",
      label: "WhatsApp de Woof Peludogs",
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-14 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Woof Peludogs" width={48} height={48} className="w-12 h-12" />
            <div>
              <p className="font-display font-black text-xl">Woof Peludogs</p>
              <p className="text-sm text-secondary-foreground/70">Estética canina con amor</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-secondary-foreground/70 max-w-xs">
            Cuidamos de tu peludo como si fuera nuestro. ¡Activa su modo guapo!
          </p>
        </div>

        <div>
          <p className="font-display font-bold mb-3">Enlaces</p>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li><a href="#servicios" className="hover:text-primary-glow transition-smooth">Servicios</a></li>
            <li><a href="#galeria" className="hover:text-primary-glow transition-smooth">Galería</a></li>
            <li><a href="#nosotros" className="hover:text-primary-glow transition-smooth">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-primary-glow transition-smooth">Contacto</a></li>
          </ul>
        </div>

        <div>
          <p className="font-display font-bold mb-3">Síguenos</p>
          <div className="flex gap-3">
            {/* Renderizado dinámico de los botones con sus enlaces reales */}
            {socialLinks.map(({ Icon, href, label }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={label} 
                className="w-11 h-11 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-bounce"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <p className="container py-5 text-center text-xs text-secondary-foreground/60">
          © {new Date().getFullYear()} Woof Peludogs · Hecho con mucho amor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
