import { useQuery } from "@tanstack/react-query";
import apiClient from "../services.ts/api-client";
import { Text } from "@chakra-ui/react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const { data, error, isLoading } = useQuery<FetchResponse<Game>>({
    queryKey: ["games"],
    queryFn: () => apiClient.get("/games").then((res) => res.data),
  });

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <div>
      <ul>
        {data?.results.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
