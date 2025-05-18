
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-navy p-8 rounded-lg card-elevated transition-all duration-300 hover:shadow-2xl border-t-4 border-gold">
      <div className="text-cream mb-6 flex justify-center">
        <div className="p-5 rounded-full bg-gradient-to-br from-black to-navy shadow-inner border border-gold/20">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gold mb-4 text-center font-nexa">{title}</h3>
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gold mr-2">•</span>
            <span className="text-silver">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
