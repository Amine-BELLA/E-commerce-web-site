import React, { useState } from 'react';
import './CheckOutForm.css';

function CheckOutForm(props) {

    const [data, setData] = useState({
        email: '',
        fName: '',
        address: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData(previousData => {
            return (
                {
                    ...previousData,
                    [name]: value
                }
            );
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        alert(`Preparing order for: ${data.fName}`);
        setData({
            email: '',
            fName: '',
            address: ''
        });
    }

    return (
        <div>
            {
                props.proceed &&
                <form onSubmit={handleFormSubmit} className='checkout-form'>
                    <ul>
                        <li>
                            <label>Email</label> <br />
                            <input onChange={handleChange} name="email" value={data.email} type='email' required></input>
                        </li>
                        <li>
                            <label>Full Name</label> <br />
                            <input onChange={handleChange} name='fName' value={data.fName} type='text' required></input>
                        </li>
                        <li>
                            <label>Address</label><br />
                            <input onChange={handleChange} name='address' value={data.address} type='text' required></input>
                        </li>
                        <li>
                            <button type='submit'>Checkout</button>
                        </li>
                    </ul>
                </form>
            }
        </div>
    );
}

export default CheckOutForm;