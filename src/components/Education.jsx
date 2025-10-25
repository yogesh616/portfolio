// Education.jsx
import { education } from "./data";
export default function Education() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
              <span className="text-blue-400 font-medium">{edu.year}</span>
             
            </div>
            <p className="text-gray-400">{edu.type}</p>
             {edu?.subjects && (
              <div className="flex flex-wrap gap-2 my-2">
                {edu.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}