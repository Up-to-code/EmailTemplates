import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl mb-8">
            Ready to build your email?
          </h2>
          <Button size="lg" variant="secondary" className="rounded-md px-6 font-medium">
            Try it without signing up
          </Button>
        </div>
      </div>
    </section>
  )
}
