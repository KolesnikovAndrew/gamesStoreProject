import React from "react";
import { getGames, requestGames, getProduct, setProduct } from "../../../redux/shop/shop-reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import GameList from "./GameList";

export class GamesListContainer extends React.Component {
  componentDidMount() {
    this.props.requestGames();
  }
  render() {
    return (
      <div>
        <GameList games={this.props.games} product={this.props.product} setCount={this.props.setCount} setProduct={this.props.setProduct}  />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    games: getGames(state),
    product: getProduct(state),
    
    setProduct: setProduct,
  };
};

export default compose(
  connect(mapStateToProps, {
    requestGames,
  })
)(GamesListContainer);
