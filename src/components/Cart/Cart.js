import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const names = cart.map(item => <li>{item.strMeal}</li>);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
             <ol>{names}</ol>
       
        </div>
    );
};

export default Cart;