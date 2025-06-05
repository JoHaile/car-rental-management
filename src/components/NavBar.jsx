import { HStack, Image, Button, Box, Center, Link } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";

function NavBar() {
  return (
    <Center>
      <HStack
        display="flex"
        justifyContent="space-between"
        // position="absolute"
        // top="0px"
        // backgroundColor="#5a035a"
        width="100vw"
        height="60px"
        padding="0 2.5vw"
        className="nav"
      >
        <NavLink to="/">
          <Image src={logo} height="40px" />
        </NavLink>

        <Box display="flex" gap="1rem">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/fleets">Fleets</NavLink>
          <NavLink to="/about">About Us</NavLink>

          {/* make it on hover to display  */}
          <div className="menu">
            <Link className="drop-link">
              Company <BiChevronDown />
            </Link>

            <Box className="drop-menu">
              <NavLink to="/policies" className="drop-link">
                Rental Policies <BiArrowFromLeft />
              </NavLink>
              <NavLink to="/requirements" className="drop-link">
                Rental Requirements <BiArrowFromLeft />
              </NavLink>
              <NavLink to="/address" className="drop-link">
                Our Address <BiArrowFromLeft />
              </NavLink>
            </Box>
          </div>

          <NavLink to="/faq">FAQs</NavLink>
        </Box>

        <NavLink to="/contact">
          <Button rounded="l1">Contact Us </Button>
        </NavLink>
      </HStack>
    </Center>
  );
}

export default NavBar;
