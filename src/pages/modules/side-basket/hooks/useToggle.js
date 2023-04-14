import { useDispatch } from "react-redux";

export default function useToggle(fun) {
    const dispatch = useDispatch()

    function toggleBasket() {
        return dispatch(fun())
    }
    return toggleBasket
}