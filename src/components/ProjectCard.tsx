import React, { useState } from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  summary: string;
  techStack: string[];
  thumbnail: string;
  githubUrl: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {project.tags.length > 0 && (
          <span
            className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
              project.tags[0].includes('New') ? 'bg-green-100 text-green-800' :
              project.tags[0].includes('Popular') ? 'bg-purple-100 text-purple-800' :
              project.tags[0].includes('Featured') ? 'bg-yellow-100 text-yellow-800' :
              project.tags[0].includes('Trending') ? 'bg-red-100 text-red-800' :
              'bg-blue-100 text-blue-800'
            }`}
          >
            {project.tags[0]}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.summary}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {!showDetails ? (
          <button
            onClick={() => setShowDetails(true)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          >
            Get Project
          </button>
        ) : (
          <div className="space-y-3 animate-fadeIn">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
            >
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </a>
            
            <a
              href="https://www.snehitvaddi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
            >
              Know More About Developer
            </a>
            
            <a
              href="https://www.linkedin.com/in/snehitvaddi/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0077b5] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#006396] transition-colors duration-200 flex items-center justify-center"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Message on LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;