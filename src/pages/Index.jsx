import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "smartphone.jpg",
    price: 699,
    category: "smartphone",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "laptop.jpg",
    price: 999,
    category: "laptop",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    image: "smartwatch.jpg",
    price: 199,
    category: "smartwatch",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    image: "headphones.jpg",
    price: 299,
    category: "headphones",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split("-");
    setPriceRange([parseInt(value[0]), parseInt(value[1])]);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery);
    const matchesCategory = category === "" || product.category === category;
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearchQuery && matchesCategory && matchesPriceRange;
  });

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
            mb={4}
          />
          <Select placeholder="Select category" onChange={handleCategoryChange} mb={4}>
            <option value="smartphone">Smartphone</option>
            <option value="laptop">Laptop</option>
            <option value="smartwatch">Smartwatch</option>
            <option value="headphones">Headphones</option>
          </Select>
          <Select placeholder="Select price range" onChange={handlePriceRangeChange} mb={8}>
            <option value="0-199">$0 - $199</option>
            <option value="200-499">$200 - $499</option>
            <option value="500-999">$500 - $999</option>
            <option value="1000-10000">$1000+</option>
          </Select>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>${product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;