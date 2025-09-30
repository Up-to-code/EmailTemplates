import { Card, CardContent } from "@/components/ui/card"
import { Target, Repeat, Globe, Shield } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Drive engagement",
    metric: "3x higher click rates",
    description:
      "Beautiful, responsive emails capture attention and inspire action. Our templates are optimized for maximum engagement across all devices and email clients.",
  },
  {
    icon: Repeat,
    title: "Automate growth",
    metric: "Save 10+ hours weekly",
    description:
      "Set up welcome sequences, abandoned cart reminders, and re-engagement campaigns once. Let automation nurture leads and recover revenue while you focus on strategy.",
  },
  {
    icon: Globe,
    title: "Expand your reach",
    metric: "Grow lists 40% faster",
    description:
      "Integrated signup forms, landing pages, and referral tools help you capture more subscribers. Smart segmentation ensures every message reaches the right audience.",
  },
  {
    icon: Shield,
    title: "Maintain deliverability",
    metric: "99.5% inbox placement",
    description:
      "Built-in authentication, spam testing, and compliance tools protect your sender reputation. Your carefully crafted emails actually reach your subscribers.",
  },
]

export function MarketingBenefits() {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl mb-4">Marketing that works.</h2>
          <p className="text-balance text-lg text-muted-foreground leading-relaxed md:text-xl">
            Turn subscribers into customers with campaigns that perform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border bg-card card-hover">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm font-semibold text-primary">{benefit.metric}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
