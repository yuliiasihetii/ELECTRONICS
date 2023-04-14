import { Link } from 'react-router-dom'
import '../../../style/Navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import useToggle from '../side-basket/hooks/useToggle';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { toggleNavbarTab, toggleSideBasket } from '../../../store/actions/productsActions';
import PageLinks from '../main/components/PageLinks';

export default function Navbar() {
    const { cartList } = useSelector(state => state)
    const toggleBasket = useToggle(toggleSideBasket)
    const toggleNavbar = useToggle(toggleNavbarTab)
    return (
        <nav className='nav-wrapper'>
            <div className='navbar-tab-page' onClick={toggleNavbar}><DensityMediumIcon /></div>
            <div className='nav-title'><Link to='/' className='link'>electronics</Link></div>
            <PageLinks className={'nav-link-group'} />
            <div className='cart-tab'>
                <span onClick={toggleBasket}><ShoppingCartOutlinedIcon /></span>
                {(cartList.length === 0 ? '' : <span className='cart-totalAmount'>{cartList.length}</span>)}
            </div>
        </nav>
    )
}
