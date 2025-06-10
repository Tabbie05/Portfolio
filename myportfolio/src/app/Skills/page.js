"use client";

import { FaCode } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineCode } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { useTheme } from "@/app/Context/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();

  // Define colors based on theme (same pattern as AboutMe)
  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-700";
  const bgSection = isDark ? "bg-black" : "bg-white";
  const borderCard = isDark ? "border-gray-600" : "border-gray-300";
  const bgCard = isDark ? "bg-gray-800" : "bg-gray-200";
  const skillBadgeBg = isDark ? "bg-blue-900" : "bg-blue-800";
  const skillBadgeText = "text-white"; // keep white for badges for contrast
  const iconColor = isDark ? "text-blue-400" : "text-blue-600";

  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
      icon: <AiOutlineCode className={`${iconColor} text-3xl mb-2`} />,
    },
    {
      category: "Frontend Development",
      skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
      icon: <RiPagesLine className={`${iconColor} text-3xl mb-2`} />,
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Django", "REST APIs"],
      icon: <FaCode className={`${iconColor} text-3xl mb-2`} />,
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      icon: <FaDatabase className={`${iconColor} text-3xl mb-2`} />,
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Agile/Scrum"],
      icon: <IoGitBranch className={`${iconColor} text-3xl mb-2`} />,
    },
    {
      category: "Design",
      skills: ["Figma", "Adobe AI", "UI/UX Design", "Wireframing", "Prototyping"],
      icon: <IoIosColorPalette className={`${iconColor} text-3xl mb-2`} />,
    },
  ];

  return (
    <section
      className={`w-full px-6 py-10 ml-3 transition-colors duration-300 ${bgSection}`}
    >
      {/* Heading */}
      <h2 className={`text-4xl sm:text-5xl font-bold mb-2 ${textPrimary}`}>
        Skills
      </h2>
      <div className="border-b-4 border-blue-600 w-20 mb-4"></div>
      <p className={`text-lg max-w-2xl mb-8 ${textSecondary}`}>
        I've worked with a range of technologies in the web development world, from frontend to backend and everything in between.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`border ${borderCard} rounded-xl shadow-2xl h-48 p-5 transition-transform duration-300 transform hover:-translate-y-4 hover:shadow-blue-500/50 ${bgCard}`}
          >
            <div className="flex items-center mb-4">
              <div className="hover:rotate-[4deg] text-sm">{skill.icon}</div>
              <h3 className={`text-2xl font-semibold ml-2 ${textPrimary}`}>
                {skill.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.skills.map((s, idx) => (
                <span
                  key={idx}
                  className={`${skillBadgeBg} ${skillBadgeText} px-3 py-1 text-sm rounded-full`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
