import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Code, Briefcase, GraduationCap, FolderGit2, Mail, Menu, X, ExternalLink, Github, MapPin } from 'lucide-react';
import Header from "./components/Header"
import Skills from "./components/Skills"
import Home from './components/Home';
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      
      <main
        className={`pt-24 pb-16 px-4 max-w-6xl mx-auto transition-all duration-300 ${
          isTransitioning ? 'opacity-50 backdrop-blur-sm' : 'opacity-100'
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}