import { useSelector } from "react-redux";

export default function useTotalAmount() {
    const cartList = useSelector(state => state.cartList)
    const totalAmount = cartList.reduce((acc, cur) => {
        return acc = acc + cur.discount * cur.quatity
    }, 0)

    return totalAmount.toFixed(2)
}