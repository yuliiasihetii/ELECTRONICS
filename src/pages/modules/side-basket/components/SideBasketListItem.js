import React from 'react'
import useCart from '../../cart/hooks/useCart'
import ClearIcon from '@mui/icons-material/Clear';

export default function SideBasketListItem({ product }) {
    const { deleteItemFromCart, removeItemQuatity, addItemToCart } = useCart(product)

    return (
        <div className="side-basket-item-info">
            <img className='side-basket-product-img' src={product.thumbnail} alt='' />
            <div className="side-basket-product-wrapper">
                <div className='side-basket-product-info'>
                    <p className='side-basket-product-title'>{product.title}</p>
                    <div className='side-basket-product-price-info'>
                        <p className='side-basket-product-price'>{product.quatity}x</p>
                        <span>${(product.quatity * product.discount).toFixed(2)}</span>
                    </div>
                    <div className='increase-decrease-btn-wrapper'>
                        <span className='increase-btn' onClick={addItemToCart}>+</span>
                        <span className='quantity'>{product.quatity}</span>
                        <span className='decrease-btn' onClick={removeItemQuatity}>-</span>
                    </div>
                </div>
                <span className='delete-btn' onClick={deleteItemFromCart}><ClearIcon /></span>
            </div>
        </div>
    )
}
