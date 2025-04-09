import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-mint">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Zentrail was born from a simple observation: students in rural colleges face significant transportation
                challenges. Long commutes, unreliable public transport, and high costs create barriers to education.
              </p>

              <p className="text-gray-700 mb-6">
                Founded by a team of engineering students. We understand these challenges
                firsthand. We've created an affordable, sustainable solution that gives students the freedom to focus on
                what matters most - their education.
              </p>

              <p className="text-gray-700">
                Our electric bike rental system is designed specifically for rural college communities, with durability,
                affordability, and sustainability at its core.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
