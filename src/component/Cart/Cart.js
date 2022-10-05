import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {strArea, strMeal, strTags} = props.cart;
    // console.log(cart);
    return (
        <div className='cart-container'>
            <h2>Food Details</h2>
            <h3>{strMeal}</h3>
            <p>Area: {strArea}</p>
            <p>Tags: {strTags}</p>
        </div>
    );
};

export default Cart;