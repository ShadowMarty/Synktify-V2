"use client"

import { useEffect, useState } from "react"

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated by looking for a session token
    const token = localStorage.getItem("session")
    setIsAuthenticated(!!token)
  }, [])

  return {
    isAuthenticated,
    setIsAuthenticated,
  }
}
