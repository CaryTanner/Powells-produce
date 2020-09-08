import React from 'react'
import {
    BrowserRouter as Router,
    
    Link
  } from "react-router-dom";
  


export const recipeCards = (recipe) => {
    return (<Link to={'/recipes/' + recipe.id} >
        <div className="recipe-card" data-recipeid={recipe.id}>
        <img  src={recipe.image} alt=""></img>
        
        <h3>  {recipe.title}</h3>
        </div>
    </Link>)
}