"use client"

import * as React from "react"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  if (!isAuthenticated) {
    return <main className="flex-1">{children}</main>
  }

  return (
    <div className="relative flex min-h-screen">
      <div
        className={cn(
          "relative border-r bg-background",
          isCollapsed ? "w-[50px]" : "w-[250px]"
        )}
      >
        <div className="flex h-[52px] items-center justify-end border-b px-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
        <Nav isCollapsed={isCollapsed} isLoggedIn={isAuthenticated} />
      </div>
      <main className="flex-1">
        <div className="container py-6">
          {children}
        </div>
      </main>
    </div>
  )
}
