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
import { Similar } from './Similar';
export const MangaAccordion = ({
  manga: { coverImage, bannerImage, title, id },
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box mx="auto" maxW="4xl" mb={4}>
      <Box
        onClick={onToggle}
        cursor="pointer"
        shadow="lg"
        outline="0"
        userSelect="none"
        role='group'
        transition='all 0.2s'
        _active={{transform: 'scale(0.99)'}}
      >
        <Box 
          position="relative"
          roundedTop="lg"
          overflow='hidden'
        >
          <Image
            unselectable="on"
            undraggable="on"
            w="full"
            h={'40'}
            fit="cover"
            loading="lazy"
            objectPosition="center"
            _groupHover={{ transform: 'scale(1.03)', filter:'brightness(0.7)' }}
            transition='all 0.5s'
            src={bannerImage ?? (coverImage.extraLarge || coverImage.large)}
            alt="Manga banner"
          />
          <Text
            position="absolute"
            left="1"
            bottom="1"
            fontSize="x-small"
            textShadow="1px 1px 1px #000"
          >
            Click for details
          </Text>
        </Box>

        <Flex
          p={2}
          bg={useColorModeValue('white', 'gray.800')}
          roundedBottom="lg"
          transition={'all 0.2s linear'}
          _groupHover={{backgroundColor: '#212836'}}
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
            {title.romaji}
          </Heading>
          <Icon as={isOpen ? FaChevronUp : FaChevronDown} mr={2} />
        </Flex>
      </Box>
      <Collapse in={isOpen} unmountOnExit={true}>
        <Similar id={id} />

        <Button w="full" size={'sm'} variant="ghost" onClick={onToggle} mt={4}>
          Collapse
        </Button>
      </Collapse>
    </Box>
  );
};
