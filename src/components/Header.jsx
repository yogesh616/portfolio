// Header.jsx
// Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Code,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { siteMeta } from "./data"; // adjust path if needed
import NavButton from "./NavButton"
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/skills', label: 'Skills', icon: Code },
    { to: '/experience', label: 'Experience', icon: Briefcase },
    { to: '/education', label: 'Education', icon: GraduationCap },
    { to: '/projects', label: 'Projects', icon: FolderGit2 },
    { to: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">{siteMeta.name}</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavButton key={item.to} {...item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2 border-t border-white/10">
            {navItems.map((item) => (
              <div key={item.to} onClick={() => setMobileMenuOpen(false)}>
                <NavButton {...item} />
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
