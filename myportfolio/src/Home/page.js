import Main from "@/Home/Main/page"; 
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";
export default function Home() {
  return (
    <div>
    <nav className="w-full py-4">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center px-4">
        <h2 className="text-2xl text-blue-600 font-bold">TS.</h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/" className=" hover:text-blue-600">HOME</Link>
          <Link href="/about" className=" hover:text-blue-600">ABOUT</Link>
          <Link href="/projects" className=" hover:text-blue-600">PROJECTS</Link>
          <Link href="/skills" className="hover:text-blue-600">SKILLS</Link>
          <Link href="/contact" className= "hover:text-blue-600">CONTACT</Link>
          <div className="text-white-700 hover:text-blue-600">
            <FaRegMoon />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">RESUME</button>
        </div>
      </div>
    </nav>
    <Main />
  </div>
    
  );
}
