import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "The simplicity is remarkable. We reduced our email production time by 80% while improving engagement across the board.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow",
  },
  {
    quote:
      "Beautiful templates that actually work. Our conversion rates doubled in the first month. The ROI speaks for itself.",
    author: "Michael Torres",
    role: "Founder",
    company: "GrowthLab",
  },
  {
    quote:
      "Finally, email templates that feel modern and professional. Our customers notice the difference, and so do we.",
    author: "Emily Park",
    role: "Head of Design",
    company: "Collective",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl mb-4">
            Loved by teams everywhere.
          </h2>
          <p className="text-balance text-lg text-muted-foreground leading-relaxed md:text-xl">
            See what people are saying.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border bg-card">
              <CardContent className="pt-6 pb-6 px-6">
                <blockquote className="mb-6 text-pretty leading-relaxed text-sm text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
