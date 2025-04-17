'use client'

import {
  SimpleGrid,
  Text
} from '@chakra-ui/react'


const GreenGrid = () => {
  return (
    

    <SimpleGrid columns={2} gap='40px'>
        <Text color='green'> Dit is text </Text>
        <Text color='green'> Dit is text </Text>
        <Text color='green'> Dit is text </Text>
        <Text color='green'> Dit is text </Text>
        
      </SimpleGrid>

  );
}

export default GreenGrid;