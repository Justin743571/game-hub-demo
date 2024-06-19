import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Platforms";
import ApiClient from "../services.ts/api-client";

const queryClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: queryClient.getAll,
  });
};

export default usePlatforms;
