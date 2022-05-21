import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Cart from "./Cart";

import {
  clearCart,
  getCart,
  removeEntry,
} from "../../../redux/cart/cart-reducer";
import { getBalance, takePoints } from "../../../redux/balance/balance-reducer";
import { getUserData } from "../../../redux/registration/registration-reducer";
export class CartContainer extends React.Component {
  render() {
    return (
      <div>
        <Cart
          removeEntry={this.props.removeEntry}
          clearCart={this.props.clearCart}
          cart={this.props.cart}
          balance={this.props.balance}
          takePoints={this.props.takePoints}
          userData={this.props.userData}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: getCart(state),
    balance: getBalance(state),
    userData: getUserData(state),
  };
};

export default compose(
  connect(mapStateToProps, { removeEntry, clearCart, takePoints })
)(CartContainer);
