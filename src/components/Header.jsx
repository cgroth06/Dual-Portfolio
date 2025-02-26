import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import grindinghead from '../assets/grindingbw.png';
import Navigation from './Navigation';

const Header = () => {
  return (
    <Box 
      as="header"
      bgSize="cover"
      bgPosition="top"
      height="100px"
      borderBottom="10px solid rgba(235, 235, 240, 0.635)"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={6} // Adds padding on both sides
    >
      <Heading as="h1" fontSize={{ base: "30px", md: "50px" }}>
        Chris Groth
      </Heading>
      <Navigation />
    </Box>
  );
}

export default Header;
