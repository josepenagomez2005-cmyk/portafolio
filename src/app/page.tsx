"use client";

import { Mail, Phone, MapPin, ExternalLink, Code, Database, Palette, Globe, Server, Layers, ArrowRight, Sparkles, ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function Home() {
  const [particlesInit, setParticlesInit] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    loadSlim({} as Engine).then(() => setParticlesInit(true));
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const proyectos = [
    {
      titulo: "PlanGuard",
      subtitulo: "Sistema de Control de Proyectos",
      descripcion: "Aplicación web full-stack para una empresa de diseño y remodelaciones en Florida, EE.UU. Gestiona proyectos en 18 fases, con dashboard de KPIs, recordatorios por email y base de datos de clientes.",
      techs: ["Next.js", "TypeScript", "Supabase", "Resend", "Tailwind CSS", "Vercel"],
      url: "https://planguard-app.vercel.app",
      foto: "/fotos/planguard.jpg",
    },
    {
      titulo: "El Cubano",
      subtitulo: "Landing Page · Restaurante Gourmet",
      descripcion: "Página web profesional para restaurante de comida tradicional cubana. Carta digital, galería de imágenes, reseñas y reservas por WhatsApp.",
      techs: ["Next.js", "Tailwind CSS", "Vercel"],
      url: "https://el-cubano-kmi3333333.vercel.app",
      foto: "/fotos/el-cubano.jpg",
    },
    {
      titulo: "BarberoClub",
      subtitulo: "Landing Page · Barbería Premium",
      descripcion: "Landing page moderna para barbería con catálogo de servicios, galería de trabajos, perfil del equipo y reserva de citas por WhatsApp.",
      techs: ["Next.js", "Tailwind CSS", "Vercel"],
      url: "https://barberia-ten-nu.vercel.app",
      foto: "/fotos/barberia.jpg",
    },
  ];

  const habilidades = [
    { icon: Code, name: "Next.js / React" },
    { icon: Server, name: "Supabase / PostgreSQL" },
    { icon: Palette, name: "Tailwind CSS" },
    { icon: Globe, name: "Vercel / Deploy" },
    { icon: Database, name: "REST APIs" },
    { icon: Mail, name: "Resend / Emails" },
    { icon: Layers, name: "TypeScript" },
    { icon: Sparkles, name: "Framer Motion" },
  ];

  return (
    <main className="min-h-screen bg-[#FDF6F0] text-[#2D2D2D] relative">
      {particlesInit && (
        <Particles
          className="absolute inset-0 z-0"
          options={{
            particles: {
              number: { value: 15, density: { enable: true } },
              color: { value: "#E8A87C" },
              opacity: { value: 0.08 },
              size: { value: 3 },
              move: { enable: true, speed: 0.3 },
              links: { enable: true, color: "#E8A87C", opacity: 0.06, distance: 200 },
            },
          }}
        />
      )}

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-[#FDF6F0]/90 backdrop-blur border-b border-[#E8A87C]/20">
          <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
            <span className="text-xl font-extrabold text-[#2D2D2D] tracking-tight">JP</span>
            <div className="hidden md:flex gap-8 text-sm font-medium text-[#6B705C]">
              <a href="#sobre-mi" className="hover:text-[#E8A87C] transition">Sobre mí</a>
              <a href="#proyectos" className="hover:text-[#E8A87C] transition">Proyectos</a>
              <a href="#habilidades" className="hover:text-[#E8A87C] transition">Habilidades</a>
              <a href="#contacto" className="hover:text-[#E8A87C] transition">Contacto</a>
            </div>
            <button className="md:hidden text-[#2D2D2D]" onClick={() => setMenuAbierto(!menuAbierto)}>
              {menuAbierto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {menuAbierto && (
            <div className="md:hidden bg-[#FDF6F0] border-t border-[#E8A87C]/20 p-4 flex flex-col gap-4 text-sm font-medium text-[#6B705C]">
              <a href="#sobre-mi" onClick={() => setMenuAbierto(false)} className="hover:text-[#E8A87C]">Sobre mí</a>
              <a href="#proyectos" onClick={() => setMenuAbierto(false)} className="hover:text-[#E8A87C]">Proyectos</a>
              <a href="#habilidades" onClick={() => setMenuAbierto(false)} className="hover:text-[#E8A87C]">Habilidades</a>
              <a href="#contacto" onClick={() => setMenuAbierto(false)} className="hover:text-[#E8A87C]">Contacto</a>
            </div>
          )}
        </nav>

        {/* Hero */}
        <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 py-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl flex-shrink-0"
          >
            <img src="/fotos/mi-foto.jpg" alt="Jose D. Pena Gómez" className="w-full h-full object-cover" />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#E8A87C] font-semibold mb-2 tracking-[0.2em] uppercase text-xs md:text-sm"
            >
              Desarrollador Full-Stack
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-4xl font-semibold mb-4 tracking-normal"
            >
              Jose D. Pena Gómez
            </motion.h1>
            <div className="h-8 text-base md:text-lg text-[#6B705C] mb-6 font-light">
              <TypeAnimation
                sequence={[
                  "Construyo aplicaciones web modernas",
                  2000,
                  "Creo landing pages profesionales",
                  2000,
                  "Automatizo procesos de negocio",
                  2000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-3 justify-center md:justify-start"
            >
              <a href="#proyectos" className="bg-[#E8A87C] text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#d4956b] transition flex items-center gap-2 shadow-lg shadow-[#E8A87C]/20">
                Ver proyectos <ArrowRight size={16} />
              </a>
              <a href="#contacto" className="border-2 border-[#E8A87C] text-[#E8A87C] px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#E8A87C]/10 transition">
                Contacto
              </a>
            </motion.div>
          </div>
        </section>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-center pb-8 -mt-8">
          <ChevronDown size={24} className="text-[#E8A87C]/40 mx-auto animate-bounce" />
        </motion.div>

        {/* Sobre mí */}
        <motion.section
          id="sobre-mi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
          className="py-16 md:py-20 px-4 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-black text-center mb-2">Sobre mí</h2>
          <div className="w-12 h-1 bg-[#E8A87C] mx-auto mb-8 rounded-full"></div>
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E8A87C]/10">
            <p className="text-[#6B705C] leading-relaxed text-base md:text-lg font-light">
              Soy un desarrollador full-stack autodidacta apasionado por crear soluciones digitales que resuelven problemas reales. Me especializo en construir aplicaciones web modernas y landing pages profesionales.
            </p>
            <p className="text-[#6B705C] leading-relaxed text-base md:text-lg mt-6 font-light">
              Mi enfoque es simple: entender la necesidad del negocio y traducirla en una herramienta funcional, rápida y fácil de usar. He trabajado con clientes internacionales entregando sistemas de gestión y páginas web que generan resultados.
            </p>
            <p className="text-[#6B705C] leading-relaxed text-base md:text-lg mt-6 font-light">
              Cuando no estoy programando, me gusta explorar nuevas tecnologías y seguir aprendiendo para ofrecer siempre lo mejor.
            </p>
          </div>
        </motion.section>

        {/* Proyectos */}
        <motion.section
          id="proyectos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
          className="py-16 md:py-20 px-4 max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-black text-center mb-2">Proyectos</h2>
          <div className="w-12 h-1 bg-[#E8A87C] mx-auto mb-4 rounded-full"></div>
          <p className="text-[#6B705C] text-center mb-12 text-sm md:text-base font-light">Trabajos reales para clientes reales</p>

          <div className="space-y-12">
            {proyectos.map((proj, i) => (
              <motion.div
                key={proj.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8A87C]/10 hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 h-80 md:h-auto md:min-h-[400px] bg-[#E8A87C]/5 flex items-center justify-center p-6">
                    <img 
                      src={proj.foto} 
                      alt={proj.titulo} 
                      className="w-full h-full object-scale-down rounded-2xl"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <p className="text-[#E8A87C] text-xs font-semibold uppercase tracking-[0.15em] mb-2">{proj.subtitulo}</p>
                    <h3 className="text-2xl md:text-3xl font-black mb-4">{proj.titulo}</h3>
                    <p className="text-[#6B705C] leading-relaxed mb-5 font-light text-sm md:text-base">{proj.descripcion}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {proj.techs.map((tech) => (
                        <span key={tech} className="text-xs bg-[#FDF6F0] text-[#6B705C] px-3 py-1 rounded-full font-medium border border-[#E8A87C]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proj.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-white bg-[#E8A87C] hover:bg-[#d4956b] font-bold text-sm px-5 py-2.5 rounded-xl transition w-fit"
                    >
                      <ExternalLink size={14} /> Visitar proyecto
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Habilidades */}
        <motion.section
          id="habilidades"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
          className="py-16 md:py-20 px-4 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-black text-center mb-2">Habilidades</h2>
          <div className="w-12 h-1 bg-[#E8A87C] mx-auto mb-4 rounded-full"></div>
          <p className="text-[#6B705C] text-center mb-12 text-sm md:text-base font-light">Tecnologías con las que trabajo</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {habilidades.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-sm border border-[#E8A87C]/10 hover:shadow-md transition cursor-default"
              >
                <skill.icon size={28} className="text-[#E8A87C] mx-auto mb-3" />
                <h3 className="font-semibold text-xs md:text-sm text-[#2D2D2D]">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contacto */}
        <motion.section
          id="contacto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
          className="py-16 md:py-20 px-4 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black mb-2">Contacto</h2>
          <div className="w-12 h-1 bg-[#E8A87C] mx-auto mb-4 rounded-full"></div>
          <p className="text-[#6B705C] mb-8 font-light">¿Tienes un proyecto en mente? Hablemos.</p>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E8A87C]/10 space-y-5">
            <a href="mailto:josepenagomez2005@gmail.com" className="flex items-center gap-3 justify-center text-[#2D2D2D] hover:text-[#E8A87C] transition font-medium text-sm md:text-base">
              <Mail size={18} /> josepenagomez2005@gmail.com
            </a>
            <a href="https://wa.me/5356956051" className="flex items-center gap-3 justify-center text-[#2D2D2D] hover:text-[#E8A87C] transition font-medium text-sm md:text-base">
              <Phone size={18} /> +53 56956051
            </a>
            <a href="https://github.com/Josepenagomez2005-cmyk" className="flex items-center gap-3 justify-center text-[#2D2D2D] hover:text-[#E8A87C] transition font-medium text-sm md:text-base">
              <span className="text-lg">🐙</span> GitHub
            </a>
            <p className="flex items-center gap-3 justify-center text-[#6B705C] font-light text-sm md:text-base">
              <MapPin size={18} /> Cuba
            </p>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center py-8 text-[#6B705C] text-xs md:text-sm border-t border-[#E8A87C]/10 font-light">
          © 2026 Jose D. Pena Gómez · Desarrollador Full-Stack
        </footer>
      </div>
    </main>
  );
}