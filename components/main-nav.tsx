"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
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
    title: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Mail",
    href: "/mail",
    icon: Mail,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  isLoggedIn?: boolean
}

export function MainNav({ className, isLoggedIn = false, ...props }: MainNavProps) {
  const pathname = usePathname()

  // Don't render navigation if user is not logged in
  if (!isLoggedIn) {
    return null
  }

  return (
    <nav className={cn("flex-1", className)} {...props}>
      <div className="grid gap-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Menu
          </h2>
          <ScrollArea className="h-[calc(100vh-10rem)] px-1">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href ? "bg-accent" : "transparent",
                      "transition-all"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                  {item.subItems && pathname.startsWith(item.href) && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                            pathname === subItem.href ? "bg-accent" : "transparent",
                            "transition-all"
                          )}
                        >
                          <subItem.icon className="mr-2 h-4 w-4" />
                          <span>{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </nav>
  )
}

export function MobileNav({ isLoggedIn = false }) {
  if (!isLoggedIn) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MainNav />
      </SheetContent>
    </Sheet>
  )
}
