import { Mail, Phone, MapPin, ExternalLink, Code, Database, Palette, Globe, Server, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="bg-white/10 backdrop-blur w-32 h-32 rounded-full flex items-center justify-center mb-6 border-2 border-white/20 shadow-2xl">
          <span className="text-5xl font-black">JP</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Jose Pena
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6"></div>
        <p className="text-xl md:text-2xl text-white/70 mb-2 max-w-2xl">
          Desarrollador Full-Stack
        </p>
        <p className="text-white/50 mb-10 max-w-xl">
          Construyo aplicaciones web y páginas profesionales para negocios que necesitan presencia digital, control y automatización.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#servicios" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition">
            Servicios
          </a>
          <a href="#proyectos" className="border border-white/30 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition">
            Ver proyectos
          </a>
          <a href="#contacto" className="border border-white/30 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition">
            Contactarme
          </a>
        </div>

        <p className="text-white/20 text-sm mt-20 animate-bounce">↓ Desliza</p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Servicios</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition text-center">
            <span className="text-4xl mb-4 block">📱</span>
            <h3 className="text-xl font-bold mb-2">Aplicaciones Web</h3>
            <p className="text-white/60">
              Sistemas de gestión, dashboards, automatizaciones. Como PlanGuard: control total de tu negocio desde el navegador.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition text-center">
            <span className="text-4xl mb-4 block">🌐</span>
            <h3 className="text-xl font-bold mb-2">Páginas Web</h3>
            <p className="text-white/60">
              Landing pages, sitios institucionales, portafolios, páginas de ventas. Rápidas, responsive y optimizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proyectos</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PlanGuard */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition group">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 p-2 rounded-xl">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold">PlanGuard</h3>
            </div>
            <p className="text-white/60 mb-4">
              Sistema de control de proyectos para empresa de diseño y remodelaciones en Florida, EE.UU.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Next.js", "Supabase", "Resend", "Tailwind", "Vercel"].map((tech) => (
                <span key={tech} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                <ExternalLink size={14} /> Ver proyecto
              </a>
            </div>
          </div>

          {/* Próximos proyectos */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-dashed border-white/20 flex flex-col items-center justify-center min-h-[200px]">
            <span className="text-4xl mb-3">🚀</span>
            <p className="text-white/50 text-center">Próximamente más proyectos</p>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Habilidades</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: Code, name: "Next.js / React", desc: "Frontend moderno" },
            { icon: Server, name: "Supabase / PostgreSQL", desc: "Backend y base de datos" },
            { icon: Globe, name: "Vercel / Deploy", desc: "Hosting serverless" },
            { icon: Palette, name: "Tailwind CSS", desc: "Diseño responsive" },
            { icon: Database, name: "APIs REST", desc: "Integraciones" },
            { icon: Mail, name: "Resend / Emails", desc: "Correos automáticos" },
          ].map((skill) => (
            <div key={skill.name} className="bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 text-center hover:bg-white/10 transition">
              <skill.icon size={28} className="text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-sm">{skill.name}</h3>
              <p className="text-white/40 text-xs mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-12"></div>

        <div className="space-y-4">
          <a href="mailto:josepenagomez2005@gmail.com" className="flex items-center gap-3 justify-center text-white/70 hover:text-white transition text-lg">
            <Mail size={20} /> josepenagomez2005@gmail.com
          </a>
          <a href="https://wa.me/5356956051" className="flex items-center gap-3 justify-center text-white/70 hover:text-white transition text-lg">
            <Phone size={20} /> +53 56956051
          </a>
          <a href="https://github.com/Josepenagomez2005-cmyk" className="flex items-center gap-3 justify-center text-white/70 hover:text-white transition text-lg">
            <span className="text-xl">🐙</span> GitHub
          </a>
          <p className="flex items-center gap-3 justify-center text-white/50 text-lg">
            <MapPin size={20} /> Cuba
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-white/20 text-sm border-t border-white/5">
        © 2026 Jose Pena · Desarrollador Full-Stack
      </footer>
    </main>
  );
}