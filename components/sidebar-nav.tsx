"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  subItems?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
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

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[]
}

export function SidebarNav({ className, items = navItems, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <div key={item.href}>
          <Link
            href={item.href}
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href ? "bg-accent" : "transparent",
              "transition-all"
            )}
          >
            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
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
                  {subItem.icon && <subItem.icon className="mr-2 h-4 w-4" />}
                  <span>{subItem.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Menu
            </h2>
            <SidebarNav />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
