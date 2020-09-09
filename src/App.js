import React from 'react';
import Header from './header.js'
import Footer from './footer.js'
import Recipes from './recipes.js'
import {fetchRecipes, fetchById} from './api.js'
import Home from './home.js'
import OrderForm from './orderform.js'
import SearchBar from './SearchBar.js'
import IndividualRecipe from './individualRecipe.js'
import OrderConfirmation from './orderConfirmation.js'
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
      recipes: '',
      cartItems: [],
      cartItemsIds: [],
    };
    this.searchQuery = this.searchQuery.bind(this)
    this.orderFormChange = this.orderFormChange.bind(this)
    this.addItemToCart = this.addItemToCart.bind(this)
    this.removeItemFromCart = this.removeItemFromCart.bind(this)
  }

searchQuery(event){
   let searchQuery = event.target.attributes['data-searchquery'].value
   
   fetchRecipes(searchQuery)
          .then(resp => this.setState((state) => ({
                recipeSearchQuery: searchQuery,
                recipes: resp
                })))  
              
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
        cartItems: [...this.state.cartItems, item],
        cartItemsIds: [...this.state.cartItemsIds, itemId]
        }))  

  }

removeItemFromCart(event){
  let item = event.currentTarget.parentNode.attributes['cartItem'].value
  let itemIndex = this.state.cartItems.indexOf(item)
  
  let cartItems = [...this.state.cartItems]
  let cartItemsIds = [...this.state.cartItems]
  cartItems.splice(itemIndex, 1)
  //items placed in both arrays in the same order thus have same index 
  cartItemsIds.splice(itemIndex, 1)
  this.setState((state)=> ({
    cartItems: cartItems,
    cartItemsIds: cartItemsIds
  }))


}

  orderFormChange(event){
//items can be added after submit...
    this.setState({[event.target.name]: event.target.value })
}

  render() {
    return (
     <Router>
          <div className="App">
          <Header cartItems={this.state.cartItems}/>
           
              <Route exact path='/recipes'>
                  <SearchBar searchQuery={this.searchQuery}/> 
                  <Recipes  
                            recipes={this.state.recipes}
                            recipeSearchQuery={this.state.recipeSearchQuery} 
                  />
              </Route>
              <Route exact path='/home'>
                <SearchBar searchQuery={this.searchQuery}/>
                <Home />
                 
              </Route>
              <Route path="/recipes/:id" render={(props) => <IndividualRecipe {...props} addItemToCart={this.addItemToCart} />} />
              <Route exact path='/order'>
                <OrderForm removeItemFromCart={this.removeItemFromCart} orderFormChange={this.orderFormChange} cartItems={this.state.cartItems} />
              </Route>
              <Route exact path='/orderconfirmation'>
                <OrderConfirmation  firstName={this.state.firstName} lastName={this.state.lastName} address={this.state.address} deliveryTime={this.state.deliveryTime} deliveryDate={this.state.deliveryDate} cartItems={this.state.cartItems} />
              </Route>
          <Footer />
            
          </div>
    </Router> 
    );
  }
}

export default App;
