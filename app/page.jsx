'use client';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaChevronRight, FaPlay } from "react-icons/fa";
import { FiCheck, FiGlobe, FiMenu, FiX } from "react-icons/fi";

const Header2F = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Solutions', path: "/solutions" },
    { name: 'Approach', path: "/approach" },
    { name: 'Industries', path: "/industries" },
    { name: 'Case Studies', path: "/case-studies" },
    { name: 'Contact', path: "/contact" }
  ];

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-green-500 rounded"></div>
            <span className="text-xl font-bold">RM <span className="text-green-500">Tech</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${pathname === link.path ? "text-white border-b-2 border-green-500" : "text-gray-300"} 
                hover:text-white transition pb-1`}
              >
                {link.name}
              </Link>
            ))}

            {/* Botón de Contacto */}
            <Link href="/contact">
              <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-2 rounded-full flex items-center gap-2 transition">
                Contact Us <FaChevronRight size={12} />
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block ${pathname === link.path ? "text-white" : "text-gray-300"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <div className="bg-gray-950 text-white">
      <Header2F />

      {/* Hero Section */}
      {/* <section className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-green-500">Software Factory</span> for <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Global Innovators
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl">
              We build mission-critical software for startups and enterprises worldwide, 
              combining cutting-edge technology with military-grade precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-4 rounded-full flex items-center gap-2 transition">
                Start Your Project <FaChevronRight size={14} />
              </button>
              <button className="border border-gray-700 hover:border-green-500 text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 transition">
                Explore Case Studies
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="relative min-h-screen overflow-hidden"> */}
        {/* Video de fondo */}
        {/* <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/assets/videos/tech-wave.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gray-950/80" />
        </div> */}

        {/* Contenido */}
        {/* <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-green-500">Software Factory</span> for <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Global Innovators
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl">
              We build mission-critical software for startups and enterprises worldwide, 
              combining cutting-edge technology with military-grade precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-4 rounded-full flex items-center gap-2 transition">
                Start Your Project <FaChevronRight size={14} />
              </button>
              <button className="border border-gray-700 hover:border-green-500 text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 transition">
                Explore Case Studies
              </button>
            </div>
          </div>
        </div> */}
      {/* </section> */}

      {/* Hero Section Mejorada */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video de fondo optimizado */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/assets/videos/tech-wave.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-950/90" />
        </div>

        {/* Contenido sobrepuesto mejorado */}
        <div className="container mx-auto px-6 flex items-center min-h-screen relative z-10 pt-24">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm mb-4 animate-pulse">
                Innovación Tecnológica
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-green-500">Software Solutions</span> for <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Digital Transformation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              We design and develop cutting-edge software solutions that drive business growth, 
              leveraging the latest technologies with precision engineering.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                href="/contact" 
                className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 group shadow-lg hover:shadow-green-500/20"
              >
                <span>Start Your Project</span>
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => document.querySelector('video').play()} // Control para reactivar audio si es necesario
                className="border border-gray-600 hover:border-green-500 text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 transition-all group"
              >
                <FaPlay className="text-green-500 group-hover:text-green-400" />
                <span>Watch Showreel</span>
              </button>
            </div>

            {/* Tech stack animada */}
            <div className="mt-16 flex flex-wrap gap-3">
              {['React', 'Next.js', 'Node.js', 'AWS', 'AI/ML'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-900/70 border border-gray-700 rounded-full text-gray-300 hover:text-green-400 hover:border-green-400/50 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Our <span className="text-green-500">Solutions</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Software Development",
                desc: "Tailored applications built from scratch to your specifications.",
                items: ["Web Apps", "Mobile Apps", "Desktop Solutions"]
              },
              {
                title: "Digital Transformation",
                desc: "Modernize legacy systems with cloud-native architectures.",
                items: ["Cloud Migration", "API Integration", "Data Pipelines"]
              },
              {
                title: "AI & Automation",
                desc: "Intelligent systems that learn and adapt.",
                items: ["Machine Learning", "Computer Vision", "Process Automation"]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-gray-800/50 hover:bg-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.desc}</p>
                <ul className="space-y-2">
                  {solution.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <FiCheck className="text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-green-500">Approach</span></h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            How we deliver exceptional results for clients across 12 countries
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your business objectives" },
              { step: "02", title: "Prototyping", desc: "Rapid concept validation" },
              { step: "03", title: "Development", desc: "Agile sprints with bi-weekly deliveries" },
              { step: "04", title: "Scale", desc: "Optimization for growth" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="text-green-500 text-2xl font-bold mb-2 opacity-80 group-hover:opacity-100 transition">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                <div className="h-0.5 bg-gray-800 mt-4 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;