import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Fleets from "./pages/Fleets";
import About from "./pages/About";
import Faq from "./pages/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/fleets", element: <Fleets /> },
      { path: "/about", element: <About /> },
      { path: "/faq", element: <Faq /> },
    ],
  },
]);
