import { Box, Text, Heading, Flex, } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/react'
import { ListItem, UnorderedList, Image, Link } from "@chakra-ui/react"
import { } from "react-router-dom"
import KoFi from './Ko-Fi.png'
import Discord from './101-1013839_discord-join-hd-png-download.png'
export const About = (props) => {
    return <Box minH={'60vh'} maxW="7xl" mx="auto" mt={20} px={['2', '5']} maxW="4xl"
    >
        <Heading as="h1" px={2} fontFamily="body" fontWeight="bold">
            About
        </Heading>
        <Text
            p={2}
            maxW="2xl"
            fontFamily="body"
            fontSize="md"
            color="whiteAlpha.800"
        >
            The first modern website to find new manga to read. It was made by manga lovers for manga lovers. <br />
            You can create and view lists made by other users to find new things to read, and by using the reccomendation
            page, you can find manga related to the one you chose.
            <br /> <br />
            Don't know what exactly you want? Let our AI generator pick a random choice for you with the manga list generator
        </Text>
        <Heading as="h1" px={2} fontFamily="body" fontWeight="bold" marginTop={'2rem'}>
            Support development
        </Heading>
        <Text
            p={2}
            maxW="2xl"
            fontFamily="body"
            fontSize="md"
            color="whiteAlpha.800"
        >
            To develop this website i've spent years of learning and months of development
            everything is offered for free without any ads, this means that there is no sort of income
            except donations. <br />
            To support development and server costs, please make a dontion

        </Text>
        <Flex>
            <Link href='https://ko-fi.com/randomanga' target="_blank">
                <Box
                    background='white'
                    borderRadius='0.5rem'
                    padding='0.5rem'
                    width='fit-content'
                    margin='0.5rem'
                    marginTop='2rem'
                >
                    <Image src={KoFi} alt='Support me' width='6rem' />
                </Box>
            </Link>
            <Link href='https://discord.gg/yEXadzEQuK' target="_blank" >
                <Box
                    background='white'
                    borderRadius='0.5rem'
                    padding='0.5rem'
                    width='fit-content'
                    margin='0.5rem'
                    marginTop='2rem'
                >
                    <Image src={Discord} alt='Join us on discord' width='6rem' />
                </Box>
            </Link>
        </Flex>
    </Box>
}