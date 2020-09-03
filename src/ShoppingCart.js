import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ShoppingCart extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        cartIsOpen: false
        }
      this.openCart = this.openCart.bind(this) 
    }

openCart(event){
    event.currentTarget.parentNode.classList.toggle('main-shopping-cart-open')
    this.setState((state) => ({
    cartIsOpen: !this.state.cartIsOpen
    }))
}

    render(){
         return (<div  className="main-shopping-cart">
           <span title="View Shopping Cart" onClick={this.openCart}><FontAwesomeIcon icon="shopping-cart"/></span>
            
           {this.state.cartIsOpen && <ul id="shopping-cart-ul">{this.props.cartItems}</ul>}
        </div>

        )
    }



}

export default ShoppingCart