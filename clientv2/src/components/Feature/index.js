import { Box, Heading, SimpleGrid, Center } from '@chakra-ui/react'
import * as React from 'react'
import { FaRandom, FaRobot, FaUserFriends } from 'react-icons/fa'
import { FaSync, FcVoicePresentation, FcGenealogy } from 'react-icons/fa'
import { Feature } from './Feature'

export const FeatureDisplay = (props) => {
  return (
    <Box
      as="section"
      maxW="5xl"
      mx="auto"
      py="12"
      px={{ base: '6', md: '8' }}
      py={24}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX="10"
        spacingY={{ base: '8', md: '14' }}
      >
        <Feature title="Sync with Anilist" icon={<FaSync />}>
          Save anything you want to read for later with Anilist.
        </Feature>
        <Feature title="Algorithm Generated" icon={<FaRobot />}>
          Find what’s similar to your favourite manga
        </Feature>
        <Feature title="Customized List" icon={<FaRandom />}>
          Select what you like in a manga to get a customized list
        </Feature>
        <Feature title="User Recommendations" icon={<FaUserFriends />}>
          Browse recommendations that other people created
        </Feature>
      </SimpleGrid>
    </Box>
  )
}
