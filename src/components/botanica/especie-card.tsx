import { Link } from "@tanstack/react-router";
import { Droplets, Sun } from "lucide-react";
import type { Especie } from "@/types";

export function EspecieCard({ e }: { e: Especie }) {
  return (
    <Link to="/biblioteca/$id" params={{ id: e.id }} className="group overflow-hidden rounded-2xl border bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img src={e.imagen} alt={e.nombreComun} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur">{e.categoria}</span>
      </div>
      <div className="p-4">
        <h3 className="truncate text-[17px] font-semibold">{e.nombreComun}</h3>
        <p className="truncate text-sm italic text-muted-foreground">{e.nombreCientifico}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Sun className="size-4 text-terracotta" />{e.iluminacion}</span>
          <span className="inline-flex items-center gap-1.5"><Droplets className="size-4 text-sage" />{e.ubicacion}</span>
        </div>
      </div>
    </Link>
  );
}
