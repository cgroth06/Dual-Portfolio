import { Box, Flex, HStack, Link, Image } from '@chakra-ui/react';
import linkedinImg from '../assets/linkedin.png';
import githubImg from '../assets/github.png';
import instaImg from '../assets/insta.png';

function Footer() {
  return (
    <Box as="footer" py={3} mt={8}>
      <Flex justify="center">
        <HStack spacing={6}>
          <Link href="https://www.linkedin.com/in/chris-groth" isExternal>
            <Image src={linkedinImg} alt="LinkedIn" boxSize="31px" />
          </Link>
          <Link href="https://www.instagram.com/chris__groth/" isExternal>
            <Image src={instaImg} alt="Instagram" height="25px" />
          </Link>
          <Link href="https://github.com/cgroth06" isExternal>
            <Image src={githubImg} alt="GitHub" boxSize="26px" pb="2px"/>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
