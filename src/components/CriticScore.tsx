import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const ScoreColor = score > 80 ? "green" : score > 60 ? "yellow" : "";
  return <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={ScoreColor}>{score}</Badge>;
};

export default CriticScore;
