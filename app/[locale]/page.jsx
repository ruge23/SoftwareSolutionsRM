'use client';
import { useState, useMemo, useEffect } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
// Iconos
import { FaWhatsapp, FaChevronRight, FaPlay, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  FiCheck, FiGlobe, FiMenu, FiX, FiSend, FiCode, FiLayers, FiClock, FiLock,
  FiCloud,
  FiCpu,
  FiCheckCircle,
  FiArrowRight,
  FiShield
} from "react-icons/fi";

// Hooks
import { useScrollSpy } from '../../hooks/useScrollSpy';

const Header2F = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const sectionIds = ['home', 'solutions', 'approach', 'contact'];
  const { activeId, isHeroVisible } = useScrollSpy(sectionIds, {
    threshold: [0.1, 0.5, 0.9],
    rootMargin: '-100px 0px -50% 0px'
  });

  const t = useTranslations('Home.navigation');

  const handleLanguageChange = (locale) => {
    router.push(pathname, { locale });
    setLanguageDropdownOpen(false);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const currentPosition = window.scrollY;
      const targetPosition = element.offsetTop;

      if (Math.abs(currentPosition - targetPosition) > 100) {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
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
    { name: t('home'), id: 'home' },
    { name: t('solutions'), id: 'solutions' },
    { name: t('approach'), id: 'approach' },
    { name: t('contact'), id: 'contact' }
  ];

  return (
    // <header className={headerClasses}>
    //   <div className="container mx-auto px-6 py-4">
    //     <div className="flex justify-between items-center">
    //       {/* Logo */}
    //       <button
    //         onClick={() => handleScroll('home')}
    //         className="flex items-center gap-2 hover:opacity-80 transition"
    //       >
    //         <div className={`w-8 h-8 rounded transition-colors ${isHeroVisible ? 'bg-white/90' : 'bg-green-500'}`}></div>
    //         <span className={`text-xl font-bold transition-colors ${isHeroVisible ? 'text-white' : 'text-gray-100'}`}>
    //           RM <span className="text-green-500">Tech</span>
    //         </span>
    //       </button>

    //       {/* Desktop Nav */}
    //       <nav className="hidden md:flex items-center gap-8">
    //         {navLinks.slice(0, -1).map((link) => (
    //           <button
    //             key={link.id}
    //             onClick={() => handleScroll(link.id)}
    //             className={`pb-1 transition-colors ${activeId === link.id
    //               ? 'text-white border-b-2 border-green-500'
    //               : isHeroVisible
    //                 ? 'text-white/80 hover:text-white'
    //                 : 'text-gray-300 hover:text-white'
    //               }`}
    //           >
    //             {link.name}
    //           </button>
    //         ))}

    //         <button
    //           onClick={() => handleScroll('contact')}
    //           aria-label="Contact us"
    //           className={`px-6 py-2 rounded-full flex items-center gap-2 transition-colors ${isHeroVisible
    //             ? 'bg-white/10 hover:bg-white/20 text-white'
    //             : 'bg-green-500 hover:bg-green-600 text-black'
    //             }`}
    //         >
    //           {t('contactButton')} <FaChevronRight size={12} />
    //         </button>
    //       </nav>

    //       {/* Mobile Menu Button */}
    //       <button
    //         className={`md:hidden transition-colors ${isHeroVisible ? 'text-white/90' : 'text-gray-300'}`}
    //         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    //       >
    //         {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    //       </button>
    //     </div>

    //     {/* Mobile Menu */}
    //     {mobileMenuOpen && (
    //       <div className={`md:hidden mt-4 pb-4 space-y-4 ${isHeroVisible ? 'bg-black/30' : 'bg-gray-900/80'} rounded-lg p-4 backdrop-blur-md`}>
    //         {navLinks.map((link) => (
    //           <button
    //             key={link.id}
    //             onClick={() => handleScroll(link.id)}
    //             className={`block w-full text-left px-4 py-2 rounded ${activeId === link.id
    //               ? 'bg-green-500/10 text-green-400'
    //               : isHeroVisible
    //                 ? 'text-white/80 hover:text-white'
    //                 : 'text-gray-300 hover:text-white'
    //               }`}
    //           >
    //             {link.name}
    //           </button>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </header>
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleScroll('home')}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className={`w-8 h-8 rounded transition-colors ${isHeroVisible ? 'bg-white/90' : 'bg-green-500'}`}></div>
            <span className={`text-xl font-bold transition-colors ${isHeroVisible ? 'text-white' : 'text-gray-100'}`}>
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

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${isHeroVisible
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
              >
                <FiGlobe className="text-lg" />
                <span className="text-sm uppercase">
                  {locale.toUpperCase()}
                </span>
              </button>

              {languageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-24 bg-gray-800 rounded-md shadow-lg z-50 overflow-hidden"
                >
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`block w-full text-left px-4 py-2 text-sm ${locale === 'en'
                      ? 'bg-green-500/20 text-green-400'
                      : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`block w-full text-left px-4 py-2 text-sm ${locale === 'es'
                      ? 'bg-green-500/20 text-green-400'
                      : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    Español
                  </button>
                </motion.div>
              )}
            </div>

            <button
              onClick={() => handleScroll('contact')}
              aria-label="Contact us"
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-colors ${isHeroVisible
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-green-500 hover:bg-green-600 text-black'
                }`}
            >
              {t('contactButton')} <FaChevronRight size={12} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isHeroVisible ? 'text-white/90' : 'text-gray-300'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 ${isHeroVisible ? 'bg-black/30' : 'bg-gray-900/80'} rounded-lg p-4 backdrop-blur-md`}>
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

            <div className="pt-2 border-t border-gray-700">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`block w-full text-left px-4 py-2 rounded ${!pathname.startsWith('/es')
                  ? 'bg-green-500/10 text-green-400'
                  : 'text-gray-300 hover:text-white'}`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`block w-full text-left px-4 py-2 rounded ${pathname.startsWith('/es')
                  ? 'bg-green-500/10 text-green-400'
                  : 'text-gray-300 hover:text-white'}`}
              >
                Español
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const t = useTranslations('Home');

  // Stats - Datos iniciales
  const [stats, setStats] = useState(() => {
    const statItems = t.raw('stats.items');
    return statItems.map((item) => ({
      num: item.value,
      text: item.label,
      icon: item.label === 'Years of experience' ? <FiClock className="text-3xl" /> :
        item.label === 'Projects completed' ? <FiLayers className="text-3xl" /> :
          item.label === 'Technologies mastered' ? <FiCpu className="text-3xl" /> :
            <FiCode className="text-3xl" />
    }));
  });

  // Stats - Simular actualización en tiempo real de commits
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => {
        const updatedStats = [...prevStats];
        const commitsIndex = updatedStats.findIndex(stat => stat.text === t('stats.items.3.label'));
        if (commitsIndex !== -1) {
          updatedStats[commitsIndex] = {
            ...updatedStats[commitsIndex],
            num: updatedStats[commitsIndex].num + Math.floor(Math.random() * 3)
          };
        }
        return updatedStats;
      });
    }, 60000); // Actualiza cada minuto

    return () => clearInterval(interval);
  }, [t]);

  return (
    <div className="bg-gray-950 text-white">
      <Header2F />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/assets/videos/tech-wave.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-950/90" />
        </div>

        <div className="container mx-auto px-6 flex items-center min-h-screen relative z-10 pt-24">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm mb-4 animate-pulse">
                {t('hero.tagline')}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-green-500">{t('hero.title1')}</span> {t('hero.title2')} <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                {t('hero.title3')}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 group shadow-lg hover:shadow-green-500/20"
              >
                <span>{t('hero.cta1')}</span>
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => document.querySelector('video')?.play()}
                className="border border-gray-600 hover:border-green-500 text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 transition-all group"
              >
                <FaPlay className="text-green-500 group-hover:text-green-400" />
                <span>{t('hero.cta2')}</span>
              </button>
            </div>

            <div className="mt-16 flex flex-wrap gap-3">
              {['React', 'Next.js', 'Node.js', 'AWS', 'Google Cloud'].map((tech) => (
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

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('solutions.title').split(' ')[0]} <span className="text-green-500">{t('solutions.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('solutions.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.raw('solutions.items').map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 hover:bg-gray-900/70 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="mb-6 h-40 flex items-center justify-center">
                  <img
                    src={`/assets/images/${index === 0 ? 'two-factor-authentication' : index === 1 ? 'cloud-hosting' : 'visionary-technology'}.svg`}
                    alt={solution.title}
                    className="h-full object-contain"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="#10b981">
                          <rect width="600" height="400" fill="none"/>
                          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="20">${solution.title}</text>
                        </svg>
                      `)}`;
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <svg className="flex-shrink-0 text-green-500 mt-0.5 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approuch Section */}
      <section id="solutions" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('framework.title').split(' ')[0]} <span className="text-green-500">{t('framework.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-400">
              {t('framework.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {t.raw('framework.cards').map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="h-60 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6">
                  <img
                    src={`/assets/images/${index === 0 ? 'developer-activity' :
                      index === 1 ? 'secure-server' : 'connected-world'
                      }.svg`}
                    alt={card.title}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500/10 p-2 rounded-lg">
                      {index === 0 ? <FiCode className="text-green-500 text-xl" /> :
                        index === 1 ? <FiShield className="text-green-500 text-xl" /> :
                          <FiGlobe className="text-green-500 text-xl" />}
                    </div>
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{card.description}</p>
                  <button className="text-green-500 hover:text-green-400 font-medium flex items-center gap-2 transition group">
                    {card.cta}
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-green-500/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('stats.title').split(' ')[0]} <span className="text-green-500">{t('stats.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('stats.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-800/50 hover:bg-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4 text-green-500">
                  {stat.icon}
                  <CountUp
                    end={stat.num}
                    duration={3}
                    delay={index * 0.2}
                    separator=","
                    className="text-4xl font-bold"
                  >
                    {({ countUpRef }) => (
                      <span ref={countUpRef} className="group-hover:text-green-400 transition-colors" />
                    )}
                  </CountUp>
                  {stat.text === t('stats.items.3.label') && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full animate-pulse">
                      Live
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-lg">{stat.text}</p>
                {stat.text === t('stats.items.3.label') && (
                  <p className="text-xs text-gray-500 mt-2">Updated in real-time</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-gray-500 text-sm"
          >
            {/* * {t('stats.note')} {new Date().toLocaleDateString(t('locale'), { year: 'numeric', month: 'long' })} */}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('contact.title').split(' ').slice(0, 5).join(' ')} <span className="text-green-500">{t('contact.title').split(' ').slice(5).join(' ')}</span>
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                {t('contact.subtitle')}
              </p>
              <p className="text-lg text-gray-400 mb-8">
                {t('contact.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-green-500">
                    <FiGlobe className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t('contact.info.global.title')}</h3>
                    <p className="text-gray-400">{t('contact.info.global.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-green-500">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t('contact.info.phone.title')}</h3>
                    {t.raw('contact.info.phone.numbers').map((number, i) => (
                      <p key={i} className="text-gray-400">{number}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-green-500">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{t('contact.info.email.title')}</h3>
                    <p className="text-gray-400">{t('contact.info.email.address')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">
                {t('contact.form.title').split(' ').slice(0, 4).join(' ')} <span className="text-green-500">{t('contact.form.title').split(' ').slice(4).join(' ')}</span>
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="firstName"
                      type="text"
                      placeholder={t('contact.form.fields.firstName')}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div>
                    <input
                      name="lastName"
                      type="text"
                      placeholder={t('contact.form.fields.lastName')}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder={t('contact.form.fields.email')}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder={t('contact.form.fields.phone')}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <input
                      name="companyName"
                      type="text"
                      placeholder={t('contact.form.fields.company')}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="organizationType"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="">{t('contact.form.fields.orgType')}</option>
                    {Object.entries(t.raw('contact.form.fields.orgTypes')).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder={t('contact.form.fields.message')}
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
                    {t('contact.form.fields.newsletter')}
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-4 rounded-full w-full transition flex items-center justify-center gap-2"
                >
                  <span>{t('contact.form.fields.submit')}</span>
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