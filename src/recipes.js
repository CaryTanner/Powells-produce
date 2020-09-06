import React from 'react';
import RecipeCard from './recipeCard.js'
const Recipes = (props) => {
        if (props.recipeSearchQuery !== "") {
               return ( <div>
                        <h2>Recipes</h2>
                        <div id="display-recipe">

{/* create a way to loop through recipe results?? */}

                            <RecipeCard 
                                addItemToCart={props.addItemToCart} 
                                closeRecipe={props.closeRecipe} 
                                recipeIsOpen={props.recipeIsOpen} 
                                openRecipe={props.openRecipe} 
                                recipeTitle={props.recipeTitles[0]} 
                                imgSrc={props.imgUrls[0]} 
                                recipeId={props.recipeIds[0]} 
                            />
                            
                            <RecipeCard 
                                addItemToCart={props.addItemToCart} 
                                closeRecipe={props.closeRecipe} 
                                recipeIsOpen={props.recipeIsOpen} 
                                openRecipe={props.openRecipe} 
                                recipeTitle={props.recipeTitles[1]} 
                                imgSrc={props.imgUrls[1]} 
                                recipeId={props.recipeIds[1]} 
                            />
                            
                            {/* <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[2]} imgSrc={props.imgUrls[2]} recipeId={props.recipeIds[2]} />
                            <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[3]} imgSrc={props.imgUrls[3]} recipeId={props.recipeIds[3]} />
                            <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[4]} imgSrc={props.imgUrls[4]} recipeId={props.recipeIds[4]} />
                            <RecipeCard addItemToCart={props.addItemToCart} closeRecipe={props.closeRecipe} recipeIsOpen={props.recipeIsOpen} openRecipe={props.openRecipe} recipeTitle={props.recipeTitles[5]} imgSrc={props.imgUrls[5]} recipeId={props.recipeIds[5]} />    */}
                    </div>
                    </div>)
                    
        } else return <div id="choose-recipe-space-saver"> 
                            <h2>Recipes</h2> 
                            <img src="https://images.pexels.com/photos/1194432/pexels-photo-1194432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img> 
                        </div>
      
      
    }
 

export default Recipes      