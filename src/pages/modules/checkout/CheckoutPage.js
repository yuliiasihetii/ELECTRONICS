import { useSelector } from 'react-redux'
import '../../../style/Checkout.css'
import CheckoutTotalDetails from './components/CheckoutTotalDetails'
import CheckoutUserDetails from './components/CheckoutUserDetails'
import EmptyCart from '../cart/components/EmptyCart'

export default function CheckoutPage() {
    const cartList = useSelector(state => state.cartList)
    return (
        <>
            {
                cartList.length
                    ? <div>
                        <h2>Shipping Address</h2>
                        <div className='checkout-wrapper'>
                            <CheckoutUserDetails />
                            <CheckoutTotalDetails />
                        </div>
                    </div>
                    : <EmptyCart />
            }
        </>
    )
}
