import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import Product from "./Product";
import { getProduct } from "../../../redux/shop/shop-reducer";

export class ProductListContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.product);
  }

  render() {
    return (
      <div>
        <Product addEntry={this.props.addEntry} product={this.props.product} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    product: getProduct(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: (gameData) => {
      dispatch({ type: "ADD_ENTRY", gameData });
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ProductListContainer
);
