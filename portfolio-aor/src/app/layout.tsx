import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Adrián - Ingeniero de Software",
  description: "Portfolio de Adrián, estudiante de Ingeniería de Software especializado en Ciberseguridad",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
