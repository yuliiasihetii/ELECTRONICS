import React from 'react'

export default function CheckoutUserDetails() {
    return (
        <form className="checkout-form">
            <div className="form-group">
                <input type="text" placeholder='Enter your name' required />
            </div>
            <div className="form-group">
                <input type="email" placeholder='Enter your email' required />
            </div>
            <div className="form-group">
                <input type="number" placeholder='Phone number' required />
            </div>
            <div className="form-group">
                <input type="text" placeholder='Country' required />
            </div>
            <div className="form-group">
                <input type="text" placeholder='City' required />
            </div>
            <div className="form-group">
                <input type="number" placeholder='Postal code' required />
            </div>
            <button className='add-btn btn-item-fulfilled'>Payment</button>
        </form>
    )
}
