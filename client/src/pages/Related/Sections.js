import {
  Box,
  Heading,
  Input,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MangaAccordion } from '../../components/MangaAccordion';
import { v4 as uuidv4 } from 'uuid';
import useUser from '../../hooks/data/useUser';
import { UserBased } from './UserBased';
import { Trending } from './Trending';
import { Popular } from './Popular';
export const Sections = (props) => {
  const { user } = useUser();

  return (
    <Box mt={12}>
      {user?.alID && <UserBased />}
      <Trending />
      <Popular />
    </Box>
  );
};
