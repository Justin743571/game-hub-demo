import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <SimpleGrid columns={{ sm:1, md:2, lg:4, xl:5}} spacing={10} padding="10px">
      {data?.results.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
