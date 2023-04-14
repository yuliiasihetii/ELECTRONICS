import React from 'react'
import '../../../../style/Review.css'
import useForm from '../hooks/useForm'

export default function Review() {
    const { submitHandler, setUseName, setUserComent } = useForm()
    return (
        <div className='tab-form'>
            <form className='form-wrapper' onSubmit={submitHandler}>
                <div>
                    <input onChange={e => setUseName(e.target.value)} type="text" placeholder='Enter your name' />
                </div>
                <div>
                    <textarea
                        onChange={e => setUserComent(e.target.value)}
                        rows={4} type="text"
                        placeholder='Write your review'
                        required
                    />
                </div>
                <button className='btn-item-fulfilled add-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}
