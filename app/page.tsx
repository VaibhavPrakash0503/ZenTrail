import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  MapPin,
  Star,
  Zap,
  Mail,
  Phone,
  MapPinIcon as LocationPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-mint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Explore Nature on <span className="text-primary">Electric Bikes</span>
                </h1>
                <p className="mt-2 text-xl text-secondary font-medium">Your adventure, Our Zen</p>
                <p className="mt-4 text-lg text-gray-600">
                  Discover the joy of eco-friendly travel with our premium e-bike rentals. Perfect for city exploration
                  or trail adventures.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">Book Now</Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Electric bike on a mountain trail"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ZenTrail Section */}
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose <span className="text-primary">Zentrail</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our eBike rental system offers numerous advantages for rural college students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <h3 className="text-xl font-bold mb-3">Cost Effective</h3>
                <p className="text-gray-600">
                  Save money on daily transportation with our affordable rental plans designed for student budgets
                </p>
              </div>

              <div className="border p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-1 bg-secondary mb-4"></div>
                <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Reduce your carbon footprint with zero-emission electric bikes that help protect the environment
                </p>
              </div>

              <div className="border p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <h3 className="text-xl font-bold mb-3">Time Saving</h3>
                <p className="text-gray-600">
                  Avoid traffic jams and unreliable public transport to get to your classes on time, every time
                </p>
              </div>

              <div className="border p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-1 bg-secondary mb-4"></div>
                <h3 className="text-xl font-bold mb-3">Healthier Lifestyle</h3>
                <p className="text-gray-600">
                  Enjoy the physical and mental health benefits of cycling with electric assistance when needed
                </p>
              </div>

              <div className="border p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <h3 className="text-xl font-bold mb-3">Campus Accessibility</h3>
                <p className="text-gray-600">
                  Navigate large rural campuses with ease and reach distant locations without exhaustion
                </p>
              </div>

              <div className="border p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-1 bg-secondary mb-4"></div>
                <h3 className="text-xl font-bold mb-3">Community Building</h3>
                <p className="text-gray-600">
                  Join a community of like-minded students who value sustainability and smart mobility
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                How It <span className="text-primary">Works</span>
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Renting an eBike with Zentrail is quick, convenient, and hassle-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Find a Station</h3>
                <p className="text-gray-600 mb-4">
                  Locate the nearest Zentrail station on your college campus through our app or website
                </p>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mt-4">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Book Your Ride</h3>
                <p className="text-gray-600 mb-4">
                  Reserve an eBike for your desired time slot using our simple booking system
                </p>
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mt-4">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Unlock & Ride</h3>
                <p className="text-gray-600 mb-4">
                  Scan the QR code on the bike or use your student ID to unlock and start riding
                </p>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mt-4">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Return & Share</h3>
                <p className="text-gray-600 mb-4">
                  Return the bike to any Zentrail station and let others benefit from the service
                </p>
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mt-4">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Riders Say</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our customers have to say about their ZenTrail experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  location: "Portland, OR",
                  quote:
                    "The Mountain Explorer e-bike made our weekend trip amazing! We covered twice the distance we normally would and saw incredible views.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  location: "Seattle, WA",
                  quote:
                    "As a daily commuter, the City Cruiser changed my life. No more traffic jams, and I arrive at work energized instead of stressed.",
                  rating: 5,
                },
                {
                  name: "Emma Rodriguez",
                  location: "Denver, CO",
                  quote:
                    "The booking process was seamless, and the staff was incredibly helpful in choosing the right bike for my skill level.",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-300" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 mb-8">
                  Interested in bringing Zentrail to your college? Have questions about our service? We'd love to hear
                  from you! Fill out the form and our team will get back to you shortly.
                </p>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mint rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@zentrail.in</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mint rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-mint rounded-lg flex items-center justify-center flex-shrink-0">
                      <LocationPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        123 Innovation Hub, Tech Park
                        <br />
                        Bengaluru, Karnataka 560001
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-secondary/80 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-secondary/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Doe" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
                        College Name
                      </label>
                      <Input id="college" placeholder="Rural Engineering College" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements or questions..."
                        className="w-full min-h-[120px]"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your E-Bike Adventure?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of happy riders exploring cities and trails with our premium e-bikes.
            </p>
            <div className="flex justify-center">
              <Link href="/register">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
