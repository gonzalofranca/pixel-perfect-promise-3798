import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/compras")({
  head: () => ({
    meta: [
      { title: "Compras · Mi Vivero" },
      { name: "description", content: "Compras a proveedores, al contado o a crédito." },
      { property: "og:title", content: "Compras · Mi Vivero" },
      { property: "og:description", content: "Compras a proveedores, al contado o a crédito." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Compras" description="Compras a proveedores, al contado o a crédito." icon={ShoppingBag} features={["Productos, costos y descuentos", "Gastos adicionales", "Fechas de compra y recepción", "Pagos parciales"]} />;
}
