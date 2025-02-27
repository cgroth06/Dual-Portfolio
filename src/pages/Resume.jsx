import { useState } from "react";
import { 
    Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Link, UnorderedList, ListItem, SimpleGrid, Stack, Divider 
} from "@chakra-ui/react";

export default function Resume() {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Box minH="calc(100vh - 260px)" p={6} textAlign="center">
            <Tabs index={selectedTab} onChange={(index) => setSelectedTab(index)} align="left" variant="unstyled">
                {/* Tab List */}
                <TabList
                    display="flex"
                    justifyContent="left"
                    bg="gray.200"
                    p={2}
                    pb={0}
                    borderTopRadius="lg"
                    boxShadow="md"
                >
                    {["Software Developer", "Artist / Educator"].map((label, index) => (
                        <Tab
                            key={index}
                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            fontWeight="bold"
                            _selected={{ bg: "white", color: "black", fontWeight: "bold" }}
                            _hover={selectedTab === index ? {} : { bg: "gray.300" }}
                            px={6}
                            py={2}
                            opacity={selectedTab === index ? 1 : 0.6}
                            borderTopRadius="lg"
                        >
                            {label}
                        </Tab>
                    ))}
                </TabList>

                {/* Tab Panels */}
                <Box bg="white" borderRadius="lg" boxShadow="md" mt="-2px" p={6}>
                    <TabPanels>
                        <TabPanel>
                            {/* Skills Section */}
                            <Text fontSize="2xl" fontWeight="bold" mb={3}>Technical Skills</Text>
                            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3} textAlign="left">
                                {["JavaScript", "TypeScript", "HTML", "CSS", "React", "Node.js", "AWS", "MongoDB", "PostgreSQL", "GraphQL", "Git", "CI/CD"].map((skill) => (
                                    <Text key={skill} fontSize="md">• {skill}</Text>
                                ))}
                            </SimpleGrid>

                            <Divider my={5} />

                            {/* Projects Section */}
                            <Text fontSize="2xl" fontWeight="bold" mb={3}>Projects</Text>
                            <Stack spacing={4} textAlign="left">
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold" color="gray.700">Treecipe</Text>
                                    <Text fontSize="md" color="gray.600">MERN stack app utilizing AWS S3 for image uploads | <Text as="span" fontWeight="semibold">Lead Developer</Text></Text>
                                </Box>
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold" color="gray.700">ArtVine</Text>
                                    <Text fontSize="md" color="gray.600">MERN stack application | Backend-focused, using MongoDB, RESTful API, JWT, and GraphQL</Text>
                                </Box>
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold" color="gray.700">Aline</Text>
                                    <Text fontSize="md" color="gray.600">PERN stack app | Integrated multiple 3rd-party APIs, JWT, Supabase, and Chakra UI</Text>
                                </Box>
                            </Stack>

                            <Divider my={5} />

                            {/* Experience Section */}
                            <Text fontSize="2xl" fontWeight="bold" mb={3}>Professional Experience</Text>
                            <Stack spacing={4} textAlign="left">
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold" color="gray.700">Full-Time Visual Arts Faculty & Department Technician</Text>
                                    <Text fontSize="md" fontStyle="italic" color="gray.500">Idyllwild Arts Academy | Oct 2018 - Aug 2024</Text>
                                    <Text fontSize="md" color="gray.600">Taught Creative Technology, managed macOS/Windows software, and facilitated tech troubleshooting.</Text>
                                </Box>
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold" color="gray.700">Artist & Instructor in Residence</Text>
                                    <Text fontSize="md" fontStyle="italic" color="gray.500">Leonardo’s Basement | Jul 2012 - Oct 2018</Text>
                                    <Text fontSize="md" color="gray.600">Developed STEAM courses, managed tech tools like 3D printers and laser engravers.</Text>
                                </Box>
                            </Stack>

                            <Divider my={5} />

                            {/* Download Resume */}
                            <Link
                                href="/assets/software-cv.pdf"
                                download="ChrisGroth_Software_Resume.pdf"
                                color="teal.500"
                                mt={4}
                                display="block"
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                Download Software Resume
                            </Link>
                        </TabPanel>

                        {/* Artist / Educator Tab */}
                        <TabPanel>
                            <Text fontSize="2xl" fontWeight="bold">Multidisciplinary Artist | Educator | Curator</Text>
                            <Text fontSize="md" mt={2}>
                                Sculptor and educator with over a decade of experience in creating, exhibiting, and teaching visual arts. Specializes in sculpture, creative technology, and metal casting, with a strong background in curriculum development and mentorship. Exhibited nationally and internationally, with solo and group shows in galleries, museums, and alternative spaces. Experienced in curating exhibitions and facilitating arts programming. Committed to fostering creative growth in students and engaging with diverse artistic communities.
                            </Text>
                            <Divider my={4} />
                            <Text fontSize="xl" fontWeight="bold">Summary:</Text>
                            <UnorderedList spacing={2} mt={2} textAlign="left">
                                <ListItem><strong>Education & Teaching:</strong> MFA in Sculpture, University of Minnesota; extensive teaching experience at Idyllwild Arts Academy, University of Minnesota, Leonardo's Basement, Macalester College, and Anoka Ramsey Community College among others.</ListItem>
                                <ListItem><strong>Exhibition & Curation:</strong> Work featured in numerous exhibitions, including international showcases; curated multiple exhibitions.</ListItem>
                                <ListItem><strong>Awards & Fellowships:</strong> Recipient of multiple grants and fellowships, including Franconia Sculpture Park Residency.</ListItem>
                                <ListItem><strong>Collaborative & Leadership Roles:</strong> Faculty sponsor for environmental and arts enterprise initiatives; juror and panelist.</ListItem>
                            </UnorderedList>
                            <Link
                                href="/assets/artist-cv.pdf"
                                download="ChrisGroth_Artist_Resume.pdf"
                                color="teal.500"
                                mt={4}
                                display="block"
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                Download Artist/Educator Resume
                            </Link>
                        </TabPanel>
                    </TabPanels>
                </Box>
            </Tabs>
        </Box>
    );
}
