import { Box, Button, Card, Image, Text, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Cog, Fuel } from "lucide-react";
import { GiCarSeat } from "react-icons/gi";
import IconText from "./IconText";
import { FaHorseHead } from "react-icons/fa";

function CarsCard({ cars }) {
  return (
    <>
      <Card.Root maxWidth="370px" overflow="hidden">
        <Image src={cars.photos[0]} />

        <Card.Header>
          {cars.make} {cars.model}
          <Card.Description>{cars.year}</Card.Description>
        </Card.Header>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="24px"
        >
          <Text>
            <span>$ {cars.rentalPricePerDay} Birr / Day</span>
          </Text>

          <NavLink to={`/booking/${cars.id}`}>
            <Button
              borderRadius="l1"
              color="whiteAlpha.900"
              bgColor="royalblue"
              size="sm"
            >
              Book
            </Button>
          </NavLink>
        </Box>

        <Card.Footer
          py={1.5}
          border="1px solid grey"
          borderRadius={"0 0 10px 10px"}
        >
          <HStack display="flex" justifyContent="space-between" width="100%">
            <IconText text={cars.features.transmission} icon={Cog} />
            <IconText text={cars.features.seats} icon={GiCarSeat} />
            <IconText text={cars.features.fuelType} icon={Fuel} />
            <IconText text={cars.horsePower} icon={FaHorseHead} />
          </HStack>
        </Card.Footer>
      </Card.Root>
    </>
  );
}

export default CarsCard;
