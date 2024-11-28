"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from "@/components/ui/use-toast"

interface User {
  email: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    if (email === "admin" && password === "admin") {
      const user = { email }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      toast({
        title: "Logged in successfully",
        description: "Welcome back, admin!",
      })
      router.push('/dashboard')
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      })
    }
    setLoading(false)
  }

  const signup = async (email: string, password: string) => {
    setLoading(true)
    if (email && password) {
      const user = { email }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      toast({
        title: "Account created",
        description: "You have successfully signed up!",
      })
      router.push('/dashboard')
    } else {
      toast({
        title: "Signup failed",
        description: "Please provide both email and password",
        variant: "destructive",
      })
    }
    setLoading(false)
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem('user')
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
