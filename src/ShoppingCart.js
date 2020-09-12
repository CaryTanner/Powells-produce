import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ShoppingCart extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        cartIsOpen: false
        }
        this.cartContainer = React.createRef();
      this.openCart = this.openCart.bind(this); 
      this.onClickOutsideCart = this.onClickOutsideCart.bind(this);
    }

openCart(event){
    event.currentTarget.parentNode.classList.toggle('main-shopping-cart-open')
    this.setState((state) => ({
    cartIsOpen: !this.state.cartIsOpen
    }))
}

onClickOutsideCart(event) {    
    if (this.state.cartIsOpen && !this.cartContainer.current.contains(event.target)) { 
            this.cartContainer.current.classList.remove("main-shopping-cart-open") 
            this.setState({ cartIsOpen: false });    
}  }

componentDidMount() {    
    window.addEventListener('click', this.onClickOutsideCart);  }

componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideCart);
}    


    render(){
         return (<div ref={this.cartContainer} className="main-shopping-cart">
           <span title="View Shopping Cart" onClick={this.openCart}>
               <FontAwesomeIcon icon="shopping-cart"/></span>
            
           {this.state.cartIsOpen && <ul id="shopping-cart-ul">{this.props.cartItems.map(x => 
                                                                    <li>{x}</li>)}</ul>}
        </div>

        )
    }



}

export default ShoppingCart