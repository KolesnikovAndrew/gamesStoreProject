import "./App.css";
import GamesListContainer from "./components/Pages/GamesList/GamesListContainer";
import { compose } from "redux";

import { Route, HashRouter, withRouter, Routes } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { requestGames } from "./redux/shop/shop-reducer";
import store from "./redux/redux-store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Pages/Product/Product";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<GamesListContainer />} />
        <Route path="/1" element={<Product/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.shop.initialized,
});

let AppContainer = compose(connect(mapStateToProps, { requestGames }))(App);

export const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
