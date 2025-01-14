import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex gap-4 items-start p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="rounded-full p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

