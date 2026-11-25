import { Link, createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { navGroups } from "@/components/layout/nav";
import { PageHeader } from "@/components/common/page-header";

export const Route = createFileRoute("/mas")({
  head: () => ({
    meta: [
      { title: "Más · Mi Vivero" },
      { name: "description", content: "Todos los módulos de Mi Vivero." },
      { property: "og:title", content: "Más · Mi Vivero" },
      { property: "og:description", content: "Todos los módulos de Mi Vivero." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Mas,
});

function Mas() {
  return (
    <>
      <PageHeader title="Todos los módulos" />
      <div className="space-y-6">
        {navGroups.map((g) => (
          <section key={g.label}>
            <h2 className="mb-2 px-1 text-sm font-medium text-muted-foreground">{g.label}</h2>
            <ul className="divide-y overflow-hidden rounded-2xl border bg-card shadow-soft">
              {g.items.map((it) => (
                <li key={it.url}>
                  <Link to={it.url} className="flex items-center gap-3 px-4 py-3.5 hover:bg-muted">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><it.icon className="size-[18px]" /></span>
                    <span className="min-w-0 flex-1 font-medium">{it.title}</span>
                    <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
