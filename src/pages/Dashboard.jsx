import {

  Flex,
  Box
  
} from '@chakra-ui/react'
import SmallWithSocial from '../components/Footer'
import GreenGrid from '../components/GreenGrid'



const Dashboard = () => {
  return (
    <Flex direction="column" minH="100vh">
      
      
      <Box flex='1'>
        <GreenGrid />
      </Box>
      
      <SmallWithSocial />
    </Flex>
  )
};

export default Dashboard;
