import About from "../Components/About/About.jsx";

export default function Home() {
  return (
    <>
      <section
        id="part-1"
        className="h-screen pt-20  "
      >
        <About/>
      </section>

      <section
        id="part-2"
        className="h-screen mt-60 md:mt-0  "
        // style={{ height: "100vh", paddingTop: "100px", background: "#e1f7ff" }}
      >
        Section 2
      </section>

      <section
        id="part-3"
        className="h-screen pt-20  "
        // style={{ height: "100vh", paddingTop: "100px", background: "#fff5d6" }}
      >
        Section 3
      </section>
    </>
  );
}
