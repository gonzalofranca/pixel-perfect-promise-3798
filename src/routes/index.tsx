import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle, ArrowDownRight, ArrowUpRight, CalendarCheck, Coins, HandCoins, Leaf, PackagePlus,
  Plus, Receipt, ShoppingBag, ShoppingCart, Sprout, TrendingUp, Warehouse,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { StatCard } from "@/components/common/stat-card";
import { SalesChart } from "@/components/common/sales-chart";
import { movimientos, resumen, stockBajo, tareas, vivero } from "@/data/mock";
import { formatFecha, formatNum, formatUYU } from "@/lib/format";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/plants/monstera.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inicio · Mi Vivero" },
      { name: "description", content: "Resumen diario de ventas, stock, producción y tareas del vivero." },
      { property: "og:title", content: "Inicio · Mi Vivero" },
      { property: "og:description", content: "Resumen diario de ventas, stock, producción y tareas del vivero." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const acciones = [
  { label: "Registrar venta", icon: ShoppingCart, to: "/ventas" },
  { label: "Agregar planta", icon: Leaf, to: "/biblioteca" },
  { label: "Registrar gasto", icon: Receipt, to: "/finanzas" },
  { label: "Ingresar compra", icon: PackagePlus, to: "/compras" },
  { label: "Crear tarea", icon: CalendarCheck, to: "/agenda" },
] as const;

function Dashboard() {
  const resultado = resumen.ingresosMes - resumen.egresosMes;
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
        <img src={heroImg.url} alt="" fetchPriority="high" className="absolute inset-y-0 right-0 hidden h-full w-2/5 object-cover opacity-90 md:block [mask-image:linear-gradient(to_right,transparent,black_40%)]" />
        <div className="relative p-6 md:max-w-[60%] md:p-8">
          <p className="text-sm opacity-80">Miércoles, {formatFecha("2026-11-25")}</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">Buen día, {vivero.usuario.split(" ")[0]}</h1>
          <p className="mt-2 opacity-85">Hoy llevás {resumen.ventasHoyCant} ventas por {formatUYU(resumen.ventasHoy)} y tenés {tareas.length} tareas de cuidado pendientes.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {acciones.map((a, i) => (
              <Button key={a.label} asChild size="lg" variant={i === 0 ? "secondary" : "ghost"} className={cn("rounded-full", i > 0 && "bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground")}>
                <Link to={a.to}><a.icon />{a.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        <StatCard label="Ventas del mes" value={formatUYU(resumen.ventasMes)} hint="+8,4 % vs. octubre" icon={TrendingUp} />
        <StatCard label="Resultado estimado" value={formatUYU(resultado)} hint={`Ingresos ${formatUYU(resumen.ingresosMes)}`} icon={Coins} tone="sage" />
        <StatCard label="Plantas disponibles" value={formatNum(resumen.plantasDisponibles)} hint={`${formatNum(resumen.plantasProduccion)} en producción`} icon={Sprout} />
        <StatCard label="Valor del inventario" value={formatUYU(resumen.valorInventario)} hint={`${stockBajo.length} productos con stock bajo`} icon={Warehouse} tone="terracotta" />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-5 shadow-soft lg:col-span-2">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold">Evolución de ventas</h2>
              <p className="text-sm text-muted-foreground">Últimos 6 meses · ventas y egresos</p>
            </div>
          </div>
          <SalesChart />
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl border bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><HandCoins className="size-4" />Por cobrar</div>
            <p className="mt-1 text-2xl font-semibold">{formatUYU(resumen.porCobrar)}</p>
            <p className="text-sm text-muted-foreground">5 clientes con cuenta corriente</p>
          </div>
          <div className="rounded-2xl border bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><ShoppingBag className="size-4" />Por pagar</div>
            <p className="mt-1 text-2xl font-semibold">{formatUYU(resumen.porPagar)}</p>
            <p className="text-sm text-muted-foreground">Próximo vencimiento {formatFecha("2026-11-30")}</p>
          </div>
          <div className="rounded-2xl border border-warning/40 bg-warning-soft p-5">
            <div className="flex items-center gap-2 font-medium"><AlertTriangle className="size-4" />Stock bajo</div>
            <ul className="mt-2 space-y-1.5 text-[15px]">
              {stockBajo.map((s) => (
                <li key={s.id} className="flex justify-between gap-3"><span className="min-w-0 truncate">{s.producto}</span><span className="shrink-0 font-medium">{s.stock}/{s.minimo}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-card p-5 shadow-soft">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Tareas de cuidado</h2>
            <Button asChild variant="ghost" size="sm"><Link to="/agenda">Ver agenda</Link></Button>
          </div>
          <ul className="divide-y">
            {tareas.map((t) => (
              <li key={t.id} className="flex items-center gap-3 py-3">
                <Checkbox id={t.id} className="size-5" onCheckedChange={(v) => v && toast.success(`“${t.titulo}” marcada como hecha`)} />
                <label htmlFor={t.id} className="min-w-0 flex-1 cursor-pointer">
                  <span className="block truncate font-medium">{t.titulo}</span>
                  <span className="text-sm text-muted-foreground">{t.tipo} · {t.asociado} · {formatFecha(t.vence)}</span>
                </label>
                <Badge variant="outline" className={cn("shrink-0", t.prioridad === "Alta" && "border-terracotta/40 bg-terracotta-soft text-terracotta")}>{t.prioridad}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-soft">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Últimos movimientos</h2>
            <Button variant="ghost" size="sm" onClick={() => toast("Próximamente: historial completo")}><Plus />Ver todos</Button>
          </div>
          <ul className="divide-y">
            {movimientos.map((m) => {
              const pos = m.monto > 0;
              return (
                <li key={m.id} className="flex items-center gap-3 py-3">
                  <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", pos ? "bg-secondary text-primary" : "bg-terracotta-soft text-terracotta")}>
                    {pos ? <ArrowUpRight className="size-4" /> : <ArrowDownRight className="size-4" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{m.descripcion}</p>
                    <p className="text-sm capitalize text-muted-foreground">{m.tipo} · {formatFecha(m.fecha)}</p>
                  </div>
                  <span className={cn("shrink-0 font-semibold", pos ? "text-success" : "text-foreground")}>{pos ? "+" : "−"}{formatUYU(Math.abs(m.monto))}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
