import React, { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';

function RollingText() {
  return (
    <div className="relative h-14 overflow-hidden my-4">
      <div className="absolute animate-roll">
        <span className="block h-14 text-blue-600 leading-[3.5rem]">Machine Learning</span>
        <span className="block h-14 text-blue-600 leading-[3.5rem]">Data Science</span>
        <span className="block h-14 text-blue-600 leading-[3.5rem]">GenAI & LLMs</span>
        <span className="block h-14 text-blue-600 leading-[3.5rem]">NLP</span>
        <span className="block h-14 text-blue-600 leading-[3.5rem]">Machine Learning</span>
      </div>
    </div>
  );
}

function PromoTag() {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full origin-center"
            style={{
              transform: `rotate(${i * 30}deg)`,
            }}
          >
            <div className="absolute top-0 left-1/2 w-2 h-6 bg-red-500 transform -translate-x-1/2 origin-bottom scale-y-0 animate-spike"></div>
          </div>
        ))}

        <div className="absolute inset-2 bg-gray-800 rounded-full shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-white mb-1">45% OFF</div>
          <div className="text-lg font-medium text-white">For Students</div>
        </div>

        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
            Limited Time!
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: "RAG-Anything",
      summary: "A project implementing Retrieval-Augmented Generation (RAG) to enhance the generation capabilities of language models by incorporating external knowledge sources.",
      techStack: ["Python", "PyTorch", "Transformers", "RAG"],
      githubUrl: "https://github.com/snehitvaddi/RAG-Anything",
      thumbnail: "https://www.luxoft.com/files/blog-posts/2023/10/document-retrieval-augmented-generation-using-generative-ai-a-comprehensive-overview/chart-1.png",
      tags: ["🏆 Featured"],
    },
    {
      id: 2,
      title: "Skin Disease Detection",
      summary: "A project utilizing Convolutional Neural Networks (CNNs) to detect five types of skin diseases through image analysis.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      githubUrl: "https://github.com/snehitvaddi/Skin-Disease-Detection-through-Image-Analysis",
      thumbnail: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-021-84593-z/MediaObjects/41598_2021_84593_Fig1_HTML.png",
      tags: ["🏆 Featured"],
    },
    {
      id: 3,
      title: "Self-Driving Car Deep Learning",
      summary: "A project inspired by NVIDIA's End to End Learning for Self-Driving Cars, focusing on predicting steering angles.",
      techStack: ["Python", "Keras", "NumPy", "Pandas"],
      githubUrl: "https://github.com/snehitvaddi/SelfDriving-Car_Deep-Learning",
      thumbnail: "https://media.istockphoto.com/id/1439437213/photo/self-driving-car-on-a-road.jpg?s=612x612&w=0&k=20&c=ar_TxoR7DPLy1fryEZmNzAE_JUezwQL3LtfhKymon_E=",
      tags: ["⭐ Most Popular"],
    },
    {
      id: 4,
      title: "Brain Tumor Classification",
      summary: "A project comparing and analyzing various deep learning models to classify different brain tumor types, achieving 90% accuracy.",
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      githubUrl: "https://github.com/snehitvaddi/BrainTumorClassification",
      thumbnail: "https://developer-blogs.nvidia.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-26-at-8.36.35-PM.png",
      tags: ["⭐ Most Popular"],
    },
    {
      id: 5,
      title: "YOLOv3 Fire Detection",
      summary: "A custom object detection project using YOLOv3 on the cloud to detect fire in given frames.",
      techStack: ["Python", "YOLOv3", "OpenCV", "TensorFlow"],
      githubUrl: "https://github.com/snehitvaddi/YOLOv3-Cloud-Based-Fire-Detection",
      thumbnail: "https://journals.sagepub.com/cms/10.1177/01436244221089445/asset/images/large/10.1177_01436244221089445-fig3.jpeg",
      tags: ["🔥 Trending"],
    },
    {
      id: 6,
      title: "License Plate Detection",
      summary: "An AI-powered desktop application designed to detect vehicle number plates and extract text using OCR.",
      techStack: ["Python", "OpenCV", "Tesseract OCR", "PyQt"],
      githubUrl: "https://github.com/snehitvaddi/License_plate_Detection_and_Text_Extraction",
      thumbnail: "https://blog.camcloud.com/wp-content/uploads/2023/09/lpr-banner2.png",
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
      thumbnail: "https://asite.aim.edu/wp-content/uploads/2021/10/9.-WearMaskNet-Real-Time-Face-Mask-Detection.png",
      tags: ["🔥 Trending"],
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-16 space-y-8 lg:space-y-0">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Master
                <RollingText />
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get production-ready ML projects with source code, documentation, and expert guidance. 
                Perfect for portfolios, learning, and final year projects.
              </p>
              <div className="flex items-center">
                <button
                  onClick={() => setCurrentSection('projects')}
                  className="group inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore & Buy
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <PromoTag />
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
                <h2 className="text-2xl font-bold text-gray-900">🔥 Trending Now</h2>
                <button onClick={() => setCurrentSection('projects')} className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.tags[0].includes('Trending')).map((project) => (
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