import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/WoolfPeludogsLogo1.png";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <nav className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Woof Peludogs logotipo" width={48} height={48} className="w-12 h-12" />
          <div className="leading-tight">
            <p className="font-display font-black text-xl text-secondary">Woof</p>
            <p className="font-display text-sm text-primary -mt-1">Peludogs</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-secondary/80 hover:text-primary transition-smooth">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="#contacto">Agendar</a>
          </Button>
        </div>

        <button className="md:hidden text-secondary" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 font-semibold text-secondary">
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contacto">Agendar cita</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
