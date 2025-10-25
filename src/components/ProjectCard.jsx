
// ProjectCard.jsx
import { Github, ExternalLink } from "lucide-react";
export default function ProjectCard({ name, description, stack, codeUrl, liveUrl, image }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col h-full hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-white mb-3">{name}</h3>
      <img src={image} />
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  );
}
