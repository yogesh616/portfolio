// ExperienceItem.jsx

import { ExternalLink } from "lucide-react";
export default function ExperienceItem({ role, company, duration, work, projectUrl, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h3 className="text-2xl font-semibold text-white">{role}</h3>
          <p className="text-blue-400">{company}</p>
        </div>
        <span className="text-gray-400 text-sm">{duration}</span>
      </div>
      
      <p className="text-gray-300">{description}</p>
      
      <ul className="space-y-2">
        {work.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-300">
            <span className="text-blue-400 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>View Project</span>
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}
