
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lawyer-dark font-serif font-bold text-xl md:text-2xl">
          <a href="#" className="focus:outline-none">
            Dra. Julianne Araújo
          </a>
        </div>
        
        {/* Menu para desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className={cn(
            "font-medium text-sm uppercase tracking-wider transition-colors",
            scrolled ? "text-lawyer-dark hover:text-lawyer-medium" : "text-white hover:text-lawyer-light"
          )}>Início</a>
          <a href="#sobre" className={cn(
            "font-medium text-sm uppercase tracking-wider transition-colors",
            scrolled ? "text-lawyer-dark hover:text-lawyer-medium" : "text-white hover:text-lawyer-light"
          )}>Sobre Mim</a>
          <a href="#areas" className={cn(
            "font-medium text-sm uppercase tracking-wider transition-colors",
            scrolled ? "text-lawyer-dark hover:text-lawyer-medium" : "text-white hover:text-lawyer-light"
          )}>Áreas de Atuação</a>
          <a href="#contato" className={cn(
            "font-medium text-sm uppercase tracking-wider transition-colors",
            scrolled ? "text-lawyer-dark hover:text-lawyer-medium" : "text-white hover:text-lawyer-light"
          )}>Contato</a>
        </nav>
        
        {/* Botão de menu para mobile */}
        <button
          className="md:hidden text-lawyer-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Menu mobile */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <a 
              href="#inicio" 
              className="text-lawyer-dark hover:text-lawyer-medium font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#sobre" 
              className="text-lawyer-dark hover:text-lawyer-medium font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Mim
            </a>
            <a 
              href="#areas" 
              className="text-lawyer-dark hover:text-lawyer-medium font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Áreas de Atuação
            </a>
            <a 
              href="#contato" 
              className="text-lawyer-dark hover:text-lawyer-medium font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
