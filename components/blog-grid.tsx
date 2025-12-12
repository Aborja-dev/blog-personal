"use client"

import Link from "next/link"
import { HeroSection } from "./hero-section"
import { BlogCard } from "./blog-card"
import { blogPosts } from "@/lib/blog-data"

export function BlogGrid() {
  return (
    <>
      <HeroSection />
      <section className="bg-background px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Últimos artículos</h2>
            <p className="text-foreground/70 text-lg">
              Nuevas historias e ideas cada semana para inspirarte y motivarte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <BlogCard {...post} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
