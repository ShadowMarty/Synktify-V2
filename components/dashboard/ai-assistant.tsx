"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AI_MODELS = [
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  { id: "gpt-4", name: "GPT-4" },
  { id: "claude-v1", name: "Claude v1" },
  { id: "palm-2", name: "PaLM 2" },
  { id: "llama-2", name: "LLaMA 2" },
]

export function AIAssistant() {
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0].id)
  const [input, setInput] = useState("")
  const [conversation, setConversation] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [apiKey, setApiKey] = useState("")

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const updatedConversation = [
      ...conversation,
      { role: "user" as const, content: input },
    ]
    setConversation(updatedConversation)
    setInput("")

    // TODO: Implement actual AI model API call here
    const aiResponse = await simulateAIResponse(selectedModel, updatedConversation)
    setConversation([...updatedConversation, { role: "assistant", content: aiResponse }])
  }

  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-[200px]">
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
        <Input
          type="password"
          placeholder="Enter API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-[200px]"
        />
      </div>
      <ScrollArea className="flex-grow border rounded-md p-4 mb-4">
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}

// Simulated AI response function (replace with actual API call)
async function simulateAIResponse(model: string, conversation: { role: string; content: string }[]): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay
  return `This is a simulated response from the ${model} model. In a real implementation, this would be the response from the AI based on the conversation context.`
}

