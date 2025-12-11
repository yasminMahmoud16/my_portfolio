import { useContext } from "react";
import { ThemeContext } from "../Context/contextCreation/Them.JS";
import { motion } from "framer-motion";

export default function MotionBtn({ btnName, btnHref, btnIcon, style = {} }) {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.button
      style={{
        padding: ".4rem 2rem",
        borderRadius: ".4rem",
        width: "10rem",

        border: theme === "dark" ? "2px solid #770E6A" : "transparent",
        background: theme === "dark" ? "transparent" : "#F3F4F6",
        color: theme === "dark" ? "#ffffff" : "#0A0A0A",
        fontWeight: "500",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        cursor: "pointer",
        overflow: "hidden",
        boxShadow:
          theme === "dark" ? "transparent" : "0 2px 5px rgba(0,0,0,0.3)",
        ...style,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          theme === "dark"
            ? "0 4px 15px rgba(114, 46, 209, 0.5)"
            : "2px 2px 6px rgba(0,0,0,0.3)",
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <a
        href={btnHref}
        target="_blank"
        className="text-xs md:text-lg flex gap-2 items-center "
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(90deg, #722ed1, #780650)"
              : "transparent",
          color: theme === "light" ? "#1C398E" : "transparent",
          WebkitBackgroundClip: theme === "dark" ? "text" : "unset",
          WebkitTextFillColor: theme === "dark" ? "transparent" : "inherit",
        }}
      >
        {btnIcon}

        {btnName}
      </a>
    </motion.button>
  );
}
