import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = (props) => {
  
  return (
    <div>
      <h2 id="thanks-order">Thanks for ordering!</h2>
      <div id="order-confirmation">
        <div>
          <h3 className="border-bottom">Order Details</h3>
          <h4>First Name: {props.firstName}</h4>
          <h4>Last Name: {props.lastName}</h4>
          <h4>Email: {props.email}</h4>
          <h4>Address: {props.address}</h4>
          <h4>Delivery Time: {props.deliveryTime}</h4>
          <h4>Delivery Date: {props.deliveryDate}</h4>
        </div>

        <div>
          <h3 className="border-bottom"> Items Ordered </h3>
          <ul>
            {props.orderedItems && props.orderedItems.map((x) => <li>{x}</li>)}
          </ul>
        </div>
      </div>
      <Link to="/recipes"><h3 id="still-curious-text">Still curious? Seach for more recipes and keep exploring! </h3></Link>
      
    </div>
  );
};

export default OrderConfirmation;
