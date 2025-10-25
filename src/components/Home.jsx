// Home.jsx
import { siteMeta } from "./data";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {siteMeta.name}
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400 font-light">
            {siteMeta.role}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 text-gray-300">
          {siteMeta.languages.map((lang) => (
            <span key={lang} className="px-4 py-2 bg-white/5 rounded-full text-sm">
              {lang}
            </span>
          ))}
        </div>
         <p className="text-2xl md:text-3xl text-blue-400 font-bold">
            {siteMeta.desc}
          </p>

        <div className="flex items-center justify-center gap-2 text-gray-400">
          <MapPin size={16} />
          <span>{siteMeta.workplace}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:-translate-y-0.5 transition-transform shadow-lg shadow-blue-500/30"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:-translate-y-0.5 hover:bg-white/20 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
