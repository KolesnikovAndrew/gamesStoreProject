import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Cart from "./Cart";
import { getCart } from "../../../redux/cart/cart-reducer";

export class CartContainer extends React.Component {
  render() {
    return (
      <div>
        <Cart
          removeEntry={this.props.removeEntry}
          clearCart={this.props.clearCart}
          cart={this.props.cart}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: getCart(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeEntry: (id) => {
      dispatch({ type: "REMOVE_ENTRY", id });
    },
    clearCart: () => {
      dispatch({ type: "CLEAR_CART" });
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CartContainer
);
