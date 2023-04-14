import ProductsListItem from "./ProductsListItem"
import '../../../../style/ProductList.css'

export default function ProductsList({ list }) {
    return (
        <div className="product-list-wrapper">
            {list.map(item => <ProductsListItem product={item} key={item.id} />)}
        </div>
    )
}
