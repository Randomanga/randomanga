import { Badge } from '@chakra-ui/react';

const TagBadge = ({ text }) => {
  return (
    <Badge
      rounded="full"
      px="2"
      fontSize="xs"
      textTransform="capitalize"
      cursor="default"
      color="gray.400"
      margin={0.5}
      bg="gray.700"
    >
      {text}
    </Badge>
  );
};
export default TagBadge;
