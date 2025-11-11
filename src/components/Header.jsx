import React from "react";
import { Home, Compass, MessageCircle, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

/* 🔸 Small Subcomponent for Nav Items */
function NavItem({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition 
        ${
          active
            ? "text-orange-400 border border-orange-500 bg-[#0f0f18]"
            : "text-gray-300 hover:text-orange-400 hover:bg-[#18181f]"
        }`}
    >
      {icon}
      {label}
    </Link>
  );
}

/* 🔹 Header Component */
export default function Header() {
  const route = useLocation(); // Avoid ESLint “location” issue
  const currentPath = route.pathname;

  return (
    <header className="flex items-center justify-between px-10 py-4 bg-[#0b0b12] fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-orange-500 tracking-wide">
        TeerathYatra
      </h1>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <NavItem
          to="/"
          icon={<Home size={18} />}
          label="Home"
          active={currentPath === "/"}
        />
        <NavItem
         to="/Dashboard"
         icon={<span size={18} />}
         label="Dashboard"
         active={currentPath === "/Dashboard"}
         />
        <NavItem
          to="/explore"
          icon={<Compass size={18} />}
          label="Explore"
          active={currentPath === "/explore"}
        />
        <NavItem
          to="/community"
          icon={<MessageCircle size={18} />}
          label="Community"
          active={currentPath === "/community"}
        />
        <NavItem
          to="/mentors"
          icon={<Users size={18} />}
          label="Mentors"
          active={currentPath === "/mentors"}
        />
      </nav>
    </header>
  );
}
