import React, { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: "RAG-Anything",
      summary: "A project implementing Retrieval-Augmented Generation (RAG) to enhance the generation capabilities of language models by incorporating external knowledge sources.",
      techStack: ["Python", "PyTorch", "Transformers", "RAG"],
      githubUrl: "https://github.com/snehitvaddi/RAG-Anything",
      thumbnail: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=500",
      tags: ["⚡ New"],
    },
    {
      id: 2,
      title: "Skin Disease Detection",
      summary: "A project utilizing Convolutional Neural Networks (CNNs) to detect five types of skin diseases through image analysis.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      githubUrl: "https://github.com/snehitvaddi/Skin-Disease-Detection-through-Image-Analysis",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500",
      tags: ["⭐ Most Popular"],
    },
    {
      id: 3,
      title: "Self-Driving Car Deep Learning",
      summary: "A project inspired by NVIDIA's End to End Learning for Self-Driving Cars, focusing on predicting steering angles.",
      techStack: ["Python", "Keras", "NumPy", "Pandas"],
      githubUrl: "https://github.com/snehitvaddi/SelfDriving-Car_Deep-Learning",
      thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=500",
      tags: ["🏆 Featured"],
    },
    {
      id: 4,
      title: "Brain Tumor Classification",
      summary: "A project comparing and analyzing various deep learning models to classify different brain tumor types, achieving 90% accuracy.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      githubUrl: "https://github.com/snehitvaddi/BrainTumorClassification",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=500",
      tags: ["⭐ Most Popular"],
    },
    {
      id: 5,
      title: "YOLOv3 Fire Detection",
      summary: "A custom object detection project using YOLOv3 on the cloud to detect fire in given frames.",
      techStack: ["Python", "YOLOv3", "OpenCV", "TensorFlow"],
      githubUrl: "https://github.com/snehitvaddi/YOLOv3-Cloud-Based-Fire-Detection",
      thumbnail: "https://images.unsplash.com/photo-1599171571332-f99900638702?auto=format&fit=crop&q=80&w=500",
      tags: ["🔥 Trending"],
    },
    {
      id: 6,
      title: "License Plate Detection",
      summary: "An AI-powered desktop application designed to detect vehicle number plates and extract text using OCR.",
      techStack: ["Python", "OpenCV", "Tesseract OCR", "PyQt"],
      githubUrl: "https://github.com/snehitvaddi/License_plate_Detection_and_Text_Extraction",
      thumbnail: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=500",
      tags: ["🏆 Featured"],
    },
    {
      id: 7,
      title: "Intruder Detection System",
      summary: "A system that uses OpenCV and face_recognition to detect unknown faces and send automatic email alerts.",
      techStack: ["Python", "OpenCV", "face_recognition", "smtplib"],
      githubUrl: "https://github.com/snehitvaddi/Intruder-Detection-and-Automatic-Email-Alerting-system",
      thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=500",
      tags: ["⚡ New"],
    },
    {
      id: 8,
      title: "Face Mask Detection",
      summary: "A Python tool that detects whether a person is wearing a mask in real-time using deep learning techniques.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      githubUrl: "https://github.com/snehitvaddi/FaceMask-Detection-using-Deeplearning",
      thumbnail: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=500",
      tags: ["🏆 Featured"],
    },
    {
      id: 9,
      title: "Corona Pneumonia Prediction",
      summary: "A project predicting COVID-19, pneumonia, and healthy cases from X-ray scans using deep learning models.",
      techStack: ["Python", "Keras", "TensorFlow", "OpenCV"],
      githubUrl: "https://github.com/snehitvaddi/NovelCorona-Pneumonia-Prediction_V2",
      thumbnail: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=500",
      tags: ["⭐ Most Popular"],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {currentSection === 'home' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Learn Machine Learning Through Ready-to-Use Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Code, Documentation, and Expert Guidance – All in One Place
            </p>
            <button
              onClick={() => setCurrentSection('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Explore All Projects
            </button>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">🏆 Featured Projects</h2>
                <button onClick={() => setCurrentSection('projects')} className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.tags[0].includes('Featured')).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">⚡ Latest Additions</h2>
                <button onClick={() => setCurrentSection('projects')} className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.tags[0].includes('New')).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">⭐ Most Popular</h2>
                <button onClick={() => setCurrentSection('projects')} className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.tags[0].includes('Popular')).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">🔥 Trending Now</h2>
                <button onClick={() => setCurrentSection('projects')} className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.tags[0].includes('Trending')).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentSection === 'projects' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {currentSection === 'about' && <AboutSection />}
    </div>
  );
}

export default App;