import requirement from "../assets/requirements.json";
import { Accordion, Flex, Heading, Span, Text } from "@chakra-ui/react";
import Transition from "../transition";

function Requirements() {
  return (
    <Transition>
      <Flex direction="column" p={4} maxW="800px" mx="auto">
        <Heading
          size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign={"center"}
          mb={8}
        >
          Requirements
        </Heading>

        <Accordion.Root multiple variant="enclosed">
          {requirement.map((req, index) => (
            <Accordion.Item key={index} value={req.policyName} p={4}>
              <Accordion.ItemTrigger cursor="pointer">
                <Span flex="1" color="blue.400">
                  {req.policyName}
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>

              <Accordion.ItemContent>
                <Accordion.ItemBody>{req.description}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Flex>
    </Transition>
  );
}

export default Requirements;
