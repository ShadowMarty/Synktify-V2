import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Inbox, Bell, Palette } from 'lucide-react'

const features = [
  {
    title: "Unified Inbox",
    description: "Manage all your messages in one place",
    icon: Inbox,
  },
  {
    title: "AI Assistant",
    description: "Get intelligent responses with our AI chatbot",
    icon: Bot,
  },
  {
    title: "Real-time Updates",
    description: "Stay up-to-date with instant notifications",
    icon: Bell,
  },
  {
    title: "Customizable Themes",
    description: "Personalize your experience with custom themes",
    icon: Palette,
  },
]

export function Features() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="h-8 w-8 mb-2" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

