"use client"

import { useState } from "react"
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="secondary"
        size="icon"
        className={cn(
          "fixed z-50 h-14 w-14 rounded-l-xl rounded-r-none bg-gray-100 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-xl",
          isOpen ? "right-80" : "right-0",
        )}
        style={{ top: "200px" }}
      >
        {isOpen ? (
          <ChevronsRight className="h-6 w-6 text-gray-700" />
        ) : (
          <ChevronsLeft className="h-6 w-6 text-gray-700" />
        )}
      </Button>

      <div
        className={cn(
          "fixed right-0 z-40 h-[calc(100vh-200px)] w-80 border-l bg-card shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{ top: "200px" }}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Sidebar</h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            <p className="text-sm text-muted-foreground">Contenido del sidebar aquí</p>

            <div className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sección 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Contenido de ejemplo</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sección 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Más contenido de ejemplo</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sección 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Aún más contenido</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
