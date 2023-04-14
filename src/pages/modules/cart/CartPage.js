import EmptyCart from "./components/EmptyCart";
import { useSelector } from 'react-redux'
import '../../../style/Cart.css'
import CartDetails from './components/CartDetails'

export default function CartPage() {
    const cartList = useSelector(state => state.cartList)
    return (
        <div>
            {
                (cartList.length === 0) ? <EmptyCart /> : <CartDetails />
            }
        </div>
    )
}
