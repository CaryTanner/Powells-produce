import React from 'react'


const OrderConfirmation = (props) => { 
            
             return (<div>
                  <h2>Thanks for ordering!</h2>
                  <h3>Order Details:</h3>
                    <h4>First Name: {props.firstName}</h4>  
                    <h4>Last Name: {props.lastName}</h4> 
                    <h4>Address: {props.address}</h4>
                    <h4>Delivery Time: {props.deliveryTime}</h4>  
                    <h4>Delivery Date: {props.deliveryDate}</h4>     
                    <ul>{props.cartItems}</ul>
            </div>) 


    

}

export default OrderConfirmation 