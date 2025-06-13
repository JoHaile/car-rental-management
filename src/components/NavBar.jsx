import { HStack, Image, Button, Box, Center, Link } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [ham, setHam] = useState(false);

  return (
    // <Center>
    <HStack
      display="flex"
      justifyContent="space-between"
      px={{ base: "1rem", md: "1.rem" }}
      position="relative"
      top="0px"
      width="100%"
      height="60px"
      className="nav"
    >
      <NavLink to="/">
        <Image src={logo} height="40px" />
      </NavLink>

      <div className={ham ? "nav-list display" : "nav-list display-none"}>
        <NavLink className="nav-links" to="/">
          Home
        </NavLink>
        <NavLink className="nav-links" to="/fleets">
          Our Fleets
        </NavLink>
        <NavLink className="nav-links" to="/about">
          About Us
        </NavLink>

        {/* make it on hover to display  */}
        <div className="menu">
          <Link className="drop-link nav-links">
            Company <BiChevronDown />
          </Link>

          <Box className="drop-menu">
            <NavLink to="/policies" className="drop-link nav-links">
              Rental Policies <BiArrowFromLeft />
            </NavLink>
            <NavLink to="/requirements" className="drop-link nav-links">
              Rental Requirements <BiArrowFromLeft />
            </NavLink>
            <NavLink to="/address" className="drop-link nav-links">
              Our Address <BiArrowFromLeft />
            </NavLink>
          </Box>
        </div>

        <NavLink className="nav-links" to="/faq">
          FAQs
        </NavLink>

        <NavLink to="/contact" className="d-n">
          <Button rounded="l1" ml="1rem">
            Contact Us
          </Button>
        </NavLink>
      </div>

      <NavLink to="/contact" className="display-none">
        <Button rounded="l1" ml="1rem">
          Contact Us
        </Button>
      </NavLink>

      <button
        className="ham"
        onClick={() => {
          setHam(!ham);
        }}
      >
        {ham ? <X /> : <Menu />}
      </button>
    </HStack>
    // </Center>
  );
}

export default NavBar;
