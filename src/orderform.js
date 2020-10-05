import React from "react";
import { Link } from "react-router-dom";
import OrderFormValidated from "./OrderFormValidated";

const OrderForm = (props) => {
  const msPerDay = 86400000;
  const maxDate = new Date().getTime() + (31 * msPerDay)
  const maxDeliveryDate = new Date(maxDate).toISOString().split("T")[0];
  const today = new Date().toISOString().split("T")[0];

  return (
    <div id="order-form-container">
      <div id="order-form-cart-list-container">
        <h3 className="border-bottom">Shopping Cart</h3>
        <h4>
          There{" "}
          {props.cartItems.length === 1 ? (
            <span>is {props.cartItems.length} item</span>
          ) : (
            <span>are {props.cartItems.length} items</span>
          )}{" "}
          in your cart
        </h4>
        <h4>
          
          {props.cartItems.length === 0 ? (<span>
           <h2 id="order-form-explain"> Just 3 Easy Steps</h2>
           <h4>1. Search for your favorite recipe</h4>
           <h4>2. Place ingredients in your cart</h4>
           <h4>3. Order for next day shipping!</h4>
           </span>
          ) : ( ""
          )}
        </h4>    


        <ul>
          {props.cartItems.map((item) => (
            <li cartItem={item}>
              {item}
              <span
                className="clickable"
                title="Remove Item"
                onClick={props.removeItemFromCart}
              >
                {" "}
                x{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div id="order-form">
        
        <h3 className="border-bottom">Place your order below</h3>
       <OrderFormValidated submitOrder={props.submitOrder} />
        
        {/* write an onclick- for button makes copy of cartItems and clears cartItems from state- copy sent as props to confirmation */}
        <Link to="/orderconfirmation">
          <button className="clickable" onClick={props.submitOrder} id="order-form-submit-btn">
            Order
          </button>
        </Link> 
         
      </div>
    </div>
  );
};

export default OrderForm;
