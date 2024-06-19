import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContain from "./GameCardContain";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10} padding="10px">
        {isLoading &&
          skeletons.map((index) => (
            <GameCardContain>
              <GameCardSkeleton key={index} />
            </GameCardContain>
          ))}
        {data?.results.map((game) => (
          <GameCardContain>
            <GameCard game={game} key={game.id} />
          </GameCardContain>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
