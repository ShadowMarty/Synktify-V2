"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Icons.dashboard,
  },
  {
    title: "Inbox",
    href: "/dashboard/inbox",
    icon: Icons.inbox,
  },
  {
    title: "Social Feed",
    href: "/dashboard/social-feed",
    icon: Icons.users,
  },
  {
    title: "Media Gallery",
    href: "/dashboard/media-gallery",
    icon: Icons.image,
  },
  {
    title: "AI Assistant",
    href: "/dashboard/ai-assistant",
    icon: Icons.bot,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: Icons.barChart,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: Icons.user,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Icons.logo className="h-6 w-6" />
            <span>UCP</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 overflow-hidden">
          <div className="flex flex-col gap-2 p-6">
            <nav className="grid gap-1">
              {sidebarNavItems.map((item, index) => (
                <Button
                  key={index}
                  asChild
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href && "bg-muted font-medium hover:bg-muted"
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

