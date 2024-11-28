import { Sidebar } from "@/components/dashboard/sidebar"
import { ThemeCustomizer } from "@/components/theme-customizer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="p-4 flex justify-end">
          <ThemeCustomizer />
        </div>
        {children}
      </main>
    </div>
  )
}

