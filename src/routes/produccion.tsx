import { createFileRoute } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/produccion")({
  head: () => ({
    meta: [
      { title: "Producción propia · Mi Vivero" },
      { name: "description", content: "Lotes de producción desde la siembra hasta la venta." },
      { property: "og:title", content: "Producción propia · Mi Vivero" },
      { property: "og:description", content: "Lotes de producción desde la siembra hasta la venta." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Producción propia" description="Lotes de producción desde la siembra hasta la venta." icon={Sprout} features={["Vista Kanban por etapas", "Vista de listado", "Consumo de insumos por lote", "Fecha estimada de disponibilidad"]} />;
}
