"use client";

import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "@/app/Context/ThemeContext";
import { SiGeeksforgeeks } from "react-icons/si";
import Link from "next/link";

const Main = () => {
  const { isDark } = useTheme();

  // Colors based on theme
  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-700";
  const bgCodeBox = isDark ? "bg-gray-900 border-gray-700" : "bg-gray-100 border-gray-300";
  const codeText = isDark ? "text-gray-300" : "text-gray-800";

  const btnPrimary =
    "px-6 py-2 rounded-full transition-colors duration-300 " +
    (isDark
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-blue-600 text-white hover:bg-blue-700"); // You can adjust colors if needed

  const btnSecondary =
    "px-6 py-2 rounded-full border-2 transition-colors duration-300 " +
    (isDark
      ? "border-white text-white hover:bg-white hover:text-gray-900"
      : "border-black text-black hover:bg-black hover:text-white");

  const iconHoverColor = isDark ? "hover:text-blue-600" : "hover:text-blue-600";

  return (
    <div
      className={`min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 gap-0 max-w-7xl mx-auto pt-8 ${textPrimary}`}
    >
      {/* Left content */}
      <div className="max-w-xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          <span className="text-blue-600 text-xl block mb-4">Hello! I'm</span>
          TAYBA{" "}
          <span className="text-blue-600 underline decoration-blue-800">
            SHAIKH
          </span>
        </h2>
        <h3 className={`${textSecondary} text-xl mt-2`}>
          Full Stack Developer and Graphic Designer
        </h3>
        <p className={`${textSecondary} text-lg font-semibold mt-2 max-w-lg`}>
          Building elegant solutions to complex problems with modern technologies.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link href='/Contact'> <button className={btnPrimary}>CONTACT ME</button></Link>
          <Link href="/Projects"><button className={btnSecondary}>VIEW PROJECTS</button></Link>
        </div>

        <div className="flex space-x-6 mt-8 ml-1">
          <a
            href="https://github.com/Tabbie05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              size={30}
              className={`${iconHoverColor} transition-colors hover:rotate-[4deg]`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tayba-shaikh-340448319"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn
              size={30}
              className={`${iconHoverColor} transition-colors hover:rotate-[4deg]`}
            />
          </a>
          <a href="mailto:shaikhtayba3@gmail.com" aria-label="Email">
            <CiMail
              size={30}
              className={`${iconHoverColor} transition-colors hover:rotate-[4deg]`}
            />
          </a>
          <a href="https://leetcode.com/u/shaikh_tayba/" aria-label="Email">
            <SiLeetcode
              size={30}
              className={`${iconHoverColor} transition-colors hover:rotate-[4deg]`}
            />
          </a>
           <a href="https://www.geeksforgeeks.org/user/tayba_s/" aria-label="Email">
            <SiGeeksforgeeks
              size={40}
              className={`${iconHoverColor} transition-colors hover:rotate-[4deg]`}
            />
          </a>

        </div>
      </div>

      {/* Right code box */}
      <div
        className={`rounded-3xl shadow-lg w-full max-w-md border mt-10 lg:mt-0 ${bgCodeBox}`}
      >
        {/* Top bar */}
        <div
          className={`flex justify-between items-center px-5 py-4 border-b ${isDark ? "border-gray-700" : "border-gray-300"}`}
        >
          <div className="flex space-x-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]"></span>
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]"></span>
            <span className="h-3 w-3 rounded-full bg-[#27C93F]"></span>
          </div>
          <div className={`${textSecondary} text-sm font-mono`}>
            Developer.js
          </div>
        </div>

        {/* Code content */}
        <pre
          className={`px-5 py-6 font-mono text-base leading-relaxed overflow-x-auto whitespace-pre-wrap ${codeText}`}
        >
          <code>
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-400">developer =</span>{" "}
            <span className="text-orange-400">&#123;</span>
            <br />
            &nbsp;&nbsp;
            <span className="text-purple-400">name</span>:{" "}
            <span className="text-green-400">'Tayba Shaikh'</span>,
            <br />
            &nbsp;&nbsp;
            <span className="text-purple-400">skills</span>:{" "}
            <span className="text-orange-400">[</span>
            <span className="text-green-400">'React'</span>,{" "}
            <span className="text-green-400">'Node.js'</span>,{" "}
            <span className="text-green-400">'Python'</span>
            <span className="text-orange-400">]</span>,
            <br />
            &nbsp;&nbsp;
            <span className="text-purple-400">focuses</span>:{" "}
            <span className="text-orange-400">[</span>
            <span className="text-green-400">'Full-Stack'</span>,{" "}
            <span className="text-green-400">'UI/UX'</span>
            <span className="text-orange-400">]</span>,
            <br />
            &nbsp;&nbsp;
            <span className="text-purple-400">learning</span>:{" "}
            <span className="text-green-400">'Always'</span>
            <br />
            <span className="text-orange-400">&#125;</span>;
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Main;
