import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <VStack spacing={8} maxW="3xl" mx="auto" py={12} px={6}>
        <Image src="https://images.unsplash.com/photo-1580129924992-02eaa9a5509b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGVzdGVyJTIwYXJ0aHVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDUxNzYyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Chester A. Arthur portrait" borderRadius="full" boxSize="300px" />
        <Heading as="h1" size="2xl">
          Chester A. Arthur
        </Heading>
        <Text fontSize="xl" textAlign="center">
          21st President of the United States. A champion of civil service reform who ascended to the presidency after the assassination of James A. Garfield.
        </Text>
        <HStack spacing={8} pt={8}>
          <Link href="/biography" fontWeight="bold">
            Biography
          </Link>
          <Link href="/presidency" fontWeight="bold">
            Presidency
          </Link>
          <Link href="/legacy" fontWeight="bold">
            Legacy
          </Link>
          <Link href="/presidency" fontWeight="bold">
            Presidency
          </Link>
          <Link href="/biography" fontWeight="bold">
            Biography
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
