import { Typography, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../../Context/contextCreation/Them.JS";
import useSkills from "../../Hooks/useSkills.jsx";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "../../Motion/SkillsAnimation.js";

const { Title } = Typography;

export default function Skills() {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useSkills();

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 48,
        color: theme === "dark" ? "#f0c0ff" : "#0b6bcb",
      }}
      spin
    />
  );

  return (
    <>
      <div>
        <Title
          style={{
            fontFamily: "var(--font-kalam)",
            color: theme === "dark" ? "#721378" : "#0b6bcb",
          }}
          level={1}
          className="text-center capitalize"
        >
          Skills
        </Title>
      </div>

      <div className="w-full">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-screen">
            <Spin
              indicator={antIcon}
              tip="Loading..."
              tipStyle={{ color: theme === "dark" ? "#f0c0ff" : "#0b6bcb" }}
            />
          </div>
        ) : (
          <motion.div
            className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 overflow-hidden py-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* libraries */}
            {data?.libraries?.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                className={`flex items-center justify-center p-[3px] rounded-full transition-all duration-300 ${
                  theme === "dark" ? "" : "bg-transparent"
                }`}
              >
                <div
                  className="flex flex-col items-center justify-center w-40 h-40 p-4 my-5 rounded-2xl"
                  style={
                    theme === "dark"
                      ? {
                          background: "rgba(255,255,255,0.1)",
                          backdropFilter: "blur(10px)",
                          boxShadow:
                            "0 4px 30px rgba(114,19,120,0.5), 0 0 60px rgba(62,26,73,0.3)",
                        }
                      : {}
                  }
                >
                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.name}
                    className="w-16 h-16 object-contain mb-2 rounded-full"
                  />
                  <p
                    className={`font-semibold text-center capitalize mt-2 ${
                      theme === "dark" ? "text-[#f0c0ff]" : "text-[#364153]"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* languages */}
            {data?.languages?.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index + (data?.libraries?.length || 0)}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                className={`flex items-center justify-center p-[3px] rounded-full transition-all duration-300 ${
                  theme === "dark" ? "" : "bg-transparent"
                }`}
              >
                <div
                  className="flex flex-col items-center justify-center w-40 h-40 p-4 my-5 rounded-2xl"
                  style={
                    theme === "dark"
                      ? {
                          background: "rgba(255,255,255,0.1)",
                          backdropFilter: "blur(10px)",
                          boxShadow:
                            "0 4px 30px rgba(114,19,120,0.5), 0 0 60px rgba(62,26,73,0.3)",
                        }
                      : {}
                  }
                >
                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.name}
                    className="w-16 h-16 object-contain mb-2 rounded-full"
                  />
                  <p
                    className={`font-semibold text-center capitalize mt-2 ${
                      theme === "dark" ? "text-[#f0c0ff]" : "text-[#364153]"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
