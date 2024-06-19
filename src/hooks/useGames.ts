import { useQuery } from "@tanstack/react-query";
import apiClient from "../services.ts/api-client";

export interface Platform {
    id:number;
    name:string;
    slug:string;
}
interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:Platform}[];
  metacritic:number;
}

const useGames = () => {
  return useQuery<FetchResponse<Game>>({
    queryKey: ["games"],
    queryFn: () => apiClient.get("/games").then((res) => res.data),
  });
};

export default useGames;
