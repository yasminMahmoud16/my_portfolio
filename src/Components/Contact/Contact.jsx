import SharedTitle from "../../Shared/SharedTitle.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../Context/contextCreation/Them.JS";
import {
  ArrowUpOutlined,
  GithubFilled,
  LinkedinOutlined,
  BehanceOutlined,
  MailOutlined,
  WhatsAppOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { socialLinks } from "../../Utils/Data.js";

export default function Contact() {
    const { theme } = useContext(ThemeContext);
  

const icons = {
  github: <GithubFilled />,
  linkedin: <LinkedinOutlined />,
  behance: <BehanceOutlined />,
  email: <MailOutlined />,
  whatsApp: <WhatsAppOutlined />,
  phone: <PhoneOutlined />,
};
  return (
    <>
      <div className="mb-6 flex flex-col items-center justify-center">
        <SharedTitle title={"Contact"}  />
        <p
          className={`text-center ${
            theme === "dark" ? "text-gray-400" : "text-gray-400"
          } capitalize font-semibold`}
        >
          Let’s build something together! Reach out or follow me on social media
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full place-items-center px-20">
        {socialLinks?.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={{
              background:
                theme === "dark"
                  ? "linear-gradient(90deg, #722ed1, #780650)"
                  : "",
              color: theme === "dark" ? "#ffff" : "#1c398e",
              boxShadow:
                theme === "dark"
                  ? "2px 2px 15px rgba(255, 255, 255, 0.2)"
                  : "2px 2px 10px rgba(0,0,0,0.1)",
              position: "relative",
              width: "100%",
              borderRadius: ".3rem",
              padding: "1rem",
              cursor: "pointer",
            }}
          >
            {/* Overlay glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg opacity-0 bg-white/10"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <a
              href={
                link.type === "email"
                  ? `mailto:${link.url}`
                  : link.type === "phone"
                  ? `tel:${link.url}`
                  : link.url || "#"
              }
              target={link.type !== "email" ? "_blank" : undefined}
              className="flex items-center gap-3 text-lg font-semibold relative z-10 capitalize"
            >
              {icons[link.icon]}
              {link.type === "phone" ? link.url : link.type}
              <motion.span
                className="ml-auto"
                initial={{ rotate: 45 }}
                whileHover={{ rotate: 90, x: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUpOutlined />
              </motion.span>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
}
