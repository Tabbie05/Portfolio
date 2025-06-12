"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { useTheme } from "@/app/Context/ThemeContext";

export default function Navbar() {
  const { isDark, setIsDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sync dark mode class on <html> for Tailwind dark: styles
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navBgClass = isDark ? "bg-black/70 text-white" : "bg-white text-black shadow-md";
  const linkHoverClass = isDark ? "hover:text-blue-400" : "hover:text-blue-600";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-4 transition-colors duration-500 ${navBgClass}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <h2 className={`text-2xl font-bold ${isDark ? "text-blue-600" : "text-blue-700"}`}>
          TS.
        </h2>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          <NavLinks linkHoverClass={linkHoverClass} />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <ResumeButton isDark={isDark} />
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle Menu">
            {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out sm:hidden z-50 shadow-lg ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <div className="p-6 flex flex-col gap-6">
          <NavLinks linkHoverClass={linkHoverClass} onLinkClick={() => setSidebarOpen(false)} />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <ResumeButton isDark={isDark} />
        </div>
      </div>
    </nav>
  );
}

// Reusable Components
function NavLinks({ linkHoverClass, onLinkClick = () => {} }) {
  return (
    <>
      <Link href="/" className={linkHoverClass} onClick={onLinkClick}>HOME</Link>
      <Link href="/AboutMe" className={linkHoverClass} onClick={onLinkClick}>ABOUT</Link>
      <Link href="/Projects" className={linkHoverClass} onClick={onLinkClick}>PROJECTS</Link>
      <Link href="/Skills" className={linkHoverClass} onClick={onLinkClick}>SKILLS</Link>
      <Link href="/Contact" className={linkHoverClass} onClick={onLinkClick}>CONTACT</Link>
    </>
  );
}

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`transition-colors duration-300 ${isDark ? "text-white" : "text-black"} hover:text-blue-500`}
      aria-label="Toggle Theme"
      title="Toggle Light/Dark Mode"
    >
      {isDark ? <FaRegMoon size={20} /> : <GoSun size={22} />}
    </button>
  );
}

function ResumeButton({ isDark }) {
  return (
    <a
      href="/tayba_resume.pdf"            
      download="tayba_resume.pdf"
      className={`px-4 py-2 rounded transition-colors duration-300 ${
        isDark
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Resume"
    >
      RESUME
    </a>
  );
}
