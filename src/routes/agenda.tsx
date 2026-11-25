import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";
import { ModulePlaceholder } from "@/components/common/module-placeholder";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda de cuidados · Mi Vivero" },
      { name: "description", content: "Riego, fertilización, poda y demás tareas del vivero." },
      { property: "og:title", content: "Agenda de cuidados · Mi Vivero" },
      { property: "og:description", content: "Riego, fertilización, poda y demás tareas del vivero." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ModulePlaceholder title="Agenda de cuidados" description="Riego, fertilización, poda y demás tareas del vivero." icon={CalendarCheck} features={["Calendario mensual y semanal", "Tareas del día", "Recurrencias y prioridades", "Asociar a especies o lotes"]} />;
}
