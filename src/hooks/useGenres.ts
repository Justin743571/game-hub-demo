import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";
import ApiClient from "../services.ts/api-client";

const apiClient = new ApiClient<Genre>("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });
};

export default useGenres;
