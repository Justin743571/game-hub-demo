import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContain from "./GameCardContain";
import GameCardSkeleton from "./GameCardSkeleton";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <HStack marginLeft={3} paddingBottom={3}>
        <PlatformSelector />
        <SortSelector/>
      </HStack>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={3} padding="10px">
        {isLoading &&
          skeletons.map((index) => (
            <GameCardContain key={index}>
              <GameCardSkeleton />
            </GameCardContain>
          ))}
        {data?.results.map((game) => (
          <GameCardContain key={game.id}>
            <GameCard game={game} />
          </GameCardContain>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
