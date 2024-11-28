import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
        Unify Your Social Experience
      </h1>
      <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
        Connect all your social media accounts, emails, and messaging apps in one powerful platform.
      </p>
      <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
        <Link href="/signup">Get Started for Free</Link>
      </Button>
    </section>
  )
}

