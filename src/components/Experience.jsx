// Experience.jsx
import { experiences } from "./data";
import ExperienceItem from "./ExperienceItem"
export default function Experience() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>
    </div>
  );
}