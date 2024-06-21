import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import ApiClient from "../services.ts/api-client";

const useTrailer = (gameId:number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["movies", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
