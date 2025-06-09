import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <section className="w-full px-6 py-16  text-white ml-5" id="contact">
      <h2 className="text-4xl sm:text-5xl font-bold mb-2">Get In Touch</h2>
      <div className="border-b-4 border-blue-600 w-20 mb-6"></div>
      <p className="text-lg text-gray-300 max-w-2xl mb-12">
        Have a question or want to work together? Fill up the form and I’ll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Contact Info */}
        <div className="">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <ul className="text-gray-300 space-y-3">
            <li className="flex gap-2">
              <span><MdOutlineMailOutline size={22} color="blue" /></span>
             <div className="flex flex-col"> <span className="font-semibold text-white">Email:</span> <span>shaikhtayba3@gmail.com</span></div>
            </li>
            <li className="flex gap-2">
              <span><IoCallOutline size={22} color="blue" /></span>
             <div className="flex flex-col"> <span className="font-semibold text-white">Contact:</span> <span>+91 8591897978</span></div>
            </li>
             <li className="flex gap-2">
              <span><CiLocationOn size={22} color="blue" /></span>
             <div className="flex flex-col"> <span className="font-semibold text-white">Location:</span> <span>Mumbai India</span></div>
            </li>
          </ul>

          <h4 className="mt-6 mb-2 font-semibold text-xl">Connect with me</h4>
          <div className="flex space-x-4  text-2xl">
            {/* Replace # with actual profile links */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-400 flex item-center justify-center h-10 w-10 hover:bg-blue-400 hover:text-black"><FaLinkedinIn size={25} className="  hover:text-black  mt-1.5"/></a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-400 flex item-center justify-center h-10 w-10 hover:bg-blue-400 hover:text-black"><FaGithub size={25} className="  hover:text-black  mt-1.5"/></a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gray-400 flex item-center justify-center h-10 w-10 hover:bg-blue-400 hover:text-black"><MdEmail size={25} className="  hover:text-black  mt-1.5"/></a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-5 mr-[50px]">
          <div>
            <label className="block mb-1 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Your Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Subject</label>
            <input
              type="text"
              placeholder="How can I help you?"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              rows="5"
              placeholder="Your message here..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-all duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
