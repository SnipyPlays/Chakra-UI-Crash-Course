'use client'
import {
    Card,
    Text,
    Button,
    Image,
    CardBody,
    Heading,
    CardFooter
} from '@chakra-ui/react'
const ItemCard = () => {
  return (
    
    <Card maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
          <CardBody>
            <Heading size="md">Living room Sofa</Heading>
            <Text mt={2} color="gray.600">
              This sofa is perfect for modern tropical spaces, baroque inspired spaces.
            </Text>
            <Text fontSize="2xl" fontWeight="medium" letterSpacing="tight" mt={3}>
              $450
            </Text>
          </CardBody>
          <CardFooter justify="flex-start" gap="2">
            <Button colorScheme="teal">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </CardFooter>
        </Card>

  );
}

export default ItemCard;