import { Button, Heading, HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Callout() {
  return (
    <>
      <HStack
        display="flex"
        justifyContent="center"
        flexDir="column"
        bgColor="royalblue"
        py="2rem"
        mb="2rem"
      >
        <Heading size="4xl" textAlign="center">
          Ready for your trip?
        </Heading>
        <Text pb="1rem">Reserve your car now in just a few clicks.</Text>
        <NavLink to="/booking">
          <Button>Book A Car</Button>
        </NavLink>
      </HStack>
    </>
  );
}

export default Callout;
