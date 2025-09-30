import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl leading-[1.1] text-foreground">
            Create emails easily with our email builder.
          </h1>

          <p className="mb-8 text-balance text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto">
            Design high-performing email campaigns in minutes and use them in any email sending platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <Button size="lg" className="w-full sm:w-auto rounded-md px-6 font-medium">
              Get started for free
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">Set up in minutes</p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-sm">
            <Image
              src="/modern-email-builder-interface-with-drag-and-drop-.jpg"
              alt="Email Builder Interface"
              width={1400}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
