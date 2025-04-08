"use client";
import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

// Define the types for the props
interface NavItem {
  subHeading?: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

interface NavMainProps {
  subHeading?: string;
  items: NavItem[];
}

const NavMain: React.FC<NavMainProps> = ({ subHeading, items }) => {
  return (
    <SidebarGroup>
      {/* Conditionally render subHeading if available */}
      {subHeading && <SidebarGroupLabel>{subHeading}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => (
          <NavLink to={item.url} key={item.title}>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </NavLink>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
