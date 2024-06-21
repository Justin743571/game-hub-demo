import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";
import ApiClient from "../services.ts/api-client";
import genres from "../data/genres";
import ms from "ms";

const apiClient = new ApiClient<Genre>("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: genres
  });
};

export default useGenres;
