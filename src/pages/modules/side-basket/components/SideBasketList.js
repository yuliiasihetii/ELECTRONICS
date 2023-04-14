import React from 'react'
import { useSelector } from 'react-redux'
import EmptySideBasket from './EmptySideBasket'
import SideBasketListItem from './SideBasketListItem'

export default function SideBasketList() {
    const cartList = useSelector(state => state.cartList)
    return (
        <div className="side-basket-item-list">
            {
                cartList.length === 0 ? <EmptySideBasket /> :
                    (cartList.map(item =>
                        <SideBasketListItem product={item} key={item.id} />
                    ))
            }
        </div>
    )
}
