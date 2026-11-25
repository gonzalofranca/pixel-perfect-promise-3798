import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Landmark, Menu, ShoppingCart, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";
import { isActivePath } from "./app-sidebar";

const items = [
  { title: "Inicio", url: "/", icon: Home },
  { title: "Plantas", url: "/biblioteca", icon: Sprout },
  { title: "Ventas", url: "/ventas", icon: ShoppingCart },
  { title: "Finanzas", url: "/finanzas", icon: Landmark },
  { title: "Más", url: "/mas", icon: Menu },
] as const;

export function MobileNav() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden" aria-label="Navegación principal">
      <ul className="grid grid-cols-5">
        {items.map((it) => {
          const active = isActivePath(path, it.url);
          return (
            <li key={it.url}>
              <Link to={it.url} className={cn("flex flex-col items-center gap-1 py-2.5 text-xs font-medium", active ? "text-primary" : "text-muted-foreground")}>
                <span className={cn("grid h-7 w-12 place-items-center rounded-full", active && "bg-secondary")}>
                  <it.icon className="size-5" />
                </span>
                {it.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
