import { Grid, Box, Heading, Image, Center, Flex } from "@chakra-ui/react";
import selection from "../assets/img/wide-selection.webp";
import booking from "../assets/img/online-booking.jpg";
import insurance from "../assets/img/insurance.jpg";

function Features() {
  return (
    <>
      <Heading as="h1" textAlign="center" my="5rem" size="4xl">
        why rent from us?
      </Heading>

      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        justifyItems="center"
        gap={{ base: "5rem", md: "3rem" }}
        px={{ base: "2rem", md: "3rem", lg: "9rem" }}
        mb="10rem"
        className="feature"
        transition="all .5s ease"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h1" pb={2}>
            Wide selection
          </Heading>
          Explore an extensive selection of vehicles, from economical city cars
          and spacious SUVs to premium sedans. Each listing includes real-time
          availability, rental rates, and vehicle features for a transparent and
          informed decision-making process.
        </Flex>
        <Image
          src={selection}
          borderRadius="l1"
          aspectRatio={16 / 9}
          _hover={{
            scale: "1.05",
          }}
          transition="all .25s ease"
        />

        <Image
          src={booking}
          borderRadius="l1"
          aspectRatio={16 / 9}
          _hover={{
            scale: "1.05",
          }}
          transition="all .25s ease"
        />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h1" pb={2}>
            Instant booking
          </Heading>
          Easily book your chosen car in under two minutes. Our process includes
          quick date selection, immediate price confirmation without hidden
          fees, and instant email confirmation for your reservation. No queues,
          no paperwork—just tap, book, and drive.
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h1" pb={2}>
            INSURANCE INCLUDED
          </Heading>
          At Gondar Car Rentals, we provide luxury rentals with comprehensive
          insurance, ensuring a hassle-free experience. Whether for business or
          leisure, our top-tier service guarantees a secure, effortless, and
          elegant journey.
        </Flex>
        <Image
          src={insurance}
          borderRadius="l1"
          aspectRatio={16 / 9}
          _hover={{
            scale: "1.05",
          }}
          transition="all .25s ease"
        />
      </Grid>
    </>
  );
}

export default Features;
