import { Button } from '@chakra-ui/react';

export const GenerateButton = props => {
  return (
    <Button
      bg={'orange.400'}
      textShadow="0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%);"
      _hover={{
        bg: 'orange.500',
      }}
      _active={{
        bg: 'orange.600',
      }}
      _focus={{
        border: 'none',
      }}
      {...props}
    >
      Generate list
    </Button>
  );
};
