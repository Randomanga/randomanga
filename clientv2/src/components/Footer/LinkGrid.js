import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'
import { Link as ReactLink } from 'react-router-dom'
export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Links</FooterHeading>
      <Stack>
        <Link as={ReactLink} to="/how-it-works">
          How it works
        </Link>
        <Link as={ReactLink}>Top lists</Link>
        <Link as={ReactLink} href="/about">
          About
        </Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Help</FooterHeading>
      <Stack>
        <Link as={ReactLink}>Privacy</Link>
        <Link as={ReactLink}>Terms</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
