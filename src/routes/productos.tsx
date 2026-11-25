import { createFileRoute } from "@tanstack/react-router";
import { Package } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos · Mi Vivero" },
      { name: "description", content: "Catálogo interno de plantas, macetas, tierra, sustratos, fertilizantes y accesorios." },
      { property: "og:title", content: "Productos · Mi Vivero" },
      { property: "og:description", content: "Catálogo interno de plantas, macetas, tierra, sustratos, fertilizantes y accesorios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Productos" description="Catálogo interno de plantas, macetas, tierra, sustratos, fertilizantes y accesorios." icon={Package} features={["Catálogo con fotos y SKU", "Producción propia vs. reventa", "Variantes de tamaño y color", "Costos, precios y márgenes"]} />;
}
