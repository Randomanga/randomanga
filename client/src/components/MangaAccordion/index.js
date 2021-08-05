import {
  Flex,
  Button,
  Box,
  Image,
  Text,
  Link,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Collapse,
  useDisclosure,
  Divider,
  Icon,
  Grid,
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
export const MangaAccordion = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box mx="auto" maxW="4xl" mb={4}>
      <Box onClick={onToggle} cursor="pointer" shadow="lg">
        <Box position="relative">
          <Image
            roundedTop="lg"
            unselectable="on"
            undraggable="on"
            w="full"
            h={'40'}
            fit="cover"
            src="https://unsplash.it/920?random"
            alt="Article"
          />
          <Text
            position="absolute"
            left="1"
            bottom="1"
            fontSize="x-small"
            textShadow="2xl"
          >
            Click for details
          </Text>
        </Box>

        <Flex
          p={2}
          bg={useColorModeValue('white', 'gray.800')}
          roundedBottom="lg"
          alignItems="center"
        >
          <Heading
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="md"
            flex="1"
            textAlign="left"
            fontFamily="body"
          >
            I Built A Successful Blog In One Year
          </Heading>
          <Icon as={isOpen ? FaChevronUp : FaChevronDown} mr={2} />
        </Flex>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4}>
          <Heading as="h4" fontSize="lg" fontWeight="bold" fontFamily="body">
            Similar manga
          </Heading>
          <Divider bg="orange" my={2} />
          <Grid mt={5} gap={4} placeContent="center">
            {props.children}
          </Grid>
        </Box>
        <Button w="full" size={'sm'} variant="ghost" onClick={onToggle} mt={4}>
          Collapse
        </Button>
      </Collapse>
    </Box>
  );
};
