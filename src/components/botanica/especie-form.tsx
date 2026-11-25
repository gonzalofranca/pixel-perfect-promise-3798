import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { especiesService } from "@/services/especies";
import type { Especie } from "@/types";
import { CATEGORIAS, ILUMINACIONES, UBICACIONES } from "./options";
import fallbackImg from "@/assets/plants/pothos.jpg.asset.json";

const vacia: Especie = {
  id: "", nombreComun: "", nombreCientifico: "", familia: "", categoria: "Follaje", imagen: fallbackImg.url, descripcion: "",
  ubicacion: "Interior", iluminacion: "Luz indirecta", riego: "", temperatura: "", humedad: "", sustrato: "", fertilizacion: "",
  poda: "", floracion: "", reproduccion: [], trasplante: "", plagas: "", toxicidad: "", consejos: "", observaciones: "", caracteristicas: [],
};

type TextKey = { [K in keyof Especie]: Especie[K] extends string ? K : never }[keyof Especie];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-3 rounded-2xl border p-4">
      <legend className="px-1 text-sm font-semibold text-primary">{title}</legend>
      <div className="grid gap-3 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function EspecieForm({ open, onOpenChange, especie, onSaved }: { open: boolean; onOpenChange: (o: boolean) => void; especie?: Especie; onSaved?: (e: Especie) => void }) {
  const [v, setV] = useState<Especie>(especie ?? vacia);
  const [reproTxt, setReproTxt] = useState((especie?.reproduccion ?? []).join(", "));
  const [error, setError] = useState(false);
  const set = (k: TextKey) => (e: { target: { value: string } }) => setV((p) => ({ ...p, [k]: e.target.value }));

  const field = (k: TextKey, label: string, opts: { area?: boolean; full?: boolean; req?: boolean } = {}) => (
    <div className={opts.full ? "space-y-1.5 sm:col-span-2" : "space-y-1.5"}>
      <Label htmlFor={k}>{label}{opts.req && <span className="text-terracotta"> *</span>}</Label>
      {opts.area ? <Textarea id={k} value={v[k]} onChange={set(k)} rows={2} /> : (
        <Input id={k} value={v[k]} onChange={set(k)} aria-invalid={opts.req && error && !v[k] ? true : undefined} />
      )}
      {opts.req && error && !v[k] && <p className="text-sm text-destructive">Este campo es obligatorio.</p>}
    </div>
  );

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!v.nombreComun.trim() || !v.nombreCientifico.trim()) { setError(true); return; }
    const saved: Especie = {
      ...v,
      id: v.id || v.nombreComun.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      reproduccion: reproTxt.split(",").map((s) => s.trim()).filter(Boolean),
    };
    especiesService.upsert(saved);
    toast.success(especie ? "Ficha actualizada" : "Especie agregada a la biblioteca");
    onSaved?.(saved);
    onOpenChange(false);
  };

  const select = <T extends string>(k: "categoria" | "ubicacion" | "iluminacion", label: string, options: readonly T[]) => (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Select value={v[k]} onValueChange={(val) => setV((p) => ({ ...p, [k]: val }))}>
        <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
        <SelectContent>{options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
      </Select>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{especie ? `Editar ${especie.nombreComun}` : "Nueva especie"}</DialogTitle>
          <DialogDescription>Completá la ficha botánica. Los campos con * son obligatorios.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <Section title="Identificación">
            {field("nombreComun", "Nombre común", { req: true })}
            {field("nombreCientifico", "Nombre científico", { req: true })}
            {field("familia", "Familia botánica")}
            {select("categoria", "Categoría", CATEGORIAS)}
            {field("descripcion", "Descripción", { area: true, full: true })}
          </Section>
          <Section title="Condiciones">
            {select("ubicacion", "Interior o exterior", UBICACIONES)}
            {select("iluminacion", "Iluminación", ILUMINACIONES)}
            {field("riego", "Riego")}
            {field("temperatura", "Temperatura")}
            {field("humedad", "Humedad")}
            {field("sustrato", "Sustrato recomendado")}
          </Section>
          <Section title="Cultivo">
            {field("fertilizacion", "Fertilización")}
            {field("poda", "Poda")}
            {field("floracion", "Floración")}
            {field("trasplante", "Época de trasplante")}
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="repro">Métodos de reproducción</Label>
              <Input id="repro" value={reproTxt} onChange={(e) => setReproTxt(e.target.value)} placeholder="Esqueje, semilla…" />
            </div>
          </Section>
          <Section title="Salud y notas">
            {field("plagas", "Plagas y enfermedades", { area: true })}
            {field("toxicidad", "Toxicidad", { area: true })}
            {field("consejos", "Consejos de cuidado", { area: true, full: true })}
            {field("observaciones", "Observaciones personales", { area: true, full: true })}
          </Section>
          <DialogFooter className="sticky bottom-0 -mx-6 -mb-6 border-t bg-background px-6 py-4">
            <Button type="button" variant="outline" size="lg" onClick={() => onOpenChange(false)}>Cancelar</Button>
            <Button type="submit" size="lg">{especie ? "Guardar cambios" : "Crear ficha"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
