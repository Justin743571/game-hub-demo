import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services.ts/api-client";
import useGameQueryStore from "../stroe";
import Game from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useQuery<FetchResponse<Game>>({
    queryKey: ["games",gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
        },
      }),
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useGames;
