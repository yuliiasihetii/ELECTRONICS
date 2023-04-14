import { Outlet } from "react-router-dom";
import Navbar from "../modules/components/Navbar";
import Footer from "../modules/components/Footer";
import { useSelector } from "react-redux";
import SideBasketPage from "../modules/side-basket/SideBasketPage";
import Loading from '../modules/components/Loading'
import NavbarTab from "../modules/components/NavbarTab";

export default function Layout() {
    const { isSideBasketActive, isLoading, isNavbarTabActive } = useSelector(state => state)
    return (
        <>
            <div className="app-wrapper container">
                <Navbar />
                {isSideBasketActive && <SideBasketPage />}
                {isNavbarTabActive && <NavbarTab />}
                {
                    (isLoading) ? <Loading /> : <Outlet />
                }
            </div>
            <Footer />
        </>
    )
}
