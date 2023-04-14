import api from "../../../../api";

export function getProductsList() {
    return api.get().then(res => res.data.products)
}

export function getSeachedProductsList(search) {
    return api.get(`search?q=${search}`).then(res => res.data.products)
}

export function getFilteretedProductsList(category) {
    return api.get(`category/${category}`).then(res => res.data.products)
}

export function getProductsDetails(id) {
    return api.get(`${id}`).then(res => res.data)
}

export function getCategoriesList() {
    return api.get('categories').then(res => res.data)
}