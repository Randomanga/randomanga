import React from 'react'
import { Button } from '@chakra-ui/react'






export function PageButton(props) {
    const onClick = !props.disabled ? props.onClick : null;
    return (
        <Button
            onClick={onClick}
            as={props.as}
            mx={1}
            my="auto"
            _focus
            size={props.size}
            disabled={props.disabled}
        >
            {props.children}
        </Button>
    )
}