import DeleteIcon from '@mui/icons-material/Delete';
import useCart from '../hooks/useCart';

export default function CartListItem({ cartItem }) {
    const { deleteItemFromCart } = useCart(cartItem)
    return (
        <tr>
            <td><img className='cart-img' alt={cartItem.title} src={cartItem.thumbnail} /></td>
            <td>{cartItem.title}</td>
            <td>{cartItem.discount} $</td>
            <td>{cartItem.quatity}</td>
            <td><spa onClick={deleteItemFromCart}><DeleteIcon /></spa></td>
        </tr>
    )
}
