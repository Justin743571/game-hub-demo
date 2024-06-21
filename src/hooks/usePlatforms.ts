import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Platforms";
import ApiClient from "../services.ts/api-client";
import platforms from "../data/platforms";
import ms from "ms";

const queryClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: queryClient.getAll,
    staleTime: ms("24h"), //24h
    initialData:platforms
  });
};

export default usePlatforms;
