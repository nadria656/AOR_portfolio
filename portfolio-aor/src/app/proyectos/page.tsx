import { ArrowLeft, Brain, Mic, Film, Shield, Gamepad2, MessageSquare, Bug } from "lucide-react"
import Link from "next/link"

export default function ProyectosPage() {
  const proyectos = [
    {
      icon: Brain,
      title: "IA para clasificación de señales de tráfico",
      description: "Sistema de inteligencia artificial para reconocer y clasificar señales de tráfico",
    },
    {
      icon: Mic,
      title: "IA entrenada con discursos políticos",
      description: "Modelo de IA entrenado para analizar y generar contenido basado en discursos políticos",
    },
    {
      icon: Film,
      title: "Web de películas conectada a una API pública",
      description: "Aplicación web que consume APIs públicas para mostrar información de películas",
    },
    {
      icon: Shield,
      title: "Web de cómics Marvel con su API oficial",
      description: "Sitio web integrado con la API oficial de Marvel para mostrar información de cómics",
    },
    {
      icon: Bug,
      title: "Script para detección de SQL Injection",
      description: "Herramienta de ciberseguridad para detectar vulnerabilidades de inyección SQL",
    },
    {
      icon: Gamepad2,
      title: "Videojuego funcional con POO",
      description: "Desarrollo de videojuego aplicando principios de programación orientada a objetos",
    },
    {
      icon: MessageSquare,
      title: "App de mensajería cliente-servidor con AWS",
      description: "Aplicación de mensajería en tiempo real utilizando servicios de AWS",
    },
    {
      icon: Shield,
      title: "Vulneración de máquinas virtuales y retos OWASP",
      description: "Práticas de ethical hacking y resolución de desafíos de seguridad OWASP",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
              Adrián
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/sobre-mi" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
                Sobre mí
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/habilidades" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
                Habilidades
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/proyectos" className="text-cyan-400 font-medium">
                Proyectos
              </Link>
              <Link href="/contacto" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">📌 Proyectos Destacados</h1>
            <p className="text-slate-400 text-lg">Una muestra de mis trabajos en desarrollo y ciberseguridad</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            {proyectos.map((proyecto, index) => {
              const IconComponent = proyecto.icon
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300"
                >
                  <IconComponent className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-white font-semibold mb-3 leading-tight">{proyecto.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{proyecto.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
