import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "smartphone.jpg",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    image: "smartwatch.jpg",
    price: "$199",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    image: "headphones.jpg",
    price: "$299",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery)
  );
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link to="/">ElectroShop</Link>
        </Heading>
        <Box>
          <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
          <Link to="/products">Products</Link>
        </Box>
      </Flex>

      <Box as="main" mt={8}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl">Welcome to ElectroShop</Heading>
          <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
        </VStack>

        <Box as="section" mt={8}>
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            mb={8}
          />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;