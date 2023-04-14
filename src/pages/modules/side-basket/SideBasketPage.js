import '../../../style/SideBasketPage.css'
import { Link } from 'react-router-dom'
import useToggle from './hooks/useToggle'
import useTotalAmount from '../cart/hooks/useTotalAmount'
import ClearIcon from '@mui/icons-material/Clear';
import SideBasketList from './components/SideBasketList';
import { toggleSideBasket } from '../../../store/actions/productsActions';

export default function SideBasketPage() {
    const toggleBasket = useToggle(toggleSideBasket)
    const totalAmount = useTotalAmount()
    return (
        <div className="side-basket-wrapper">
            <div className='side-basket'>
                <div className="side-basket-close">
                    <span onClick={toggleBasket}><ClearIcon /></span>
                </div>
                <SideBasketList />
                <div className="side-basket-footer">
                    <p className='side-basket-footer-tite'>Subtotal :   <span className='side-basket-footer-totalAmount'>{totalAmount} $</span></p>
                    <button className='btn-item-outline checkout'><Link className='link' to='/checkout'>Checkout</Link></button>
                </div>
            </div>
        </div>
    )
}
