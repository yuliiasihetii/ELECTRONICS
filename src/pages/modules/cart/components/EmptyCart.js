import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div>
            <h1>Your cart is empty</h1>
            <button className='btn-item-outline empty-cart-btn'><Link to='/products' className='link'>Start shopping</Link></button>
        </div>
    )
}
