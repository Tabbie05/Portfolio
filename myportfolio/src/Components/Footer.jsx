"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useTheme } from "@/app/Context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  // Dynamic colors based on theme
  const bgColor = isDark ? "bg-gray-800" : "bg-gray-200";
  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-300" : "text-gray-700";
  const iconColor = isDark ? "text-white" : "text-black";
  const iconHoverColor = "hover:text-blue-600";

  return (
    <footer className={`${bgColor} py-10 px-6 sm:px-12 transition-colors duration-300`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Branding and Text */}
        <div className={`text-center md:text-left`}>
          <h1 className={`text-2xl text-blue-600 font-bold`}>TS.</h1>
          <p className={`${textSecondary} mt-2 max-w-sm text-sm`}>
            Building elegant digital solutions with a focus on user experience and technical excellence.
          </p>
        </div>

        {/* Right Side: Social Icons and Copyright */}
        <div className={`text-center md:text-right`}>
          <div className="flex justify-center md:justify-end gap-4 ">
            <a
              href="https://github.com/Tabbie05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub
                size={26}
                className={`${iconColor} ${iconHoverColor} transition-transform duration-200 hover:rotate-3 cursor-pointer`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tayba-shaikh-340448319"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn
                size={26}
                className={`${iconColor} ${iconHoverColor} transition-transform duration-200 hover:rotate-3 cursor-pointer`}
              />
            </a>
            <a
              href="mailto:shaikhtayba3@gmail.com"
              aria-label="Email"
            >
              <CiMail
                size={26}
                className={`${iconColor} ${iconHoverColor} transition-transform duration-200 hover:rotate-3 cursor-pointer`}
              />
            </a>
          </div>
          <p className={`${textSecondary} text-sm`}>
            © 2025 Tayba Shaikh | Built with React and Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
