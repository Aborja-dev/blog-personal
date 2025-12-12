import { Header } from "@/components/header"
import { BlogGrid } from "@/components/blog-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogGrid />
      <Footer />
    </main>
  )
}
