import React from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Recipes from './recipes.js'
import RecipeBtn from './recipeBtn.js'
import {fetchRecipes} from './api.js'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birdType: '',
      recipeTitles: '' ,
      imgUrls: '',
      recipeIds: '',
      recipeIsOpen: false,
      openRecipeId: ''
    };
    this.chooseBird = this.chooseBird.bind(this)
    this.openRecipe = this.openRecipe.bind(this)
    this.closeExpandedRecipe = this.closeExpandedRecipe.bind(this)
  }

chooseBird(event){
   let bird = event.target.attributes['data-value'].value
   let titleArr = []
    let imgArr = []
    let idArr = [] 
   fetchRecipes(bird)
          .then(resp => (resp.results.forEach((index) => {
              titleArr.push(index.title)
              imgArr.push(index.image) 
              idArr.push(index.id)}))) 

          .then((state) => this.setState({
                birdType: bird,
                recipeTitles: titleArr,
                imgUrls: imgArr,
                recipeIds: idArr
                }) )   
               
  }

openRecipe(event){
  let id = event.target.attributes['data-recipeId'].value
  event.target.classList.add('open-recipe-card')
  this.setState((state)=>({
     recipeIsOpen: true,
     openRecipeId: id
    }))  
  // fetchById(id)
  //   .then(resp => console.log(resp))
}  



closeExpandedRecipe(){
  this.setState((state)=>({
    recipeIsOpen: false,
    
   }))  
}
  
  render() {
    return (
      <div className="App">
        <Header />
        <RecipeBtn clickAction={this.chooseBird} />
        
        <Recipes closeRecipe={this.closeExpandedRecipe} recipeIsOpen={this.state.recipeIsOpen} openRecipe={this.openRecipe} recipeIds={this.state.recipeIds} imgUrls={this.state.imgUrls} recipeTitles={this.state.recipeTitles} birdType={this.state.birdType} />
      <div>bird: {this.state.birdType} </div>
      <p>titles: {this.state.recipeTitles}</p>
      <p>pics: {this.state.imgUrls}</p>
      <p>ids: {this.state.recipeIds}</p>
        <Footer />
      </div>
    );
  }
}

export default App;
