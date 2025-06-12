import { SimpleGrid, Box } from "@chakra-ui/react";

function Address() {
  return (
    <div>
      Address Page
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} p={5}>
        <Box bg="blue.900" p={5} borderRadius="md" />
        <Box bg="blue.700" p={5} borderRadius="md" />
        <Box bg="blue.400" p={5} borderRadius="md" />
      </SimpleGrid>
    </div>
  );
}

export default Address;
