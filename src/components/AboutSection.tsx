import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
            alt="Developer"
            className="w-48 h-48 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Developer</h2>
            <p className="text-gray-700 mb-6">
              With over a decade of experience in machine learning and artificial intelligence,
              I've worked on numerous projects across various domains. I started BuyMLProjects.com
              to help others learn ML through practical, production-ready projects that solve real-world problems.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection