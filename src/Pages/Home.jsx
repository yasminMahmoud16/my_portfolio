import About from "../Components/About/About.jsx";
import Skills from "../Components/Skills/Skills.jsx";

export default function Home() {
  return (
    <>
      <section
        id="part-1"
        className="min-h-screen pt-20 mt-6 "
      >
        <About/>
      </section>

      <section
        id="part-2"
        className="min-h-screen mt-20 md:mt-0 flex flex-col items-center justify-center  "
        // style={{ height: "100vh", paddingTop: "100px", background: "#e1f7ff" }}
      >
        <Skills/>
      </section>

      <section
        id="part-3"
        className="min-h-screen mt-20 pt-20  "
        // style={{ height: "100vh", paddingTop: "100px", background: "#fff5d6" }}
      >
        Section 3
      </section>
    </>
  );
}
