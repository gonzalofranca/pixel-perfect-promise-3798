import { createFileRoute } from "@tanstack/react-router";
import { Wallet } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/caja")({
  head: () => ({
    meta: [
      { title: "Caja · Mi Vivero" },
      { name: "description", content: "Apertura, cierre y movimientos de caja." },
      { property: "og:title", content: "Caja · Mi Vivero" },
      { property: "og:description", content: "Apertura, cierre y movimientos de caja." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Caja" description="Apertura, cierre y movimientos de caja." icon={Wallet} features={["Apertura y cierre", "Ingresos, egresos y retiros", "Diferencias de caja", "Historial de sesiones"]} />;
}
