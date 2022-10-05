import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    // console.log(meals);

    useEffect(() =>{
        fetch('meals.json')
        .then(res => res.json())
        .then(data => setProducts(data.meals))
    }, []);

    const handleAddToCart = (meal) =>{
        // console.log(meal);
        // const newCart = [...cart, meal]
        setCart(meal);
    }

    return (
        <div className='meals'>
           <div className='meals-container'>
            {
                products.map(meal => <Meal 
                handleAddToCart={handleAddToCart}
                key={meal.idMeal}
                meal={meal}
                ></Meal>)
            }
           </div>
           <div>
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Meals;