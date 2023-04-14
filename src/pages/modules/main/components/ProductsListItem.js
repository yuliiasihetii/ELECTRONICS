import { Link } from "react-router-dom";
import useCart from "../../cart/hooks/useCart";
import useDiscount from '../../products/hooks/useDiscount'

export default function ProductsListItem({ product }) {
    const { addItemToCart } = useCart(product)
    const discount = useDiscount(product)
    return (
        <div className="product-box-wrapper">
            <div>
                <img className="img-main-product-list-item" src={product.thumbnail} alt={product.title} />
                <p><Link to={'/products/' + String(product.id)} className="link">{product.title}</Link></p>
                <div className="product-box-add-btn">
                    <p className="product-pice"><span className="price-discount">{discount}$</span><span className="price">{product.price}$</span></p>
                    <button onClick={addItemToCart} className="btn-item-fulfilled add-btn">ADD</button>
                </div>
            </div>
        </ div>
    )
}
