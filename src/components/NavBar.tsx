import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Flex justify="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
