import React from 'react'

componentDidMount(){
    if(this.props.recipeTitle)
        fetchById(this.props.recipeId) 
            .then(resp => this.setState((state, props)=>({
            ingredients: [...resp.extendedIngredients.map((ing) => ingredientList(ing, this.props.addItemToCart))],
            instructions: resp.instructions 

            })));
        
    }  