import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '@utils/constants.en';
import { useScrollSpy, scrollToSection } from '@hooks/useScrollSpy';
import { SECTION_OFFSETS } from '@utils/offsets';
import { NAV_LINKS as NAV_LINKS_EN, HIRE_ME as HIRE_ME_EN } from '@data/english/navigation.en';
import { NAV_LINKS as NAV_LINKS_FR, HIRE_ME as HIRE_ME_FR } from '@data/french/navigation.fr';
import { useLanguage } from '@context/LanguageContext';
import type { Language } from '@context/LanguageContext';
import { FaCode } from 'react-icons/fa6';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { lang, setLang } = useLanguage();

  const NAV_LINKS = lang === 'fr' ? NAV_LINKS_FR : NAV_LINKS_EN;
  const HIRE_ME = lang === 'fr' ? HIRE_ME_FR : HIRE_ME_EN;

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const offset = SECTION_OFFSETS[sectionId] || 110;
    scrollToSection(sectionId, offset, 600);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'
      }`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <div className="max-w-330 mx-auto px-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <FaCode className="w-7 h-7 text-primary" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              aria-label="home"
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Language selector + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center rounded-[13px] border border-white/20 overflow-hidden">
              {(['en', 'fr'] as Language[]).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                    i === 0 ? 'border-r border-white/20' : ''
                  } ${
                    lang === l
                      ? 'bg-white text-[#212121]'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Hire Me CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300"
            >
              {HIRE_ME}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 text-white hover:text-white/80 transition-colors"
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-white bg-white/10'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Language Toggle */}
          <div className="flex items-center gap-2 px-4 pt-1">
            {(['en', 'fr'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  lang === l
                    ? 'bg-white text-[#212121]'
                    : 'text-white/70 border border-white/20 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="w-full px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2"
          >
            {HIRE_ME}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
