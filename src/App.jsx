import {  createHashRouter, RouterProvider } from "react-router-dom"
import RouterLayout from "./Layout/RouterLayout.jsx"
import Home from "./Pages/Home.jsx"
import ThemeContextProvider from "./Context/ThemeContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  const router = createHashRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <>
    <QueryClientProvider client={queryClient}>

      <ThemeContextProvider>

      <RouterProvider router={router}/>
      </ThemeContextProvider>
    </QueryClientProvider>
  </>
}
