import { Check } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Basic",
    description: "Essential features for individuals",
    price: "$9.99",
    features: [
      "3 social media accounts",
      "Basic analytics",
      "24/7 support",
      "1GB storage",
    ],
  },
  {
    name: "Pro",
    description: "Advanced features for professionals",
    price: "$19.99",
    features: [
      "10 social media accounts",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "AI assistant (100 queries/month)",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large teams",
    price: "Custom",
    features: [
      "Unlimited social media accounts",
      "Custom analytics dashboard",
      "Dedicated account manager",
      "Unlimited storage",
      "AI assistant (unlimited queries)",
      "API access",
    ],
  },
]

export function PricingPlans() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={cn("flex flex-col", plan.name === "Pro" && "border-primary shadow-lg")}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

