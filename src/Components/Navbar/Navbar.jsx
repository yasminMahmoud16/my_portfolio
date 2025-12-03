import { Anchor } from "antd";
import { Typography, } from "antd";
import { SunOutlined,MoonOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../../Context/contextCreation/Them.JS";
// import { Switch } from "antd";

const { Text } = Typography;

export default function Navbar() {
    const { theme, themeToggle } = useContext(ThemeContext);
const anchorItems = [
  {
    key: "part-1",
    href: "#part-1",
    title: (
      <span
        className={`transition-colors duration-300 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        Home
      </span>
    ),
    className: "mr-4",
  },
  {
    key: "part-2",
    href: "#part-2",
    title: (
      <span
        className={`transition-colors duration-300 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        Tools
      </span>
    ),
    className: "mr-4",
  },
  {
    key: "part-3",
    href: "#part-3",
    title: (
      <span
        className={`transition-colors duration-300 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        Projects
      </span>
    ),
    className: "mr-4",
  },
];
//   const onChange = (checked) => {
//   console.log(`switch to ${checked}`);
// };

    return (
      <>
        {/* Navbar */}
        <nav
          className={`fixed w-full z-20 top-0 start-0 shadow transition-colors duration-300
        ${theme === "light" ? "bg-neutral-primary" : "#030712"}
      `}
        >
          {" "}
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Text
                style={{
                  color: theme === "light" ? "#111827" : "#ffffff",
                  fontSize: "1rem",
                }}
                className="self-center capitalize text-heading font-semibold whitespace-nowrap transition-colors duration-300"
              >
                yasmeen
              </Text>
            </a>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>

            {/* Links / Anchor */}
            <div
              className="= hidden md:flex md:justify-center space-x-4 w-full"
              style={{
                borderBottom: "none",
              }}
            >
              <Anchor direction="horizontal" items={anchorItems} />
            </div>
            <div
              className="bg-amber-600  relative cursor-pointer "
              onClick={themeToggle}
            >
              <div
                className={`absolute -top-3 transition-all ${
                  theme === "light" ? "block" : "hidden"
                }`}
              >
                <SunOutlined className="text-2xl" />
              </div>

              <div
                className={`absolute -top-3 transition-all ${
                  theme === "dark" ? "block text-white" : "hidden"
                }`}
              >
                <MoonOutlined className="text-2xl" />
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}
