import {
  BarChart3, BookOpen, CalendarCheck, Contact, Home, Landmark, Package, Settings, ShoppingBag,
  ShoppingCart, Sprout, Truck, Wallet, Warehouse, type LucideIcon,
} from "lucide-react";

export interface NavItem { title: string; url: string; icon: LucideIcon }

export const navGroups: { label: string; items: NavItem[] }[] = [
  { label: "General", items: [{ title: "Inicio", url: "/", icon: Home }] },
  {
    label: "Plantas y stock",
    items: [
      { title: "Biblioteca botánica", url: "/biblioteca", icon: BookOpen },
      { title: "Productos", url: "/productos", icon: Package },
      { title: "Inventario", url: "/inventario", icon: Warehouse },
      { title: "Producción", url: "/produccion", icon: Sprout },
      { title: "Agenda de cuidados", url: "/agenda", icon: CalendarCheck },
    ],
  },
  {
    label: "Comercial",
    items: [
      { title: "Ventas", url: "/ventas", icon: ShoppingCart },
      { title: "Compras", url: "/compras", icon: ShoppingBag },
      { title: "Clientes", url: "/clientes", icon: Contact },
      { title: "Proveedores", url: "/proveedores", icon: Truck },
    ],
  },
  {
    label: "Dinero",
    items: [
      { title: "Caja", url: "/caja", icon: Wallet },
      { title: "Finanzas", url: "/finanzas", icon: Landmark },
      { title: "Reportes", url: "/reportes", icon: BarChart3 },
    ],
  },
  { label: "Sistema", items: [{ title: "Configuración", url: "/configuracion", icon: Settings }] },
];
