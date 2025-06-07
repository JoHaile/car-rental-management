import { Box, Center, Flex } from "@chakra-ui/react";
import "./styles.css";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { useState } from "react";

function Carousel({ children: slides }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const next = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <Box overflow="hidden" position="relative">
      <Box
        display="flex"
        width="100%"
        transition=".5s ease"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </Box>
      <Box
        position="absolute"
        inset="0"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <CircleChevronLeft size="40px" cursor="pointer" onClick={prev} />
        <CircleChevronRight size="40px" cursor="pointer" onClick={next} />
      </Box>
      y
      <Flex
        position="absolute"
        bottom="20px"
        left="0"
        right="0"
        height="40px"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className={`dots ${current === index && "big"}`}
          ></div>
        ))}
      </Flex>
    </Box>
  );
}

export default Carousel;
