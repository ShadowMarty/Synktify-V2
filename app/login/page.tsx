"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { useAuth } from "@/components/auth-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Development mode configuration
const DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE === 'true'
const DEV_CREDENTIALS = {
  email: 'admin',
  password: 'admin'
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const [error, setError] = useState("")

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    // Development mode login
    if (DEV_MODE && email === DEV_CREDENTIALS.email && password === DEV_CREDENTIALS.password) {
      console.log('Dev mode: Login successful')
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('devMode', 'true')
      await login(email, password)
      setIsLoading(false)
      return
    }

    try {
      await login(email, password)
    } catch (err) {
      console.error('Login error:', err)
      setError("Invalid credentials")
    } finally {
      setIsLoading(false)
    }
  }

  // Auto-fill credentials in dev mode with double-click
  const handleFormDoubleClick = () => {
    if (DEV_MODE) {
      setEmail(DEV_CREDENTIALS.email)
      setPassword(DEV_CREDENTIALS.password)
      console.log('Dev mode: Credentials auto-filled')
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[350px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
              {DEV_MODE && (
                <span className="block text-xs text-indigo-600 mt-1">
                  Development Mode Active
                </span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} onDoubleClick={handleFormDoubleClick}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Username</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder={DEV_MODE ? "admin" : "name@example.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && (
                  <div className="text-red-500 text-sm text-center">{error}</div>
                )}
                {DEV_MODE && (
                  <div className="text-xs text-gray-500 text-center">
                    Double-click the form to auto-fill credentials
                  </div>
                )}
                <Button disabled={isLoading} type="submit" className="w-full">
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
