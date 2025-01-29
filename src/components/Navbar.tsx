import React from 'react';
import { Code } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

function Navbar({ currentSection, setCurrentSection }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">BuyMLProjects</span>
          </div>
          
          <div className="flex space-x-8">
            {['home', 'projects', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => setCurrentSection(section)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  currentSection === section
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar