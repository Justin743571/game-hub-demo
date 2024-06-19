import { Card, CardBody, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Flex justify="space-between">
        <HStack>
          {game.parent_platforms.map(({ platform }, index) => (
            <PlatformIconList platform={platform} key={index} />
          ))}
        </HStack>
        <CriticScore score={game.metacritic}/>
        </Flex>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
