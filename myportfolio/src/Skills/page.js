import { FaCode } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineCode } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { IoGitBranch } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
      icon: <AiOutlineCode className="text-blue-600 text-3xl mb-2" />,
    },
    {
      category: "Frontend Development",
      skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
      icon: <RiPagesLine className="text-blue-600 text-3xl mb-2" />,
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
      icon: <FaCode className="text-blue-600 text-3xl mb-2" />,
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Django", "PostgreSQL"],
      icon: <FaDatabase className="text-blue-600 text-3xl mb-2" />,
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Agile/Scrum"],
      icon: <IoGitBranch className="text-blue-600 text-3xl mb-2" />,
    },
    {
      category: "Design",
      skills: ["Figma", "Adobe AI", "UI/UX Design", "Wireframing", "Prototyping"],
      icon: <IoIosColorPalette className="text-blue-600 text-3xl mb-2" />,
    },
  ];

  return (
    <section className="w-full px-6 py-10 ml-3">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-2">Skills</h2>
      <div className="border-b-4 border-blue-600 w-20 mb-4"></div>
      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        I've worked with a range of technologies in the web development world, from frontend to backend and everything in between.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-2xl h-48 p-5 transition-transform duration-300 transform hover:-translate-y-4 hover:shadow-blue-500/50"
          >
            <div className="flex items-center mb-4 ">
              <div className=" hover:rotate-[4deg] text-sm">{skill.icon}</div>
              <h3 className="text-2xl font-semibold ml-2">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.skills.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-800 text-white text-sm rounded-full"
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
