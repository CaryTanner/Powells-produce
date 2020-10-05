import React from "react";
import { recipeCards } from "./recipeCards.js";
const Recipes = (props) => {
  if (props.recipeSearchQuery !== "" && props.recipes.results.length <= 0) {
    return (
      <div>
        <h2>Recipes</h2>
        <div>Sorry, no recipes match your search. Please try again.</div>
      </div>
    );
  } else if (props.recipeSearchQuery !== "") {
    return (
      <div>
        <h2>Recipes</h2>
        <div className="display-recipe">
          {props.recipes.results && props.recipes.results.map(recipeCards)}
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h2>Recipes</h2>
        <div className="display-recipe">
          {props.randomRecipes && props.randomRecipes.recipes.map(recipeCards)}
        </div>
      </div>
    );
};

export default Recipes;
