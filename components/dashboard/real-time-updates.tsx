import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRealTimeUpdates } from "@/hooks/use-real-time-updates"

export function RealTimeUpdates() {
  const { updates } = useRealTimeUpdates()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {updates.map((update, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm"
            >
              {update}
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

