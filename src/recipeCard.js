import React from 'react'
import { fetchById } from './api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ingredientList} from './IngredientList'




class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        isOpen: true,
        ingredients: '',
        instructions: "Sorry, instructions aren't available"
        }
       
    }

// ingredients disappear if you navigate away from page?? 



// componentDidUpdate(prevProps, prevState){
    
//     if (this.props.recipeId !== prevProps.recipeId){
        
//         fetchById(this.props.recipeId) 
//             .then(resp => this.setState((state)=>({
//             ingredients: [...resp.extendedIngredients.map(ing => (<li data-ingredient-id={ing.id}  cartItem={ing.name.charAt(0).toUpperCase() + ing.name.slice(1)} key={ing.name}> {ing.name.charAt(0).toUpperCase() + ing.name.slice(1)} {Math.ceil(ing.measures.metric.amount)} {ing.measures.metric.unitShort} <span title="Add to Cart" onClick={this.props.addItemToCart} class="shopping-cart-icon"><FontAwesomeIcon icon="shopping-cart"/></span></li>))],
//             instructions: resp.instructions 

//             })));
//         }
//     }        
 

    render(){
          if (this.props.recipeTitle == undefined){
              return  (<div>Sorry, there are no results that match your search. Please try again.</div>)
          } else {
    return (

            <div>
                <div onClick={this.props.openRecipe} className="recipe-card" data-recipeid={this.props.recipeId}>
                    {this.props.recipeIsOpen && <p class="close-recipe-x" onClick={this.props.closeRecipe}>x</p>}
                    <img  src={this.props.imgSrc} alt=""></img>
                    <br/>
                    <h3>  {this.props.recipeTitle}</h3>
                
                    {this.props.recipeIsOpen && <div id="expanded-recipe">
                        <h3>Ingredients</h3>
                        <br />
                        <ul class="ingredient-list">{this.state.ingredients}</ul>
                        <h3>Instructions</h3>

                        <p>{this.state.instructions}</p>
                        <br/>
                        
                    </div>}
            
                </div>
            </div>)}
    
    
    

    }
}


export default RecipeCard