import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";
import { useDispatch, useSelector } from "react-redux";
import '../../../../style/ViewProduct.css'
import { useEffect, useState } from "react";
import { fetchCategoryList, fetchFilteretedList } from "../../../../store/actions/productsActions";

export default function ViewProduct() {
    const { list, categoryList } = useSelector(state => state)
    const dispatch = useDispatch()
    const [choosedCatecory, setChoosedCategoty] = useState('smartphones')

    useEffect(() => {
        dispatch(fetchFilteretedList(choosedCatecory))
        dispatch(fetchCategoryList())
    }, [choosedCatecory])

    return (
        <div>
            <button className="btn-item-outline view-product btn-select"><Link to='/products' className="link">View all</Link></button>
            <div className="product-list-select-wrapper">
                <select className="product-list-select" onChange={(e) => setChoosedCategoty(e.target.value)}>
                    <option disabled></option>
                    {categoryList.map((item, index) => <option value={item} key={index}>{item}</option>)}
                </select>
            </div>
            <div className="product-list-navigate-btns">
                <button className="btn-item-outline view-product "><Link to='/products' className="link">View all</Link></button>
                <button name="smartphones" className="btn-item-fulfilled view-product " onClick={(e) => setChoosedCategoty(e.target.name)}>Electronics</button>
                <button name='skincare' className="btn-item-fulfilled view-product " onClick={(e) => setChoosedCategoty(e.target.name)}>Beauty</button>
                <button name="groceries" className="btn-item-fulfilled view-product " onClick={(e) => setChoosedCategoty(e.target.name)}>Food</button>
                <button name="home-decoration" className="btn-item-fulfilled view-product " onClick={(e) => setChoosedCategoty(e.target.name)}>Home decor</button>
            </div>
            <ProductsList list={list} />
        </div>
    )
}
