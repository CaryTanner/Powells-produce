import React from "react";
import { fetchById } from "./api.js";
import { ingredientList } from "./IngredientList.js";

class IndividualRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "Loading...",
      instructions: "Loading...",
    };
  }

  componentDidMount() {
    fetchById(this.props.match.params.id).then((resp) =>
      this.setState((state, props) => ({
        title: resp.title,
        ingredients: [
          ...resp.extendedIngredients.map((ing) =>
            ingredientList(ing, this.props.addItemToCart)
          ),
        ],
        instructions: [...resp.instructions],
        image: resp.image,
      }))
    );
  }

  render() {
    console.log(this.state.instructions);
    return (
      <div class="individual-recipe">
        <img src={this.state.image} alt=""></img>
        <h2>{this.state.title}</h2>
        <h3>Ingredients</h3>
        <ul>{this.state.ingredients}</ul>
        <h3>Instructions</h3>

        <p>
          {this.state.instructions
            ? this.state.instructions
            : "Sorry, instructions are unavailable for this recipe."}
        </p>
      </div>
    );
  }
}

export default IndividualRecipe;
