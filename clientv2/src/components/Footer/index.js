import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Copyright } from './Copyright';
import { LinkGrid } from './LinkGrid';
import Logo from '../Logo';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    py="12"
    px={{ base: '4', md: '8' }}
    mt="20vh"
    bg="dark.900"
  >
    <Stack spacing="10">
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '10', lg: '40%' }}
      >
        <Box>
          <Logo />
          <Stack
            direction={{ base: 'column' }}
            justifyContent="space-between"
            alignItems={'left'}
          >
            <Copyright />
            <SocialMediaLinks />
          </Stack>
        </Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '10', md: '20' }}
        >
          <LinkGrid spacing={{ base: '10', md: '20', lg: '28' }} />
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
