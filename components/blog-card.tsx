import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
  date: string
}

export function BlogCard({ title, excerpt, category, readTime, image, date }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col h-full p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            {category}
          </span>
          <span className="text-xs text-foreground/50">{readTime}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-foreground line-clamp-2 group-hover:text-accent transition">
          {title}
        </h3>

        <p className="mb-4 flex-grow text-foreground/70 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-foreground/50">{date}</span>
          <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium">
            Leer más
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  )
}
