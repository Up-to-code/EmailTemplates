import Image from "next/image"

const companies = [
  { name: "Lattice", logo: "/lattice-logo.jpg" },
  { name: "Keyper", logo: "/keyper-logo.jpg" },
  { name: "Shopee", logo: "/generic-e-commerce-logo.png" },
  { name: "Newsweek", logo: "/newsweek-logo.jpg" },
  { name: "Fishup", logo: "/fishup-logo.jpg" },
  { name: "Substack", logo: "/substack-logo.jpg" },
]

export function TrustBadges() {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">Companies of all sizes trust email builder</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
          {companies.map((company) => (
            <div key={company.name} className="grayscale hover:grayscale-0 transition-all">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={100}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
