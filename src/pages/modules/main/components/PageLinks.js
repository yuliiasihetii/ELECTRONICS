import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function PageLinks({ className }) {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle()
    return (
        <div className={className} onClick={toggleMenu} ref={menuRef}>
            <NavLink NavLink to='/home' className={({ isActive }) => isActive ? 'link nav-link-item active-link' : 'link nav-link-item'} > Home</NavLink >
            <NavLink to='/products' className={({ isActive }) => isActive ? 'link nav-link-item active-link' : 'link nav-link-item'}>Products</NavLink>
            <NavLink to='/cart' className={({ isActive }) => isActive ? 'link nav-link-item active-link' : 'link nav-link-item'}>Cart</NavLink>
        </div>
    )
}
