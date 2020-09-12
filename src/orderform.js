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
        <h3>Delivery Time(24h):</h3>
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
        <label htmlFor="deliveryDate">Delivery date:</label>
        <input
          name="deliveryDate"
          onChange={props.orderFormChange}
          type="date"
          min={today}
        ></input>

        {/* write an onclick- for button makes copy of cartItems and clears cartItems from state- copy sent as props to confirmation */}
        <Link to="/orderconfirmation">
          <button onClick={props.submitOrder} id="order-form-submit-btn">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderForm;
