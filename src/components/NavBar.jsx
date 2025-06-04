import {
  Link,
  HStack,
  Image,
  Button,
  Box,
  Text,
  Stack,
  Center,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <HStack display="flex" justifyContent="space-between" mt={2}>
      <Image src={logo} height="40px" />

      <Box display="flex" gap="1rem">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/fleets">Fleets</NavLink>
        <NavLink to="/about">About Us</NavLink>

        {/* make it on hover to display  */}
        <div className="menu">
          <NavLink className="drop-link">
            Company <BiChevronDown />
          </NavLink>

          <div className="drop-menu">
            <NavLink className="drop-link">Rental Policy</NavLink>
            <NavLink className="drop-link">Rental Requirement</NavLink>
            <NavLink className="drop-link">Our Address</NavLink>
          </div>
        </div>

        <NavLink to="/faq">FAQs</NavLink>
      </Box>

      <Button rounded="l1">Contact Us</Button>
    </HStack>
  );
}

export default NavBar;
