import { Bell, Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./logo";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-background/85 px-4 backdrop-blur md:px-6">
      <SidebarTrigger className="hidden md:inline-flex" aria-label="Mostrar u ocultar menú" />
      <div className="text-primary md:hidden [&_span:first-child]:bg-primary [&_span:first-child]:text-primary-foreground"><Logo /></div>
      <div className="relative ml-auto hidden w-full max-w-sm sm:block md:ml-2">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar plantas, productos, clientes…" className="h-10 rounded-full bg-card pl-9" />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Notificaciones">
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-terracotta" />
        </Button>
        <Avatar className="size-9">
          <AvatarFallback className="bg-secondary font-medium text-secondary-foreground">GF</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
