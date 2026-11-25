import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navGroups } from "./nav";
import { Logo } from "./logo";
import { vivero } from "@/data/mock";

export function isActivePath(current: string, url: string) {
  return url === "/" ? current === "/" : current === url || current.startsWith(url + "/");
}

export function AppSidebar() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-3 py-4 group-data-[collapsible=icon]:px-2">
        <div className="group-data-[collapsible=icon]:hidden"><Logo /></div>
        <div className="hidden group-data-[collapsible=icon]:block"><Logo compact /></div>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((g) => (
          <SidebarGroup key={g.label}>
            <SidebarGroupLabel className="text-sidebar-foreground/60">{g.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActivePath(path, item.url)} tooltip={item.title} className="h-10 text-[15px]">
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <div className="rounded-xl bg-sidebar-accent p-3 text-sm">
          <p className="font-medium text-sidebar-accent-foreground">{vivero.usuario}</p>
          <p className="text-sidebar-foreground/70">{vivero.rol}</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
