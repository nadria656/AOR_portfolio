import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react"
import Link from "next/link"

export default function ContactoPage() {
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
              <Link href="/proyectos" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
                Proyectos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contacto" className="text-cyan-400 font-medium">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">📬 Contacto</h1>
            <p className="text-slate-400 text-lg">¿Interesado en colaborar? ¡Hablemos!</p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 stagger-animation">
            {/* Primary Contact */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-slate-300">Email</p>
                    <a
                      href="mailto:nadria656@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      nadria656@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-slate-300">Teléfono</p>
                    <a href="tel:+34654195699" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      654 195 699
                    </a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-slate-300">Ubicación</p>
                    <p className="text-cyan-400">Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Disponibilidad</h3>
              <div className="space-y-4">
                <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 hover:bg-green-900/30 transition-colors duration-300">
                  <p className="text-green-400 font-medium mb-2">🟢 Disponible para prácticas</p>
                  <p className="text-slate-300 text-sm">
                    Buscando oportunidades en ciberseguridad, especialmente Red Team
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-300 font-medium">Áreas de interés:</p>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                      • Red Team y Penetration Testing
                    </li>
                    <li className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                      • Diseño y desarrollo web
                    </li>
                    <li className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                      • Programación orientada a objetos
                    </li>
                    <li className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                      • Proyectos de ciberseguridad
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 animate-slide-up">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Redes Sociales</h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/adrián-ortiz-redondo-aaa9aa32a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <Linkedin className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/nadria656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <Github className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/_.ortizzz8._/?igsh=MW11ZTFnZGhobDRqZw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <Instagram className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
