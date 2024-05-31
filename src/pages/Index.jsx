import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#FDF3E7">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex gap={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </Flex>
      </Flex>

      {/* Main Headline Section */}
      <Box my={8}>
        <Heading as="h2" size="xl" mb={4}>
          Main Headline Article
        </Heading>
        <Text fontSize="lg">
          This is the main headline article. It is prominently displayed to catch the reader's attention.
        </Text>
      </Box>

      {/* Grid Layout for Other Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Heading as="h3" size="md" mb={2}>Article 1</Heading>
          <Text>Summary of the first article.</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Heading as="h3" size="md" mb={2}>Article 2</Heading>
          <Text>Summary of the second article.</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Heading as="h3" size="md" mb={2}>Article 3</Heading>
          <Text>Summary of the third article.</Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
          <Flex gap={4}>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;