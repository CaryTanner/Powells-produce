import React from 'react';
import { recipeCards } from './recipeCards.js'
const Recipes = (props) => {
        if (props.recipeSearchQuery !== "" && props.recipes.results.length <= 0) {
            return (<div>
                <h2>Recipes</h2>
                <div>Sorry, no recipes match your search. Please try again.</div>
                
                </div>)
        } else if (props.recipeSearchQuery !== "") {
            
               return ( <div>
                        <h2>Recipes</h2>
                        <div id="display-recipe">
                            {props.recipes.results.map(recipeCards)}
                        </div>
                        </div>)

                    
        } else return <div id="choose-recipe-space-saver"> 
                            <h2>Recipes</h2> 
                            <img src="https://images.pexels.com/photos/1194432/pexels-photo-1194432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img> 
                        </div>
      
      
    }
 

export default Recipes      