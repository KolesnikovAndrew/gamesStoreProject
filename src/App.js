import "./App.css";
import GamesListContainer from "./components/GamesList/GamesListContainer";
import { compose } from "redux";

import { Route, HashRouter, withRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { requestGames } from "./redux/shop-reducer";
import store from "./redux/redux-store";
function App() {
  return (
    <div className="App">
      <GamesListContainer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.shop.initialized,
});

let AppContainer = compose(connect(mapStateToProps, { requestGames }))(App);

const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
