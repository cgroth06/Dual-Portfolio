import { Box, Flex, Image, Text } from "@chakra-ui/react";
import headshot from "../assets/headshot.png";

export default function About() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="calc(100vh - 260px)"
      p={6}
    >
      <Image
        src={headshot}
        alt="Chris Groth"
        borderRadius="full"
        boxSize={{ base: "150px", md: "250px" }} 
        objectFit="cover"
        mb={4}
        filter="grayscale(100%)"
      />
      <Box maxW="800px" textAlign="justify">
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
          Chris Groth is a full stack developer with a passion for problem-solving,
          learning, and collaborating. With a background in the arts and education, 
          Chris brings a unique perspective to web development. He recently completed 
          the University of Minnesota Full Stack Flex Web Development Bootcamp and is 
          eager to continue growing in the field.
        </Text>
      </Box>
    </Flex>
  );
}
