
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lawyer-dark text-sm font-medium mb-2">
          Nome completo
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border-lawyer-gray/30 focus:border-lawyer-medium focus:ring focus:ring-lawyer-medium/20"
          placeholder="Seu nome"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-lawyer-dark text-sm font-medium mb-2">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border-lawyer-gray/30 focus:border-lawyer-medium focus:ring focus:ring-lawyer-medium/20"
          placeholder="seu.email@exemplo.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-lawyer-dark text-sm font-medium mb-2">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border-lawyer-gray/30 focus:border-lawyer-medium focus:ring focus:ring-lawyer-medium/20"
          placeholder="Descreva como posso ajudar você"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-lawyer-dark hover:bg-lawyer-medium text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lawyer-medium focus:ring-opacity-50"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
};

export default ContactForm;
