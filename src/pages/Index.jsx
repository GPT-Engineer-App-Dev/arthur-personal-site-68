// About the Authors page component for Chester A. Arthur website
import { Box, Heading, Text, VStack, Link, Image, Button } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          About the Authors
        </Heading>

        <Image src="https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwNTQ0Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="Author Portrait" />

        <Text fontSize="lg">The authors of this website are a group of dedicated historians and researchers with a deep interest in the life and presidency of Chester A. Arthur.</Text>

        <Heading as="h2" size="lg">
          Qualifications and Background
        </Heading>
        <Text>Our team consists of individuals with advanced degrees in American History and Political Science. With over a decade of combined experience in historical research, we bring a thorough and nuanced perspective to the study of President Arthur's administration.</Text>

        <Heading as="h2" size="lg">
          Contact Information
        </Heading>
        <VStack spacing={2}>
          <Link href="mailto:authors@example.com" isExternal>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
              Email Us
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/authors" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
              Connect on LinkedIn
            </Button>
          </Link>
          <Link href="https://twitter.com/authors" isExternal>
            <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="solid">
              Follow on Twitter
            </Button>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
