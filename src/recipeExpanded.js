import React from 'react'


class RecipeExpanded extends React.Component {
    constructor(props) {
        super(props);
    
   this.handleClick = this.handleClick.bind(this)     
    }

handleClick(){
    console.log('hehe')
}

    render(){
    
        return(<div  className="open-recipe-card" data-recipeId={this.props.recipeId}>
                    
                    <img src={this.props.imgSrc} alt=""></img>
                    <h3> {this.props.recipeTitle}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                       <li> food <span><input type="checkbox"></input></span></li>
                       <li> food <span><input type="checkbox"></input></span></li>
                       <li> food <span><input type="checkbox"></input></span></li>
                       <li> food <span><input type="checkbox"></input></span></li>
                       <li> food <span><input type="checkbox"></input></span></li>
                    </ul>
                    <h4>Instructions</h4>
                    <p>do stuff</p>
                </div>

        )
    }   
    // return (<div onClick={this.props.openRecipe} className="recipe-card" data-recipeId={this.props.recipeId}>
    //             <img data-recipeId={this.props.recipeId} src={this.props.imgSrc} alt=""></img>
    //             <h3 data-recipeId={this.props.recipeId}> {this.props.recipeTitle}</h3>
    //         </div>)
    // }

}
export default RecipeExpanded