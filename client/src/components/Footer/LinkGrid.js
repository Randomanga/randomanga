import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { FooterHeading } from './FooterHeading';
import { Link as ReactLink } from 'react-router-dom';
export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Links</FooterHeading>
      <Stack>
      <Link _focus as={ReactLink} to="/recommendations">
          Related manga
        </Link>
        <Link _focus as={ReactLink} to="/lists/browse">
          Lists
        </Link>
        <Link _focus as={ReactLink} to="/about">
          About
        </Link>
      </Stack>
    </Box>
    <Box minW="130px">
      {/* <FooterHeading mb="4">Help</FooterHeading>
      <Stack>
        <Link
          _focus
          href="https://www.iubenda.com/privacy-policy/94743267"
          class="iubenda-noiframe iubenda-embed iubenda-noiframe "
          title="Privacy Policy "
        >
          Privacy Policy
        </Link>
        <Link
          _focus
          href="https://www.iubenda.com/terms-and-conditions/94743267"
          class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe "
          title="Terms and Conditions "
        >
          Terms and Conditions
        </Link>
      </Stack> */}
    </Box>
  </SimpleGrid>
);
