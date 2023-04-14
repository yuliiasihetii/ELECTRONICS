import { useState } from "react";

export default function usePagination(list, num) {
    const [pageNumber, setPageNumber] = useState(1);
    const productPerPage = num;
    const visitedPage = pageNumber * productPerPage
    const displayPage = list.slice(visitedPage, visitedPage + productPerPage)

    const pageCount = Math.ceil(list.length / productPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return { pageCount, changePage, displayPage }
}