"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from 'lucide-react'

const AI_MODELS = [
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  { id: "gpt-4", name: "GPT-4" },
  { id: "claude-v1", name: "Claude v1" },
]

export function AIChatbot() {
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0].id)
  const [message, setMessage] = useState("")
  const [conversation, setConversation] = useState<{ role: "user" | "assistant"; content: string }[]>([])

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const updatedConversation = [
      ...conversation,
      { role: "user" as const, content: message },
    ]
    setConversation(updatedConversation)
    setMessage("")

    // TODO: Implement actual AI model API call here
    const aiResponse = await simulateAIResponse(selectedModel, updatedConversation)
    setConversation([...updatedConversation, { role: "assistant", content: aiResponse }])
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>AI Assistant</CardTitle>
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select AI Model" />
          </SelectTrigger>
          <SelectContent>
            {AI_MODELS.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto space-y-4">
        {conversation.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
      </CardContent>
      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
          className="flex space-x-2"
        >
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  )
}

// Simulated AI response function (replace with actual API call)
async function simulateAIResponse(model: string, conversation: { role: string; content: string }[]): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
  return `This is a simulated response from the ${model} model. In a real implementation, this would be the response from the AI based on the conversation context.`
}

