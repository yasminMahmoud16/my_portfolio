// import {Title} from "antd";
import { Typography } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../Context/contextCreation/Them.JS";
import useSkills from "../../Hooks/useSkills.jsx";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../Motion/SkillsAnimation.js";
const { Title } = Typography;

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  // // Container Animation
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.15,
  //     },
  //   },
  // };

  // // Item Animation (Right + Left)
  // const itemVariants = {
  //   hidden: (i) => ({
  //     opacity: 0,
  //     x: i % 2 === 0 ? -50 : 50,
  //   }),
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 60,
  //       damping: 12,
  //     },
  //   },
  //   hover: {
  //     scale: 1.08,
  //   },
  // };

  const { data } = useSkills();

  return (
    <>
      <div className=" ">
        <Title
          style={{
            fontFamily: "var(--font-kalam)",
            color: theme === "dark" ? "#721378 " : "#0b6bcb",
          }}
          level={1}
          className="text-center capitalize "
        >
          skills
        </Title>
      </div>

      <div className="w-full">
        {/* Libraries */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data?.libraries?.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="flex flex-col items-center justify-center cursor-pointer "
            >
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="font-semibold text-center">{item.name}</p>
            </motion.div>
          ))}
          {data?.languages?.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="flex flex-col items-center justify-center cursor-pointer "
            >
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="font-semibold text-center">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
