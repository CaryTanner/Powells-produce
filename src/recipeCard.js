import React from 'react'
import { fetchById } from './api';

// const IngredientList = (ingredient) => {
//     return <li key={ingredient.name.toString()}>🥘 {ingredient.name} ({ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort})</li>
// }

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        recipe: ''
    }
   this.handleClick = this.handleClick.bind(this)     
    }

handleClick(){
    console.log('hehe')
}

componentDidMount(props){
    let id = this.props.recipeId
    console.log(id)
    fetchById(id)
        .then(resp => this.setState((state)=> ({
            recipe: resp
        })));
        .then( )
        
 }

    render(){

    function renderIngredients(ing){
        return(<li>{ing.name} ({ing.measures.metric.amount} {ing.measures.metric.unitShort})</li>
        )
    }    
       
    return (<div>
    <div onClick={this.props.openRecipe} className="recipe-card" data-recipeid={this.props.recipeId}>
                <img data-recipeid={this.props.recipeId} src={this.props.imgSrc} alt=""></img>
                <h3 data-recipeid={this.props.recipeId}> {this.props.recipeTitle}</h3>
            </div>
            <div id="expanded-recipe">
                {/* <ul>{renderIngredients(this.state.recipe)}</ul> */}
                <p id="close-recipe-x" onClick={this.props.closeRecipe}>x</p>
            <p>{this.state.recipe.title}</p>
            <p></p>
            </div>
            
        </div>
            
            
            )
    }
}

export default RecipeCard