import faqs from "../assets/faqs.json";
import { Heading, Accordion, Span, Flex } from "@chakra-ui/react";

function Faq() {
  return (
    <Flex direction="column" p={4} maxW="800px" mx="auto">
      <Heading
        size={{ base: "2xl", md: "3xl", lg: "4xl" }}
        textAlign={"center"}
        mb={8}
      >
        Frequently Asked Questions
      </Heading>

      <Accordion.Root multiple variant="enclosed">
        {faqs.map((faq, index) => (
          <Accordion.Item key={index} value={faq.question} p={4}>
            <Accordion.ItemTrigger cursor="pointer">
              <Span flex="1" fontWeight="bold" color="blue.400">
                {faq.question}
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody>{faq.answer}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Flex>
  );
}

export default Faq;
