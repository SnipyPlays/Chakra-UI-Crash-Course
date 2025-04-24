import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  
  const Links = ['Home', 'About', 'Contact'];
  
  const NavLink = ({ children }) => (
    <Button variant="ghost" px={2}>
      {children}
    </Button>
  );
  
  export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg="gray.100" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box fontWeight="bold">MyLogo</Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Avatar size="sm" src="https://bit.ly/dan-abramov" />
          </Flex>
        </Flex>
  
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    );
  }