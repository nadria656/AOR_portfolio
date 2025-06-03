import { Code, Globe, Mail, MapPin, User } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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
              <Link href="/contacto" className="text-slate-300 hover:text-cyan-400 transition-colors relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 animate-fade-in">
            <div className="flex items-center gap-4 text-6xl animate-pulse-slow">
              <span>👋</span>
              <img
                src="/foto_AOR.jpeg"
                alt="Foto de Adrián"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-cyan-400 object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">
              Hola, soy <span className="text-cyan-400">Adrián</span>
            </h1>
          </div>


          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8 animate-slide-up hover:border-cyan-400/50 transition-all duration-300">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Soy estudiante en la <span className="text-cyan-400 font-semibold">UTAD</span> con una pasión por el
              desarrollo de aplicaciones innovadoras y la solución de problemas tecnológicos. Mi enfoque está en
              adquirir conocimientos sólidos en programación, diseño de sistemas y gestión de proyectos.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Actualmente estoy en búsqueda de prácticas relacionadas con la{" "}
              <span className="text-cyan-400 font-semibold">ciberseguridad</span>, especialmente en{" "}
              <span className="text-cyan-400 font-semibold">Red Team</span>, diseño web y programación orientada a
              objetos. <span className="text-green-400 font-semibold">¡Estoy disponible!</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
            <Link href="/sobre-mi" className="group h-full">
              <div className="flex flex-col justify-between h-full bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:translate-y-[-5px] transition-all duration-300">
                <User className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Sobre mí
                </h3>
                <p className="text-slate-400 text-sm">Conoce mi historia, pasiones y experiencia</p>
              </div>
            </Link>

            <Link href="/habilidades" className="group h-full">
              <div className="flex flex-col justify-between h-full bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:translate-y-[-5px] transition-all duration-300">
                <Code className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Habilidades Técnicas
                </h3>
                <p className="text-slate-400 text-sm">C, C++, Java, Python, React, Ciberseguridad y más</p>
              </div>
            </Link>

            <Link href="/proyectos" className="group h-full">
              <div className="flex flex-col justify-between h-full bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:translate-y-[-5px] transition-all duration-300">
                <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Proyectos
                </h3>
                <p className="text-slate-400 text-sm">IA, aplicaciones web, ciberseguridad y videojuegos</p>
              </div>
            </Link>

            <Link href="/contacto" className="group h-full">
              <div className="flex flex-col justify-between h-full bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:translate-y-[-5px] transition-all duration-300">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Contacto
                </h3>
                <p className="text-slate-400 text-sm">Conecta conmigo para oportunidades</p>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Education & Languages */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 stagger-animation">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">🎓 Formación</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-cyan-400 font-medium">Grado en Ingeniería de Software</p>
                  <p className="text-slate-300">UTAD (2022 - Actualidad)</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-medium">Bachillerato</p>
                  <p className="text-slate-300">Arcángel Rafael (2020 - 2022)</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">🌍 Idiomas</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-300">Español</span>
                  <span className="text-cyan-400">Nativo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Inglés</span>
                  <span className="text-cyan-400">Competente</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Francés</span>
                  <span className="text-cyan-400">Conversacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-400">Madrid, España</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Adrián - Estudiante de Ingeniería de Software</p>
        </div>
      </footer>
    </div>
  )
}
