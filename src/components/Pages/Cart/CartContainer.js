import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Cart from "./Cart";
import { getCart } from "../../../redux/cart/cart-reducer";

export class CartContainer extends React.Component {
 
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Cart cart={this.props.cart}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: getCart(state)
  };
};

export default compose(
  connect(mapStateToProps)
)(CartContainer);
