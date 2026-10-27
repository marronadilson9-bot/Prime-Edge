import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { EVENT_DATA } from '../data/conferenceData';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070D1E]/90 backdrop-blur-md border-b border-[#D4AF37]/15 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/60 bg-[#F9F7F2] p-0.5 shadow-md group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <img
                src={EVENT_DATA.logoSrc}
                alt="Logotipo da Academia Prime Edge"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-white leading-tight">
                Academia Prime Edge
              </span>
              <span className="text-[10px] tracking-widest text-[#E5C365] uppercase font-semibold">
                1.ª Conferência Oficial
              </span>
            </div>
          </a>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('#evento')}
              className="hover:text-[#E5C365] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              A Conferência
            </button>
            <button
              onClick={() => handleNavClick('#beneficios')}
              className="hover:text-[#E5C365] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Porquê Participar
            </button>
            <button
              onClick={() => handleNavClick('#oradores')}
              className="hover:text-[#E5C365] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Oradores
            </button>
            <button
              onClick={() => handleNavClick('#ingressos')}
              className="hover:text-[#E5C365] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Ingressos
            </button>
            <button
              onClick={() => handleNavClick('#programa')}
              className="hover:text-[#E5C365] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Programa
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="hover:text-[#E5C365] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onRegisterClick}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#070D1E] bg-gradient-to-r from-[#F0D58C] via-[#D4AF37] to-[#C59B27] hover:brightness-110 active:brightness-95 rounded-lg shadow-md hover:shadow-[#D4AF37]/20 transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Garantir a minha vaga</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E5C365]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070D1E]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-200">
            <button
              onClick={() => handleNavClick('#evento')}
              className="text-left py-2 px-3 rounded-md hover:bg-white/5 hover:text-[#E5C365] transition-colors"
            >
              A Conferência
            </button>
            <button
              onClick={() => handleNavClick('#beneficios')}
              className="text-left py-2 px-3 rounded-md hover:bg-white/5 hover:text-[#E5C365] transition-colors"
            >
              Porquê Participar
            </button>
            <button
              onClick={() => handleNavClick('#oradores')}
              className="text-left py-2 px-3 rounded-md hover:bg-white/5 hover:text-[#E5C365] transition-colors"
            >
              Oradores Confirmados
            </button>
            <button
              onClick={() => handleNavClick('#ingressos')}
              className="text-left py-2 px-3 rounded-md hover:bg-white/5 hover:text-[#E5C365] transition-colors"
            >
              Ingressos e Preços
            </button>
            <button
              onClick={() => handleNavClick('#programa')}
              className="text-left py-2 px-3 rounded-md hover:bg-white/5 hover:text-[#E5C365] transition-colors"
            >
              Programa
            </button>
            <button
              onClick={() => handleNavClick('#sobre')}
              className="text-left py-2 px-3 rounded-md hover:bg-white/5 hover:text-[#E5C365] transition-colors"
            >
              Sobre a Academia
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="text-left py-2 px-3 rounded-md hover:bg-white/5 hover:text-[#E5C365] transition-colors"
            >
              Perguntas Frequentes
            </button>

            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-[#070D1E] bg-gradient-to-r from-[#F0D58C] via-[#D4AF37] to-[#C59B27] rounded-lg shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Garantir a minha vaga</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
