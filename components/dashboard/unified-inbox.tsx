"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/components/icons"

const messages = [
  {
    id: 1,
    sender: "John Doe",
    avatar: "/avatars/01.png",
    platform: "Email",
    subject: "Meeting Reminder",
    preview: "Don't forget about our meeting at 2 PM today...",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "Jane Smith",
    avatar: "/avatars/02.png",
    platform: "Twitter",
    subject: "New Follower",
    preview: "@janesmith started following you on Twitter...",
    time: "11:45 AM",
  },
  {
    id: 3,
    sender: "Mike Johnson",
    avatar: "/avatars/03.png",
    platform: "LinkedIn",
    subject: "Connection Request",
    preview: "Mike Johnson wants to connect with you on LinkedIn...",
    time: "1:15 PM",
  },
  {
    id: 4,
    sender: "Sarah Williams",
    avatar: "/avatars/04.png",
    platform: "Facebook",
    subject: "New Message",
    preview: "Hey, how's it going? I was wondering if you'd like to...",
    time: "2:30 PM",
  },
  {
    id: 5,
    sender: "David Brown",
    avatar: "/avatars/05.png",
    platform: "Email",
    subject: "Project Update",
    preview: "I've finished the first draft of the project report...",
    time: "3:45 PM",
  },
]

export function UnifiedInbox() {
  const [selectedTab, setSelectedTab] = useState("all")

  const filteredMessages = selectedTab === "all"
    ? messages
    : messages.filter(message => message.platform.toLowerCase() === selectedTab)

  return (
    <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedTab}>
      <div className="flex justify-between items-center mb-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="twitter">Twitter</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
        </TabsList>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search messages..."
            className="w-[300px]"
          />
          <Button size="icon" variant="ghost">
            <Icons.search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <TabsContent value="all" className="space-y-4">
        {filteredMessages.map((message) => (
          <div key={message.id} className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-accent cursor-pointer">
            <Avatar>
              <AvatarImage src={message.avatar} alt={message.sender} />
              <AvatarFallback>{message.sender[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="font-medium">{message.sender}</p>
              <p className="text-sm text-muted-foreground">{message.subject}</p>
              <p className="text-sm">{message.preview}</p>
            </div>
            <div className="text-sm text-muted-foreground">{message.time}</div>
            <div className="text-sm font-medium text-primary">{message.platform}</div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}

