export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-card via-background to-card px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent mb-6">
            Bienvenido a tu jornada de crecimiento
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transforma tu vida a través del
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              desarrollo personal
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-foreground/70 mb-8 leading-relaxed">
            Descubre historias inspiradoras, estrategias prácticas y reflexiones profundas para alcanzar tu mejor
            versión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition">
              Explorar artículos
            </button>
            <button className="rounded-lg border border-border bg-card px-8 py-3 font-semibold text-foreground hover:bg-card/80 transition">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
