import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";

const Presidency = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <VStack spacing={8} maxW="3xl" mx="auto" py={12} px={6} align="start">
        <Heading as="h1" size="2xl">
          Chester A. Arthur's Presidency (1881-1885)
        </Heading>

        <Text fontSize="lg">Chester A. Arthur unexpectedly became the 21st President after the assassination of President James Garfield in 1881. As President, he signed the Pendleton Civil Service Reform Act and presided over a period of relative prosperity and stability.</Text>

        <Heading as="h2" size="xl">
          Succeeding Garfield
        </Heading>
        <Text fontSize="lg">In September 1881, after the death of President Garfield, Arthur was sworn in as president. This unexpected ascension to the presidency shaped his entire term.</Text>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Chester_A._Arthur_taking_the_oath_of_office%2C_1881.jpg" alt="Chester A. Arthur taking the oath of office in 1881" />

        <Heading as="h2" size="xl">
          Reforming the Civil Service
        </Heading>
        <Text fontSize="lg">Arthur's most notable achievement was the passage of the Pendleton Act in 1883, which reformed the civil service system and established a merit-based system for federal employment.</Text>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Pendleton_Act_Signing.jpg" alt="Chester A. Arthur signing the Pendleton Civil Service Reform Act" />

        <Heading as="h2" size="xl">
          Economic and Tariff Policies
        </Heading>
        <Text fontSize="lg">Arthur was a proponent of high tariffs to protect American industry. However, he also lowered some tariff rates to reduce the federal budget surplus.</Text>

        <Heading as="h2" size="xl">
          Foreign Affairs
        </Heading>
        <Text fontSize="lg">Arthur's presidency saw relatively few foreign policy challenges. He signed the Chinese Exclusion Act in 1882, which suspended Chinese immigration for 10 years.</Text>

        <Heading as="h2" size="xl">
          Civil Rights Record
        </Heading>
        <Text fontSize="lg">While Arthur was personally opposed to slavery, his record on civil rights was mixed. He signed the Chinese Exclusion Act but also oversaw the implementation of the Pendleton Act, which helped reduce racial discrimination in federal hiring.</Text>
      </VStack>
    </Box>
  );
};

export default Presidency;
