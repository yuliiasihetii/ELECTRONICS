import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartListItem from "./CartListItem"
import useTotalAmount from "../hooks/useTotalAmount"


export default function CartDetails() {
    const cartList = useSelector(state => state.cartList)
    const totalAmount = useTotalAmount()

    return (
        <div className="cart-wrapper">
            <table className='cart-table-wrapper'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map(item => <CartListItem key={item.id} cartItem={item} />)
                    }
                </tbody>
            </table>
            <div >
                <h2>Subtotal:   <span className='cart-subtotal'>{totalAmount} $</span></h2>
                <p>Taxes and shipping will be calculated at the checkout</p>
                <div className='cart-btn'>
                    <button className='add-btn btn-item-fulfilled'><Link className="link white-link" to='/products'>Continue Shopping</Link></button>
                    <button className='add-btn btn-item-fulfilled'><Link className="link white-link" to='/checkout'>Procced to checkout</Link></button>
                </div>
            </div>
        </div >
    )
}
