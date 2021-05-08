import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function Logo(props) {
    return (
        <Link to="/">
            <Box {...props} display="inline-flex">
                <Text
                    fontSize="3xl"
                    fontWeight="extrabold"
                    fontFamily="heading"
                    userSelect="none"
                    color="white">
                    Rando
                </Text>
                <Text
                    fontSize="3xl"
                    fontWeight="extrabold"
                    fontFamily="heading"
                    userSelect="none"
                    color="blue.400">
                    Manga
                </Text>
            </Box>
        </Link>
    );
}
