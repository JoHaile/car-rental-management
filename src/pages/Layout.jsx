import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Transition from "../Transition";

function Layout() {
  return (
    <>
      <ScrollRestoration />

      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
