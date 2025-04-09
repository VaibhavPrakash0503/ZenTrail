import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image src="/zentrail-logo.png" alt="ZenTrail Logo" width={150} height={50} />
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Explore the world on eco-friendly e-bikes. Experience nature without leaving a carbon footprint.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#press" className="text-sm text-gray-600 hover:text-primary">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#faq" className="text-sm text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#safety" className="text-sm text-gray-600 hover:text-primary">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="#maintenance" className="text-sm text-gray-600 hover:text-primary">
                  Bike Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#privacy" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#rental" className="text-sm text-gray-600 hover:text-primary">
                  Rental Agreement
                </Link>
              </li>
              <li>
                <Link href="#insurance" className="text-sm text-gray-600 hover:text-primary">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} ZenTrail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
