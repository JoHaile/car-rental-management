import { Box, Card, Image, Text } from "@chakra-ui/react";
import { listAnatomy } from "@chakra-ui/react/anatomy";
import { NavLink } from "react-router-dom";

function CarsCard({ cars }) {
  return (
    <>
      <Card.Root maxWidth="370px" overflow="hidden">
        <Image src={cars.photos[0]} />

        <Card.Header>
          {cars.make}
          <Card.Description>
            {cars.year} {cars.model}
          </Card.Description>
        </Card.Header>

        <Box display="flex" justifyContent="space-between" p="24px">
          <Text>{cars.rentalPricePerDay} Birr</Text>

          {cars.availability ? (
            <Text>Available</Text>
          ) : (
            <Text>Available in 2 days</Text>
          )}
        </Box>
        <NavLink to="/booking">Book now</NavLink>
      </Card.Root>
    </>
  );
}

export default CarsCard;
