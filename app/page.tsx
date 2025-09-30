import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { TemplateGallery } from "@/components/template-gallery"
import { MarketingBenefits } from "@/components/marketing-benefits"
import { Pricing } from "@/components/pricing"
import { Comparison } from "@/components/comparison"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Features />
        <HowItWorks />
        <TemplateGallery />
        <MarketingBenefits />
        <Pricing />
        <Comparison />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
