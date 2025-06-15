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
import { ArrowDown, ArrowUp } from "lucide-react";
import Transition from "../Transition";

function Fleets() {
  const { filterUser, setFilter, filter, filterResult } = filterCars();

  function handleFilterChange(type) {
    setFilter((prevFilter) => {
      const newFilter = { ...prevFilter, [type]: !prevFilter[type] };
      // Reset other filters
      Object.keys(newFilter).forEach((key) => {
        if (key !== type && key !== "price") newFilter[key] = false;
      });
      return newFilter;
    });
  }

  return (
    <Transition>
      <Box
        height="60vh"
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

      <Grid gridTemplateColumns="repeat(6, 1fr)" minHeight="100vh">
        <GridItem
          // bgColor="red.600"
          colSpan={1}
          p={{ base: ".5rem", md: "1rem" }}
        >
          <Heading pb="2rem" size={{ base: "sm", lg: "lg" }} color="white">
            Filter By
          </Heading>

          <Box display="flex" flexDir="column" gap="1rem" pb="1rem">
            <Text>Fuel Type :</Text>
            <Button
              onClick={() => handleFilterChange("gas")}
              className={filter.gas ? "btn-active" : ""}
            >
              Gas
            </Button>
            <Button
              onClick={() => handleFilterChange("electric")}
              className={filter.electric ? "btn-active" : ""}
            >
              Electric
            </Button>
            <Button
              onClick={() => handleFilterChange("hybrid")}
              className={filter.hybrid ? "btn-active" : ""}
            >
              Hybrid
            </Button>
          </Box>

          <Box display="flex" flexDir="column" gap="1rem">
            <Text>Category :</Text>
            <Button
              onClick={() => handleFilterChange("sedan")}
              className={filter.sedan ? "btn-active" : ""}
            >
              Sedan
            </Button>
            <Button
              onClick={() => handleFilterChange("luxury")}
              className={filter.luxury ? "btn-active" : ""}
            >
              Luxury
            </Button>
            <Button
              onClick={() => handleFilterChange("suv")}
              className={filter.suv ? "btn-active" : ""}
            >
              SUV
            </Button>
          </Box>
        </GridItem>

        <GridItem
          colSpan={5}
          p={{ base: ".5rem", md: "1rem" }}
          height="110vh"
          overflowY="scroll"
          scrollbar="hidden"
          position="relative"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            bgColor="blackAlpha.700"
            position="sticky"
            backdropFilter="blur(10px)"
            zIndex="1"
            top="-16px"
            left="0"
            right="0"
            height="80px"
            alignItems="center"
          >
            <Heading size={{ base: "1xl", lg: "2xl" }}>
              Filtered By
              <span className="active">{filterResult}</span>
            </Heading>

            <Button
              onClick={() =>
                setFilter({
                  ...filter,
                  price: !filter.price,
                })
              }
            >
              Price {!filter.price ? <ArrowUp /> : <ArrowDown />}
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
    </Transition>
  );
}

export default Fleets;
