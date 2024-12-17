import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Link } from "react-router-dom";
import {
  ChartColumn,
  Home,
  Inbox,
  Gauge,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useRef } from "react";

const items = [
  { title: "Début", url: "/home", icon: Home },
  { title: "Tableau de bord", url: "/dashboard", icon: LayoutDashboard },
  { title: "E-commerce", url: "/e-commerce", icon: Inbox },
  { title: "CRM", url: "/crm", icon: ChartColumn },
  { title: "Website Analytics", url: "/website-analytics", icon: Gauge },
];

export function CustomSidebar() {
  const focus = useRef<HTMLLinkElement>(null);

  focus.current

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex items-center justify-center">

              <h1 className="text-2xl font-bold text-cyan-900">Mon Application</h1>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projets</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {focus && <Link to={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-center text-red-500">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <LogOut />
            <span>Déconnecter</span>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xs text-gray-400 mb-2">
            © 2021 Tous droits réservés
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
