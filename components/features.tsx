import Image from "next/image"

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-foreground">
            Create high-performing, quality emails — quickly.
          </h2>
          <p className="text-balance text-lg text-muted-foreground leading-relaxed md:text-xl">
            Design high-performing email campaigns in minutes, using our drag-and-drop template builder. Export your
            emails and use them in any email sending platform.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Full control over your templates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create a branded email template of your own or customize one of ours. Using our drag-and-drop template
                builder, you can create an email in minutes.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-border bg-muted/20">
              <Image
                src="/email-template-editor-interface.jpg"
                alt="Template editor"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-lg overflow-hidden border border-border bg-muted/20">
              <Image
                src="/personalized-email-preview.jpg"
                alt="Personalized emails"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Personalize emails</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use our email personalization features to tailor your emails to each recipient. Add dynamic content
                blocks to personalize your emails at scale.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Re-use building blocks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create reusable email blocks to speed up your workflow. Save time by reusing headers, footers, and other
                common elements across your campaigns.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-border bg-muted/20">
              <Image
                src="/reusable-email-components.jpg"
                alt="Reusable blocks"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-lg overflow-hidden border border-border bg-muted/20">
              <Image
                src="/email-platform-integrations.jpg"
                alt="Platform integrations"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Upload directly to your sending platform</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Export your email and use it in any email sending platform. We support all major email service
                providers.
              </p>
              <div className="flex items-center gap-8">
                <Image
                  src="/mailgun-logo.png"
                  alt="Mailgun"
                  width={120}
                  height={40}
                  className="h-10 w-auto opacity-60"
                />
                <Image
                  src="/klaviyo-logo.png"
                  alt="Klaviyo"
                  width={120}
                  height={40}
                  className="h-10 w-auto opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
