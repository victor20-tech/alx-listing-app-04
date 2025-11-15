import Link from 'next/link';
import React from 'react'; // Explicitly importing React is good practice for React components

// Define the available accommodation types for navigation
const accommodationTypes = [
  { name: 'Rooms', href: '/rooms' },
  { name: 'Mansion', href: '/mansion' },
  { name: 'Countryside', href: '/countryside' },
  // Add other types as needed
];

const Header: React.FC = () => {
  // Use Tailwind classes for a modern, responsive header structure
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* 1. Logo */}
        <div className="flex items-center">
          {/* Logo Placeholder: assumes a logo image exists in public/assets/images */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {/* Replace this text with an <img> tag pointing to your logo path, e.g., /assets/images/logo.png */}
            TravelApp Logo
          </Link>
        </div>

        {/* 2. Types of Accommodation (Navigation Menu) */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          {accommodationTypes.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-blue-500 transition duration-150">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 3. Search Bar and User Actions Group */}
        <div className="flex items-center space-x-4">
          
          {/* Search Bar */}
          <div className="hidden sm:block">
            <input 
              type="search" 
              placeholder="Search for accommodation..." 
              className="p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
          </div>

          {/* Sign In and Sign Up (Authentication Links) */}
          <div className="flex space-x-2">
            <Link 
              href="/auth/signin" 
              className="px-4 py-2 text-gray-700 rounded-full hover:bg-gray-100 transition duration-150"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/signup" 
              // Using Tailwind utilities for button styling, similar to how Button components are styled [11]
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-150"
            >
              Sign Up
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;