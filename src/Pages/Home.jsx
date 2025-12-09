import About from "../Components/About/About.jsx";
import Projects from "../Components/Projects/Projects.jsx";
import Skills from "../Components/Skills/Skills.jsx";
// import { useSymbols } from "../Hooks/useeSymbols.js";

export default function Home() {
  // const symbols = useSymbols();
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

        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          {symbols.map((item, i) => (
            <span
              key={i}
              className="absolute text-gray-400 font-bold select-none"
              style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
                transform: `rotate(${item.rotate}deg)`,
                fontSize: `${item.fontSize}px`,
                opacity: item.opacity,
              }}
            >
              {item.symbol}
            </span>
          ))}
        </div> */}
      </section>

      <section
        id="part-3"
        className="min-h-screen mt-20 pt-20  overflow-hidden "
        // style={{ height: "100vh", paddingTop: "100px", background: "#fff5d6" }}
      >
        <Projects />

      </section>
    </>
  );
}
