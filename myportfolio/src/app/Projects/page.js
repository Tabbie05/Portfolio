"use client";

import ProjectCard from "@/app/Projects/ProjectCard/page";
import { useTheme } from "@/app/Context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();

  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-700";

  const projects = [
    {
      name: "SecureNote",
      description:
        "A full-stack MERN note-taking app that lets users create, edit, and delete encrypted notes. User can make the notes Destroyed after certain time. Features Context API for state management, MUI for sleek UI, Formik for forms, Axios for API calls, NodeMailer for notifications, and an Emoji Picker for fun. Real-time sync ensures notes are always up to date.",
      techUsed: ["MERN", "Context API", "MUI", "Formik", "Axios", "NodeMailer"],
      link: "https://github.com/Tabbie05/SecureNote",
      images: [
        "/securenote1.PNG",
        "/securenote2.PNG",
        "/securenote3.JPG"
      ]
    },
    {
      name: "ReadMe Generator",
      description:
        "A developer tool to auto-generate professional README files with a drag-and-drop customizable interface. Built with Tailwind CSS, Markdown, Monaco Editor, Zustand, and Context API. Users can reorder sections, add custom buttons, and see live previews. User can copy raw-code and download ReadME.md file in just one click.",
      techUsed: ["Tailwind CSS", "Markdown", "Monaco Editor", "Zustand", "Context API"],
      link: "https://github.com/Tabbie05/ReadMe_Generator",
      images: [
        "/README1.JPG",
        "/README2.JPG",
        "/README3.JPG"
      ]
    },
    {
      name: "Expense‑Tracker",
      description:
        "A personal finance app that tracks income and expenses with dynamic charts. Uses Redux for state, Tailwind CSS for UI, and Chart.js to display spending in a red pie chart and income in a green pie chart. Helps users visualize budgets and manage finances effectively.",
      techUsed: ["React", "Redux", "Tailwind CSS", "Chart.js"],
      link: "https://github.com/Tabbie05/Expense-Tracker",
      images: [
        "/expense1.JPG",
        "/expense2.JPG",
        "/expense3.JPG"
      ]
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

      <div className="flex flex-wrap gap-8 justify-start">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} isDark={isDark} />
        ))}
      </div>
    </section>
  );
};

export default Projects;