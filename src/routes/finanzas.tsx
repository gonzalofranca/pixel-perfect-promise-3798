import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/finanzas")({
  head: () => ({
    meta: [
      { title: "Finanzas · Mi Vivero" },
      { name: "description", content: "Flujo de dinero y rentabilidad del negocio." },
      { property: "og:title", content: "Finanzas · Mi Vivero" },
      { property: "og:description", content: "Flujo de dinero y rentabilidad del negocio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Finanzas" description="Flujo de dinero y rentabilidad del negocio." icon={Landmark} features={["Ingresos y egresos", "Margen bruto y resultado neto", "Flujo de caja", "Cuentas por cobrar y pagar"]} />;
}
