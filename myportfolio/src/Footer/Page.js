import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="bg-gray-800 py-10">
            <div className="flex justify-between items-center">
                <div className="ml-7">
                    <h1 className="text-2xl text-blue-600 font-bold">TS.</h1>
                    <p className="text-gray-300 max-w-md">
                        Building elegant digital solutions with a focus on user experience and technical excellence.
                    </p>
                </div>
                <div className="mr-5">
                    <div className="flex gap-3 ml-[250px] mb-3"><FaGithub size={30} className="hover:text-blue-600 transition-colors hover:rotate-[4deg]" />
                        <FaLinkedinIn size={30} className="hover:text-blue-600 transition-colors hover:rotate-[4deg]" />
                        <CiMail size={30} className="hover:text-blue-600 transition-colors hover:rotate-[4deg]" />
                    </div>
                    <p>© 2025 Tayba Shaikh| Built with React and Tailwind</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;