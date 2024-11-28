import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const summaryItems = [
  {
    title: "Connected Accounts",
    value: "5",
    icon: Icons.users,
    change: "+1 this week",
  },
  {
    title: "Total Messages",
    value: "1,234",
    icon: Icons.messageSquare,
    change: "+20.1% from last month",
  },
  {
    title: "Notifications",
    value: "12",
    icon: Icons.bell,
    change: "-2 from yesterday",
  },
  {
    title: "Storage Used",
    value: "64%",
    icon: Icons.database,
    change: "3.5 GB free",
  },
]

export function AccountSummary() {
  return (
    <>
      {summaryItems.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">
              {item.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

