//redux data goes inside of this file
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';


class Cart extends Component {
	constructor(props) {
		super(props);
	}

  render() {
  	const CartItems = this.props.cart.map((item, idx)=> {
  		return <li class="cart" key={idx}>{item}</li>
  	});

    return (
    
      <div className="Cart">
       	<Shelf addItem={this.props.action.addToCart} />
       	<h2>Cart Items</h2>
       	<ul class="cartBtn">
       		{CartItems}
       	</ul>
       	<a title="Checkout" class="button1" href="#">Checkout</a>
      </div>
      
    );
  }
}

function mapStateToProps(state, prop) {
	return {
		cart: state.cart
	}
}
function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(CartActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
