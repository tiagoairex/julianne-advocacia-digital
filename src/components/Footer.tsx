
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lawyer-dark text-lawyer-light py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Dra. Julianne Araújo</h3>
            <p className="mb-2">DF Plaza, Bloco D – Aguas Claras – SP</p>
            <p className="mb-4">(61) 99424-0550</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/julianne-araujo-aa47861b9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lawyer-light hover:text-white transition-colors duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Horário de Atendimento</h3>
            <p className="mb-2">Segunda a sexta-feira</p>
            <p className="mb-4">Das 9h às 18h</p>
          </div>
        </div>
        <div className="border-t border-lawyer-light/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Dra. Julianne Araújo | Todos os direitos reservados</p>
          <p className="mt-2">OAB/SP (Número da OAB)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
