//order stuff
import React from 'react'


const OrderForm = (props) => {
    return <div>
        <h2>Order all the Stuff!</h2>
        <ul>{props.cartItems}</ul>
        
        </div>

}

export default OrderForm