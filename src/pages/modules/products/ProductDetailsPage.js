import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProductDetails } from "../../../store/actions/productsActions"
import { useDispatch } from "react-redux"
import '../../../style/ProductDetailsPage.css'
import ProductDetails from "./components/ProductDetails"
import Description from "./components/Desription"
import Review from "./components/Review"
import RecomendedProducts from "./components/RecomendedProducts"

export default function ProductDetailsPage() {
    const [tab, setTab] = useState('description')
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductDetails(id))
    }, [id])
    return (
        <>
            <ProductDetails />
            <div className="product-details-tabs-wrapper">
                <h2 className={`${tab === 'description' ? 'tab-active' : ''}`} onClick={() => setTab('description')}>Description</h2>
                <h2 className={`${tab === 'review' ? 'tab-active' : ''}`} onClick={() => setTab('review')}>Review</h2>
            </div>
            {tab === 'description' ? <Description /> : <Review />
            }
            <RecomendedProducts />
        </>
    )
}
