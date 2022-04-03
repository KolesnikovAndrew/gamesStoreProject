import React from "react";
import { getProduct, setProduct, requestGame, getGames, requestGames } from "../../../redux/shop/shop-reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import Product from "./Product";

export class ProductListContainer extends React.Component {
 
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Product  count={this.props.count} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
  };
};

export default compose(
  connect(mapStateToProps)
)(ProductListContainer);
