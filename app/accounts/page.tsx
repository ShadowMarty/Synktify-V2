import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { AccountsList } from "@/components/accounts-list"

export const metadata: Metadata = {
  title: "Accounts",
  description: "Link and manage your social media accounts.",
}

export default function AccountsPage() {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Accounts</h2>
        <p className="text-muted-foreground">
          Connect and manage your social media and messaging accounts.
        </p>
      </div>
      <Separator />
      <AccountsList />
    </div>
  )
}
