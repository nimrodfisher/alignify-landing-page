import Link from "next/link"
import { BarChartIcon as ChartBar, Users, LineChart, Presentation } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AuthForm } from "@/components/auth-form"
import { FeatureCard } from "@/components/feature-card"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-gradient-to-br from-purple-100 via-white to-blue-100">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Better Analytics Collaboration Starts Here
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                  Create clarity and alignment between analytics teams and stakeholders with our intuitive dashboard mockup platform.
                </p>
              </div>
              <div className="space-y-6">
                <FeatureCard
                  icon={Users}
                  title="Stakeholder Collaboration"
                  description="Bridge the gap between analytics teams and business stakeholders with clear visual communication."
                />
                <FeatureCard
                  icon={LineChart}
                  title="Dashboard Mockups"
                  description="Create and iterate on dashboard designs quickly with our drag-and-drop interface."
                />
                <FeatureCard
                  icon={Presentation}
                  title="Expectation Alignment"
                  description="Set and manage stakeholder expectations early in the development process."
                />
              </div>
              <div className="p-4 bg-yellow-100 rounded-lg border border-yellow-300 text-yellow-800">
                <p className="text-sm">
                  <strong>Note:</strong> The Alignify tool is currently optimized for desktop use only.
                </p>
              </div>
            </div>
            <div id="signup" className="rounded-lg border bg-white p-8 shadow-lg">
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-2xl font-semibold tracking-tight">Join the Beta</h2>
                  <p className="text-sm text-muted-foreground">
                    Sign up to get early access to alignify
                  </p>
                </div>
                <AuthForm mode="signup" />
                <p className="px-8 text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

