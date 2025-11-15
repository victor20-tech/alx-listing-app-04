import React from 'react';
import { PropertyProps } from '@/interfaces/index';

const PropertyCard: React.FC<PropertyProps> = ({ imageSrc, name, price, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer border border-gray-100">
      
      {/* Image Section */}
      <div 
        className="w-full h-56 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {/* Placeholder for the image */}
      </div>

      {/* Content Details */}
      <div className="p-4">
        
        {/* Name and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
          <div className="flex items-center text-sm font-medium text-yellow-600">
            {/* Star Icon Placeholder */}
            <span>⭐</span>
            <span className="ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        {/* Price */}
        <p className="text-xl font-bold text-gray-900 mt-2">
          ${price}
          <span className="text-sm font-normal text-gray-500"> / night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;