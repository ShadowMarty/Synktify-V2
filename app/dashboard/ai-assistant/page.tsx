import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AIAssistant } from "@/components/dashboard/ai-assistant"

export default function AIAssistantPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">AI Assistant</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>AI Chat</CardTitle>
          <CardDescription>
            Get intelligent responses and automate tasks with our AI assistant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AIAssistant />
        </CardContent>
      </Card>
    </div>
  )
}

