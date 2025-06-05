import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className="h-screen w-full text-start px-4 sm:px-8">
      <h2 className="text-5xl mt-5">About Me</h2>
      <div className="border-b-2 border-blue-600 w-20 mt-2"></div>

      <div className="flex flex-col lg:flex-row gap-10 mt-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <HiOutlineNewspaper color="blue" size={25} />
            <h2 className="text-xl">Bio</h2>
          </div>

          <div className="h-29 w-full max-w-xl text-gray-400">
            BSc Computer Science student with a strong passion for web development and AI. Skilled in the MERN stack and always exploring innovative ways to solve real-world problems through code. Focused on building impactful, user-friendly applications and growing into a top-tier software developer.
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="border border-gray-600 h-65 w-70 rounded-lg shadow-md shadow-gray-600 p-4">
              <div className="flex gap-3">
                <FaGraduationCap size={27} color="blue" />
                <div className="font-semibold text-xl">Education</div>
              </div>
              <div className="mt-4">
                <div>BSc in Computer Science</div>
                <div className="text-gray-400 mt-2">Ves College of Arts, Science & Commerce</div>
                <div className="text-gray-400">2025 - present</div>
              </div>
            </div>

            <div className="border-2 h-65 w-110 rounded-lg shadow-md shadow-gray-600 border-gray-600 p-4">
              <div className="flex gap-3">
                <FaUserTie size={27} color="blue" />
                <div className="font-semibold text-xl">Experience</div>
              </div>
              <div className="mt-4">
                <div className="flex gap-4">
                  Web Project Intern
                  <div className="text-gray-400 text-sm mt-1">2025 - present</div>
                </div>
                <div className="text-gray-400 mt-2">
                  Spearheaded website performance audits and implemented key improvements to boost page speed by over 40%. Acted as the SPOC between Walnut and the web agency, contributing strategic insights on UI/UX, responsiveness, and SEO-driven enhancements for better user engagement.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-bold flex flex-col ml-9 items-center lg:items-start">
          <div className="relative rounded-full h-50 w-50 bg-black -mt-9">
            <div className="absolute bottom-2 right-1 rounded-lg bg-blue-600 text-white w-20 text-center text-sm">
              8.5 CGPA
            </div>
          </div>

          <div className="mt-6 text-center lg:text-left">
            <div className="text-4xl">Tayba Shaikh</div>
            <div className="text-[20px] text-gray-600">Software Engineer Student</div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
            <div className="rounded-lg bg-blue-900 text-white text-sm px-2 py-1">React</div>
            <div className="rounded-lg bg-blue-900 text-white text-sm px-2 py-1">NextJS</div>
            <div className="rounded-lg bg-blue-900 text-white text-sm px-2 py-1">UI/UX</div>
            <div className="rounded-lg bg-blue-900 text-white text-sm px-2 py-1">Node</div>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 rounded-lg w-50 mt-5 px-4 py-2 text-black hover:bg-blue-700 transition">
            <FaDownload size={15} color="black" />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
