import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, Search, SearchX, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { EspecieCard } from "@/components/botanica/especie-card";
import { EspecieForm } from "@/components/botanica/especie-form";
import { CATEGORIAS, ILUMINACIONES, UBICACIONES } from "@/components/botanica/options";
import { useEspecies } from "@/services/especies";
import { cn } from "@/lib/utils";

type Filtros = { q?: string; cat?: string; ubi?: string; luz?: string; car?: string };
const KEYS = ["q", "cat", "ubi", "luz", "car"] as const;

export const Route = createFileRoute("/biblioteca/")({
  validateSearch: (s: Record<string, unknown>): Filtros => {
    const out: Filtros = {};
    for (const k of KEYS) {
      const v = s[k];
      if (typeof v === "string" && v) out[k] = v;
    }
    return out;
  },
  head: () => ({
    meta: [
      { title: "Biblioteca botánica · Mi Vivero" },
      { name: "description", content: "Fichas de cuidado de todas las especies del vivero." },
      { property: "og:title", content: "Biblioteca botánica · Mi Vivero" },
      { property: "og:description", content: "Fichas de cuidado de todas las especies del vivero." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Biblioteca,
});

const TODAS = "todas";

function Biblioteca() {
  const especies = useEspecies();
  const raw = Route.useSearch();
  const search = { q: raw.q ?? "", cat: raw.cat ?? "", ubi: raw.ubi ?? "", luz: raw.luz ?? "", car: raw.car ?? "" };
  const navigate = Route.useNavigate();
  const [open, setOpen] = useState(false);
  const setParam = (k: keyof Filtros, v: string) =>
    navigate({
      to: ".",
      search: (prev) => {
        const next: Filtros = { ...prev };
        if (v && v !== TODAS) next[k] = v; else delete next[k];
        return next;
      },
      replace: true,
    });

  const caracteristicas = useMemo(() => [...new Set(especies.flatMap((e) => e.caracteristicas))].sort(), [especies]);

  const filtradas = especies.filter((e) => {
    const q = search.q.toLowerCase();
    return (!q || `${e.nombreComun} ${e.nombreCientifico} ${e.familia}`.toLowerCase().includes(q))
      && (!search.cat || e.categoria === search.cat)
      && (!search.ubi || e.ubicacion === search.ubi)
      && (!search.luz || e.iluminacion === search.luz)
      && (!search.car || e.caracteristicas.includes(search.car));
  });
  const hayFiltros = Object.values(search).some(Boolean);

  const filtro = (k: "cat" | "ubi" | "luz", label: string, opts: readonly string[]) => (
    <Select value={search[k] || TODAS} onValueChange={(v) => setParam(k, v)}>
      <SelectTrigger className="h-11 w-full bg-card sm:w-44" aria-label={label}><SelectValue /></SelectTrigger>
      <SelectContent>
        <SelectItem value={TODAS}>{label}: todas</SelectItem>
        {opts.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
      </SelectContent>
    </Select>
  );

  return (
    <>
      <PageHeader
        eyebrow={`${especies.length} especies`}
        title="Biblioteca botánica"
        description="Fichas de cuidado de cada especie. Una especie puede asociarse a varios productos con distintos tamaños y precios."
        actions={<Button size="lg" onClick={() => setOpen(true)}><Plus />Nueva especie</Button>}
      />
      <div className="mb-4 flex flex-col gap-2 lg:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={search.q} onChange={(e) => setParam("q", e.target.value)} placeholder="Buscar por nombre común, científico o familia" className="h-11 bg-card pl-9" aria-label="Buscar especie" />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:flex">
          {filtro("cat", "Categoría", CATEGORIAS)}
          {filtro("ubi", "Ubicación", UBICACIONES)}
          {filtro("luz", "Iluminación", ILUMINACIONES)}
        </div>
      </div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {caracteristicas.map((c) => (
          <button key={c} type="button" onClick={() => setParam("car", search.car === c ? "" : c)}
            className={cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition", search.car === c ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-secondary")}
            aria-pressed={search.car === c}>
            {c}
          </button>
        ))}
        {hayFiltros && (
          <Button variant="ghost" size="sm" onClick={() => navigate({ to: ".", search: {} })}><X />Limpiar filtros</Button>
        )}
      </div>
      {filtradas.length === 0 ? (
        <EmptyState icon={SearchX} title="No encontramos especies" description="Probá con otra búsqueda o quitá algunos filtros." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtradas.map((e) => <EspecieCard key={e.id} e={e} />)}
        </div>
      )}
      {open && <EspecieForm open={open} onOpenChange={setOpen} />}
    </>
  );
}
