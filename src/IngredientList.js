
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const ingredientList = (ing, clickFunc) => (
     <li data-ingredient-id={ing.id}  cartItem={ing.name.charAt(0).toUpperCase() + ing.name.slice(1)} key={ing.name}> 
    {ing.name.charAt(0).toUpperCase() + ing.name.slice(1)} {Math.ceil(ing.measures.metric.amount)} {ing.measures.metric.unitShort} 
        <span title="Add to Cart"  class="shopping-cart-icon" onClick={clickFunc}>
            <FontAwesomeIcon icon="shopping-cart"/>
        </span>
    </li>
    );

    export const ingredientListRemove = (ing, clickFunc) => (
 
           <span cartItem={ing.innerText} title="Remove Item"  class="shopping-cart-icon" onClick={clickFunc}>
              {ing} x
           </span>
       
       );
   

    