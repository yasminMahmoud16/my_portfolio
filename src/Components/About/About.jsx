
import img from "../../assets/Images/yasmeen C 1.svg";
import { useContext } from "react";
import { ThemeContext } from "../../Context/contextCreation/Them.JS";
import { motion } from "framer-motion";
import SharedLayout from "../../Shared/SharedLayout.jsx";
import SharedTitle from "../../Shared/SharedTitle.jsx";
import { Layout, Row, Col } from "antd";
import { Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

// const MotionTitle = motion(Title);
export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <SharedLayout>
      <Row gutter={[40, 40]} align="middle" className="">
        <Col
          xs={24}
          md={10}
          className=" flex! items-center justify-center "
          flex={2}
        >
          <div
            className={` text-gray-950 border-4 ${
              theme === "dark" ? "border-purple-950" : "border-gray-400"
            }  w-80 h-80 md:w-70 md:h-70 xl:w-80 xl:h-80 rounded-full flex items-center justify-center`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="w-72 h-72 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl "
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

            <SharedTitle title={"FullStack Developer "} />

            <motion.p
              className="text-lg leading-relaxed  px-3"
              style={{
                color: theme === "dark" ? "#cbd5e1" : "#475569",
                marginBottom: "10px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              I’m a Full-Stack Developer specializing in building responsive,
              high-quality web applications using React, Node.js, TypeScript,
              and modern tools. I’m passionate about creating clean, functional
              interfaces on the frontend and efficient, scalable APIs on the
              backend. Always learning, improving, and excited to work on
              projects that challenge my skills and creativity.
            </motion.p>
          </motion.div>
        </Col>
      </Row>
    </SharedLayout>
  );
}
