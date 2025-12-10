import { useContext } from "react";
import { ThemeContext } from "../Context/contextCreation/Them.JS";
import { Layout } from "antd";
const { Content } = Layout;

export default function SharedLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Layout
        style={{
          padding: "40px 20px",
          backgroundColor:
            // theme === "dark" ? "rgba(30,41,59,0.6)" : "oklch(97.8% 0.01 256.848)",
            theme === "dark" ? "#030712 " : "oklch(97.8% 0.01 256.848)",
          boxShadow:
            theme === "dark" ? "0 2px 6px rgba(255, 255, 255, 0.2)" : "",
          backdropFilter: theme === "dark" ? "blur(10px)" : "",
          borderRadius: "20px",
          margin: "0 10px 0px 10px",
          marginBottom:"1rem"
    
        }}
        className="shadow-xl transition-all duration-300"
      >
        <Content className="flex flex-col items-center justify-center">{children}</Content>
      </Layout>
    </>
  );
}
