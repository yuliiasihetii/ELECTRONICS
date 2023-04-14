import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails } from "../modules/main/service/useService";
import { setProductDetails } from "../../store/actions/productsActions";

export default function useProducrDetails(id) {
    const currentProductDetails = useSelector(state => state.currentProductDetails)
    const dispatch = useDispatch()
    const fetchProductDEtails = useCallback(() => {
        getProductsDetails(id).then(data => setProductDetails(data))
    }, [id, setProductDetails])

    useEffect(() => {
        dispatch(fetchProductDEtails())
    }, [id, fetchProductDEtails])

    return (currentProductDetails)
}