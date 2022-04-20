import Episode from "../episode";
import { SimpleGrid } from "@chakra-ui/react";

const Episodes = ({ isLoading, episodes }) => {
  return (
    <SimpleGrid columns={5} spacing={4}>
      {episodes &&
        episodes
          .splice(0, 25)
          .map((episode) => <Episode key={episode.id} {...episode} />)}
    </SimpleGrid>
  );
};

export default Episodes;
