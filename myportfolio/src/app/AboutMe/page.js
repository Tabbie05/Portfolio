"use client";

import Image from "next/image";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaGraduationCap, FaUserTie, FaDownload } from "react-icons/fa6";
import { useTheme } from "@/app/Context/ThemeContext";

const AboutMe = () => {
  const { isDark } = useTheme();

  // Dynamic classes based on theme
  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-700";
  const bgCard = isDark ? "bg-gray-800" : "bg-gray-200";
  const borderCard = isDark ? "border-gray-600" : "border-gray-300";
  const profileTextSecondary = isDark ? "text-gray-600" : "text-gray-400";
  const skillBg = isDark ? "bg-blue-900" : "bg-blue-300";
  const skillText = isDark ? "text-white" : "text-black";

  return (
    <section
      className={`min-h-screen w-full px-4 sm:px-8 pt-16 transition-colors duration-300 ${isDark ? "bg-black" : "bg-white"
        }`}
    >
      <h2 className={`text-4xl sm:text-5xl font-bold ${textPrimary}`}>
        About Me
      </h2>
      <div className="border-b-2 border-blue-600 w-20 mt-2 mb-8"></div>

      <div className="flex flex-col lg:flex-row justify-between gap-20">
        {/* Left Section: Bio + Cards */}
        <div className="w-full lg:w-[60%] flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <HiOutlineNewspaper color="blue" size={25} />
            <h3 className={`${textPrimary} text-xl font-semibold`}>Bio</h3>
          </div>
          <p className={`${textSecondary} text-base leading-relaxed`}>
            BSc Computer Science student with a strong passion for web
            development and AI. Skilled in the MERN stack and always exploring
            innovative ways to solve real-world problems. Focused on building
            impactful, user-friendly applications and growing into a top-tier
            developer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`border ${borderCard} rounded-lg shadow p-5 ${bgCard}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <FaGraduationCap size={24} color="blue" />
                <h4 className={`${textPrimary} text-lg font-semibold`}>
                  Education
                </h4>
              </div>
              <p className={`${textPrimary}`}>BSc in Computer Science</p>
              <p className={`${textSecondary} text-sm`}>
                Ves College, 2025 - present
              </p>
            </div>

            <div
              className={`border ${borderCard} rounded-lg shadow p-5 ${bgCard}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <FaUserTie size={24} color="blue" />
                <h4 className={`${textPrimary} text-lg font-semibold`}>
                  Experience
                </h4>
              </div>
              <p className={`${textPrimary} text-sm font-medium`}>
                Web Project Intern
              </p>
              <span className={`${textSecondary}`}>2025 - present</span>
              <p className={`${textSecondary} text-sm mt-1`}>
                Spearheaded website performance audits and implemented key
                improvements to boost page speed by over 40%. Acted as the SPOC
                between Walnut and the web agency, contributing strategic
                insights on UI/UX, responsiveness, and SEO-driven enhancements.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Profile + Monogram Image */}
        <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start ">
          {/* Container to hold image and badge */}
          <div className="relative w-40 h-40">
            <div className="rounded-full overflow-hidden h-40 w-40">
              <Image
                src="/TS.jpg"
                alt="TS Monogram"
                fill={true}
                className="rounded-full object-cover"
                style={{ objectFit: "cover" }}
                priority
                sizes="160px"

              />
            </div>

            {/* Badge positioned absolutely inside this relative container */}
            <div className="absolute -bottom-1.5 right-1 z-10 rounded-lg bg-blue-600 text-white w-20 text-center text-sm shadow-lg">
              8.5 CGPA
            </div>
          </div>

          <div className={`mt-6 text-center lg:text-left`}>
            <div className={`text-3xl sm:text-4xl ${textPrimary}`}>
              Tayba Shaikh
            </div>
            <div className={`${profileTextSecondary}`}>
              Software Engineer Student
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
            {["React", "NextJS", "UI/UX", "Node"].map((skill) => (
              <div
                key={skill}
                className={`rounded-lg ${skillBg} ${skillText} text-sm px-3 py-1`}
              >
                {skill}
              </div>
            ))}
          </div>

          <a
            href="/tayba_resume.pdf"
            download="tayba_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="flex items-center gap-2 bg-blue-600 rounded-lg mt-5 px-4 py-2 text-black hover:bg-blue-700 transition"
          >
            <FaDownload size={15} />
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
