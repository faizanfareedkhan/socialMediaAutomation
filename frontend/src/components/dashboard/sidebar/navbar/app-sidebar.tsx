"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  FilePlus,
  Image,
  Users,
  Plug,
  User,
  Settings,
  LifeBuoy,
  CreditCard,
  Key,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "../navHeader/team-switcher";
import { NavUser } from "../navFooter/nav-user";
import NavMain from "../navItems/nav-main";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  dashbooard: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
  ],
  postContent: [
    {
      title: "Post",
      url: "post-content/create-post",
      icon: FilePlus,
      isActive: true,
    },
  ],
  mediaLibrary: [
    {
      title: "Media Library",
      url: "dashboard/media-library",
      icon: Image,
      isActive: true,
    },
  ],
  integrations: [
    {
      title: "Social Media Accounts",
      url: "integrations/social-media-accounts",
      icon: Users,
      isActive: true,
    },
    {
      title: "Third-Party Integrations",
      url: "integrations/third-party-integrations",
      icon: Plug,
      isActive: true,
    },
  ],
  members: [
    {
      title: "Members",
      url: "members/Members",
      icon: Users,
      isActive: true,
    },
  ],
  account: [
    {
      title: "Team",
      url: "#",
      icon: User,
      isActive: true,
    },
    {
      title: "Settings",
      url: "accounts/settings",
      icon: Settings,
      isActive: true,
    },
    {
      title: "API Key",
      url: "#",
      icon: Key,
      isActive: true,
    },
    {
      title: "Subscription",
      url: "accounts/subscription",
      icon: CreditCard,
      isActive: true,
    },
    {
      title: "Help",
      url: "#",
      icon: LifeBuoy,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.dashbooard} />
        <NavMain items={data.postContent} subHeading={"Post Content"} />
        <NavMain items={data.mediaLibrary} subHeading={"Media"} />
        <NavMain items={data.integrations} subHeading={"Integrations"} />
        <NavMain items={data.members} subHeading={"Members"} />
        <NavMain items={data.account} subHeading={"Account"} />
      
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
