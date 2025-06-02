import { ArrowLeft, Download, User, Heart, Briefcase, Code2 } from "lucide-react"
import Link from "next/link"

export default function SobreMiPage() {
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
              <Link href="/sobre-mi" className="text-cyan-400 font-medium">
                Sobre mí
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">👨‍💻 Sobre mí</h1>
            <p className="text-slate-400 text-lg">Conoce más sobre mi historia y pasiones</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 stagger-animation">
            {/* Personal Introduction */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Presentación Personal</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                ¡Hola! Soy <span className="text-cyan-400 font-semibold">Adrián</span>, tengo{" "}
                <span className="text-cyan-400 font-semibold">20 años</span> y actualmente estudio{" "}
                <span className="text-cyan-400 font-semibold">Ingeniería de Software</span> en la Universidad de
                Tecnología y Arte Digital (UTAD), con una mención especializada en{" "}
                <span className="text-cyan-400 font-semibold">Ciberseguridad</span>. Me considero una persona{" "}
                <span className="text-green-400 font-semibold">trabajadora</span>,{" "}
                <span className="text-green-400 font-semibold">sociable</span> y{" "}
                <span className="text-green-400 font-semibold">ambiciosa</span>, siempre en busca de nuevos retos que me
                ayuden a crecer tanto personal como profesionalmente.
              </p>
            </div>

            {/* Sports Passion */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Pasión por el Deporte</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Desde muy joven he sentido una gran pasión por el deporte, especialmente el{" "}
                <span className="text-cyan-400 font-semibold">fútbol</span> y el{" "}
                <span className="text-cyan-400 font-semibold">baloncesto</span>, disciplinas que me han enseñado el
                valor del <span className="text-green-400 font-semibold">esfuerzo</span>, la{" "}
                <span className="text-green-400 font-semibold">constancia</span> y el{" "}
                <span className="text-green-400 font-semibold">trabajo en equipo</span>.
              </p>
            </div>

            {/* Work Experience */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Experiencia Laboral</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Además de mi formación académica, he tenido la oportunidad de trabajar como{" "}
                <span className="text-cyan-400 font-semibold">bartender</span> en el{" "}
                <span className="text-cyan-400 font-semibold">Hotel Club Náutico Nayade</span>, una experiencia que
                reforzó mis <span className="text-green-400 font-semibold">habilidades interpersonales</span> y mi{" "}
                <span className="text-green-400 font-semibold">capacidad de adaptación</span> en entornos dinámicos.
              </p>
            </div>

            {/* Technical Interests */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Code2 className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Áreas de Interés Tecnológico</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                Mis principales áreas de interés dentro del mundo tecnológico incluyen:
              </p>
              <ul className="text-slate-300 text-lg space-y-2">
                <li className="flex items-center hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-cyan-400 font-semibold">Ciberseguridad</span>
                </li>
                <li className="flex items-center hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Desarrollo web <span className="text-cyan-400 font-semibold">full stack</span> (frontend y backend)
                </li>
                <li className="flex items-center hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-cyan-400 font-semibold">Inteligencia Artificial</span>
                </li>
                <li className="flex items-center hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-cyan-400 font-semibold">Análisis de datos</span>
                </li>
                <li className="flex items-center hover:text-cyan-400 hover:translate-x-1 transition-all duration-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-cyan-400 font-semibold">Programación Orientada a Objetos (POO)</span>
                </li>
              </ul>
              <p className="text-slate-300 text-lg leading-relaxed mt-4">
                Disfruto aprendiendo y aplicando nuevas tecnologías que me permitan desarrollar soluciones{" "}
                <span className="text-green-400 font-semibold">innovadoras</span>,{" "}
                <span className="text-green-400 font-semibold">seguras</span> y{" "}
                <span className="text-green-400 font-semibold">escalables</span>.
              </p>
            </div>

            {/* CV Download */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">Currículum Vitae</h2>
              <p className="text-slate-300 text-lg mb-6">
                ¿Interesado en conocer más detalles sobre mi experiencia y formación?
              </p>
              <a
                href="/CV_Adrián_Ortiz_Redondo.pdf"
                download="CV-Adrian-Ingeniero-Software.pdf"
                className="inline-flex items-center bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
