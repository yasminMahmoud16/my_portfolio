import {  useEffect, useState } from "react";
import { ThemeContext } from "./contextCreation/Them.JS";



export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const themeToggle = () => {
        setTheme((prev) => (
            prev === "light" ? "dark" : "light"
        ))
    }

    // useEffect(() => {
    //     if (theme === "dark") {
    //         document.body.classList.add("bg-gray-900", "text-white");
    //         document.body.classList.remove("bg-white", "text-gray-900");
    //     } else {
    //         document.body.classList.add("bg-white", "text-gray-900");
    //         document.body.classList.remove("bg-gray-900", "text-white");
    //     }
    // }, [theme]);
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme, themeToggle }}>
                {children}
            </ThemeContext.Provider>
        </>
    );

}