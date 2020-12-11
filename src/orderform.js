import React from "react";
import OrderFormValidated from "./OrderFormValidated";
import OrderConfirmation from './OrderConfirmation'

const OrderFormLanding = (props) => {
  
  return (
    <div>
      {props.isOrderSubmitted && <OrderConfirmation
  orderedItems={props.orderedItems}
  firstName={props.values.firstName}
  lastName={props.values.lastName}
  email={props.values.email}
  address={props.values.address}
  deliveryTime={props.values.deliveryTime}
  deliveryDate={props.values.deliveryDate}
/>}
   {!props.isOrderSubmitted && <div id="order-form-container">
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
                {"    "}
                &nbsp;&nbsp;&nbsp;x{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div id="order-form">
        
        <h3 className="border-bottom">Place your order below</h3>
       <OrderFormValidated cartItems={props.cartItems} submitOrder={props.submitOrder} />
       
        
         
      </div>
      
    </div>}


</div>
  );
};

export default OrderFormLanding;
