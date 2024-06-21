import useTrailer from "../hooks/useTrailer";

const GameTrailer = ({ gameId }: { gameId: number }) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <video
      src={data?.results[0].data[480]}
      poster={data?.results[0].preview}
      controls
    ></video>
  );
};

export default GameTrailer;
