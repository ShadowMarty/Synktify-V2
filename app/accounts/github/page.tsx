import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"

export const metadata: Metadata = {
  title: "Connect GitHub Account",
  description: "Connect your GitHub account to the platform.",
}

export default function GitHubAccountPage() {
  const handleGitHubConnect = async () => {
    // This will be replaced with actual GitHub OAuth flow
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
    const redirectUri = `${window.location.origin}/api/auth/github/callback`
    const scope = "user repo notifications"
    
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`
  }

  return (
    <div className="container mx-auto p-10">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Github className="h-8 w-8" />
            <div>
              <CardTitle>Connect GitHub Account</CardTitle>
              <CardDescription>
                Link your GitHub account to access repositories, issues, and notifications.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Connecting your GitHub account will allow you to:
              <ul className="list-disc pl-6 pt-2">
                <li>View and respond to notifications</li>
                <li>Access your repositories</li>
                <li>Manage issues and pull requests</li>
                <li>Receive real-time updates</li>
              </ul>
            </div>
            <Button
              className="w-full"
              size="lg"
              onClick={handleGitHubConnect}
            >
              <Github className="mr-2 h-4 w-4" />
              Connect with GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
