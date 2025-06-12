import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";

function IconText({ text, icon }) {
  return (
    <Box textAlign="center">
      <Icon as={icon} boxSize="16px" />
      <Text color="grey" textStyle="sm">
        {text}
      </Text>
    </Box>
  );
}

export default IconText;
