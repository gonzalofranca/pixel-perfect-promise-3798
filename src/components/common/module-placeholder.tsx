import { Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHeader } from "./page-header";

/** Shared shell for modules whose screens are designed in later stages. */
export function ModulePlaceholder({ title, description, icon: Icon, features }: { title: string; description: string; icon: LucideIcon; features: string[] }) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
          <span className="grid size-14 place-items-center rounded-2xl bg-secondary text-primary"><Icon className="size-7" /></span>
          <h2 className="mt-5 text-xl font-semibold">Este módulo se diseña en la próxima etapa</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">La ruta ya está lista y mantiene la misma identidad visual. Estas son las pantallas previstas:</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 rounded-xl bg-muted px-3.5 py-2.5 text-[15px]">
                <span className="size-1.5 shrink-0 rounded-full bg-terracotta" />{f}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
          <Hammer className="size-6 opacity-80" />
          <p className="mt-3 font-medium">En construcción</p>
          <p className="mt-1 text-sm opacity-80">Los datos que verás aquí serán simulados hasta conectar la base de datos.</p>
        </div>
      </div>
    </>
  );
}
