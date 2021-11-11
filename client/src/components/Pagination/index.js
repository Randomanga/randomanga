import { Box, Button, Flex, Icon, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export function Pagination({ onPageChange, totalCount, siblingCount = 1, defaultPage, pageSize, changePage }) {
    const [page, setPage] = useState(defaultPage);
    const paginationRange = usePagination({ page, totalCount, siblingCount, pageSize })

    const onNext = () => {
        setPage(Number(page) + 1);
    }
    const onPrevious = () => {
        setPage(Number(page) - 1);
    }
    useEffect(() => {
        if (page == defaultPage) return;
        onPageChange(page);
    }, [page]);


    const lastPage = paginationRange[paginationRange.length - 1]
    return <Flex flexWrap="wrap" px={4}>
        <IconButton aria-label="previous page button" m={2} icon={<FaChevronLeft />} disabled={page === 1} onClick={onPrevious} />
        {paginationRange.map(pageNumber => {
            if (pageNumber === DOTS) {
                return <Button m={2} disabled>{DOTS}</Button>
            }
            return <Button m={2} bgColor={page == pageNumber ? 'orange.400' : 'gray.700'} onClick={() => setPage(pageNumber)}>{pageNumber}</Button>
        })}
        {page < lastPage && <IconButton aria-label="next page button" m={2} icon={<FaChevronRight />} disabled={page === lastPage} onClick={onNext} />}
    </Flex>
}