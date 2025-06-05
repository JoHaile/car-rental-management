import { Heading, Box, Button } from "@chakra-ui/react";
import { BiArrowFromLeft } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero">
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

          <NavLink className="drop-link" to="/booking">
            <Button rounded="l1" mt="2rem">
              Book Now <BiArrowFromLeft />
            </Button>
          </NavLink>
        </Box>
      </section>
    </>
  );
}

export default Hero;
