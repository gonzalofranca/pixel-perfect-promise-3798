import { Leaf } from "lucide-react";
import { vivero } from "@/data/mock";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
        <Leaf className="size-5" />
      </span>
      {!compact && <span className="text-lg font-semibold tracking-tight">{vivero.nombre}</span>}
    </div>
  );
}
