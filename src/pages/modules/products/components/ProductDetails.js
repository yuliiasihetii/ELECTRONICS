import { useSelector } from "react-redux"
import useDiscount from '../hooks/useDiscount'
import useCart from "../../cart/hooks/useCart"

export default function ProductDetails() {
    const { currentProductDetails } = useSelector(state => state)
    const discount = useDiscount(currentProductDetails)
    const { addItemToCart, inc, dec, quatity } = useCart(currentProductDetails)

    return (
        <div className="product-details-warpper">
            <div className="product-details-img-slider">
                <img className="product-details-img" src={currentProductDetails.thumbnail} alt={currentProductDetails.title} />
            </div>
            <div className="product-details-info">
                <h1>{currentProductDetails.title}</h1>
                <p className="product-details-pice"><span className="price-detais-discount">{discount}$</span><span className="price-detais">{currentProductDetails.price}$</span></p>
                <p><span className="price-detais-discount-percent">- {currentProductDetails.discountPercentage} %</span></p>
                <div className="product-details-quatity-wrapper">
                    <span onClick={inc}>+</span>
                    <span>{quatity}</span>
                    <span onClick={dec}>-</span>
                </div>
                <button className="btn-item-fulfilled add-btn" onClick={addItemToCart}>Add to cart</button>
            </div>
        </div>
    )
}
