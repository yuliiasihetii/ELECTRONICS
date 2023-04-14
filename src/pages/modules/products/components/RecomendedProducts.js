import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsList from '../../main/components/ProductsList'
import { fetchFilteretedList } from '../../../../store/actions/productsActions'
import usePagination from '../../../hooks/usePagination'
import ReactPaginate from 'react-paginate'

export default function RecomendedProducts() {
    const { currentProductDetails, list } = useSelector(state => state)
    const dispatch = useDispatch();
    const { pageCount, changePage, displayPage } = usePagination(list, 3)

    useEffect(() => {
        dispatch(fetchFilteretedList(currentProductDetails.category))
    }, [currentProductDetails.category])
    return (
        <div className='recomended-product-wrapper'>
            <h1 className='recomended-product-title'>You might also like</h1>
            <ProductsList list={displayPage} />
            <ReactPaginate
                pageCount={pageCount}
                onClick={changePage}
                previousLabel='Prev'
                nextLabel='Next'
                containerClassName='paginationBtns'
            />
        </div>
    )
}
