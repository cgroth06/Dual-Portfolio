import { Box, SimpleGrid, Image, Link, Text } from "@chakra-ui/react";
import pushPull from "../assets/pushPull.gif";
import timer from "../assets/timer.gif";
import cedar from "../assets/cedar.png";
import githubImg from "../assets/github.png";
import readme from "../assets/readme.png";
import aline from "../assets/HomePage.png";
import artvine from "../assets/artvine.png";

const projects = [
    {
        title: "ArtVine",
        image: artvine,
        liveLink: "https://artvine.onrender.com/",
        repoLink: "https://github.com/cgroth06/ArtVine",
    },
    {
        title: "Themed-Timer",
        image: timer,
        liveLink: "https://cgroth06.github.io/Themed-Timer/",
        repoLink: "https://github.com/cgroth06/Themed-Timer",
    },
    {
        title: "Aline",
        image: aline,
        liveLink: "https://aline-events.onrender.com/",
        repoLink: "https://github.com/cgroth06/Aline-Events",
    },
    {
        title: "README Generator",
        image: readme,
        liveLink: "https://github.com/cgroth06/README-Generator",
    },
    {
        title: "push <> pull",
        image: pushPull,
        liveLink: "https://www.chrisgroth.com/?lightbox=dataItem-lmmhusu33",
    },
    {
        title: "Abscents Cedar",
        image: cedar,
        liveLink: "https://www.chrisgroth.com/?lightbox=dataItem-lmmhusu34",
    },
];

function Portfolio() {
    return (
        <Box minH="calc(100vh - 260px)" px={6} py={10}>
            <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
                Software
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
                {projects.map((project) => (
                    <Box
                        key={project.title}
                        position="relative"
                        borderRadius="md"
                        overflow="hidden"
                        h="200px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="0.3s"
                        _hover={{ transform: "scale(1.05)" }}
                    >
                        {/* Background Image */}
                        <Box
                            position="absolute"
                            w="100%"
                            h="100%"
                            backgroundImage={`url(${project.image})`}
                            backgroundSize="contain" // Ensures full image is visible
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                        />

                        {/* Overlay for Hover Effect */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            w="100%"
                            h="100%"
                            bg="rgba(0, 0, 0, 0.9)"
                            opacity={0}
                            transition="0.3s"
                            _hover={{ opacity: 1 }}
                            display="flex"
                            flexDir="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            color="white"
                            p={4}
                        >
                            <Link href={project.liveLink} isExternal fontSize="lg" fontWeight="bold">
                                {project.title}
                            </Link>
                            {project.repoLink && (
                                <Link href={project.repoLink} isExternal>
                                    <Image src={githubImg} alt="GitHub" h="20px" mt={2} filter="invert(1)" />
                                </Link>
                            )}
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Portfolio;
