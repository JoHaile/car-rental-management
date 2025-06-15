import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import data from "../assets/db22";
import GoogleMap from "../components/GoogleMap";
import Transition from "../transition";

function Address() {
  return (
    <Transition>
      <Heading
        as="h1"
        size={{ base: "2xl", md: "3xl", lg: "4xl" }}
        textAlign="center"
        my={5}
      >
        {data.rentalCompany.name}
      </Heading>

      <SimpleGrid
        columns={{ base: 1 }}
        // spacing={10}
        p={5}
        textAlign="center"
        gap={5}
      >
        {data.rentalCompany.branches.map((brach) => (
          <div key={brach.branchId}>
            <Box p={5} borderRadius="md" boxShadow="2xl">
              <Heading color="royalblue">{brach.city}</Heading>
              <p>{brach.address}</p>
              <p>{brach.phone}</p>
              <strong style={{ color: "royalblue" }}>Opening Hours</strong>
              <p>{brach.openingHours}</p>
            </Box>

            <GoogleMap mapURL={brach.map} />
          </div>
        ))}
      </SimpleGrid>
    </Transition>
  );
}

export default Address;
