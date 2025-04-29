
"use-client"

import { Calendar1, CalendarRange, ClockAlert, LoaderCircle, NotebookText, ChevronDown, Plus, User} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupAction,
  SidebarHeader,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// user
const data = {
  user: {
    name: "User",
    email: "user@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}

// Menu items.
const menuItems = [
  {
    title: "Today",
    url: "#",
    icon: Calendar1,
  },
  {
    title: "Week",
    url: "#",
    icon: CalendarRange,
  },
  {
    title: "Missed",
    url: "#",
    icon: ClockAlert,
  },
  {
    title: "Progress",
    url: "#",
    icon: LoaderCircle,
  },
]

const pages = [
  {
    title: "General",
    url: "#",
    icon: NotebookText
  },
  {
    title: "Routine",
    url: "#",
    icon: NotebookText
  },
]

export function AppSidebar() {
  return (

    // Main Menu
    <Sidebar>

      {/* Header */}
      <SidebarHeader className="flex flex-row"> 
        <Avatar>
          <AvatarFallback>{data.user.name.slice(0,2)}</AvatarFallback>
        </Avatar>
        <Label>{data.user.name}</Label>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((menu) => (
                <SidebarMenuItem key={menu.title}>
                  <SidebarMenuButton asChild>
                    <a href={menu.url}>
                      <menu.icon />
                      <span>{menu.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pages */}
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <div>
            <SidebarGroupAction title="Add Page">
              <Plus />
            </SidebarGroupAction>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((page) => (
                <SidebarMenuItem key={page.title}>
                  <SidebarMenuButton asChild>
                    <a href={page.url}>
                      <page.icon />
                      <span>{page.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


      </SidebarContent>
    </Sidebar>
  )
}