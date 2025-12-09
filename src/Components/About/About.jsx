import { Layout, Row, Col } from "antd";
const { Content } = Layout;
import { Typography } from "antd";
import img from "../../assets/Images/yasmeen C 1.svg";
import { useContext } from "react";
import { ThemeContext } from "../../Context/contextCreation/Them.JS";
import { motion } from "framer-motion";
import SharedLayout from "../../Shared/SharedLayout.jsx";
import SharedTitle from "../../Shared/SharedTitle.jsx";

const { Title } = Typography;

// const MotionTitle = motion(Title);
export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <SharedLayout>
      <Row gutter={[40, 40]} align="middle">
        <Col className=" flex items-center justify-center" flex={2}>
          <div className=" text-gray-950 border-4 border-gray-400 w-80 h-80 rounded-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="w-72 h-72 rounded-full overflow-hidden shadow-2xl "
            >
              <img
                src={img}
                alt="yasmeen"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Col>

        <Col xs={24} md={14}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <Title
              level={2}
              className="capitalize font-bold text-lg"
              style={{ color: theme === "dark" ? "#e2e8f0" : "#1e293b" }}
            >
              Yasmeen Mahmoud
            </Title>

            <SharedTitle title={"FullStack Developer "} style={{ textAlign :"left"}} />
            {/* <MotionTitle
              className="text-3xl font-bold mb-4  "
              style={{
                fontFamily: "var(--font-kalam)",
                fontSize: "2.2rem",
                textTransform: "capitalize",
                ...(theme === "dark"
                  ? {
                      background: "linear-gradient(90deg, #722ed1, #780650 )",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : { color: "#0b6bcb" }),
              }}
              // style={{
              //   color: theme === "dark" ? "#721378 " : "#0b6bcb",
              // }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Frontend Developer
            </MotionTitle> */}

            <motion.p
              className="text-lg leading-relaxed"
              style={{
                color: theme === "dark" ? "#cbd5e1" : "#475569",
                marginBottom: "10px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              I’m a frontend developer focused on building responsive and
              user-friendly web applications using React, TypeScript,
              TailwindCSS, and modern tools. I enjoy turning designs into clean,
              functional interfaces and creating smooth user experiences. Always
              learning, improving, and passionate about working on projects that
              challenge my skills and creativity.
            </motion.p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: "transparent",
              color: theme === "dark" ? "#8a0194" : "#0b6bcb",
              padding: "6px 28px",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "10px",

              cursor: "pointer",
            }}
          >
            Contact Me
          </motion.button>
        </Col>
      </Row>
    </SharedLayout>
  );
}
