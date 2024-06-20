import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContain from "./GameCardContain";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((index) => (
            <GameCardContain key={index}>
              <GameCardSkeleton />
            </GameCardContain>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContain key={game.id}>
                <GameCard game={game} />
              </GameCardContain>
            ))}
          </React.Fragment>
        ))}
        {}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Show More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
