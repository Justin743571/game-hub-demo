import useGameQueryStore from "../stroe";
import useGenres from "./useGenres";

const useGenre = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === selectedGenreId);
};

export default useGenre;
