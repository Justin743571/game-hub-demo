import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services.ts/api-client";
import { Game } from "../entities/Game";






const useGames = () => {
  return useQuery<FetchResponse<Game>>({
    queryKey: ["games"],
    queryFn: () => apiClient.get("/games").then((res) => res.data),
  });
};

export default useGames;
