import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ExpandableText = ({ text }: { text: string }) => {
  const [expandableText, setExpandableText] = useState(false);
  const limit = 300;

  if (text.length < limit) return text;

  const handledText = expandableText
    ? text
    : text.substring(0, limit) + "......";

  return (
    <Text>
      {handledText}
      <Button
        onClick={() => setExpandableText(!expandableText)}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
      >
        {expandableText ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
