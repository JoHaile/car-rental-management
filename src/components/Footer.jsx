import { Box, Grid, Image, Flex, Heading } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";

function Footer() {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1fr, 3)", md: "repeat(3, 1fr)" }}
      gap="2rem"
      paddingX={{ base: "2.5rem", md: "2.5rem" }}
      pt="10rem"
      justifyItems="center"
      bgColor="whiteAlpha.200"
      color="whiteAlpha.800"
      position="absolute"
      bottom="0"
      left="0"
    >
      <Flex order={{ base: "3", md: "0" }}>
        <Image src={logo} objectFit="cover" />
      </Flex>

      <Flex gap="2rem">
        <Box>
          <Heading pb={2}>About Us</Heading>
          <NavLink to="/about">
            <li>
              Our Story <BiArrowFromLeft />
            </li>
          </NavLink>

          <NavLink to="/address">
            <li>
              Our Location <BiArrowFromLeft />
            </li>
          </NavLink>

          <NavLink to="/policies">
            <li>
              Privacy Policy <BiArrowFromLeft />
            </li>
          </NavLink>
        </Box>

        <Box>
          <Heading pb={2}>Support</Heading>
          <NavLink to="/contact">
            <li>
              Contact us <BiArrowFromLeft />
            </li>
          </NavLink>

          <NavLink to="/faq">
            <li>
              FAQs <BiArrowFromLeft />
            </li>
          </NavLink>

          <NavLink to="/requirements">
            <li>
              Requirements <BiArrowFromLeft />
            </li>
          </NavLink>
        </Box>
      </Flex>
      <Flex gap="3rem" alignItems="center" mb="10rem">
        <Link to="https://facebook.com/" target="_blank">
          <Facebook className="icon" />
        </Link>
        <Link to="https://twitter.com/" target="_blank">
          <Twitter className="icon" />
        </Link>
        <Link to="https://youtube.com/" target="_blank">
          <Youtube className="icon" />
        </Link>
        <Link to="https://instagram.com/" target="_blank">
          <Instagram className="icon" />
        </Link>
      </Flex>
    </Grid>
  );
}

export default Footer;
