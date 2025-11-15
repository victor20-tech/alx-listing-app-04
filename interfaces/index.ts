export interface CardProps {
  // Define properties for the Card component here
}

export interface ButtonProps {
  // Define properties for the Button component here
}

// interfaces PropertyProps.ts

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string; 
}

// Define the interface for a single filter pill
export interface FilterPillProps {
    label: string;
    id: string;
    icon: string; // Using a string for icon placeholders (like emojis)
    isActive: boolean;
    onClick: (id: string) => void;
}