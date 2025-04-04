"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  FilePlus,
  FileText,
  CalendarClock,
  Image,
  Users,
  Plug,
  User,
  Settings,
  LifeBuoy,
  CreditCard,
  Clock,
  Hourglass,
  XCircle,
  Trash,
  List,
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
      title: "Create Post",
      url: "post-content/create-post",
      icon: FilePlus,
      isActive: true,
    },
    {
      title: "All Posts",
      url: "post-content/all-posts",
      icon: List,
      isActive: true,
    },
    {
      title: "Pending Posts",
      url: "post-content/pending-posts",
      icon: Hourglass,
      isActive: true,
    },
    {
      title: "Completed Posts",
      url: "post-content/completed-posts",
      icon: FileText,
      isActive: true,
    },
    {
      title: "Scheduled Posts",
      url: "post-content/scheduled-posts",
      icon: CalendarClock,
      isActive: true,
    },
    {
      title: "Maybe Later Posts",
      url: "post-content/maybe-later-posts",
      icon: Clock,
      isActive: true,
    },
    {
      title: "Declined Posts",
      url: "post-content/declined-posts",
      icon: XCircle,
      isActive: true,
    },
    {
      title: "Deleted Posts",
      url: "post-content/deleted-posts",
      icon: Trash,
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
  account: [
    {
      title: "Team",
      url: "#",
      icon: User,
      isActive: true,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      isActive: true,
    },
    {
      title: "Subscription",
      url: "#",
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
        <NavMain items={data.postContent} label={"Post Content"} />
        <NavMain items={data.mediaLibrary} />
        <NavMain items={data.integrations} label={"Integrations"} />
        <NavMain items={data.account} label={"Account"} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
