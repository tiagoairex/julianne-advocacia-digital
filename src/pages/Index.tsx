
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white font-sans">
      <Navbar />
      
      {/* Hero */}
      <section
        id="inicio"
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('/BACKGROUND.jpg')" }}
      >
        <div className="text-center px-6" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Julianne Araújo - Advocacia</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Defendendo seus direitos com ética e excelência.
          </p>
          <a href="#contato" className="bg-[#D2B670] text-black px-6 py-3 rounded hover:opacity-90 transition">
            Entre em Contato
          </a>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="bg-[#111111] py-20 px-8 flex flex-col items-center text-center" data-aos="fade-up">
        <img src="/FOTO.jpeg" alt="Julianne Araújo" className="w-60 h-60 object-cover rounded-full border-4 border-[#D2B670] shadow-lg mb-6" />
        <h2 className="text-3xl font-serif mb-6">Sobre Mim</h2>
        <p className="text-gray-300 max-w-3xl mb-4">
          Atuando com seriedade, agilidade e comprometimento, Julianne Araújo tem se destacado na advocacia cível e empresarial, oferecendo soluções jurídicas eficientes e humanizadas.
        </p>
        <p className="text-gray-300 max-w-3xl mb-6">
          Com sólida formação acadêmica e experiência prática consolidada, sua atuação é pautada pela ética, responsabilidade e busca contínua por resultados favoráveis aos seus clientes.
        </p>
        <a
          href="https://www.linkedin.com/in/julianne-araujo-aa47861b9/"
          target="_blank"
          className="bg-[#D2B670] text-black px-6 py-2 rounded hover:opacity-90 transition"
        >
          LinkedIn
        </a>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-20 bg-[#0f0f0f] text-center" data-aos="fade-up">
        <h2 className="text-3xl font-serif mb-12 text-white">Áreas de Atuação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto">
          <div className="bg-[#1a1a1a] text-white rounded-xl p-6 border-t-4 border-[#D2B670] shadow-lg">
            <div className="text-[#D2B670] text-3xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-2">Direito Civil</h3>
            
    <ul className="text-gray-300 text-left list-disc pl-4">
      <li>Contratos Civis</li>
      <li>Direito de Família e Sucessões</li>
      <li>Direito Condominial</li>
      <li>Defesa do Consumidor</li>
      <li>Defesa do Executado</li>
      <li>Responsabilidade Civil</li>
    </ul>
    
          </div>
          <div className="bg-[#1a1a1a] text-white rounded-xl p-6 border-t-4 border-[#D2B670] shadow-lg">
            <div className="text-[#D2B670] text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-2">Direito Empresarial</h3>
            
    <ul className="text-gray-300 text-left list-disc pl-4">
      <li>Assessoria Jurídica para Empresas</li>
      <li>Contratos Comerciais</li>
      <li>Direito Societário</li>
      <li>Cobrança de Credito</li>
      <li>Mediação e Negociação Empresarial</li>
      <li>Recuperação de Credito</li>
    </ul>
    
          </div>
        </div>
      </section>

      {/* Contato */}
      
    <section id="contato" className="py-20 px-8 text-center bg-[#111111]" data-aos="fade-up">
      <h2 className="text-3xl font-serif mb-6 text-white">Fale com a Dra. Julianne</h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Com vasta experiência em Direito Civil e Empresarial, a Dra. Julianne oferece atendimento personalizado,
        soluções jurídicas eficazes e acompanhamento dedicado. Clique abaixo e inicie sua consultoria diretamente pelo WhatsApp.
      </p>
      <a href="https://wa.me/5561994240550" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-[#D2B670] text-black px-8 py-4 rounded text-lg font-medium hover:opacity-90 transition">
        Falar com a Dra. Julianne no WhatsApp
      </a>
    </section>
    

      <Footer />
    </div>
  );
};

export default Index;
