import useTotalAmount from '../../cart/hooks/useTotalAmount'

export default function CheckoutTotalDetails() {
    const totalAmount = useTotalAmount();
    const total = Number(totalAmount) + 20;
    return (
        <div className='checkout-bill'>
            <h2 className='checkout-bill-subtotal'>Subtotal: <span>{totalAmount} $</span></h2>
            <h2 className='checkout-bill-shipping'>Shipping: <span>20 $</span></h2>
            <div className='checkout-total'>
                <h1>Total: <span>{total} $</span></h1>
            </div>
        </div>
    )
}
