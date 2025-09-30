import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisonData = [
  { feature: "Template library", us: "50+ premium", competitors: "10-20 basic" },
  { feature: "Monthly price", us: "$29", competitors: "$49-99" },
  { feature: "Setup time", us: "Minutes", competitors: "Hours" },
  { feature: "Customization", us: "Intuitive", competitors: "Complex" },
  { feature: "Mobile optimized", us: true, competitors: true },
  { feature: "Priority support", us: true, competitors: false },
]

export function Comparison() {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl mb-4">Why choose us.</h2>
          <p className="text-balance text-lg text-muted-foreground leading-relaxed md:text-xl">
            See how we compare to the alternatives.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border bg-card">
          <CardHeader>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div></div>
              <CardTitle className="text-foreground font-semibold text-base">EmailTemplates</CardTitle>
              <CardTitle className="text-muted-foreground font-semibold text-base">Others</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {comparisonData.map((item, index) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 gap-4 items-center py-4 ${
                    index !== comparisonData.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="font-medium text-sm">{item.feature}</div>
                  <div className="text-center">
                    {typeof item.us === "boolean" ? (
                      item.us ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="font-medium text-foreground text-sm">{item.us}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof item.competitors === "boolean" ? (
                      item.competitors ? (
                        <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-muted-foreground text-sm">{item.competitors}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
