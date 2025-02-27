
import { Box, SimpleGrid, Image, Link, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import { softwarePortfolio } from "../data/softwarePortfolio";
import { artistPortfolio } from "../data/artistPortfolio";
import githubImg from "../assets/github.png";

function Portfolio() {
    const [tabIndex, setTabIndex] = useState(0);

    const renderPortfolio = (portfolio) => (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            {portfolio.map((item) => (
                <Box
                    key={item.title}
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
                    <Box
                        position="absolute"
                        w="100%"
                        h="100%"
                        backgroundImage={`url(${item.image})`}
                        backgroundSize="contain"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                    />
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
                        {item.liveLink ? (
                            <Link href={item.liveLink} isExternal fontSize="lg" fontWeight="bold">
                                {item.title}
                            </Link>
                        ) : item.demoVideo ? (
                            <Box>
                                <Text fontSize="lg" fontWeight="bold">{item.title}</Text>
                                <video controls width="100%" style={{ marginTop: "8px" }}>
                                    <source src={item.demoVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>
                        ) : (
                            <Text fontSize="lg" fontWeight="bold">{item.title}</Text>
                        )}
                        {item.repoLink && (
                            <Link href={item.repoLink} isExternal>
                                <Image src={githubImg} alt="GitHub" h="20px" mt={2} filter="invert(1)" />
                            </Link>
                        )}
                    </Box>
                </Box>
            ))}
        </SimpleGrid>
    );

    return (
        <Box minH="calc(100vh - 260px)" p={6} textAlign="center">
            <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)} align="left" variant="unstyled">
                <TabList
                    display="flex"
                    justifyContent="left"
                    bg="gray.200"
                    p={2}
                    pb={0}
                    borderTopRadius="lg"
                    boxShadow="md"
                >
                    {["Software Portfolio", "Artist Portfolio"].map((label, index) => (
                        <Tab
                            key={index}
                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            fontWeight="bold"
                            _selected={{ bg: "white", color: "black", fontWeight: "bold" }}
                            _hover={tabIndex === index ? {} : { bg: "gray.300" }}
                            px={6}
                            py={2}
                            opacity={tabIndex === index ? 1 : 0.6}
                            borderTopRadius="lg"
                        >
                            {label}
                        </Tab>
                    ))}
                </TabList>
                <Box bg="white" borderRadius="lg" boxShadow="md" mt="-2px" p={6}>
                    <TabPanels>
                        <TabPanel>{renderPortfolio(softwarePortfolio)}</TabPanel>
                        <TabPanel>{renderPortfolio(artistPortfolio)}</TabPanel>
                    </TabPanels>
                </Box>
            </Tabs>
        </Box>
    );
}

export default Portfolio;
