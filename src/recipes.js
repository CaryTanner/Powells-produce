import React from 'react';
import RecipeCard from './recipeCard.js'

const Recipes = (props) => {
        if (props.birdType !== "") {
               return <div id="display-recipe">
                            <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[0]} imgSrc={props.imgUrls[0]} recipeId={props.recipeIds[0]} />
                            
                            <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[1]} imgSrc={props.imgUrls[1]} recipeId={props.recipeIds[1]} />
                            
                            {/* <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[2]} imgSrc={props.imgUrls[2]} recipeId={props.recipeIds[2]} />
                            <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[3]} imgSrc={props.imgUrls[3]} recipeId={props.recipeIds[3]} />
                            <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[4]} imgSrc={props.imgUrls[4]} recipeId={props.recipeIds[4]} />
                            <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[5]} imgSrc={props.imgUrls[5]} recipeId={props.recipeIds[5]} />    */}
                    </div>
                    
        } else return <div id="choose-bird-space-saver"> Choose your favorite bird...</div>
      
      
    }
 

export default Recipes      