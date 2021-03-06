import React from "react";
import { recipeCards } from "./recipeCards";
import { Link } from "react-router-dom";

function Home(props) {
  //if statement here is a test for apiKey quota - show site without recipes
  if(props.randomRecipes === undefined  || props.randomRecipes.code === 401){
    
    return(<div id="home-page">
    <div className="home-section" id="home-section-one">
      <h1>Fresh Produce.</h1>
      <h1> Home to your door.</h1>

      <h2>3 Easy Steps</h2>
      <h4>1. Search for your favorite recipe</h4>
      <h4>2. Place ingredients in your cart</h4>
      <h4>3. Order for next day shipping!</h4>
    </div>
    <div className="home-section" id="home-section-two">
      {/* three random recipe cards and link to recipe section */}
      <h1>Let one of our 1000's of recipes inspire you</h1>
      <div className="display-recipe">
        Sorry, but our recipe search is temporarily unavailable. 
      </div> 
      <Link to="/recipes">
        <button className="clickable" title="To Recipe Search">
          Get Inspired!
        </button>
      </Link>
    </div>
    <div className="home-section" id="home-section-three">
      <div id="delivery-card">
      </div>
      <div id="home-section-three-h1-wrapper">
        <h1>Fast Delivery</h1>
        <h1>7 Days a Week</h1>
      </div>
    </div>
    <div className="home-section" id="home-section-four">
      <div>
        <h1 className="border-bottom">Location</h1>
        <p>47 Poplar Lane</p>
        <p>Pellington, Vermont</p>
        <p>765 54</p>

      </div>
     
      <div>
        <h1 className="border-bottom">Contact</h1>
        <p>
          <a href="tel:555-7654"> <span role="img"></span>&#128222; 555-7654</a>
        </p>
        <p>
          <a href="mailto:"> &#128233; info@powellsproduce.com</a>
        </p>
      </div>
    </div>
  </div>

    )
  } else {
  
  return (
    <div id="home-page">
      <div className="home-section" id="home-section-one">
        <h1>Fresh Produce.</h1>
        <h1> Home to your door.</h1>

        <h2>3 Easy Steps</h2>
        <h4>1. Search for your favorite recipe</h4>
        <h4>2. Place ingredients in your cart</h4>
        <h4>3. Order for next day shipping!</h4>
      </div>
      <div className="home-section" id="home-section-two">
        {/* three random recipe cards and link to recipe section */}
        <h1>Let one of our 1000's of recipes inspire you</h1>
        <div className="display-recipe">
          {props.randomRecipes.recipes.map(recipeCards)}
        </div> 
        <Link to="/recipes">
          <button className="clickable" title="To Recipe Search">
            Get Inspired!
          </button>
        </Link>
      </div>
      <div className="home-section" id="home-section-three">
        <div id="delivery-card">
        </div>
        <div id="home-section-three-h1-wrapper">
          <h1>Fast Delivery</h1>
          <h1>7 Days a Week</h1>
        </div>
      </div>
      <div className="home-section" id="home-section-four">
        <div>
          <h1 className="border-bottom">Location</h1>
          <p>47 Poplar Lane</p>
          <p>Pellington, Vermont</p>
          <p>765 54</p>

        </div>
       
        <div>
          <h1 className="border-bottom">Contact</h1>
          <p>
            <a href="tel:555-7654"> <span role="img"></span>&#128222; 555-7654</a>
          </p>
          <p>
            <a href="mailto:"> &#128233; info@powellsproduce.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
}
export default Home;
