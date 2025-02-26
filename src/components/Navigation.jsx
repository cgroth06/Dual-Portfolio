import { 
    Tabs, TabList, Tab, 
    Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, 
    IconButton, useDisclosure, Box
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navigation() {
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const activeTabStyle = {
        fontWeight: "bold",
        color: "teal.500",
        borderRadius: "md", // Makes the active tab stand out more
        px: 3, // Add padding for better visibility
        py: 2,
    };

    return (
        <>
            {/* Desktop Navigation */}
            <Tabs variant="unstyled" display={{ base: "none", md: "flex" }}>
                <TabList>
                    {/* <Tab as={Link} to="/About" sx={location.pathname === "/About" ? activeTabStyle : {}}>About</Tab> */}
                    <Tab as={Link} to="/Portfolio" sx={location.pathname === "/Portfolio" ? activeTabStyle : {}}>Portfolio</Tab>
                    <Tab as={Link} to="/Contact" sx={location.pathname === "/Contact" ? activeTabStyle : {}}>Contact</Tab>
                    <Tab as={Link} to="/Resume" sx={location.pathname === "/Resume" ? activeTabStyle : {}}>About</Tab>
                </TabList>
            </Tabs>

            {/* Mobile Hamburger Button */}
            <Box display={{ base: "block", md: "none" }}>
                <IconButton
                    aria-label="Open Menu"
                    icon={<HamburgerIcon />}
                    size="lg"
                    variant="ghost"
                    onClick={onOpen}
                />
            </Box>

            {/* Mobile Drawer Navigation */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <Tabs variant="unstyled">
                            <TabList flexDirection="column" gap={4}>
                                <Tab as={Link} to="/About" onClick={onClose} sx={location.pathname === "/About" ? activeTabStyle : {}}>About</Tab>
                                <Tab as={Link} to="/Portfolio" onClick={onClose} sx={location.pathname === "/Portfolio" ? activeTabStyle : {}}>Portfolio</Tab>
                                <Tab as={Link} to="/Contact" onClick={onClose} sx={location.pathname === "/Contact" ? activeTabStyle : {}}>Contact</Tab>
                                <Tab as={Link} to="/Resume" onClick={onClose} sx={location.pathname === "/Resume" ? activeTabStyle : {}}>Resume</Tab>
                            </TabList>
                        </Tabs>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Navigation;
