import Carousel from "./carousel/carousel";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import car1 from "../assets/chevrolet/2018-chevrolet-impala-99leadgallery-1529679404.jpg";
import car2 from "../assets/chevrolet/2018-chevrolet-impala-103-1529679402.jpg";
import car3 from "../assets/chevrolet/2018-chevrolet-impala-105-1529679402.jpg";
import car4 from "../assets/chevrolet/2018-chevrolet-impala-106-1529679402.jpg";

const cars = [car1, car2, car3, car4];

function Mission() {
  return (
    <SimpleGrid>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        dolor non quis explicabo minus sit modi, rerum veniam. Ducimus, ad.
      </Text>
      <Box maxWidth="75%" margin="auto" overflow="hidden" borderRadius="l1">
        <Carousel>
          {cars.map((img, index) => (
            <img key={index} src={img} />
          ))}
        </Carousel>
      </Box>
    </SimpleGrid>
  );
}

export default Mission;
