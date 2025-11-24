import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RouterLayout from "./Layout/RouterLayout.jsx"
import Home from "./Pages/Home.jsx"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "my_portfolio",
      element: <RouterLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <>
    <RouterProvider router={router}/>
  </>
}
