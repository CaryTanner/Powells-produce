import React from 'react'

const RecipeBtn = (props) => {
    return <div>  
    <h2>Recipes</h2>
        <div id="recipe-btn-container">
            <button onClick={props.clickAction} id="pheasant-button" data-value="pheasant">Pheasant</button>
            <button onClick={props.clickAction} data-value="duck">Duck</button>
            <button onClick={props.clickAction} data-value="chicken">Chicken</button>
            <button onClick={props.clickAction} id="quail-button" data-value="quail">Quail</button>
        </div>
    </div>
}

export default RecipeBtn 