import {
  Box,
  Text,
  Center,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import image from "../assets/img/wide-selection.webp";
import data from "../assets/db.json";
import CarsCard from "../components/CarsCard";

function Fleets() {
  return (
    <>
      <Box
        height="75vh"
        bgImage={`url(${image})`}
        bgPos="center center"
        bgSize="cover"
        display="flex"
        alignItems="center"
        position="relative"
      >
        <Center bgColor="#00000060" position="absolute" inset="0">
          <Box textAlign="center">
            <Heading as="h1" size={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              our fleets
            </Heading>
            <Text>
              Choose Your Desired Car And Reserve in just a few clicks.
            </Text>
          </Box>
        </Center>
      </Box>

      <Grid gridTemplateColumns="repeat(6, 1fr)">
        <GridItem bgColor="red.600" colSpan={1}>
          side bar
        </GridItem>

        <GridItem colSpan={5} p={{ base: ".5rem", md: "1rem" }}>
          <SimpleGrid
            minChildWidth={{ base: "250px", md: "300px" }}
            gap="1rem"
            justifyItems="center"
          >
            {data.cars.map((car) => (
              <CarsCard cars={car} key={car.id} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default Fleets;
