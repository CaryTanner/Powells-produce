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
      recipeTitles: [] ,
      imgUrls: [],
      recipeIds: [],
    };
    this.chooseBird = this.chooseBird.bind(this)
  }

chooseBird(event){
   let bird = event.target.attributes['data-value'].value
    
    fetchRecipes(bird)
      .then( data => {
        this.setState({
          birdType: bird,
          recipeTitles: data.results.map(x => x.title)
          })
        
        })

}

  
  render() {
    return (
      <div className="App">
        <Header />
        <RecipeBtn clickAction={this.chooseBird} />
        
        <Recipes recipeIds={this.state.recipeIds} imgUrls={this.state.imgUrls} recipeTitles={this.state.recipeTitles} birdType={this.state.birdType} />
      <div>{this.state.birdType}
      {this.state.recipeTitles}
      </div>
        <Footer />
      </div>
    );
  }
}

export default App;
