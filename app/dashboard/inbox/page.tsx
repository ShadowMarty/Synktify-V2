import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UnifiedInbox } from "@/components/dashboard/unified-inbox"

export default function InboxPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Inbox</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Unified Inbox</CardTitle>
          <CardDescription>
            View and manage all your messages in one place
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UnifiedInbox />
        </CardContent>
      </Card>
    </div>
  )
}

