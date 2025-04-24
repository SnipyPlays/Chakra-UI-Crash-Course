import {
  Flex,
  Box,
  SimpleGrid,
  Center

} from '@chakra-ui/react';

import SmallWithSocial from '../components/Footer';
import ItemCard from '../components/ItemCard';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <Flex direction="column" minH="100vh">

      <Header />

      <Box flex="1" p={4}>
        <SimpleGrid columns={3} gap='40px' width={1300} mx='auto'>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </SimpleGrid>
      </Box>

      <SmallWithSocial />
    </Flex>
  );
};

export default Dashboard;