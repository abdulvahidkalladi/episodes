import axios from "./axios";
import Episodes from "./components/episodes";
import { useEffect, useState } from "react";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("futurama/episodes")
      .then((response) => {
        setIsLoading(false);
        setEpisodes(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <ChakraProvider>
      <Box w={["1200px"]} mx="auto">
        <Heading color="blue.500" fontSize="3xl" py="6" fontWeight="medium">
          Episodes
        </Heading>
        <Episodes isLoading={isLoading} episodes={episodes} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
