import Youtube from "react-youtube";
import screenfull from "screenfull";
import { memo } from "react";
import { Box, Heading, Text, AspectRatio } from "@chakra-ui/react";

const opts = {
  height: "100%",
  width: "100%",
  controls: "1",
  playerVars: {
    autoplay: 0,
  },
};

const fullScreen = (event) => {
  const iframe = event.target.getIframe();
  if (screenfull.isEnabled) {
    screenfull.request(iframe);
  }
};

const Episode = memo((props) => {
  const { is, title, writers, originalAirDate, desc, number } = props;
  return (
    <Box
      bg="gray.100"
      p="3"
      borderRadius="base"
      border="1px"
      borderColor="gray.200"
    >
      <Box>
        <AspectRatio maxW="full" ratio={16 / 9}>
          <Youtube videoId="ScMzIvxBSi4" opts={opts} onPlay={fullScreen} />
        </AspectRatio>
      </Box>
      <Box mt="3">
        <Heading mb="2" size="sm">
          {title}
        </Heading>
        <Text fontSize="sm" fontWeight="normal" mb="1" color="gray.600">
          {originalAirDate}
        </Text>
        <Text fontSize="sm" mb="4">
          {desc.substring(0, 120)}
        </Text>
      </Box>
    </Box>
  );
});

export default Episode;
