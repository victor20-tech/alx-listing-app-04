import React from 'react';
import Link from 'next/link';

// Define footer navigation links (similar to how accommodation types were handled in the Header)
const footerLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
];

const Footer: React.FC = () => {
  return (
    // Use the <footer> tag and apply styling for a clear separation from the main content
    <footer className="bg-gray-800 text-white mt-8 p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* 1. Logo/Branding Section */}
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-150">
            TravelApp
          </Link>
          <p className="text-gray-400 text-sm mt-2">
            Explore the world, one booking at a time.
          </p>
        </div>

        {/* 2. Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
          {footerLinks.map((link) => (
            <Link 
              key={link.title} 
              href={link.href} 
              className="text-gray-300 hover:text-white transition duration-150 text-sm mb-2"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* 3. Social Media/Contact Placeholder */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Placeholder for social media icons or a contact button */}
          <span className="text-gray-400 hover:text-white cursor-pointer">
            {/* Example: Replace with an actual social icon component */}
            <i className="fas fa-twitter">Twitter</i>
          </span>
          <span className="text-gray-400 hover:text-white cursor-pointer">
            <i className="fas fa-facebook">Facebook</i>
          </span>
        </div>
      </div>

      {/* Copyright and Bottom Line */}
      <div className="mt-8 pt-4 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TravelApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;