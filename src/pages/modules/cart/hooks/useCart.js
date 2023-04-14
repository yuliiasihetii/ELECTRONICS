// import { useDispatch } from "react-redux"
import useDiscount from "../../products/hooks/useDiscount"
import { addProductToCart, updatedCart, deleteProductFromCart } from "../../../../store/actions/productsActions"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function useCart(currentProductDetails) {
    const cartList = useSelector(state => state.cartList)
    const discount = +useDiscount(currentProductDetails)
    const dispatch = useDispatch()
    const [quatity, setQuatity] = useState(1)
    const id = currentProductDetails.id

    function inc() {
        return setQuatity(quatity + 1)
    }

    function dec() {
        if (quatity <= 1) return setQuatity(1)
        else return setQuatity(quatity - 1)
    }

    function removeItemQuatity() {
        if (currentProductDetails.quatity === 1) return dispatch(deleteProductFromCart(currentProductDetails.id))
        else return dispatch(updatedCart({ quatity: -1, id }))
    }

    function addItemToCart() {
        const existItem = cartList.find((item) => item.id === currentProductDetails.id)
        if (!existItem) {
            return dispatch(addProductToCart({
                ...currentProductDetails, quatity, discount
            }))
        } else {
            return dispatch(updatedCart({ quatity: 1, id }))
        }
    }

    function deleteItemFromCart() {
        return dispatch(deleteProductFromCart(currentProductDetails.id))
    }

    return { addItemToCart, inc, dec, quatity, deleteItemFromCart, removeItemQuatity }
}