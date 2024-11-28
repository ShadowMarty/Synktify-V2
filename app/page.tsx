import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PricingPlans } from "@/components/pricing-plans"
import { Features } from "@/components/features"
import { HeroSection } from "@/components/hero-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Universal Communication Platform</h1>
        <div className="space-x-4">
          <Button asChild variant="ghost">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow">
        <HeroSection />
        <Features />
        <PricingPlans />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

