import { useContext } from "react";
import { ThemeContext } from "../Context/contextCreation/Them.JS";
import { Typography } from "antd";
const { Title } = Typography;

export default function SharedTitle({ title, style = {} }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Title
        level={1}
        style={{
          fontFamily: "var(--font-kalam)",
          textAlign: "center",
          fontSize: "3rem",
          textTransform: "capitalize",
          paddingBottom: "1rem",
          ...(theme === "dark"
            ? {
                background: "linear-gradient(90deg, #722ed1, #780650 )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
            : { color: "#0b6bcb" }),
          ...style,
        }}
      >
        {title}
      </Title>
    </div>
  );
}
