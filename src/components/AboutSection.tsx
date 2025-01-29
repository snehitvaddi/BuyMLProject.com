import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/ProfileDP.jpg';

function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={profileImage}
            alt="Snehit Vaddi"
            className="w-48 h-48 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
          />
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Developer</h2>
            <p className="text-lg text-gray-600 mb-6">
              Hi, I'm Snehit Vaddi, a Machine Learning Engineer passionate about creating practical AI solutions. 
              I started BuyMLProjects.com to help others learn ML through production-ready projects that solve real-world problems.
            </p>
            
            <div className="flex space-x-6">
              <a
                href="https://github.com/snehitvaddi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/snehitvaddi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:vaddisnehit@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection