import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  AlertTriangle, ArrowLeft, Bug, CalendarDays, Droplets, Flower2, Leaf, MapPin, NotebookPen, Pencil,
  Scissors, Shovel, Sparkles, Sprout, Sun, Thermometer, Trash2, Waves, type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { EmptyState } from "@/components/common/empty-state";
import { EspecieForm } from "@/components/botanica/especie-form";
import { especiesService, useEspecie } from "@/services/especies";

export const Route = createFileRoute("/biblioteca/$id")({
  head: () => ({
    meta: [
      { title: "Ficha botánica · Mi Vivero" },
      { name: "description", content: "Ficha de cuidado de la especie." },
      { property: "og:title", content: "Ficha botánica · Mi Vivero" },
      { property: "og:description", content: "Ficha de cuidado de la especie." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Ficha,
});

function Dato({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border bg-card p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><Icon className="size-5" /></span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-[15px]">{children || "—"}</p>
      </div>
    </div>
  );
}

function Ficha() {
  const { id } = Route.useParams();
  const e = useEspecie(id);
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  if (!e) {
    return <EmptyState icon={Leaf} title="Especie no encontrada" description="Puede que se haya eliminado."
      action={<Button asChild><Link to="/biblioteca">Volver a la biblioteca</Link></Button>} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-2">
        <Button asChild variant="ghost" className="-ml-3"><Link to="/biblioteca"><ArrowLeft />Biblioteca</Link></Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setEdit(true)}><Pencil />Editar</Button>
          <AlertDialog>
            <AlertDialogTrigger asChild><Button variant="outline" size="icon" aria-label="Eliminar ficha"><Trash2 /></Button></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Eliminar la ficha de {e.nombreComun}?</AlertDialogTitle>
                <AlertDialogDescription>Esta acción no se puede deshacer. Los productos asociados quedarán sin especie.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={() => {
                  especiesService.remove(e.id);
                  toast.success("Ficha eliminada");
                  void navigate({ to: "/biblioteca" });
                }}>Eliminar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <section className="grid gap-6 overflow-hidden rounded-3xl border bg-card shadow-soft md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <img src={e.imagen} alt={e.nombreComun} fetchPriority="high" className="aspect-square w-full object-cover md:aspect-auto md:h-full" />
        <div className="p-6 md:py-8 md:pr-8">
          <Badge className="bg-terracotta-soft text-terracotta hover:bg-terracotta-soft">{e.categoria}</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">{e.nombreComun}</h1>
          <p className="mt-1 text-lg italic text-muted-foreground">{e.nombreCientifico} · {e.familia}</p>
          <p className="mt-4 text-[16px] leading-relaxed">{e.descripcion}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {e.caracteristicas.map((c) => <Badge key={c} variant="outline" className="px-3 py-1 text-sm">{c}</Badge>)}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-muted p-3"><MapPin className="size-4 text-terracotta" /><p className="mt-1 text-sm text-muted-foreground">Ubicación</p><p className="font-medium">{e.ubicacion}</p></div>
            <div className="rounded-2xl bg-muted p-3"><Sun className="size-4 text-terracotta" /><p className="mt-1 text-sm text-muted-foreground">Iluminación</p><p className="font-medium">{e.iluminacion}</p></div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Cuidados</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Dato icon={Droplets} label="Riego">{e.riego}</Dato>
          <Dato icon={Thermometer} label="Temperatura">{e.temperatura}</Dato>
          <Dato icon={Waves} label="Humedad">{e.humedad}</Dato>
          <Dato icon={Shovel} label="Sustrato recomendado">{e.sustrato}</Dato>
          <Dato icon={Sparkles} label="Fertilización">{e.fertilizacion}</Dato>
          <Dato icon={Scissors} label="Poda">{e.poda}</Dato>
          <Dato icon={Flower2} label="Floración">{e.floracion}</Dato>
          <Dato icon={Sprout} label="Reproducción">{e.reproduccion.join(", ")}</Dato>
          <Dato icon={CalendarDays} label="Época de trasplante">{e.trasplante}</Dato>
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-2">
        <Dato icon={Bug} label="Plagas y enfermedades frecuentes">{e.plagas}</Dato>
        <div className="flex gap-3 rounded-2xl border border-warning/40 bg-warning-soft p-4">
          <AlertTriangle className="mt-0.5 size-5 shrink-0" />
          <div><p className="text-sm font-medium">Toxicidad para animales y personas</p><p className="mt-0.5">{e.toxicidad || "—"}</p></div>
        </div>
        <Dato icon={Leaf} label="Consejos de cuidado">{e.consejos}</Dato>
        <Dato icon={NotebookPen} label="Observaciones personales">{e.observaciones}</Dato>
      </section>

      {edit && <EspecieForm open={edit} onOpenChange={setEdit} especie={e} />}
    </div>
  );
}
