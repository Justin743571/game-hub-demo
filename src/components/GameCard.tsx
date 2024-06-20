import { Card, CardBody, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import Game from "../entities/Game";
import noImage from "../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image || noImage} />
      <CardBody>
        <Flex justify="space-between" marginBottom={2}>
          <HStack>
            {game.parent_platforms.map(({ platform }, index) => (
              <PlatformIconList platform={platform} key={index} />
            ))}
          </HStack>
          <CriticScore score={game.metacritic} />
        </Flex>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
