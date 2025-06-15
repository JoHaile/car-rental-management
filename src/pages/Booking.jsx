import { useParams } from "react-router-dom";
import data from "../assets/db22";
import { Image, Box, Grid, SimpleGrid } from "@chakra-ui/react";
import Carousel from "../components/carousel/Carousel";
import Transition from "../transition";

function Booking() {
  const { id } = useParams();
  const car = data.cars.filter((car) => car.id === id && car);

  if (!car) {
    return <div>Car not found</div>;
  }

  // console.log(car);

  return (
    <Transition>
      {car.map((c, index) => (
        <SimpleGrid
          key={c.id}
          columns={{ base: 1, md: 2 }}
          gap={{ base: "1rem", md: "1.rem" }}
        >
          <Box>
            <Carousel>
              {c.photos.map((p, index) => (
                <Image src={p} key={index} width="100%" />
              ))}
            </Carousel>
          </Box>

          <Box>
            <li>{c.make}</li>
            <li>{c.model}</li>
            <li>{c.horsePower}</li>
          </Box>
        </SimpleGrid>
      ))}
    </Transition>
  );
}

export default Booking;
