import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../main/components/ProductsList";
import { useEffect, useState } from "react";
import '../../../style/ProductsPage.css'
import SearchIcon from '@mui/icons-material/Search';
import { fetchSeachedProducr } from "../../../store/actions/productsActions";
import usePagination from "../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import '../../../style/Pagination.css'

export default function ProductsPage() {
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()
    const [searchedProduct, setSearchedProduct] = useState('')
    const { pageCount, changePage, displayPage } = usePagination(list, 12)

    useEffect(() => {
        dispatch(fetchSeachedProducr(searchedProduct))
    }, [searchedProduct])

    return (
        <div>
            <div className="search-wrapper">
                <input className="product-page-search" type="text" placeholder="I'm looking for..." value={searchedProduct} onChange={(e) => setSearchedProduct(e.target.value)} />
                <span className="search-icon"><SearchIcon /></span>
            </div>
            {
                displayPage.length
                    ? <>
                        <ProductsList list={displayPage} />
                        <ReactPaginate
                            pageCount={pageCount}
                            onClick={changePage}
                            previousLabel='Prev'
                            nextLabel='Next'
                            containerClassName='paginationBtns'
                        />
                    </> :
                    <div>
                        <h1>Product is not found</h1>
                    </div>

            }

        </div>
    )
}
