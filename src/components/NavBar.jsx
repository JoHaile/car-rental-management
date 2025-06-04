import {
  Link,
  HStack,
  Image,
  Button,
  Box,
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
        <Link className="drop">
          Company <BiChevronDown />
        </Link>

        <div className="drop-menu" display="flex" flexDir="column">
          <Link>Rental Policy</Link>
          <Link>Rental Requirement</Link>
          <Link>Our Address</Link>
        </div>

        <NavLink to="/faq">FAQs</NavLink>
      </Box>

      <Button rounded="l1">Contact Us</Button>
    </HStack>
  );
}

export default NavBar;
