import { toggleNavbarTab } from "../../../store/actions/productsActions"
import PageLinks from "../main/components/PageLinks";
import useToggle from "../side-basket/hooks/useToggle"
import ClearIcon from '@mui/icons-material/Clear';

export default function NavbarTab() {
    const toggleNavbar = useToggle(toggleNavbarTab)
    return (
        <div className="side-basket-wrapper">
            <div className="navbar-tab">
                <div className="navbar-tab-btn">
                    <span onClick={toggleNavbar}><ClearIcon /></span>
                </div>
                <PageLinks className={'navbar-tab-links'} />
            </div>
        </div>
    )
}
