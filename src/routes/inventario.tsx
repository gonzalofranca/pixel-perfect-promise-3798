import { createFileRoute } from "@tanstack/react-router";
import { Warehouse } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/inventario")({
  head: () => ({
    meta: [
      { title: "Inventario · Mi Vivero" },
      { name: "description", content: "Existencias, movimientos, pérdidas y valorización." },
      { property: "og:title", content: "Inventario · Mi Vivero" },
      { property: "og:description", content: "Existencias, movimientos, pérdidas y valorización." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Inventario" description="Existencias, movimientos, pérdidas y valorización." icon={Warehouse} features={["Stock disponible, reservado y en producción", "Entradas, salidas y ajustes", "Pérdidas y mortalidad", "Alertas de stock mínimo"]} />;
}
