// SkillCard.jsx

export default function SkillCard({ title, items }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
