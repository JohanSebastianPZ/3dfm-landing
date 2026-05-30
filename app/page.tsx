"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Definimos las partículas FUERA del componente para que se creen una sola vez en memoria
const PARTICLES_DATA = [
  { left: "5%", duration: "10s", delay: "0s" },
  { left: "15%", duration: "14s", delay: "1s" },
  { left: "25%", duration: "12s", delay: "2s" },
  { left: "35%", duration: "16s", delay: "0.5s" },
  { left: "45%", duration: "11s", delay: "1.5s" },
  { left: "55%", duration: "15s", delay: "2.5s" },
  { left: "65%", duration: "13s", delay: "1s" },
  { left: "75%", duration: "17s", delay: "3s" },
  { left: "85%", duration: "12s", delay: "2s" },
  { left: "95%", duration: "14s", delay: "0s" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#E6E6E6] overflow-hidden relative scanlines">
      {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 backdrop-blur-md">

  <div className="backdrop-blur-2xl bg-[#111111]/30 border border-[#FFFFFF]/[0.06] shadow-[0_0_30px_rgba(0,0,0,0.35)] rounded-2xl px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <div className="flex items-center gap-4">

      <div className="w-3 h-3 rounded-full bg-[#FF8A00] animate-pulse" />

      <h1 className="text-xl font-bold tracking-[0.2em] font-[family-name:var(--font-orbitron)]">
        3DFM
      </h1>

    </div>

    {/* NAVIGATION */}
    <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.2em] uppercase text-[#AAAAAA]">

      <a href="#capabilities" className="hover:text-[#FF8A00] transition duration-300">
        Industrial
      </a>

      <a href="#philosophy" className="hover:text-[#FF5500] transition duration-300">
        Customs
      </a>

      <a href="#projects" className="hover:text-[#FF8A00] transition duration-300">
        Projects
      </a>

      <a href="#contact" className="hover:text-[#FF5500] transition duration-300">
        Contact
      </a>

    </nav>

  </div>

</header>

      {/* Partículas */}
      {PARTICLES_DATA.map((particle, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: particle.left,
            bottom: "-20px",
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}

      {/* Glow ambiental */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#FF8A00]/10 blur-[140px] blur-fix rounded-full" />

      {/* Grid técnico */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,138,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,138,0,0.3)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <section className="relative z-10 min-h-screen flex items-center px-8 md:px-20 pt-32">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">

          {/* IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#FF8A00] uppercase tracking-[0.4em] mb-6 text-sm">
              Advanced Manufacturing Interface
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 font-[family-name:var(--font-orbitron)]">
              ENGINEERING <br />
              <span className="text-[#FF8A00] glow">
                THE FUTURE
              </span>
              <br />
              OF CREATION
            </h1>

            <p className="text-[#999999] text-lg leading-relaxed mb-10 max-w-xl">
              Ingeniería, automatización y fabricación 3D para soluciones
              industriales y proyectos personalizados de nueva generación.
            </p>

            {/* DIVISIONES */}
            <div className="flex flex-col gap-6">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -6
                }}
                className="border border-[#2A2A2A] bg-[#161616] p-6 rounded-2xl hover:border-[#FF8A00] transition-all duration-300"
              >
                <h3 className="text-[#FF8A00] text-xl mb-2 font-semibold tracking-wider">
                  INDUSTRIAL DIVISION
                </h3>
                <p className="text-[#888888]">
                  Automatización · Ingeniería · Prototipado · Soluciones técnicas
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -6
                  }}
                className="border border-[#2A2A2A] bg-[#161616] p-6 rounded-2xl hover:border-[#FF5500] transition-all duration-300"
              >
                <h3 className="text-[#FF5500] text-xl mb-2 font-semibold tracking-wider">
                  CUSTOMS DIVISION
                </h3>
                <p className="text-[#888888]">
                  Diseño · Réplicas · Personalización · Fabricación creativa
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            {/* HUD Rings */}
            <div className="absolute w-[450px] h-[450px] border border-[#FF8A00]/20 rounded-full pulse-glow" />
            <div className="absolute w-[550px] h-[550px] border border-[#FF8A00]/10 rounded-full rotate-slow" />

            {/* Logo */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/images/logo.png"
                alt="3DFM Logo"
                width={320}
                height={320}
                className="drop-shadow-[0_0_40px_rgba(255,138,0,0.35)]"
                priority // Añadido para optimizar la carga del logo principal
              />
            </motion.div>

            {/* HUD Labels */}
            <div className="absolute top-10 left-10 text-[#666666] text-xs tracking-[0.3em]">
              SYS-3DFM
            </div>

            <div className="absolute bottom-10 right-10 text-[#666666] text-xs tracking-[0.3em]">
              INDUSTRIAL CORE
            </div>
          </motion.div>

        </div>
</section>

{/* CAPABILITIES SECTION */}
<section
  id="capabilities"
  className="relative z-10 py-32 px-8 md:px-20 border-t border-[#1F1F1F]"
>

  {/* Glow */}
  <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[#FF5500]/10 blur-[140px] blur-fix" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
  duration: 1,
  ease: "easeOut"
}}
    viewport={{ once: true }}
    className="relative z-10"
  >

    <p className="text-[#FF8A00] uppercase tracking-[0.4em] text-sm mb-6">
      CAPABILITIES
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mb-20 leading-tight">
      ENGINEERED FOR <br />
      <span className="text-[#FF8A00] glow">
        INNOVATION
      </span>
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* INDUSTRIAL */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -6
        }}
        className="card-hover group relative overflow-hidden border border-[#2A2A2A] bg-[#151515] rounded-3xl p-10 transition-all duration-500 hover:border-[#FF8A00]/50 hover:shadow-[0_0_40px_rgba(255,138,0,0.08)]"
      >

        {/* Glow interno */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF8A00]/10 blur-[100px]" />

        <div className="relative z-10">

          <p className="text-[#FF8A00] tracking-[0.3em] text-sm mb-4">
            INDUSTRIAL DIVISION
          </p>

          <h3 className="text-3xl font-bold mb-8">
            Smart Industrial Solutions
          </h3>

          <div className="space-y-5 text-[#A0A0A0]">

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              Automatización industrial
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              Sistemas SCADA y control
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              Diseño mecánico y prototipado
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              Integración tecnológica
            </div>

          </div>

        </div>

      </motion.div>

      {/* CUSTOMS */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -6
          }}
        className="card-hover group relative overflow-hidden border border-[#2A2A2A] bg-[#151515] rounded-3xl p-10 transition-all duration-500 hover:border-[#FF8A00]/50 hover:shadow-[0_0_40px_rgba(255,138,0,0.08)]"
      >

        {/* Glow interno */}
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#FF5500]/10 blur-[100px]" />

        <div className="relative z-10">

          <p className="text-[#FF5500] tracking-[0.3em] text-sm mb-4">
            CUSTOMS DIVISION
          </p>

          <h3 className="text-3xl font-bold mb-8">
            Creative Manufacturing
          </h3>

          <div className="space-y-5 text-[#A0A0A0]">

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5500]" />
              Réplicas y piezas personalizadas
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5500]" />
              Diseño artístico 3D
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5500]" />
              Personalización automotriz
            </div>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5500]" />
              Fabricación creativa
            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </motion.div>

</section>

{/* MISSION SECTION */}
<section
  id="philosophy"
  className="relative py-40 px-8 md:px-20 overflow-hidden"
>

  {/* Glow ambiental */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF8A00]/5 blur-[180px] blur-fix" />

  {/* Línea técnica */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8A00]/30 to-transparent" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-6xl"
  >

    <p className="text-[#FF8A00] uppercase tracking-[0.5em] text-sm mb-8">
      PHILOSOPHY
    </p>

    <h2 className="text-5xl md:text-8xl font-bold leading-[1.05] mb-12">

      WE DON&apos;T JUST

      <span className="text-[#FF8A00] glow">
        BUILD OBJECTS
      </span>

      <br />

      WE ENGINEER IDEAS

    </h2>

    <div className="max-w-3xl">

      <p className="text-[#A0A0A0] text-xl leading-relaxed mb-10">
        En 3DFM combinamos ingeniería, automatización y fabricación avanzada
        para transformar conceptos complejos en soluciones reales.
      </p>

      <p className="text-[#777777] text-lg leading-relaxed">
        Desde sistemas industriales hasta proyectos personalizados,
        desarrollamos tecnología con precisión, estética y visión de futuro.
      </p>

    </div>

    {/* Indicadores técnicos */}
    <div className="mt-24 grid md:grid-cols-3 gap-8">

      <div className="border border-[#222222] bg-[#141414] rounded-2xl p-6">
        <p className="text-[#FF8A00] text-4xl font-bold mb-2">01</p>
        <p className="text-[#CCCCCC] uppercase tracking-[0.2em] text-sm">
          Engineering
        </p>
      </div>

      <div className="border border-[#222222] bg-[#141414] rounded-2xl p-6">
        <p className="text-[#FF8A00] text-4xl font-bold mb-2">02</p>
        <p className="text-[#CCCCCC] uppercase tracking-[0.2em] text-sm">
          Innovation
        </p>
      </div>

      <div className="border border-[#222222] bg-[#141414] rounded-2xl p-6">
        <p className="text-[#FF8A00] text-4xl font-bold mb-2">03</p>
        <p className="text-[#CCCCCC] uppercase tracking-[0.2em] text-sm">
          Manufacturing
        </p>
      </div>

    </div>

  </motion.div>

</section>

{/* SHOWCASE SECTION */}
<section
  id="projects"
  className="relative py-40 px-8 md:px-20 border-t border-[#1F1F1F] overflow-hidden"
>

  {/* Glow ambiental */}
  <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#FF8A00]/5 blur-[160px]" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10"
  >

    <p className="text-[#FF8A00] uppercase tracking-[0.5em] text-sm mb-6">
      SELECTED WORK
    </p>

    <h2 className="text-5xl md:text-7xl font-bold mb-24 leading-tight">

      ENGINEERED <br />

      <span className="text-[#FF8A00] glow">
        PROJECTS
      </span>

    </h2>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* CARD 1 */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -6
        }}
        className="card-hover group relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#151515] min-h-[420px] transition-all duration-500 hover:border-[#FF5500]/40 hover:shadow-[0_0_50px_rgba(255,85,0,0.08)]"
      >

        {/* Imagen placeholder */}
        {/* Fondo visual */}
<div className="absolute inset-0">

  {/* Base */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-black" />

  {/* Grid técnico */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,138,0,0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,138,0,0.15) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  />

  {/* Glow */}
  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF8A00]/10 blur-[120px]" />

  {/* Líneas HUD */}
  <div className="absolute top-10 left-10 w-20 h-px bg-[#FF8A00]/50" />
  <div className="absolute top-10 left-10 w-px h-20 bg-[#FF8A00]/50" />

  <div className="absolute bottom-10 right-10 w-20 h-px bg-[#FF8A00]/30" />
  <div className="absolute bottom-10 right-10 w-px h-20 bg-[#FF8A00]/30" />

</div>

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#FF8A00]/10" />

        {/* Contenido */}
        <div className="relative z-10 p-10 flex flex-col justify-end h-full">

          <p className="text-[#FF8A00] tracking-[0.3em] text-sm mb-4">
            INDUSTRIAL
          </p>

          <h3 className="text-3xl font-bold mb-4">
            Smart Automation Systems
          </h3>

          <p className="text-[#999999] leading-relaxed">
            Desarrollo de soluciones industriales, automatización,
            control y fabricación técnica avanzada.
          </p>

        </div>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -6
        }}
        className="card-hover group relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#151515] min-h-[420px] transition-all duration-500 hover:border-[#FF5500]/40 hover:shadow-[0_0_50px_rgba(255,85,0,0.08)]"
      >

        {/* Imagen placeholder */}
        {/* Fondo visual */}
<div className="absolute inset-0">

  {/* Base */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#181818] via-[#101010] to-black" />

  {/* Glow */}
  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF5500]/10 blur-[120px]" />

  {/* Hex pattern */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage:
        "radial-gradient(circle at center, rgba(255,85,0,0.2) 1px, transparent 1px)",
      backgroundSize: "35px 35px",
    }}
  />

  {/* Líneas */}
  <div className="absolute top-10 right-10 w-20 h-px bg-[#FF5500]/40" />
  <div className="absolute top-10 right-10 w-px h-20 bg-[#FF5500]/40" />

  <div className="absolute bottom-10 left-10 w-20 h-px bg-[#FF5500]/30" />
  <div className="absolute bottom-10 left-10 w-px h-20 bg-[#FF5500]/30" />

</div>

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#FF5500]/10" />

        {/* Contenido */}
        <div className="relative z-10 p-10 flex flex-col justify-end h-full">

          <p className="text-[#FF5500] tracking-[0.3em] text-sm mb-4">
            CUSTOMS
          </p>

          <h3 className="text-3xl font-bold mb-4">
            Creative Custom Manufacturing
          </h3>

          <p className="text-[#999999] leading-relaxed">
            Réplicas, diseño artístico, personalización
            y fabricación creativa de nueva generación.
          </p>

        </div>

      </motion.div>

    </div>

  </motion.div>

</section>

{/* VISUAL EXPERIENCE SECTION */}
<section className="relative py-40 px-8 md:px-20 border-t border-[#1F1F1F] overflow-hidden">

  {/* Glow ambiental */}
  <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#FF5500]/5  blur-fix" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10"
  >

    <p className="text-[#FF5500] uppercase tracking-[0.5em] text-sm mb-6">
      VISUAL EXPERIENCE
    </p>

    <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-24">

      ADVANCED <br />

      <span className="text-[#FF5500] glow">
        MANUFACTURING
      </span>

    </h2>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -8
        }}
        className="card-hover relative overflow-hidden rounded-3xl min-h-[500px] border border-[#2A2A2A] bg-[#151515]"
      >

        {/* Fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-black to-[#101010]" />

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#FF8A00]/10 blur-[120px]" />

        {/* Líneas */}
        <div className="absolute top-10 left-10 w-20 h-px bg-[#FF8A00]/40" />
        <div className="absolute top-10 left-10 w-px h-20 bg-[#FF8A00]/40" />

        <div className="relative z-10 p-8 flex flex-col justify-end h-full">

          <p className="text-[#FF8A00] tracking-[0.3em] text-sm mb-4">
            INDUSTRIAL SYSTEMS
          </p>

          <h3 className="text-3xl font-bold mb-4">
            Automation & Control
          </h3>

          <p className="text-[#999999] leading-relaxed">
            SCADA, industrial integration, smart systems and engineering solutions.
          </p>

        </div>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -8
        }}
        className="card-hover relative overflow-hidden rounded-3xl min-h-[500px] border border-[#2A2A2A] bg-[#151515]"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-[#181818] via-black to-[#101010]" />

        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#FF5500]/10 blur-[120px]" />

        <div className="absolute top-10 right-10 w-20 h-px bg-[#FF5500]/40" />
        <div className="absolute top-10 right-10 w-px h-20 bg-[#FF5500]/40" />

        <div className="relative z-10 p-8 flex flex-col justify-end h-full">

          <p className="text-[#FF5500] tracking-[0.3em] text-sm mb-4">
            CUSTOM MANUFACTURING
          </p>

          <h3 className="text-3xl font-bold mb-4">
            Creative 3D Fabrication
          </h3>

          <p className="text-[#999999] leading-relaxed">
            Artistic manufacturing, replicas, custom parts and creative engineering.
          </p>

        </div>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -8
        }}
        className="card-hover relative overflow-hidden rounded-3xl min-h-[500px] border border-[#2A2A2A] bg-[#151515]"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-black to-[#0F0F0F]" />

        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#FF8A00]/10 blur-[120px]" />

        <div className="absolute bottom-10 right-10 w-20 h-px bg-[#FF8A00]/30" />
        <div className="absolute bottom-10 right-10 w-px h-20 bg-[#FF8A00]/30" />

        <div className="relative z-10 p-8 flex flex-col justify-end h-full">

          <p className="text-[#FF8A00] tracking-[0.3em] text-sm mb-4">
            FUTURE DESIGN
          </p>

          <h3 className="text-3xl font-bold mb-4">
            Engineering Vision
          </h3>

          <p className="text-[#999999] leading-relaxed">
            Technology-driven concepts designed for the next generation.
          </p>

        </div>

      </motion.div>

    </div>

  </motion.div>

</section>

{/* FOOTER */}
<footer
  id="contact"
  className="relative border-t border-[#1F1F1F] py-20 px-8 md:px-20 overflow-hidden"
>

  {/* Glow ambiental */}
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF8A00]/5 blur-[160px]" />

  <div className="relative z-10 grid md:grid-cols-3 gap-16">

    {/* BRAND */}
    <div>

      <h3 className="text-3xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
        3DFM
      </h3>

      <p className="text-[#999999] leading-relaxed max-w-sm">
        Ingeniería, automatización y fabricación avanzada para soluciones industriales y proyectos personalizados.
      </p>

      <div className="mt-8 flex items-center gap-3">

        <div className="w-3 h-3 rounded-full bg-[#FF8A00] animate-pulse" />

        <p className="text-[#777777] text-sm tracking-[0.2em] uppercase">
          System Online
        </p>

      </div>

    </div>

    {/* NAVIGATION */}
    <div>

      <p className="text-[#FF8A00] uppercase tracking-[0.3em] text-sm mb-8">
        Navigation
      </p>

      <div className="flex flex-col gap-5 text-[#AAAAAA]">

        <a href="#capabilities" className="hover:text-[#FF8A00] transition">
          Industrial Division
        </a>

        <a href="#philosophy" className="hover:text-[#FF5500] transition">
          Customs Division
        </a>

        <a href="#projects" className="hover:text-[#FF8A00] transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-[#FF5500] transition">
          Contact
        </a>

      </div>

    </div>

    {/* CONTACT */}
    <div>

      <p className="text-[#FF8A00] uppercase tracking-[0.3em] text-sm mb-8">
        Contact
      </p>

      <div className="flex flex-col gap-5 text-[#AAAAAA]">

        <p>
          info@3dfactorymaker.com
        </p>

        <p>
          Advanced Manufacturing Interface
        </p>

        <p className="text-[#666666]">
          Colombia • Future Ready
        </p>

      </div>

    </div>

  </div>

  {/* Línea inferior */}
  <div className="relative z-10 mt-20 pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-6">

    <p className="text-[#555555] text-sm tracking-[0.2em] uppercase">
      © 2026 3DFM — All Rights Reserved
    </p>

    <p className="text-[#444444] text-xs tracking-[0.3em] uppercase">
      ENGINEERING THE FUTURE OF CREATION
    </p>

  </div>

</footer>

</main>);

}
