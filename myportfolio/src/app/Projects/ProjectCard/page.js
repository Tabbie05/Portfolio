"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, isDark }) => {
  const { name, description, techUsed, link } = project;

  // Dark/light theme classes
  const bgCard = isDark ? "bg-gray-800" : "bg-gray-200";
  const borderCard = isDark ? "border-gray-600" : "border-gray-300";
  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-700";
  const techBg = isDark ? "bg-blue-900" : "bg-blue-300";
  const techText = isDark ? "text-white" : "text-black";
  const btnBg = isDark ? "bg-blue-900 hover:bg-blue-700" : "bg-blue-700 hover:bg-blue-800";

  return (
    <article
      className={`w-[420px] border rounded-2xl shadow-md overflow-hidden max-w-sm
        ${bgCard} ${borderCard} hover:-translate-y-3 hover:shadow-blue-500/50 transition-transform duration-300`}
    >
      <div className="h-40 bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
        {name}
      </div>
      <div className="p-4">
        <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>{name}</h3>
        <p className={`${textSecondary} mb-4`}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {techUsed.map((tech) => (
            <span
              key={tech}
              className={`${techText} px-2 py-1 rounded text-sm ${techBg}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <button
          className={`h-10 w-28 rounded-lg mt-2 ml-5 mb-4 shadow-lg flex items-center justify-center gap-2
            text-white ${btnBg} transition-colors duration-300`}
        >
          <FaGithub />
          <span>Github</span>
        </button>
      </Link>
    </article>
  );
};

export default ProjectCard;
