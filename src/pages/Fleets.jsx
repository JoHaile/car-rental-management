import {
  Box,
  Text,
  Center,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Button,
  Spacer,
} from "@chakra-ui/react";
import image from "../assets/img/wide-selection.webp";
import CarsCard from "../components/CarsCard";
import filterCars from "../hooks/filterCars";

function Fleets() {
  const { filterUser, setFilter, filter } = filterCars();

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
          <Button
            onClick={() =>
              setFilter({
                ...filter,
                gas: !filter.gas,
                electric: false,
                hybrid: false,
              })
            }
          >
            Gas
          </Button>
          <Button
            onClick={() =>
              setFilter({
                ...filter,
                electric: !filter.electric,
                gas: false,
                hybrid: false,
              })
            }
          >
            Electric
          </Button>
          <Button
            onClick={() =>
              setFilter({
                ...filter,
                hybrid: !filter.hybrid,
                gas: false,
                electric: false,
              })
            }
          >
            Hybrid
          </Button>
        </GridItem>

        <GridItem colSpan={5} p={{ base: ".5rem", md: "1rem" }}>
          <Box display="flex" justifyContent="space-between" pb={"1rem"}>
            <Heading size={{ base: "1xl", lg: "2xl" }}>
              Filtered By
              {filter.gas ? (
                <span className="active"> Gasoline</span>
              ) : filter.electric ? (
                <span className="active"> Electric</span>
              ) : filter.hybrid ? (
                <span className="active"> Hybrid</span>
              ) : filter.price ? (
                <span className="active"> Low Price</span>
              ) : (
                " Relevance"
              )}
            </Heading>

            <Button
              onClick={() =>
                setFilter({
                  ...filter,
                  price: !filter.price,
                  // gas: false,
                  // electric: false,
                })
              }
            >
              Price
            </Button>
          </Box>
          <SimpleGrid
            minChildWidth={{ base: "250px", md: "300px" }}
            gap="1rem"
            justifyItems="center"
          >
            {filterUser.map((car) => (
              <CarsCard cars={car} key={car.id} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default Fleets;
