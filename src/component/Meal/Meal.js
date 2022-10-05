import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Meal.css'

const Meal = ({handleAddToCart, meal}) => {

    // console.log(props)
    // console.log(props.handleAddToCart)
    const {strMealThumb, strInstructions, strMeal} = meal;
    return (
        <div className='meal'>
        <div >
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 250)}</p> 
        </div>
            <button className='button' onClick={() => handleAddToCart(meal)}>Add to cart <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};


export default Meal;