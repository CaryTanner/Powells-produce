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
                    <h1>Powell's <br /> Produce</h1>
                </header>
                
                    <nav>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li><Link to="/order">Place Order</Link></li>
                           
                           
                            
                        </ul>
                        <ShoppingCart  cartItems={props.cartItems}/>

                    </nav>
            </div>
        
    )}

export default Header