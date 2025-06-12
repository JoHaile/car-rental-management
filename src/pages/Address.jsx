import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import data from "../assets/db.json";
import GoogleMap from "../components/GoogleMap";

function Address() {
  return (
    <div>
      <Heading
        as="h1"
        size={{ base: "2xl", md: "3xl", lg: "4xl" }}
        textAlign="center"
        my={5}
      >
        {data.rentalCompany.name}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        // spacing={10}
        p={5}
        textAlign="center"
        gap={5}
      >
        {data.rentalCompany.branches.map((brach) => (
          <Box key={brach.branchId} p={5} borderRadius="md" boxShadow="2xl">
            <Heading color="royalblue">{brach.city}</Heading>
            <p>{brach.address}</p>
            <p>{brach.phone}</p>
            <strong style={{ color: "royalblue" }}>Opening Hours</strong>
            <p>{brach.openingHours}</p>
          </Box>
        ))}
      </SimpleGrid>

      <GoogleMap />
    </div>
  );
}

export default Address;
