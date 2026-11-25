import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/reportes")({
  head: () => ({
    meta: [
      { title: "Reportes · Mi Vivero" },
      { name: "description", content: "Ventas, rentabilidad, inventario y producción." },
      { property: "og:title", content: "Reportes · Mi Vivero" },
      { property: "og:description", content: "Ventas, rentabilidad, inventario y producción." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Reportes" description="Ventas, rentabilidad, inventario y producción." icon={BarChart3} features={["Productos más vendidos", "Rentabilidad por producto", "Mortalidad de plantas", "Exportar a Excel y PDF"]} />;
}
