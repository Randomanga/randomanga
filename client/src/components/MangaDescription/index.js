import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import DOMPurify from 'dompurify';
const Description = ({ text, ...rest }) => {
  const desc = useRef(null);
  const [width, height] = useWindowSize();
  const [truncated, setTruncated] = useState(false);
  const [expanded, setExpanded] = useState(false);
  function isBeingTruncated(e) {
    return e.offsetHeight < e.scrollHeight || e.offsetWwidth < e.scrollWidth;
  }
  useEffect(() => {
    setTruncated(isBeingTruncated(desc.current));
  }, []);
  useEffect(() => {
    setTruncated(isBeingTruncated(desc.current));
  }, [width, height, text]);
  return (
    <React.Fragment>
      <Text
        maxW={['sm', '2xl']}
        noOfLines={expanded ? 100 : 4}
        color="gray.400"
        _hover={{ color: 'gray.300' }}
        _focus={{ color: 'gray.300' }}
        _active={{ color: 'gray.300' }}
        lineHeight="1.575"
        fontSize={'md'}
        letterSpacing="tight"
        {...rest}
        ref={desc}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(DOMPurify.sanitize(text)),
        }}
      />
      {truncated || expanded ? (
        <Button
          size="xs"
          mt={2}
          width="20"
          color="gray.500"
          _active={{ borderColor: 'transparent' }}
          _focus={{ borderColor: 'transparent' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Read less' : 'Read more'}
        </Button>
      ) : null}
    </React.Fragment>
  );
};
export default Description;
