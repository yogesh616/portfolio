// Skills.jsx
import SkillCard from "./SkillCard"
import { skills } from "./data"
export default function Skills() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
}
