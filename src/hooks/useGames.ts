import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import ApiClient, { FetchResponse } from "../services.ts/api-client";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  return useQuery<FetchResponse<Game>>({
    queryKey: ["games"],
    queryFn: apiClient.getAll,
  });
};

export default useGames;
