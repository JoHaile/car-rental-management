import { Grid, Box, Heading, Image, Center, Flex } from "@chakra-ui/react";
import selection from "../assets/img/wide-selection.webp";

function Features() {
  return (
    <>
      <Heading as="h1" textAlign="center" m="5rem 0 2rem 0" size="3xl">
        why rent from us?
      </Heading>

      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        justifyItems="center"
        gap={{ base: "1rem", md: "3rem" }}
        px={{ base: "5rem", md: "3rem", lg: "10rem" }}
        className="feature"
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
        <Image src={selection} borderRadius="l1" aspectRatio={1 / 1} />

        <Image src={selection} borderRadius="l1" aspectRatio={1 / 1} />
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
          Our luxury hires include insurance, removing the worry of arranging
          separate protection.
        </Flex>
        <Image src={selection} borderRadius="l1" aspectRatio={1 / 1} />
      </Grid>
    </>
  );
}

export default Features;
