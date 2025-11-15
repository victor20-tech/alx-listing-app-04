import React, { useState } from 'react';
import { ACCOMMODATION_FILTERS } from '@/constants/index'; 
import Pill from './Pill';


const FilterSection: React.FC = () => {
  // Initialize state to track the active filter ID
  const [activeFilterId, setActiveFilterId] = useState('villa'); 

  // Handler function passed down to the Pill component
  const handleFilterClick = (filterId: string) => {
    setActiveFilterId(filterId);
    // In a full application, this action would trigger data fetching or URL updates (e.g., searchParams) [12].
  };

  return (
    // Container for the filter bar. Uses overflow-x-auto for responsiveness
    <div className="sticky top-[70px] z-20 bg-white border-b shadow-sm">
      <div className="container mx-auto flex overflow-x-auto justify-start sm:justify-center px-4 md:px-0">
        
        {ACCOMMODATION_FILTERS.map((filter) => (
          <Pill
            key={filter.id}
            id={filter.id}
            label={filter.label}
            icon={filter.icon}
            // Determine if the current pill is active
            isActive={activeFilterId === filter.id}
            onClick={handleFilterClick}
          />
        ))}

        {/* Padding element for better scroll experience */}
        <div className="w-8 flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default FilterSection;