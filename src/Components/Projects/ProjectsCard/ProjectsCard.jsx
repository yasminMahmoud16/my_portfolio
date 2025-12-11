
import {
    BehanceOutlined,
    GithubOutlined,
    LinkOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

import { useContext } from "react";
import { ThemeContext } from "../../../Context/contextCreation/Them.JS";
import MotionBtn from "../../../Motion/MotionBtn.jsx";
import { projects } from "../../../Utils/Data.js";


export default function ProjectsCard() {
    const { theme } = useContext(ThemeContext);




    return (
      <>
        {projects?.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-8 my-14 overflow-hidden 
                ${!isEven ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              {/* IMAGE SECTION */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`relative w-80 md:w-1/2 rounded-2xl overflow-hidden group  ${
                  theme === "dark" ? "border border-gray-900" : ""
                }`}
              >
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-2xl shadow-lg w-full h-[300px] object-contain"
                />

                {/* OVERLAY LAYER */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl
               opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer"
                >
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      initial={{ opacity: 0, y: 12, color: "#ffffff" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      whileHover={{
                        scale: 1.08,
                        x: 4,
                        color: theme === "dark" ? "#962c9d" : "#3B82F6",
                        textShadow: "0 2px 8px rgba(255,255,255,0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="font-medium text-lg flex items-center gap-2"
                    >
                      View Live Project <LinkOutlined className="text-xl" />
                    </motion.a>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-400 italic text-lg"
                    >
                      No live link
                    </motion.span>
                  )}
                </motion.div>
              </motion.div>

              {/* TEXT SECTION */}
              <div className="w-90 md:w-1/2 rounded-2xl p-6 ">
                <h2
                  className={`text-3xl font-bold capitalize ${
                    theme === "dark"
                      ? "bg-linear-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent"
                      : "text-blue-900"
                  }`}
                >
                  {project.name}
                </h2>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1  rounded-lg text-xs capitalize ${
                        theme === "dark"
                          ? "bg-transparent text-gray-200 border-2 border-purple-900 shadow-md"
                          : "bg-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ICON BUTTONS */}
                <div className="flex md:flex-nowrap items-center gap-4 mt-6 ">
                  {project.link && (
                    <MotionBtn
                      btnHref={project.link}
                      btnName={"Demo"}
                      btnIcon={
                        <LinkOutlined
                          className="md:text-xl!"
                          style={{
                            fontSize: "15px",
                            color: theme === "dark" ? "#722ed1" : "#1C398E",
                          }}
                        />
                      }
                    />
                  )}
                  {project.gitHubLink && (
                    <MotionBtn
                      btnHref={project.gitHubLink}
                      btnName={"Repository"}
                      btnIcon={
                        <GithubOutlined
                          className="md:text-xl!"
                          style={{
                            fontSize: "15px",
                            color: theme === "dark" ? "#722ed1" : "#1C398E",
                          }}
                        />
                      }
                    />
                  )}
                  {project.behanceLink && (
                    <MotionBtn
                      btnHref={project.behanceLink}
                      btnName={"Behance"}
                      btnIcon={
                        <BehanceOutlined
                          className="md:text-xl!"
                          style={{
                            fontSize: "20px",
                            color: theme === "dark" ? "#722ed1" : "#1C398E",
                          }}
                        />
                      }
                    />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </>
    );
}


