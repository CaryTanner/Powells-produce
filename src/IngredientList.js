import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ingredientList = (ing, clickFunc) => (
  <li
    data-ingredient-id={ing.id}
    cartItem={ing.name.charAt(0).toUpperCase() + ing.name.slice(1)}
    key={ing.name}
  >
    {ing.name.charAt(0).toUpperCase() + ing.name.slice(1)}
    {Math.ceil(ing.measures.metric.amount)} {ing.measures.metric.unitShort}
    <span title="Add to Cart" class="shopping-cart-icon" onClick={clickFunc}>
      <FontAwesomeIcon icon="shopping-cart" />
    </span>
  </li>
);
