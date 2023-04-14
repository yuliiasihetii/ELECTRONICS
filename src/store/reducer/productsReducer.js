import { ADD_PRODUCT_TO_CART_ACTION_TYPE, LOADING_ACTION_TYPE, DELETE_PRODUCT_FROM_CART_ACTION_TYPE, SET_PRODUCT_DETAILS_ACTION_TYPE, SET_PRODUCT_LIST_ACTION_TYPE, TOGGLE_SIDE_BASKET_ACTION_TYPE, UPDATED_CART_ACTION_TYPE, TOGGLE_NAVBAR_TAB_ACTION_TYPE, SET_CATEGORY_LIST_ACTION_TYPE } from "../actions/productsActions"

const INITIAL_VALUE = {
    cartList: [],
    isLoading: false,
    list: [],
    currentProductDetails: {},
    isSideBasketActive: false,
    isNavbarTabActive: false,
    categoryList: []
}

export default function productsReducer(state = INITIAL_VALUE, { type, payload }) {
    switch (type) {
        case SET_PRODUCT_LIST_ACTION_TYPE: return { ...state, list: payload }
        case SET_PRODUCT_DETAILS_ACTION_TYPE: return { ...state, currentProductDetails: payload }
        case SET_CATEGORY_LIST_ACTION_TYPE: return { ...state, categoryList: payload }
        case ADD_PRODUCT_TO_CART_ACTION_TYPE: return { ...state, cartList: [...state.cartList, payload] }
        case DELETE_PRODUCT_FROM_CART_ACTION_TYPE: return { ...state, cartList: state.cartList.filter((item) => item.id !== payload) }
        case UPDATED_CART_ACTION_TYPE: return { ...state, cartList: state.cartList.map(item => item.id !== payload.id ? item : { ...item, quatity: item.quatity + payload.quatity }) }
        case TOGGLE_SIDE_BASKET_ACTION_TYPE: return { ...state, isSideBasketActive: !state.isSideBasketActive }
        case TOGGLE_NAVBAR_TAB_ACTION_TYPE: return { ...state, isNavbarTabActive: !state.isNavbarTabActive }
        case LOADING_ACTION_TYPE: return { ...state, isLoading: !state.isLoading }
        default: return state
    }
}