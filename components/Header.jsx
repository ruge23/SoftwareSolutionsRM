"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations, Link } from "next-intl";
import { FaWhatsapp, FaChevronRight } from "react-icons/fa";
import { FiGlobe, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  const locale = useLocale();

  const navLinks = [
    { name: t('solutions'), path: "/solutions" },
    { name: t('approach'), path: "/approach" },
    { name: t('industries'), path: "/industries" },
    { name: t('caseStudies'), path: "/case-studies" },
    { name: t('contact'), path: "/contact" }
  ];

  const changeLanguage = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    // Usar reload() en lugar de cambiar href para mantener estado
    window.location.reload();
  };

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
                className={`${pathname === `/${locale}${link.path}` ? "text-white border-b-2 border-green-500" : "text-gray-300"} 
                hover:text-white transition pb-1`}
              >
                {link.name}
              </Link>
            ))}

            {/* Selector de idioma */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                <FiGlobe />
                <span>{locale.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-20 bg-gray-800 rounded-md shadow-lg hidden group-hover:block z-50">
                {['en', 'es'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`block w-full text-left px-4 py-2 ${locale === lang
                        ? 'bg-green-500/10 text-green-500'
                        : 'hover:bg-gray-700'
                      }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón de Contacto */}
            <Link href="/contact">
              <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-2 rounded-full flex items-center gap-2 transition">
                {t('contactUs')} <FaChevronRight size={12} />
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
                className={`block ${pathname.endsWith(link.path) ? "text-white" : "text-gray-300"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <button
                onClick={() => changeLanguage('en')}
                className={`mr-4 ${locale === 'en' ? 'text-green-500' : 'text-gray-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className={`${locale === 'es' ? 'text-green-500' : 'text-gray-300'}`}
              >
                ES
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;