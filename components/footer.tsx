import Link from "next/link"
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-sm font-bold text-accent-foreground">GH</span>
              </div>
              <span className="text-lg font-bold text-foreground">GrowthHub</span>
            </Link>
            <p className="text-foreground/70 text-sm">Tu espacio para crecer, aprender y transformar tu vida.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition text-sm">
                  Artículos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition text-sm">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition text-sm">
                  Mentalidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition text-sm">
                  Hábitos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition text-sm">
                  Emociones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition text-sm">
                  Bienestar
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suscríbete</h4>
            <p className="text-foreground/70 text-sm mb-4">Recibe artículos nuevos cada semana en tu correo.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 rounded-lg bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="rounded-lg bg-accent px-3 py-2 text-accent-foreground hover:bg-accent/90 transition">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground/70 text-sm">© 2025 GrowthHub. Todos los derechos reservados.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-foreground/70 hover:text-accent transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-accent transition">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-accent transition">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
