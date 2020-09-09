import React from 'react'
import {fetchById} from './api.js'
import {ingredientList} from './IngredientList.js'



class IndividualRecipe extends React.Component  {
    constructor(props) {
        super(props);
    this.state = {
       ingredients: '',
       instructions: 'Sorry, instructions are unavailable for this recipe'
    }
    }


componentDidMount(){
        fetchById(this.props.match.params.id) 
            .then(resp => this.setState((state, props)=>({
            title: resp.title,    
            ingredients: [...resp.extendedIngredients.map((ing) => ingredientList(ing, this.props.addItemToCart))],
            instructions: resp.instructions, 
            image: resp.image

            })));
        
    }  

render(){
    return (
         
            <div class="individual-recipe">
                
                <img src={this.state.image}></img>
                <h2>{this.state.title}</h2> 
                <h3>Ingredients</h3> 
                <ul>{this.state.ingredients}</ul> 
                <h3>Instructions</h3>
                <p>{this.state.instructions}</p>  
            </div>   
    )
}
}

export default IndividualRecipe