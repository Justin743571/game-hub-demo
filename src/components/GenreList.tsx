import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services.ts/api-client";
import Genre from "../entities/Genre";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
  });
  return (
    <ul>
      {data?.results.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
