import {  useEffect, useState } from "react";
import { ThemeContext } from "./contextCreation/Them.JS";



export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    const themeToggle = () => {
        setTheme((prev) => (
            prev === "light" ? "dark" : "light"
        ))
    }


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