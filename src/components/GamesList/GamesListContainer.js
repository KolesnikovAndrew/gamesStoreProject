import React from "react";
import { getGames, requestGames } from "../../redux/shop-reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import GameList from "./GameList";

class GamesListContainer extends React.Component {
  componentDidMount() {
    this.props.requestGames();
  }
  render() {
    return (
      <div>
        <GameList games={this.props.games} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    games: getGames(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    requestGames,
  })
)(GamesListContainer);
