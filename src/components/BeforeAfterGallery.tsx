import { useState } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const pairs = [
  { before: before1, after: after1, name: "Luna" },
  { before: before2, after: after2, name: "Rocky" },
];

const Compare = ({ before, after, name }: { before: string; after: string; name: string }) => {
  const [pos, setPos] = useState(50);
  return (
    <div className="rounded-3xl overflow-hidden shadow-card bg-card border border-border/50">
      <div className="relative aspect-square select-none overflow-hidden">
        <img src={after} alt={`${name} después de la estética`} loading="lazy" width={768} height={768} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`${name} antes de la estética`} loading="lazy" width={768} height={768} className="w-full h-full object-cover" style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }} />
        </div>
        <div className="absolute top-0 bottom-0 w-1 bg-primary shadow-warm" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shadow-warm">
            ⇄
          </div>
        </div>
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground text-xs font-bold">Antes</span>
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">Después</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label={`Comparar antes y después de ${name}`}
        />
      </div>
      <div className="p-4 text-center">
        <p className="font-display font-bold text-secondary">{name}</p>
        <p className="text-xs text-muted-foreground">Desliza para comparar</p>
      </div>
    </div>
  );
};

const BeforeAfterGallery = () => {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm">Antes y después</p>
          <h2 className="mt-3 font-display font-black text-4xl md:text-5xl text-secondary">
            La transformación habla sola
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Desliza cada imagen para ver el cambio que dejamos en nuestros peludos.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pairs.map((p) => (
            <Compare key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
