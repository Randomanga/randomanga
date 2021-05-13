import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';

export const ColorModeSwitcher = props => {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    setColorMode('dark');
  });
  return null;
};
