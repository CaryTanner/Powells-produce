import React from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Recipes from './recipes.js'
import {fetchRecipes, fetchById} from './api.js'
import Home from './home.js'
import OrderForm from './orderform.js'
import SearchBar from './SearchBar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart)




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSearchQuery: '',
      recipeTitles: '',
      imgUrls: '',
      recipeIds: '',
      recipeIsOpen: false,
      openRecipeId: '',
      cartItems: [<li>Your items: </li>,],
      cartItemsIds: [],
    };
    this.searchQuery = this.searchQuery.bind(this)
    this.openRecipe = this.openRecipe.bind(this)
    this.closeExpandedRecipe = this.closeExpandedRecipe.bind(this)
    this.addItemToCart = this.addItemToCart.bind(this)
  }

searchQuery(event){
   let searchQuery = event.target.attributes['data-searchQuery'].value
   let titleArr = []
    let imgArr = []
    let idArr = [] 

//remove intermediate variables?? ln

   fetchRecipes(searchQuery)
          .then(resp => (resp.results.forEach((index) => {
              titleArr.push(index.title)
              imgArr.push(index.image) 
              idArr.push(index.id)}))) 

          .then((state) => this.setState({
                recipeSearchQuery: searchQuery,
                recipeTitles: titleArr,
                imgUrls: imgArr,
                recipeIds: idArr
                }) )   
               
  }

openRecipe(event){
  let id = event.currentTarget.attributes['data-recipeId'].value
  if(this.state.recipeIsOpen) return
  event.currentTarget.classList.add('open-recipe-card')
  this.setState((state)=>({
     recipeIsOpen: true,
     openRecipeId: id
    }))  
   
}  



closeExpandedRecipe(event){
  let x = event.currentTarget
  x.parentNode.classList.remove('open-recipe-card')
  this.setState((state)=>({
    recipeIsOpen: false,
    openRecipeId: " "
    }))  
}
  
addItemToCart(event){
  if (event.currentTarget.parentNode.attributes['data-ingredient-id'] == undefined) {
    alert('Sorry, but this item is unavailable')
    
    //offer something similar
    return
   } 

  let item = event.currentTarget.parentNode.attributes['cartItem'].value
   let itemId = event.currentTarget.parentNode.attributes['data-ingredient-id'].value
   
    if(this.state.cartItemsIds.includes(itemId)) { 
      alert('This item is already in your shopping cart')
      return} 

    event.currentTarget.style.color = 'red'
    this.setState((state)=>({
        cartItems: [...this.state.cartItems, <li>{item}</li>],
        cartItemsIds: [...this.state.cartItemsIds, itemId]
        }))  

  }


  render() {
    return (
     <Router>
          <div className="App">
          <Header cartItems={this.state.cartItems}/>
           <SearchBar searchQuery={this.searchQuery}/> 
              <Route exact path='/recipes'>
                  
                  <Recipes addItemToCart={this.addItemToCart} 
                            closeRecipe={this.closeExpandedRecipe} 
                            recipeIsOpen={this.state.recipeIsOpen} 
                            openRecipe={this.openRecipe} 
                            recipeIds={this.state.recipeIds} 
                            imgUrls={this.state.imgUrls} 
                            recipeTitles={this.state.recipeTitles} 
                            recipeSearchQuery={this.state.recipeSearchQuery} 
                  />
              </Route>
              <Route exact path='/home'>
                <Home />
              </Route>
              <Route exact path='/order'>
                <OrderForm cartItems={this.state.cartItems} />
              </Route>
          <Footer />
            
          </div>
    </Router> 
    );
  }
}

export default App;
