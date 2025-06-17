import { Heading, Box, Button } from "@chakra-ui/react";
import { BiArrowFromLeft } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <Box as="section" className="hero dark">
        <Box zIndex="2">
          <Heading as="h1" size={{ base: "4xl", md: "5xl", lg: "6xl" }}>
            Your journey.
          </Heading>
          <Heading as="h1" size={{ base: "4xl", md: "5xl", lg: "6xl" }}>
            your car.
          </Heading>
          <Heading as="h1" size={{ base: "4xl", md: "5xl", lg: "6xl" }}>
            Rent yours today.
          </Heading>

          <NavLink className="drop-link" to="/fleets">
            <Button rounded="l1" mt="2rem" colorPalette="blue">
              Browse A Car <BiArrowFromLeft />
            </Button>
          </NavLink>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
