import Link from "next/link"
import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Icons.logo className="h-6 w-6 mr-2" />
          <span className="text-lg font-semibold">Universal Communication Platform</span>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
        </nav>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2023 Universal Communication Platform. All rights reserved.
      </div>
    </footer>
  )
}

