import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import Recipes from "./recipes.js";
import { fetchRecipes, fetchRandomRecipe } from "./api.js";
import Home from "./home.js";
import OrderFormLanding from "./OrderformLanding.js";
import SearchBar from "./SearchBar.js";
import IndividualRecipe from "./individualRecipe.js";
import {
  Switch,
  Route
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSearchQuery: "",
      recipes: "",
      cartItems: [],
      cartItemsIds: [],
      isOrderSubmitted: false
    };
    this.searchQuery = this.searchQuery.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
  }

  searchQuery(event) {
    let searchQuery = event.target.attributes["data-searchquery"].value;

    fetchRecipes(searchQuery).then((resp) =>
      this.setState((state) => ({
        recipeSearchQuery: searchQuery,
        recipes: resp,
      }))
    );
  }

  addItemToCart(event) {
    let item = event.currentTarget.parentNode.attributes["cartItem"].value;
    let itemId =
      event.currentTarget.parentNode.attributes["data-ingredient-id"].value;

    if (
      event.currentTarget.parentNode.attributes["data-ingredient-id"] ===
      undefined
    ) {
      alert("Sorry, but this item is unavailable");
      return;
      //offer something similar??
    }

    if (this.state.cartItemsIds.includes(itemId)) {
      alert("This item is already in your shopping cart");
      return;
    }

    event.currentTarget.style.color = "red";
    this.setState((state) => ({
      cartItems: [...this.state.cartItems, item],
      cartItemsIds: [...this.state.cartItemsIds, itemId],
      isOrderSubmitted: false
    }));
  }

  removeItemFromCart(event) {
    let item = event.currentTarget.parentNode.attributes["cartItem"].value;
    let itemIndex = this.state.cartItems.indexOf(item);

    let copyCartItems = [...this.state.cartItems];
    let copyCartItemsIds = [...this.state.cartItems];
    copyCartItems.splice(itemIndex, 1);
    //items placed in both arrays in the same order thus have same index
    copyCartItemsIds.splice(itemIndex, 1);
    this.setState((state) => ({
      cartItems: copyCartItems,
      cartItemsIds: copyCartItemsIds,
    }));
  }


  //make array of items to show on order confirmation and clear shopping cart
  submitOrder(values) {
    let copyOrderedItems = [...this.state.cartItems];
    this.setState(() => ({
      cartItems: [],
      orderedItems: copyOrderedItems,
      isOrderSubmitted: true,
      values: values 
    }));
    
    
  }

  componentDidMount() {
    fetchRandomRecipe().then((resp) =>
      this.setState((state) => ({
       randomRecipes: resp
      }))
    );
  }

  render() {
    
    return (
      <Switch>
        <div className="App">
          <Header cartItems={this.state.cartItems} />

          
          <Route exact path="/recipes">
            <SearchBar searchQuery={this.searchQuery} randomRecipes={this.state.randomRecipes}  />
            <Recipes
              recipes={this.state.recipes}
              recipeSearchQuery={this.state.recipeSearchQuery}
              randomRecipes={this.state.randomRecipes}
            />
          </Route>


          
          <Route
            path="/recipes/:id"
            render={(props) => (
              <div>
                {/* SearchBar gets randomRecipes prop as test for API functioning- doesn't break site if apiKey quota is used */}
                <SearchBar searchQuery={this.searchQuery} randomRecipes={this.state.randomRecipes} />
                <IndividualRecipe
                  {...props}
                  addItemToCart={this.addItemToCart}
                />
              </div>
            )}
          />
          
          <Route exact path="/order">
            
            <OrderFormLanding
              submitOrder={this.submitOrder}
              removeItemFromCart={this.removeItemFromCart}
              cartItems={this.state.cartItems}
              orderedItems={this.state.orderedItems}
              values={this.state.values}
              isOrderSubmitted={this.state.isOrderSubmitted}
            />
          </Route>
          
          <Route exact path="/">
            <SearchBar searchQuery={this.searchQuery} randomRecipes={this.state.randomRecipes}  />
            <Home randomRecipes={this.state.randomRecipes}/>
          </Route>
          
          <Footer />
        </div>
      </Switch>
    );
  }
}

export default App;
