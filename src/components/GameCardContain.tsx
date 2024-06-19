import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContain = ({ children }: { children: ReactNode }) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContain;
