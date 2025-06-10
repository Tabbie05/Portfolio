import AboutMe from "@/app/AboutMe/page";
import Contact from "@/app/Contact/page";
import Projects from "@/app/Projects/page";
import Skills from "@/app/Skills/page";
import  Main  from "@/Components/Main";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <div>
      <Main />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
