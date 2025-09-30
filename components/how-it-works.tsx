import Image from "next/image"

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-foreground">
            Cut costs and time — say goodbye to email testing.
          </h2>
          <p className="text-balance text-lg text-muted-foreground leading-relaxed md:text-xl">
            Tabular's smart algorithm does the heavy lifting. No, for your email campaigns to show correctly, it makes
            sure that they display correctly across all email clients and devices. You can preview your emails in your
            inbox before sending them.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Preview in your inbox</h3>
              <p className="text-muted-foreground leading-relaxed">
                See exactly how your email will look in your recipient's inbox before you hit send. Test across all
                major email clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Let our smart algorithm do the heavy lifting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our advanced email rendering engine ensures your campaigns look perfect everywhere. No more manual
                testing required.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden border border-border bg-card">
              <Image
                src="/send-test-email-interface.jpg"
                alt="Send test emails"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden border border-border bg-card">
              <Image
                src="/email-preview.png"
                alt="Email preview"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Send test emails</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quickly send test emails to yourself or your team. Review and approve campaigns before they go live.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Use your email</h3>
              <p className="text-muted-foreground leading-relaxed">
                Export your finished email and use it with any email service provider. Full compatibility guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
