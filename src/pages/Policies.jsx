import policy from "../assets/policies.json";
import { Accordion, Flex, Heading, Span, Text } from "@chakra-ui/react";
import Transition from "../Transition";

function Policies() {
  return (
    <Transition>
      <Flex direction="column" p={4} maxW="800px" mx="auto">
        <Heading
          size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign={"center"}
          mb={8}
        >
          {policy.companyName}
        </Heading>
        <Text mb="3rem">{policy.companyDescription}</Text>

        <Accordion.Root multiple variant="enclosed">
          {policy.generalPolicies.map((pol, index) => (
            <Accordion.Item key={index} value={pol.policyName} p={4}>
              <Accordion.ItemTrigger cursor="pointer">
                <Span flex="1" color="blue.400">
                  {pol.policyName}
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>

              <Accordion.ItemContent>
                <Accordion.ItemBody>{pol.description}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Flex>
    </Transition>
  );
}

export default Policies;
