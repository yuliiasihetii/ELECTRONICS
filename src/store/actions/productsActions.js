import { createActions } from "./createActions";
import { getCategoriesList, getFilteretedProductsList, getProductsDetails, getProductsList, getSeachedProductsList } from "../../pages/modules/main/service/useService";

export const SET_PRODUCT_LIST_ACTION_TYPE = 'SET_PRODUCT_LIST_ACTION'
export const setProductList = createActions(SET_PRODUCT_LIST_ACTION_TYPE)

export const SET_CATEGORY_LIST_ACTION_TYPE = 'SET_CATEGORY_LIST_ACTION'
export const setCategoryList = createActions(SET_CATEGORY_LIST_ACTION_TYPE)

export const LOADING_ACTION_TYPE = 'LOADING_ACTION'
export const loading = createActions(LOADING_ACTION_TYPE)

export const SET_PRODUCT_DETAILS_ACTION_TYPE = 'SET_PRODUCT_DETAILS_ACTION'
export const setProductDetails = createActions(SET_PRODUCT_DETAILS_ACTION_TYPE)

export const ADD_PRODUCT_TO_CART_ACTION_TYPE = 'ADD_PRODUCT_TO_CART_ACTION'
export const addProductToCart = createActions(ADD_PRODUCT_TO_CART_ACTION_TYPE)

export const DELETE_PRODUCT_FROM_CART_ACTION_TYPE = 'DELETE_PRODUCT_FROM_CART_ACTION'
export const deleteProductFromCart = createActions(DELETE_PRODUCT_FROM_CART_ACTION_TYPE)

export const UPDATED_CART_ACTION_TYPE = 'UPDATED_CART_ACTION'
export const updatedCart = createActions(UPDATED_CART_ACTION_TYPE)

export const TOGGLE_SIDE_BASKET_ACTION_TYPE = 'TOGGLE_SIDE_BASKET_ACTION';
export const toggleSideBasket = createActions(TOGGLE_SIDE_BASKET_ACTION_TYPE)

export const TOGGLE_NAVBAR_TAB_ACTION_TYPE = 'TOGGLE_NAVBAR_TAB_ACTION';
export const toggleNavbarTab = createActions(TOGGLE_NAVBAR_TAB_ACTION_TYPE)

export const fetchProductList = () => (dispatch, getState) => {
    getProductsList()
        .then(data => dispatch(setProductList(data)))
}

export const fetchFilteretedList = (category) => (dispatch, getState) => {
    getFilteretedProductsList(category)
        .then(data => dispatch(setProductList(data)))
}

export const fetchSeachedProducr = (search) => (dispatch, getState) => {
    getSeachedProductsList(search)
        .then(data => dispatch(setProductList(data)))
}

export const fetchProductDetails = (id) => (dispatch, getState) => {
    getProductsDetails(id)
        .then(data => dispatch(setProductDetails(data)))
}

export const fetchCategoryList = () => (dispatch, getState) => {
    getCategoriesList()
        .then(data => dispatch(setCategoryList(data)))
}