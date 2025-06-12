import { Box, Grid, Image, Flex, Heading, Text } from "@chakra-ui/react";
import data from "../assets/db.json";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <Grid
        gridTemplateColumns={{ base: "repeat(1fr, 3)", md: "repeat(3, 1fr)" }}
        gap="2rem"
        pt="3rem"
        pb="3rem"
        justifyItems="center"
        bgColor="whiteAlpha.200"
        color="whiteAlpha.800"
        px={{ base: "1rem" }}
      >
        <Flex order={{ base: "3", md: "0" }} flexDir="column" gap="1rem">
          <Heading>{data.rentalCompany.name}</Heading>
          <Text>{data.rentalCompany.contact.phone}</Text>
          <Text>{data.rentalCompany.contact.email}</Text>
          <Text>{data.rentalCompany.contact.address}</Text>
        </Flex>

        <Flex gap="2rem">
          <Box display="flex" flexDir="column" gap="1rem">
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

          <Box display="flex" flexDir="column" gap=".75rem">
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
        <Flex gap={{ base: "10px", lg: "3rem" }} alignItems="center">
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
    </div>
  );
}

export default Footer;
