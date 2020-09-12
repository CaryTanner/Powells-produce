import React from "react";

const OrderConfirmation = (props) => {
  return (
    <div>
      <h2>Thanks for ordering!</h2>
      <div id="order-confirmation">
        <div>
          <h3 className="border-bottom">Order Details</h3>
          <h4>First Name: {props.firstName}</h4>
          <h4>Last Name: {props.lastName}</h4>
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
    </div>
  );
};

export default OrderConfirmation;
