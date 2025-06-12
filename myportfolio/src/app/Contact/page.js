"use client";

import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "@/app/Context/ThemeContext";
import ContactForm from "@/Components/ContactForm"; // ✅ Make sure this path is correct

const Contact = () => {
  const { isDark } = useTheme();

  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-300" : "text-gray-700";
  const sectionBg = isDark ? "bg-black" : "bg-white";
  const iconBg = isDark ? "bg-gray-600" : "bg-gray-300";
  const iconHoverBg = "hover:bg-blue-400 hover:text-black";

  return (
    <section
      id="contact"
      className={`w-full px-6 py-16 ml-5 transition-colors duration-300 ${sectionBg} ${textPrimary}`}
    >
      <h2 className={`text-4xl sm:text-5xl font-bold mb-2 ${textPrimary}`}>
        Get In Touch
      </h2>
      <div className="border-b-4 border-blue-600 w-20 mb-6"></div>
      <p className={`text-lg max-w-2xl mb-12 ${textSecondary}`}>
        Have a question or want to work together? Fill up the form and I’ll get
        back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Contact Info */}
        <div>
          <h3 className={`text-2xl font-semibold mb-4 ${textPrimary}`}>
            Contact Information
          </h3>
          <ul className={`space-y-3 ${textSecondary}`}>
            <li className="flex gap-2 items-center">
              <MdOutlineMailOutline size={22} color="blue" />
              <div className="flex flex-col">
                <span className={`font-semibold ${textPrimary}`}>Email:</span>
                <span>shaikhtayba3@gmail.com</span>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <IoCallOutline size={22} color="blue" />
              <div className="flex flex-col">
                <span className={`font-semibold ${textPrimary}`}>Contact:</span>
                <span>+91 8591897978</span>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <CiLocationOn size={22} color="blue" />
              <div className="flex flex-col">
                <span className={`font-semibold ${textPrimary}`}>Location:</span>
                <span>Mumbai, India</span>
              </div>
            </li>
          </ul>

          <h4 className={`mt-6 mb-2 font-semibold text-xl ${textPrimary}`}>
            Connect with me
          </h4>
          <div className="flex space-x-4 text-2xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full ${iconBg} flex items-center justify-center h-10 w-10 ${iconHoverBg}`}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={25} className="mt-1.5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full ${iconBg} flex items-center justify-center h-10 w-10 ${iconHoverBg}`}
              aria-label="GitHub"
            >
              <FaGithub size={25} className="mt-1.5" />
            </a>
            <a
              href="mailto:shaikhtayba3@gmail.com"
              className={`rounded-full ${iconBg} flex items-center justify-center h-10 w-10 ${iconHoverBg}`}
              aria-label="Email"
            >
              <MdEmail size={25} className="mt-1.5" />
            </a>
          </div>
        </div>

        {/* Contact Form Component */}
        <div className="mr-[50px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
