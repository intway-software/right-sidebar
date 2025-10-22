import { RightSidebar } from "@/components/right-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 h-[200px] border-b bg-card shadow-sm">
        <div className="container flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-foreground">Mi Aplicación</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container pt-[220px] pb-20">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contenido Principal</h2>
            <p className="text-muted-foreground">
              Este es el contenido principal de la página. El sidebar está a la derecha y se puede abrir haciendo click
              en el botón con el icono de chevrones.
            </p>
          </section>

          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Card {i + 1}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Contenido de ejemplo para demostrar el layout con el sidebar.
                  </p>
                  <Input type="text" placeholder="Escribe algo..." />
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  )
}
