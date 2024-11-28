"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Home,
  Mail,
  MessageSquare,
  Settings,
  Users,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  ChevronLeft,
  ChevronRight,
  Bell,
  Hash,
  Inbox,
  Send,
  Archive,
  Trash2,
} from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  subItems?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Social",
    href: "/social",
    icon: Hash,
    subItems: [
      {
        title: "Feed",
        href: "/social/feed",
        icon: Hash,
      },
      {
        title: "Notifications",
        href: "/social/notifications",
        icon: Bell,
      },
    ],
  },
  {
    title: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Mail",
    href: "/mail",
    icon: Mail,
    subItems: [
      {
        title: "Inbox",
        href: "/mail/inbox",
        icon: Inbox,
      },
      {
        title: "Sent",
        href: "/mail/sent",
        icon: Send,
      },
      {
        title: "Archive",
        href: "/mail/archive",
        icon: Archive,
      },
      {
        title: "Trash",
        href: "/mail/trash",
        icon: Trash2,
      },
    ],
  },
  {
    title: "Accounts",
    href: "/accounts",
    icon: Users,
    subItems: [
      {
        title: "GitHub",
        href: "/accounts/github",
        icon: Github,
      },
      {
        title: "Twitter",
        href: "/accounts/twitter",
        icon: Twitter,
      },
      {
        title: "LinkedIn",
        href: "/accounts/linkedin",
        icon: Linkedin,
      },
      {
        title: "Instagram",
        href: "/accounts/instagram",
        icon: Instagram,
      },
      {
        title: "Email",
        href: "/accounts/email",
        icon: Mail,
      },
    ],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean
  isLoggedIn?: boolean
}

export function Nav({ isCollapsed, isLoggedIn = false, className }: NavProps) {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = React.useState<string[]>([])

  // Don't render navigation if user is not logged in
  if (!isLoggedIn) {
    return null
  }

  const toggleGroup = (href: string) => {
    setOpenGroups(current =>
      current.includes(href)
        ? current.filter(h => h !== href)
        : [...current, href]
    )
  }

  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className={cn("flex h-full flex-col gap-4 py-2", className)}>
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            const isGroupOpen = openGroups.includes(item.href)

            if (item.subItems) {
              return (
                <div key={index}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between hover:bg-accent hover:text-accent-foreground",
                      isActive && "bg-accent text-accent-foreground",
                      isCollapsed && "h-9 w-9 p-0"
                    )}
                    onClick={() => toggleGroup(item.href)}
                  >
                    <div className="flex items-center">
                      <item.icon className={cn("h-4 w-4", isCollapsed && "h-4 w-4")} />
                      {!isCollapsed && <span className="ml-2">{item.title}</span>}
                    </div>
                    {!isCollapsed && item.subItems && (
                      <ChevronRight className={cn("h-4 w-4 transition-transform", isGroupOpen && "rotate-90")} />
                    )}
                  </Button>
                  {isGroupOpen && !isCollapsed && (
                    <div className="ml-4 mt-1">
                      {item.subItems.map((subItem, subIndex) => {
                        const isSubActive = pathname === subItem.href
                        return (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className={cn(
                              "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
                              isSubActive && "bg-accent text-accent-foreground"
                            )}
                          >
                            <subItem.icon className="h-4 w-4" />
                            <span>{subItem.title}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
                  isActive && "bg-accent text-accent-foreground",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon className={cn("h-4 w-4", isCollapsed && "h-4 w-4")} />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
    </ScrollArea>
  )
}
