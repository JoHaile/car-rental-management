import { Grid, Box, Heading, Image, Center, Flex } from "@chakra-ui/react";
import feature from "../assets/img/feature-1.jpg";

function Features() {
  return (
    <>
      <Heading as="h1" textAlign="center" m="5rem 0 2rem 0" size="3xl">
        why rent from us?
      </Heading>

      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        justifyItems="center"
        gap={{ base: "2rem", md: "5rem" }}
        px="2.5rem"
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
        <Image src={feature} borderRadius="l1" />

        <Image src={feature} borderRadius="l1" />
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
            Flexible pickup
          </Heading>
          Choose the pickup and return locations that fit your itinerary.
          Whether it's the airport, city center, or your hotel, our app allows
          seamless one-way rentals, after-hours pickup, and contactless vehicle
          handoff to maximize your flexibility.
        </Flex>
        <Image src={feature} borderRadius="l1" />

        <Image src={feature} borderRadius="l1" />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h1" pb={2}>
            FLEXIBLE RENTAL PERIODS
          </Heading>
          Whether it's a day or a week, our flexible hire options start from
          just one day, tailored to your schedule.
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
        <Image src={feature} borderRadius="l1" />
      </Grid>
    </>
  );
}

export default Features;
