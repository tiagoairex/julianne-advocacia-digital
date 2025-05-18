
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl border-t-4 border-gray-600 hover:translate-y-[-5px] transform">
      <div className="text-gray-100 mb-4 flex justify-center">
        <div className="p-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-inner">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-100 mb-4 text-center">{title}</h3>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gray-400 mr-2">•</span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
