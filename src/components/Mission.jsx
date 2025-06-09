import Carousel from "./carousel/carousel";
import { Text, Grid, GridItem, Flex, Button, Heading } from "@chakra-ui/react";
import car1 from "../assets/mission/2018-chevrolet-impala-99leadgallery-1529679404.jpg";
import car2 from "../assets/mission/2018-chevrolet-impala-103-1529679402.jpg";
import car3 from "../assets/mission/2018-chevrolet-impala-105-1529679402.jpg";
import car4 from "../assets/mission/2018-chevrolet-impala-106-1529679402.jpg";
import { NavLink } from "react-router-dom";

const cars = [car1, car2, car3, car4];

function Mission() {
  return (
    <Grid
      gridTemplateColumns="repeat(2, 1fr)"
      px={{ base: "1rem", md: "2rem", lg: "5rem" }}
      my={{ base: "1rem", md: "3rem", lg: "5rem" }}
      py={{ base: "1rem", md: "2rem" }}
      gap="1rem"
      bgColor="whiteAlpha.800"
      color="blackAlpha.800"
    >
      <GridItem colSpan={{ base: 2, md: 1 }} alignContent="center">
        <Heading as="h1" size="4xl">
          our Mission
        </Heading>

        <Text>
          At Gondar Car Rental, our mission is to provide reliable, affordable,
          and high-quality transportation solutions that empower our customers
          with freedom and convenience. We are committed to delivering
          exceptional service, maintaining a fleet of well-maintained vehicles,
          and ensuring a seamless rental experience. With a focus on innovation,
          sustainability, and customer satisfaction, we strive to be the trusted
          choice for mobility—whether for business, travel, or adventure.
        </Text>
        <Flex gap="1rem" mt="1rem">
          <NavLink to="/fleets">
            <Button borderRadius="l1" colorPalette="blue">
              See All Vehicles
            </Button>
          </NavLink>

          <NavLink to="about">
            <Button
              borderRadius="l1"
              colorPalette="blackAlpha"
              bgColor="black"
              color="white"
            >
              About Us
            </Button>
          </NavLink>
        </Flex>
      </GridItem>

      <GridItem
        colSpan={{ base: 2, md: 1 }}
        alignContent="center"
        overflow="hidden"
      >
        <Carousel>
          {cars.map((img, index) => (
            <img key={index} src={img} width="100%" />
          ))}
        </Carousel>
      </GridItem>
    </Grid>
  );
}

export default Mission;
