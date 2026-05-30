import { useState } from "react";
// Importación de las imágenes locales desde la carpeta de recursos de Vite/Next.js
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

// Arreglo de objetos que agrupa las fotos del "antes" y "después" con el nombre de cada mascota
const pairs = [
  { before: before1, after: after1, name: "Luna" },
  { before: before2, after: after2, name: "Rocky" },
];

// COMPONENTE TARJETA DE COMPARACIÓN (Maneja el slider individual de cada mascota)
const Compare = ({ before, after, name }: { before: string; after: string; name: string }) => {
  // Estado local para controlar la posición del slider (0 = todo Después, 100 = todo Antes). Inicia en 80%.
  const [pos, setPos] = useState(80);



  return (
    <div className="rounded-3xl overflow-hidden shadow-card bg-card border border-border/50">
      {/* Contenedor del área visual: Relación de aspecto cuadrada (1:1) y evita que las imágenes se desborden */}
      <div className="relative aspect-square select-none overflow-hidden">
        
        {/* IMAGEN DE FONDO (DESPUÉS): Se renderiza en pantalla completa abajo de todo */}
        <img 
          src={after} 
          alt={`${name} después de la estética`} 
          loading="lazy" 
          width={768} 
          height={768} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        
        {/* CONTENEDOR RECORTABLE (ANTES): Su ancho varía dinámicamente de 0% a 100% usando el estado 'pos' */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          {/* IMAGEN DEL ANTES: Para evitar que se comprima o deforme cuando el contenedor se hace chico, 
              aplicamos un truco matemático multiplicando su tamaño inversamente proporcional a 'pos' */}
          <img 
            src={before} 
            alt={`${name} antes de la estética`} 
            loading="lazy" 
            width={768} 
            height={768} 
            className="w-full h-full object-cover" 
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }} 
          />
        </div>
        
        {/* LÍNEA DIVISORA CENTRAL: Se desplaza horizontalmente usando el porcentaje del estado 'pos' */}
        <div className="absolute top-0 bottom-0 w-1 bg-primary shadow-warm" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          {/* CÍRCULO CON LAS FLECHAS (MANIJA): Centrado perfectamente sobre la línea divisora */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shadow-warm">
            ⇄
          </div>
        </div>
        
        {/* ETIQUETAS FLOTANTES: Muestran el texto "Antes" / "Después" junto a sus porcentajes calculados */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground text-xs font-bold transition-all">
          Antes 
          
        </span>
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold transition-all">
          Después 
        </span>
        
        {/* SLIDER INVISIBLE (INPUT RANGE): Cubre todo el cuadro, es invisible (opacity-0) pero captura los arrastres 
            del usuario actualizando el estado 'pos' al instante */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          // Escucha el movimiento, convierte el valor de texto a número y actualiza el estado
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label={`Comparar antes y después de ${name}`}
        />
      </div>
      
      {/* TEXTOS INFERIORES: Nombre de la mascota y llamada a la acción */}
      <div className="p-4 text-center">
        <p className="font-display font-bold text-secondary">{name}</p>
        <p className="text-xs text-muted-foreground">Desliza para comparar</p>
      </div>
    </div>
  );
};

// COMPONENTE CONTENEDOR PRINCIPAL DE LA SECCIÓN
const BeforeAfterGallery = () => {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container">
        
        {/* ENCABEZADO DE LA SECCIÓN: Título, subtítulo y texto decorativo de introducción */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm">Antes y después</p>
          <h2 className="mt-3 font-display font-black text-4xl md:text-5xl text-secondary">
            La transformación habla sola
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Desliza cada imagen para ver el cambio que dejamos en nuestros peludos.
          </p>
        </div>

        {/* CUADRÍCULA DE TARJETAS: Muestra 1 columna en celulares y 2 columnas en pantallas medianas (md) en adelante */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mapeo del arreglo 'pairs' para renderizar un componente <Compare /> por cada mascota de forma dinámica */}
          {pairs.map((p) => (
            <Compare key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
