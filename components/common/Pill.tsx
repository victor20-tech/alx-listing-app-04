import React from 'react';
import { FilterPillProps } from '@/interfaces/index';


const Pill: React.FC<FilterPillProps> = ({ label, id, icon, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(id)}
      // Apply Tailwind CSS classes based on the isActive state for visual feedback [10, 11]
      className={`
        flex flex-col items-center justify-center p-3 sm:p-4 min-w-[70px]
        border-b-2 transition duration-200 ease-in-out cursor-pointer
        ${isActive 
          ? 'border-blue-600 text-blue-600 font-semibold bg-gray-50' // Active style
          : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-100' // Inactive style
        }
      `}
    >
      {/* Icon */}
      <span className="text-xl mb-1">{icon}</span>
      {/* Label */}
      <span className="text-xs font-medium whitespace-nowrap">{label}</span>
    </button>
  );
};

export default Pill;