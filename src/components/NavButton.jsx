// NavButton.jsx
import { NavLink } from "react-router-dom";
import { Icon } from "lucide-react";
export default function NavButton({ to, label, icon: Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
          isActive
            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`
      }
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </NavLink>
  );
}
