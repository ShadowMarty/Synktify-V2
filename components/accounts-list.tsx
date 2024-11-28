"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github, Twitter, Mail, Linkedin, Instagram } from "lucide-react"

const accounts = [
  {
    id: "github",
    name: "GitHub",
    description: "Connect your GitHub account to view and respond to notifications.",
    icon: Github,
  },
  {
    id: "twitter",
    name: "Twitter",
    description: "Connect your Twitter account to view and send tweets, and manage DMs.",
    icon: Twitter,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connect your LinkedIn account to manage your professional network.",
    icon: Linkedin,
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Connect your Instagram account to view and manage posts and messages.",
    icon: Instagram,
  },
  {
    id: "email",
    name: "Email",
    description: "Connect your email accounts to manage all your emails in one place.",
    icon: Mail,
  },
]

export function AccountsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {accounts.map((account) => (
        <Card key={account.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {account.name}
            </CardTitle>
            <account.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardDescription className="mt-2">
              {account.description}
            </CardDescription>
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => {
                // Handle account connection
                window.location.href = `/accounts/${account.id}`
              }}
            >
              Connect Account
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
