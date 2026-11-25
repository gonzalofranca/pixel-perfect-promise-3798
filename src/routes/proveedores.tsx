import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/proveedores")({
  head: () => ({
    meta: [
      { title: "Proveedores · Mi Vivero" },
      { name: "description", content: "Directorio de proveedores, saldos y vencimientos." },
      { property: "og:title", content: "Proveedores · Mi Vivero" },
      { property: "og:description", content: "Directorio de proveedores, saldos y vencimientos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Proveedores" description="Directorio de proveedores, saldos y vencimientos." icon={Truck} features={["Contacto y productos", "Historial de compras", "Saldos y vencimientos", "Pagos realizados"]} />;
}
