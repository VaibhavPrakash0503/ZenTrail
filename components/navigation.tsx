"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/zentrail-logo.png" alt="ZenTrail Logo" width={150} height={50} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link href="#pricing" className="px-3 py-2 text-gray-700 hover:text-primary">
              Pricing
            </Link>
            <Link href="#locations" className="px-3 py-2 text-gray-700 hover:text-primary">
              Locations
            </Link>
            <Link href="#contact" className="px-3 py-2 text-gray-700 hover:text-primary">
              Contact
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" className="border-primary text-primary hover:bg-green-50">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary hover:bg-primary/90 text-white">Sign up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#bikes"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Bikes
            </Link>
            <Link
              href="#pricing"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#locations"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 flex flex-col space-y-2">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-green-50">
                  Log in
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
