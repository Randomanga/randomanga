import { ButtonGroup, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="https://github.com/Wiz1991"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://discord.gg/yEXadzEQuK"
      aria-label="Discord"
      icon={<FaDiscord fontSize="20px" />}
    >
    </IconButton>
  </ButtonGroup>
);
