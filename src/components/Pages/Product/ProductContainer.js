import React from "react";
import { getProduct, setProduct } from "../../../redux/shop/shop-reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import Product from "./Product";

export class ProductListContainer extends React.Component {
 
  componentDidMount() {
   
    setProduct('2')
  }

  render() {
    return (
      <div>
        <Product product={this.props.product} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    product: getProduct(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    getProduct,
  })
)(ProductListContainer);
