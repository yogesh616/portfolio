
// Projects.jsx
import ProjectCard from "./ProjectCard"
import { projects } from "./data";
export default function Projects() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
