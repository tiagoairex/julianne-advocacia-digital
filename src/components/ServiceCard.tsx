
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border-t-4 border-lawyer-medium">
      <div className="text-lawyer-dark mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-lawyer-dark mb-4 text-center">{title}</h3>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-lawyer-medium mr-2">•</span>
            <span className="text-lawyer-gray">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
