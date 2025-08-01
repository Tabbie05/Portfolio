"use client";

import ProjectCard from "@/app/Projects/ProjectCard/page";
import { useTheme } from "@/app/Context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();

  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-700";

  const projects = [
    {
      name: "Memories",
      description:
        "A full-stack application enabling users to share and manage their memories through posts, featuring authentication and CRUD operations.",
      techUsed: ["MERN", "Zustand", "JWT Auth", "Material-UI"],
      link: "https://github.com/Tabbie05/Memories",
    },
    {
      name: "Blog",
      description:
        "A minimalist blogging platform built with React and Tailwind CSS, offering a clean and responsive user interface.",
      techUsed: ["React", "Tailwind CSS", "Vite", "ESLint"],
      link: "https://github.com/Tabbie05/blog",
    },
    {
      name: "React E-Commerce Store",
      description:
        "A modern e-commerce site with product listing, cart functionality, user authentication, and responsive design.",
      techUsed: ["React", "API", "Tailwind CSS", "React Router"],
      link: "https://github.com/Tabbie05/React-store",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-10 max-w-7xl mx-auto text-start">
      <h2 className={`text-5xl font-bold mb-2 ${textPrimary}`}>Projects</h2>
      <div className="border-b-4 border-blue-600 w-20 mb-6"></div>
      <p className={`max-w-xl mb-10 ${textSecondary}`}>
        Here are some of the projects I&apos;ve worked on, showcasing my skills in
        various technologies and problem domains.
      </p>

      <div className="flex flex-wrap gap-6 justify-start">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
