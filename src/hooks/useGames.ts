import { useQuery } from "@tanstack/react-query";
import apiClient from "../services.ts/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface Game {
  id: number;
  name: string;
}

const useGames = () => {
  return useQuery<FetchResponse<Game>>({
    queryKey: ["games"],
    queryFn: () => apiClient.get("/games").then((res) => res.data),
  });
};

export default useGames;
