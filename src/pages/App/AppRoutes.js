import { Routes, Route, Navigate } from "react-router-dom"
import App from "./App"
import MainPage from "../modules/main/page/MainPage"
import CartPage from "../modules/cart/CartPage"
import ProductsPage from "../modules/products/ProductsPage"
import ProductDetailsPage from "../modules/products/ProductDetailsPage"
import CheckoutPage from "../modules/checkout/CheckoutPage"
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Navigate to='home' />} />
                <Route path="home" element={<MainPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailsPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes