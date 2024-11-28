import { Button } from "@/components/ui/button"
import { PlusCircle, Send, Settings } from 'lucide-react'

export function QuickActions() {
  return (
    <div className="flex space-x-2">
      <Button size="sm">
        <PlusCircle className="mr-2 h-4 w-4" />
        New Post
      </Button>
      <Button size="sm" variant="outline">
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
      <Button size="sm" variant="ghost">
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Button>
    </div>
  )
}

