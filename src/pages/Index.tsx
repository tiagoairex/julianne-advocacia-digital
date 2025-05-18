
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section 
        id="inicio"
        className="h-screen relative flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/310283f8-ae2a-4562-9610-c90bd0cec83d.png')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Defendendo seus direitos com ética e excelência
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Advocacia especializada em Direito Civil e Empresarial para proteger seus interesses e garantir seus direitos.
          </p>
          <Button
            asChild
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg"
          >
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="section-padding bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Sobre Mim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-full overflow-hidden max-w-sm mx-auto">
              <img 
                src="/lovable-uploads/48f5c843-d84d-45df-921c-3e35683319f5.png" 
                alt="Dra. Julianne Araújo" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Atuando com seriedade, agilidade e comprometimento, Julianne Araujo tem se destacado na advocacia cível e empresarial, oferecendo soluções jurídicas eficientes e humanizadas.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Com sólida formação acadêmica e experiência prática consolidada, sua atuação é pautada pela ética, responsabilidade e busca contínua por resultados favoráveis aos seus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
                >
                  <a href="#areas">Áreas de Atuação</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white font-medium px-6 py-3 rounded-md transition-colors"
                >
                  <a href="https://www.linkedin.com/in/julianne-araujo-aa47861b9/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Direito Civil"
              description={[
                "Contratos Civis e de Consumo",
                "Direito de Família e Sucessões",
                "Defesa do Consumidor",
                "Responsabilidade Civil",
                "Disputas Imobiliárias"
              ]}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              }
            />
            <ServiceCard 
              title="Direito Empresarial"
              description={[
                "Assessoria Jurídica para Empresas",
                "Contratos Comerciais",
                "Direito Societário",
                "Cobrança e Recuperação de Crédito",
                "Mediação e Negociação Empresarial"
              ]}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section-padding bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Entre em Contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 mr-3 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white">Endereço</h4>
                    <p className="text-gray-300">DF Plaza, Bloco D – Aguas Claras – SP</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 mr-3 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white">Telefone</h4>
                    <p className="text-gray-300">(61) 99424-0550</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 mr-3 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white">E-mail</h4>
                    <p className="text-gray-300">contato@juliannearaujo.com.br</p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                <a href="https://wa.me/5561994240550" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 mr-2"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Contato via WhatsApp
                </a>
              </Button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-6">
                Envie uma Mensagem
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
