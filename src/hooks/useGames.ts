import { useInfiniteQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import ApiClient, { FetchResponse } from "../services.ts/api-client";
import useGameQueryStore from "../stroe";
import ms from "ms";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("24h"), //24h
  });
};

export default useGames;
