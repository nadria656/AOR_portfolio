import { ArrowLeft, Code, Shield, Database, Globe } from "lucide-react"
import Link from "next/link"

export default function HabilidadesPage() {
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
              <Link href="/habilidades" className="text-cyan-400 font-medium">
                Habilidades
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🧠 Habilidades Técnicas</h1>
            <p className="text-slate-400 text-lg">Tecnologías y herramientas que domino</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 stagger-animation">
            {/* Programming Languages */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Lenguajes de Programación</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">C</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">C++</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">Java</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">Python</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">JavaScript</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">SQL</span>
                </div>
              </div>
            </div>

            {/* Web Technologies */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Tecnologías Web</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">HTML</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">CSS</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">React</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 text-center hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                  <span className="text-slate-300">Node.js</span>
                </div>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Ciberseguridad</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 hover:translate-x-1 transition-all duration-300">
                  <span className="text-slate-300">Red Team</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 hover:translate-x-1 transition-all duration-300">
                  <span className="text-slate-300">Penetration Testing</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 hover:translate-x-1 transition-all duration-300">
                  <span className="text-slate-300">OWASP</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 hover:translate-x-1 transition-all duration-300">
                  <span className="text-slate-300">SQL Injection</span>
                </div>
              </div>
            </div>

            {/* Other Tools */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/5 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Otras Herramientas</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 hover:translate-x-1 transition-all duration-300">
                  <span className="text-slate-300">AWS</span>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 hover:translate-x-1 transition-all duration-300">
                  <span className="text-slate-300">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
