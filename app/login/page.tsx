import Link from "next/link"
import { BarChartIcon as ChartBar } from 'lucide-react'
import { AuthForm } from "@/components/auth-form"
import { SiteHeader } from "@/components/site-header"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
          <AuthForm mode="login" />
          <p className="px-8 text-center text-sm text-muted-foreground">
            New to alignify?{" "}
            <Link href="/#signup" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

