import { useContext } from "react";
import About from "../Components/About/About.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import Projects from "../Components/Projects/Projects.jsx";
import Skills from "../Components/Skills/Skills.jsx";
import { ThemeContext } from "../Context/contextCreation/Them.JS";

export default function Home() {
    const { theme } = useContext(ThemeContext);
  return (
    <>
      <section id="part-1" className="min-h-screen pt-20 mt-6 ">
        <About />
      </section>

      <section
        id="part-2"
        className="relative min-h-screen mt-20 md:mt-0 flex flex-col items-center justify-center overflow-hidden"
      >
        <Skills />

      </section>

      <section
        id="part-3"
        className="min-h-screen mt-20 pt-20  overflow-hidden "
      >
        <Projects />
      </section>

      <footer
        id="part-3"
        className="min-h-screen mt-20 pt-20  overflow-hidden flex flex-col justify-center items-center gap-10"
      >
        <Contact />
        <div className="mb-6">
          <p
            className={` capitalize  ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            @2025|yasmeen mahmoud
          </p>
        </div>
      </footer>
    </>
  );
}
