import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChartIcon as ChartBar } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <ChartBar className="h-6 w-6" />
          <span className="font-bold">alignify</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

