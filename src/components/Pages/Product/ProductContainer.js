import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import Product from "./Product";

export class ProductListContainer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Product addEntry={this.props.addEntry} count={this.props.count} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
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
