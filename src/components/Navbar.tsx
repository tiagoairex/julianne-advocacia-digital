
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-black/70' : 'backdrop-blur-sm bg-black/30'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-serif font-bold text-[#D2B670]">
          Dra. Julianne Araújo
        </span>
        <nav className="hidden md:flex gap-6 items-center font-medium text-white text-sm">
          <a href="#inicio" className="hover:text-[#D2B670] transition">Início</a>
          <a href="#sobre" className="hover:text-[#D2B670] transition">Sobre Mim</a>
          <a href="#areas" className="hover:text-[#D2B670] transition">Áreas de Atuação</a>
          <a href="#contato" className="hover:text-[#D2B670] transition">Contato</a>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-black/80 text-white flex flex-col space-y-2 backdrop-blur-md">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre Mim</a>
          <a href="#areas" onClick={() => setMobileMenuOpen(false)}>Áreas</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
