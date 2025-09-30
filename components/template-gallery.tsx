import Image from "next/image"
import { Button } from "@/components/ui/button"

const templates = [
  { id: 1, name: "Newsletter", image: "/email-newsletter-template.png" },
  { id: 2, name: "Welcome", image: "/welcome-email-template.png" },
  { id: 3, name: "Promotion", image: "/promotional-email-template.png" },
  { id: 4, name: "Receipt", image: "/receipt-email-template.jpg" },
  { id: 5, name: "Announcement", image: "/announcement-email-template.png" },
  { id: 6, name: "Event", image: "/event-email-template.jpg" },
]

export function TemplateGallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-foreground">
            High-quality email templates.
          </h2>
          <p className="text-balance text-lg text-muted-foreground leading-relaxed md:text-xl mb-8">
            If you want quick inspiration, you can use one of our pre-built email templates. Each template is fully
            customizable and ready to use with our drag-and-drop builder.
          </p>
          <Button size="lg" className="rounded-md px-6 font-medium">
            Browse all templates
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className="relative rounded-lg overflow-hidden border border-border bg-card hover:border-primary/50 transition-colors cursor-pointer group"
              >
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-sm font-medium">View template</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
