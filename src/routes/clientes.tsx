import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes · Mi Vivero" },
      { name: "description", content: "Directorio de clientes y cuentas corrientes." },
      { property: "og:title", content: "Clientes · Mi Vivero" },
      { property: "og:description", content: "Directorio de clientes y cuentas corrientes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Clientes" description="Directorio de clientes y cuentas corrientes." icon={Contact} features={["Datos de contacto", "Historial de compras", "Saldo pendiente", "Registro de pagos parciales"]} />;
}
