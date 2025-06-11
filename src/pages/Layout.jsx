import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

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
