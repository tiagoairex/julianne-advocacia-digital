
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const CONTACT_EMAIL = "adv.juliannearaujo@gmail.com";

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
    
    // Simulating form submission
    // In a real implementation, this would send an email to adv.juliannearaujo@gmail.com
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
      console.log(`Message would be sent to ${CONTACT_EMAIL}`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-cream font-nexa text-sm font-medium mb-2">
          Nome completo
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-navy/70 border-gold/30 text-cream focus:border-gold focus:ring focus:ring-gold/20"
          placeholder="Seu nome"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-cream font-nexa text-sm font-medium mb-2">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-navy/70 border-gold/30 text-cream focus:border-gold focus:ring focus:ring-gold/20"
          placeholder="seu.email@exemplo.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-cream font-nexa text-sm font-medium mb-2">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-navy/70 border-gold/30 text-cream focus:border-gold focus:ring focus:ring-gold/20"
          placeholder="Descreva como posso ajudar você"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold hover:bg-gold/90 text-navy font-nexa font-medium py-3 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
};

export default ContactForm;
