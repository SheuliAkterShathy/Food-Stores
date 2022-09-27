import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Meal.css'
const Meal = (props) => {
    const {handleAddToCart,meal} =props
    const {strMealThumb, strMeal,strCategory,strArea}=meal;
   
    return (
        <div className='meal'>
            <img src={strMealThumb
            } alt="" />
            <h3>Name:{strMeal}</h3>
            <p>Category:{strCategory}</p>
            <p>Strarea:{strArea}</p>
            <button onClick={ ()=>handleAddToCart(meal)}>Add to Cart 
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
</button>

        </div>
    );
};

export default Meal;