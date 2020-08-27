import React from 'react'

const RecipeCard = (props) => {
    return <div className="recipe-card" data-recipeId={props.recipeId}>
        <img src={props.imgSrc} alt=""></img>
        <h3> hi + {props.recipeTitle}</h3>
        
    </div>
}

export default RecipeCard