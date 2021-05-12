import { Badge, Box as Stack, HStack, VStack } from '@chakra-ui/layout'
import {
  Button,
  Image,
  Heading,
  Text,
  Box,
  Skeleton,
  IconButton,
  Icon,
} from '@chakra-ui/react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Description from '../MangaDescription'
import AlIcon from '../al.svg'
import { useState } from 'react'
const Controls = ({ manga, ...props }) => {
  const [liked, setLiked] = useState(false)

  const onAddToList = () => {}
  const onLike = () => {
    setLiked(!liked)
  }

  return (
    <HStack {...props}>
      <Button
        leftIcon={<Image w={4} bg={'black'} rounded="full" src={AlIcon} />}
        bg="blue.400"
        py={4}
        size="xs"
        _hover={{ bg: 'blue.500' }}
        _active={{ bg: 'blue.300' }}
        _focus={{ borderColor: 'blue.200' }}
      >
        Add to list
      </Button>
      <Button
        colorScheme="blue"
        size="xs"
        px={0}
        _focus={{ borderColor: '' }}
        leftIcon={
          liked ? (
            <FaHeart color={'red'} tra size={17} />
          ) : (
            <FaRegHeart size={17} />
          )
        }
        variant="regular"
        onClick={onLike}
      >
        25
      </Button>
    </HStack>
  )
}

function Card(props) {
  return (
    <Box mt={['-28', '-40']} pl={['2%', '3%', '4%', '12%']}>
      <HStack align="left" spacing={['2', '4']}>
        <VStack align="left">
          <Image
            w={['24', '36', '40', '36']}
            rounded="sm"
            boxShadow="dark-lg"
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx101233-ipG2rYitNxyd.jpg"
          />
          <Controls minW="9.2rem" display={['none', 'block']} />
        </VStack>
        <VStack align="left" pt={['9']} color="white" spacing={2} pr={4}>
          <Heading fontSize={['md', 'xl']} fontFamily="body">
            Gokshoku
          </Heading>
          <HStack>
            {['Action', 'Romance'].map((genre) => (
              <Badge
                rounded="full"
                px="2"
                fontSize="xs"
                textTransform="capitalize"
                color="white"
                bg="orange.500"
              >
                {genre}
              </Badge>
            ))}
          </HStack>
          <Description
            display={['none', '-webkit-box']}
            text={`Magna laboris laborum ut excepteur veniam dolor velit eiusmod occaecat aliquip sit id aliquip elit. Cillum est et anim aliquip do. Sit reprehenderit irure culpa ullamco nostrud ullamco velit pariatur aute voluptate ullamco sunt. Labore pariatur proident dolor pariatur ut nisi magna consequat. Anim fugiat aliquip fugiat dolore culpa elit et cupidatat mollit sint commodo Lorem ea.Quis veniam tempor aliquip minim proident consectetur proident dolore mollit. Consequat culpa sit velit duis et occaecat laborum anim irure. Do qui tempor do nulla laboris tempor enim veniam consequat enim minim cupidatat ex. Est id eiusmod consequat nostrud aliqua voluptate pariatur laborum esse non dolore laboris aliqua. `}
          />
          <Controls display={['block', 'none']} pt={2} />
        </VStack>
      </HStack>
      <Box>
        <Description
          pt={4}
          display={['-webkit-box', 'none']}
          text={`Aute in adipisicing consectetur consequat anim qui magna enim voluptate dolor eu exercitation. Incididunt ipsum quis in nisi officia incididunt culpa minim tempor ullamco duis laboris sint proident. Ipsum commodo deserunt voluptate ad sunt ut minim veniam sit consectetur irure velit. Incididunt nulla magna amet ipsum sit est id Lorem proident magna dolor elit irure veniam. Eiusmod ea pariatur Lorem do voluptate. Laboris sit ipsum nulla id proident minim officia nulla occaecat.
        
        In consectetur enim ad ullamco sint ullamco adipisicing labore culpa. Minim sit commodo voluptate ad. Quis proident cupidatat pariatur Lorem enim. Laboris minim est voluptate eu anim id consequat aute consequat commodo. Amet do aliquip irure nostrud irure. `}
        />
      </Box>
    </Box>
  )
}
export default Card
