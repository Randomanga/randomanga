import { Box, Button, Flex, Icon, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export function Pagination({ onPageChange, totalCount, siblingCount = 1, currentPage = 1, pageSize }) {
    const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize })
    const onNext = () => {
        onPageChange(currentPage + 1)
    }
    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }
    const lastPage = paginationRange[paginationRange.length - 1]
    return <Flex flexWrap="wrap" w="full" px={4}>
        <IconButton aria-label="previous page button" m={2} icon={<FaChevronLeft />} disabled={currentPage === 1} onClick={onPrevious} />
        {paginationRange.map(pageNumber => {
            if (pageNumber === DOTS) {
                return <Button m={2} disabled>{DOTS}</Button>
            }
            return <Button m={2}  bgColor={currentPage === pageNumber ? 'orange.400' : 'gray.700'} onClick={() => onPageChange(pageNumber)}>{pageNumber}</Button>
        })}
        <IconButton aria-label="next page button" m={2} icon={<FaChevronRight />} disabled={currentPage === lastPage} onClick={onNext} />
    </Flex>
}