"use client";

import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "@/app/Context/ThemeContext";

export default function Navbar() {
  const { isDark, setIsDark } = useTheme();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Navbar bg & text colors based on theme
  const navBgClass = isDark ? "bg-black/70 text-white" : "bg-white text-black shadow-md";
  const linkHoverClass = isDark ? "hover:text-blue-400" : "hover:text-blue-600";

  // Icon color opposite to nav text for visibility
  const iconColorClass = isDark ? "text-white" : "text-black";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-colors duration-500 ${navBgClass}`}
    >
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center px-4">
        <h2 className={`text-2xl font-bold ${isDark ? "text-blue-600" : "text-blue-700"}`}>
          TS.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/" className={`${linkHoverClass}`}>
            HOME
          </Link>
          <Link href="/AboutMe" className={`${linkHoverClass}`}>
            ABOUT
          </Link>
          <Link href="/Projects" className={`${linkHoverClass}`}>
            PROJECTS
          </Link>
          <Link href="/Skills" className={`${linkHoverClass}`}>
            SKILLS
          </Link>
          <Link href="/Contact" className={`${linkHoverClass}`}>
            CONTACT
          </Link>

          <button
            onClick={toggleTheme}
            className={`${iconColorClass} hover:text-blue-500 transition-colors duration-300`}
            aria-label="Toggle Theme"
            title="Toggle Light/Dark Mode"
          >
            <FaRegMoon size={20} />
          </button>

          <button
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              isDark
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            RESUME
          </button>
        </div>
      </div>
    </nav>
  );
}
