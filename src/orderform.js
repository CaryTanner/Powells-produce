import React from "react";
import { Link } from "react-router-dom";

const OrderForm = (props) => {
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
        <input
          type="text"
          onChange={props.orderFormChange}
          placeholder="First Name"
          name="firstName"
        ></input>
        <input
          type="text"
          onChange={props.orderFormChange}
          placeholder="Last Name"
          name="lastName"
        ></input>
        <input
          type="text"
          onChange={props.orderFormChange}
          placeholder="Address"
          name="address"
        ></input>
        <h4>Delivery Time(24h):</h4>
        <div id="delivery-times">
          <label htmlFor="7-10">7-12</label>
          <input
            name="deliveryTime"
            onChange={props.orderFormChange}
            type="radio"
            value="7-12"
          ></input>
          <label htmlFor="10-14">12-16</label>
          <input
            name="deliveryTime"
            onChange={props.orderFormChange}
            type="radio"
            value="12-16"
          ></input>
          <label htmlFor="14-19">16-20</label>
          <input
            name="deliveryTime"
            onChange={props.orderFormChange}
            type="radio"
            value="16-20"
          ></input>
        </div>
        <h4><label htmlFor="deliveryDate">Delivery date:</label></h4>
        <input
         className="clickable"
          name="deliveryDate"
          onChange={props.orderFormChange}
          type="date"
          min={today}
        ></input>

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
