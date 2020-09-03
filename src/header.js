import React from 'react';
import ShoppingCart from './ShoppingCart.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = (props) => {
    return(
        
            <div>  
                <header>
                    <h1>Powell's <br /> Poultry</h1>
                </header>
                
                    <nav>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li> <a href="about.html">About</a></li>
                            <li><a href="contacts.html">Contact</a></li>
                            <li><input type="search" placeholder="Search"/><button>Search</button></li>
                            
                        </ul>
                        <ShoppingCart  cartItems={props.cartItems}/>

                    </nav>
            </div>
        
    )}

export default Header