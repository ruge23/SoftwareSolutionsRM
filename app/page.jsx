'use client';
import { useState, useMemo } from 'react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useScrollSpy } from '../hooks/useScrollSpy';
import { FaWhatsapp, FaChevronRight, FaPlay, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiCheck, FiGlobe, FiMenu, FiX, FiSend } from "react-icons/fi";

const Header2F = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = ['home', 'solutions', 'approach', 'contact'];
  const { activeId, isHeroVisible } = useScrollSpy(sectionIds, {
    threshold: [0.1, 0.5, 0.9], // Multiple thresholds for better detection
    rootMargin: '-100px 0px -50% 0px' // Adjusted margins
  });


  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const headerClasses = useMemo(() => (
    `fixed w-full z-50 transition-all duration-500 ${isHeroVisible
      ? 'bg-transparent border-transparent'
      : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800'
    }`
  ), [isHeroVisible]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Approach', id: 'approach' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleScroll('home')}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className={`w-8 h-8 rounded transition-colors ${isHeroVisible ? 'bg-white/90' : 'bg-green-500'
              }`}></div>
            <span className={`text-xl font-bold transition-colors ${isHeroVisible ? 'text-white' : 'text-gray-100'
              }`}>
              RM <span className="text-green-500">Tech</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`pb-1 transition-colors ${activeId === link.id
                  ? 'text-white border-b-2 border-green-500'
                  : isHeroVisible
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleScroll('contact')}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-colors ${isHeroVisible
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-green-500 hover:bg-green-600 text-black'
                }`}
            >
              Contact Us <FaChevronRight size={12} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isHeroVisible ? 'text-white/90' : 'text-gray-300'
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 ${isHeroVisible ? 'bg-black/30' : 'bg-gray-900/80'
            } rounded-lg p-4 backdrop-blur-md`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`block w-full text-left px-4 py-2 rounded ${activeId === link.id
                  ? 'bg-green-500/10 text-green-400'
                  : isHeroVisible
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.name}
              </button>
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

      {/* Hero Section Mejorada */}
      <section id="home" className="relative min-h-screen overflow-hidden">
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
              <span className="text-green-500">Software Solutions</span> for <br />
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
              {['React', 'Next.js', 'Node.js', 'AWS', 'Google Clouds'].map((tech) => (
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
      <section id="solutions" className="py-20 bg-gray-900/50">
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
      <section id="approach" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-green-500">Approach</span></h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            How we deliver exceptional results for clients across 12 countries.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your business objectives." },
              { step: "02", title: "Prototyping", desc: "Rapid concept validation." },
              { step: "03", title: "Development", desc: "Agile sprints with bi-weekly deliveries." },
              { step: "04", title: "Scale", desc: "Optimization for growth." }
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column - Description */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empower your team with our <span className="text-green-500">software solutions</span>
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                Accelerate agile software development and delivery with RM Tech Suite
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Discover how our technology solutions can help drive innovation while protecting security
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-green-500">
                    <FiGlobe className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Global Reach</h3>
                    <p className="text-gray-400">Serving clients across 12 countries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-green-500">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Direct Support</h3>
                    <p className="text-gray-400">+1 (786) 968-2945 (United States)</p>
                    <p className="text-gray-400">+54 381 315-8053 (Argentina)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-green-500">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-gray-400">softwaresolutionsrm@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-1/2 w-full bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">
                Get in touch with <span className="text-green-500">RM Tech</span>
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name *"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name *"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <input
                      name="companyName"
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="organizationType"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="">Organization Type</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="smb">Small/Medium Business</option>
                    <option value="startup">Startup</option>
                    <option value="government">Government</option>
                    <option value="nonprofit">Non-profit</option>
                    <option value="education">Education</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    defaultChecked
                    className="h-4 w-4 text-green-500 rounded bg-gray-700 border-gray-600 focus:ring-green-500"
                  />
                  <label htmlFor="subscribe" className="text-sm text-gray-400">
                    Send me RM Tech news, events & offers
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-4 rounded-full w-full transition flex items-center justify-center gap-2"
                >
                  <span>Submit</span>
                  <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;