import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import {
  getGames,
  requestGames,
  getProduct,
  setProduct,
} from "../../../redux/shop/shop-reducer";
import GameList from "./GameList";
import { addEntry } from "../../../redux/cart/cart-reducer";

export class GamesListContainer extends React.Component {
  componentDidMount() {
    this.props.requestGames();
  }
  render() {
    return (
      <div>
        <GameList
          games={this.props.games}
          product={this.props.product}
          setCount={this.props.setCount}
          setProduct={this.props.setProduct}
          addEntry={this.props.addEntry}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    games: getGames(state),
    product: getProduct(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    requestGames,
    setProduct,
    addEntry,
  })
)(GamesListContainer);
