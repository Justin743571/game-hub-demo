import { Flex, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"

const NavBar = () => {
  return (
    <Flex justify="space-between">
        <Image src={logo} boxSize="60px"/>
        <Text>Mode</Text>
    </Flex>
  )
}

export default NavBar