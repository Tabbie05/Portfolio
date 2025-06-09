import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Main = () => {
    return (
        <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-center text-white px-8 lg:px-20 gap-0 max-w-7xl mx-auto">
            {/* Left content */}
            <div className="max-w-xl w-full">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                    <span className="text-blue-600 text-xl block mb-4">Hello! I'm</span>
                    TAYBA <span className="text-blue-600 underline decoration-blue-800">SHAIKH</span>
                </h2>
                <h3 className="text-gray-400 text-xl mt-2">
                    Full Stack Developer and Graphic Designer
                </h3>
                <p className="text-lg text-gray-400 font-semibold mt-2 max-w-lg">
                    Building elegant solutions to complex problems with modern technologies.
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                        CONTACT ME
                    </button>
                    <button className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition">
                        VIEW PROJECTS
                    </button>
                </div>

                <div className="flex space-x-6 mt-8 ml-1">
                    <a
                        href="https://github.com/Tabbie05"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub size={30} className="hover:text-blue-600 transition-colors hover:rotate-[4deg]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={30} className="hover:text-blue-600 transition-colors hover:rotate-[4deg]" />
                    </a>
                    <a href="mailto:shaikhtayba3@gmail.com" aria-label="Email">
                        <CiMail size={30} className="hover:text-blue-600 transition-colors hover:rotate-[4deg]" />
                    </a>
                </div>
            </div>

            {/* Right code box */}
            <div className="bg-gray-900 rounded-3xl shadow-lg w-full max-w-md border border-gray-700 mt-10 lg:mt-0">
                {/* Top bar */}
                <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
                    <div className="flex space-x-2">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F56]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]"></span>
                        <span className="h-3 w-3 rounded-full bg-[#27C93F]"></span>
                    </div>
                    <div className="text-gray-400 text-sm font-mono">Developer.js</div>
                </div>

                {/* Code content */}
                <pre className="px-5 py-6 font-mono text-base leading-relaxed text-gray-300 overflow-x-auto whitespace-pre-wrap">
                    <code>
                        <span className="text-pink-400">const</span>{" "}
                        <span className="text-blue-400">developer</span>{" "}
                        <span className="text-orange-400">&#123;</span>
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-purple-400">name</span>
                        : <span className="text-green-400">'Tayba Shaikh'</span>,
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-purple-400">skills</span>
                        : <span className="text-orange-400">[</span>
                        <span className="text-green-400">'React'</span>,{" "}
                        <span className="text-green-400">'Node.js'</span>,{" "}
                        <span className="text-green-400">'Python'</span>
                        <span className="text-orange-400">]</span>,
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-purple-400">focuses</span>
                        : <span className="text-orange-400">[</span>
                        <span className="text-green-400">'Full-Stack'</span>,{" "}
                        <span className="text-green-400">'UI/UX'</span>
                        <span className="text-orange-400">]</span>,
                        <br />
                        &nbsp;&nbsp;
                        <span className="text-purple-400">learning</span>
                        : <span className="text-green-400">'Always'</span>
                        <br />
                        <span className="text-orange-400">&#125;</span>;
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default Main;
