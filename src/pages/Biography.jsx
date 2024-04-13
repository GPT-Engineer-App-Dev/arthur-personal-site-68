import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";

const Biography = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <VStack spacing={8} maxW="3xl" mx="auto" py={12} px={6} align="start">
        <Heading as="h1" size="2xl">
          Biography of Chester A. Arthur
        </Heading>

        <Heading as="h2" size="xl">
          Early Life
        </Heading>
        <Text fontSize="lg">Chester Alan Arthur was born on October 5, 1829, in Fairfield, Vermont. His father was a Baptist minister who emigrated from Ireland. Chester had six siblings. The family moved frequently during his childhood.</Text>

        <Heading as="h2" size="xl">
          Education and Early Career
        </Heading>
        <Text fontSize="lg">Arthur attended Union College in Schenectady, New York. He graduated in 1848 and went on to study law. He was admitted to the bar in 1854 and practiced law in New York City.</Text>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Chester_Alan_Arthur_-_NARA_-_530522.jpg/800px-Chester_Alan_Arthur_-_NARA_-_530522.jpg" alt="Young Chester A. Arthur" />

        <Heading as="h2" size="xl">
          Civil War and New York Politics
        </Heading>
        <Text fontSize="lg">During the Civil War, Arthur served as Quartermaster General of the State of New York. After the war, he resumed his law practice and became involved in Republican politics. He was appointed Collector of the Port of New York in 1871.</Text>

        <Heading as="h2" size="xl">
          Vice Presidency
        </Heading>
        <Text fontSize="lg">In 1880, Arthur was elected Vice President as James Garfield's running mate. Garfield won the election, but was shot by an assassin in July 1881 and died in September, at which point Arthur became President.</Text>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Chester_Alan_Arthur.jpg/800px-Chester_Alan_Arthur.jpg" alt="Chester A. Arthur as Vice President" />

        <Heading as="h2" size="xl">
          Presidency
        </Heading>
        <Text fontSize="lg">As President, Arthur surprised many by embracing civil service reform. He signed the Pendleton Civil Service Reform Act into law in 1883. He also vetoed a pork-barrel rivers and harbors bill. Foreign affairs were relatively quiet during his administration.</Text>

        <Heading as="h2" size="xl">
          Retirement and Death
        </Heading>
        <Text fontSize="lg">Arthur retired to New York City after leaving office. He suffered from poor health in his post-presidency years and died of a cerebral hemorrhage on November 18, 1886 at the age of 57. He was buried next to his wife in Menands, New York.</Text>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Grave_of_Chester_A._Arthur_-_Albany_Rural_Cemetery_-_Menands%2C_New_York_-_DSC05148.JPG/800px-Grave_of_Chester_A._Arthur_-_Albany_Rural_Cemetery_-_Menands%2C_New_York_-_DSC05148.JPG" alt="Grave of Chester A. Arthur" />
      </VStack>
    </Box>
  );
};

export default Biography;
