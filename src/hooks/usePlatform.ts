import useGameQueryStore from "../stroe";
import usePlatforms from "./usePlatforms";

const usePlatform = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  
  const { data: platforms } = usePlatforms();
  return platforms?.results.find(
    (platform) => platform.id === selectedPlatformId
  );
};

export default usePlatform;
