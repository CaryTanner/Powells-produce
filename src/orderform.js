
import React, {useState} from 'react'
import {
    Link
  } from "react-router-dom";

const OrderForm = (props) => {
    
    

    const today = new Date().toISOString().split('T')[0]
    console.log(today)

 

    return (<div id="order-form-container">
        <div id="order-form-cart-list-container">

 {/* ----- added multiplier or remover???------------ */}
            <h3>Shopping Cart</h3>
            <ul>{props.cartItems}</ul>
        </div>
        <div id="order-form">
            <h3>Place your order below</h3>
            <input  type="text" onChange={props.orderFormChange} placeholder="First Name" name="firstName"></input>
            <input type="text" onChange={props.orderFormChange} placeholder="Last Name" name="lastName"></input>
            <input type="text" onChange={props.orderFormChange} placeholder="Address" name="address"></input>
            <h3>Delivery Time(24h):</h3>
            <label htmlFor="7-10">7-12</label>
                <input name="deliveryTime" onChange={props.orderFormChange} type="radio" value="7-12"></input>
            <label htmlFor="10-14">12-16</label>
                <input name="deliveryTime" onChange={props.orderFormChange}  type="radio" value="12-16"></input>
            <label htmlFor="14-19">16-20</label>
                <input name="deliveryTime"  onChange={props.orderFormChange} type="radio"value="16-20"></input>
            <label htmlFor="deliveryDate">Delivery date:</label>
                <input name="deliveryDate" onChange={props.orderFormChange} type="date" min={today} ></input>
            <Link to="/orderconfirmation"><button id="order-form-submit-btn">Submit</button></Link>        
        </div>
        
        
        </div>)

    }

export default OrderForm