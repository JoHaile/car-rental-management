import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Fleets from "./pages/Fleets";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import Requirements from "./pages/Requirements";
import Address from "./pages/Address";

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
      { path: "/booking", element: <Booking /> },
      { path: "/contact", element: <Contact /> },
      { path: "/policies", element: <Policies /> },
      { path: "/requirements", element: <Requirements /> },
      { path: "/address", element: <Address /> },
    ],
  },
]);
