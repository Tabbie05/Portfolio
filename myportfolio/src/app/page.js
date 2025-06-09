import AboutMe from "@/AboutMe/page";
import Contact from "@/Contact/page";
import Footer from "@/Footer/Page";
import HomePage from "@/Home/page";
import Projects from "@/Projects/page";
import Skills from "@/Skills/page";
export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
