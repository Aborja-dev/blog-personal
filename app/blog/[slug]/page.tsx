"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-foreground mb-4">Artículo no encontrado</h1>
          <Link href="/" className="text-accent hover:underline font-medium">
            Volver al inicio
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Article Header */}
      <div className="bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition mb-6 font-medium"
          >
            <ArrowLeft size={18} />
            Volver
          </Link>

          <div className="mb-6 flex items-center gap-2">
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>

          <div className="flex flex-wrap gap-6 text-foreground/70">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>Por Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 md:h-[500px] w-full bg-muted overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">{post.excerpt}</p>

          {post.content && (
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              {post.content.map((section, index) => (
                <div key={index}>
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="mt-16 pt-8 border-t border-border flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
            <User size={32} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Admin</h3>
            <p className="text-foreground/70">Apasionado por el desarrollo personal y el crecimiento continuo.</p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Artículos relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.category === post.category && p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
                >
                  <h4 className="font-bold text-foreground group-hover:text-accent transition mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-foreground/70">{relatedPost.readTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
