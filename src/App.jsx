import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RouterLayout from "./Layout/RouterLayout.jsx"
import Home from "./Pages/Home.jsx"
import ThemeContextProvider from "./Context/ThemeContext.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RouterLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <>
    
    <ThemeContextProvider>

    <RouterProvider router={router}/>
    </ThemeContextProvider>
  </>
}
