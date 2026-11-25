import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/ventas")({
  head: () => ({
    meta: [
      { title: "Ventas · Mi Vivero" },
      { name: "description", content: "Registro rápido de ventas, pensado para celular y tablet." },
      { property: "og:title", content: "Ventas · Mi Vivero" },
      { property: "og:description", content: "Registro rápido de ventas, pensado para celular y tablet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Ventas" description="Registro rápido de ventas, pensado para celular y tablet." icon={ShoppingCart} features={["Búsqueda por nombre, SKU o código", "Descuentos y pagos combinados", "Ventas a cuenta corriente", "Historial, anulaciones y devoluciones"]} />;
}
