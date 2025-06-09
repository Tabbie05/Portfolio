import Link from "next/link";
import { FaGithub } from "react-icons/fa";
// components/ProjectCard.jsx
const ProjectCard = ({ project }) => {
    const { name, description, techUsed, link } = project;

    return (
        <article className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] border rounded-2xl shadow-md overflow-hidden max-w-sm bg-black hover:-translate-y-4 hover:shadow-blue-500/50">
            <div className="h-40 bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                {/* Placeholder for image or project name */}
                {name}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {techUsed.map((tech) => (
                        <span
                            key={tech}
                            className="text-blue-400 px-2 py-1 rounded text-sm bg-blue-900">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <Link href={link}>
                <button className="bg-blue-900 h-10 w-28 rounded-lg mt-2 ml-5 mb-4 shadow-lg flex items-center justify-center gap-2">
                    <FaGithub className="text-white" />
                    <span className="text-white">Github</span>
                </button>
            </Link>

        </article>
    );
};

export default ProjectCard;
