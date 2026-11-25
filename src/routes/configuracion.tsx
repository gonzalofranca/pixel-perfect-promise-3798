import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/configuracion")({
  head: () => ({
    meta: [
      { title: "Configuración · Mi Vivero" },
      { name: "description", content: "Datos del vivero, preferencias, usuarios y permisos." },
      { property: "og:title", content: "Configuración · Mi Vivero" },
      { property: "og:description", content: "Datos del vivero, preferencias, usuarios y permisos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Configuración" description="Datos del vivero, preferencias, usuarios y permisos." icon={Settings} features={["Nombre comercial y logotipo", "Moneda y región", "Categorías y medios de pago", "Usuarios, roles y permisos"]} />;
}
