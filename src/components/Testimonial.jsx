import "../components/horizontal-scroll/horizontal.css";
import testimonial from "../../testimonial.json";
import { HStack, Card, Heading, Center } from "@chakra-ui/react";
import { Star, Verified } from "lucide-react";

function Testimonial() {
  const threeStar = [
    <Star fill="yellow" />,
    <Star fill="yellow" />,
    <Star fill="yellow" />,
    <Star fill="yellow" />,
  ];
  const fourStar = [
    <Star fill="yellow" />,
    <Star fill="yellow" />,
    <Star fill="yellow" />,
    <Star fill="yellow" />,
  ];
  const fiveStar = [
    <Star fill="yellow" />,
    <Star fill="yellow" />,
    <Star fill="yellow" />,
    <Star fill="yellow" />,
    <Star fill="yellow" />,
  ];

  return (
    <>
      <Center
        my={{ base: "1rem", lg: "3rem" }}
        display="flex"
        flexDirection="column"
      >
        <Heading size={{ base: "2xl", lg: "4xl" }} textTransform="capitalize">
          What our customers say
        </Heading>
        <Heading color="whiteAlpha.800">
          Real Experiences Genuine Reviews.
        </Heading>
      </Center>

      <div className="scroll-container">
        <div className="slider">
          {[...testimonial, ...testimonial].map((test, index) => (
            <Card.Root
              color={"whiteAlpha.800"}
              key={index}
              width={{ base: "250px", lg: "300px" }}
              mb="2rem"
            >
              <Card.Body pb={0}>{test.comment}</Card.Body>

              <Card.Footer>
                Rating:
                {test.rating === 4
                  ? fourStar.map((p, i) => <div key={i}>{p}</div>)
                  : test.rating === 5
                    ? fiveStar.map((p, i) => <div key={i}>{p}</div>)
                    : threeStar.map((p, i) => <div key={i}>{p}</div>)}
              </Card.Footer>

              <Card.Footer margin={0}>
                <HStack py={2}>
                  {test.reviewer}
                  <Verified fill="royalblue" size="20px" />
                </HStack>
              </Card.Footer>
            </Card.Root>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
