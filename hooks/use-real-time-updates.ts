import { useState, useEffect } from "react"
import { io, Socket } from "socket.io-client"

export function useRealTimeUpdates() {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [updates, setUpdates] = useState<string[]>([])

  useEffect(() => {
    // Replace with your actual WebSocket server URL
    const newSocket = io("http://localhost:3001")
    setSocket(newSocket)

    newSocket.on("update", (message: string) => {
      setUpdates((prevUpdates) => [...prevUpdates, message])
    })

    return () => {
      newSocket.disconnect()
    }
  }, [])

  return { updates }
}

